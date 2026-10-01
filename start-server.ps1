# ==============================================================================
# SG Job Matchmaker - Localhost Activation Script for PowerShell / Windows Terminal
# ==============================================================================

[CmdletBinding()]
param(
    [int]$Port = 8080
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not $scriptDir) { $scriptDir = (Get-Location).Path }
Set-Location $scriptDir

# Set Window Title
try {
    $Host.UI.RawUI.WindowTitle = "SG Job Matchmaker - Localhost:$Port"
} catch {
    # Ignore if not supported in current host
}

# Find Python executable
$pythonCandidate = $null
$potentialPaths = @(
    "C:\Users\Edmund\AppData\Local\Python\bin\python.exe",
    "$env:LOCALAPPDATA\Python\bin\python.exe",
    "$env:LOCALAPPDATA\Programs\Python\Python3*\python.exe",
    "C:\Python3*\python.exe"
)

$inPath = Get-Command python -ErrorAction SilentlyContinue
if ($inPath -and $inPath.Source) {
    $pythonCandidate = $inPath.Source
} else {
    foreach ($pattern in $potentialPaths) {
        $found = Get-ChildItem -Path $pattern -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found -and (Test-Path $found.FullName)) {
            $pythonCandidate = $found.FullName
            break
        }
    }
}

# If Python is available, execute server.py
if ($pythonCandidate) {
    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Cyan
    Write-Host "  Launching SG Job Matchmaker via Python runtime..." -ForegroundColor Green
    Write-Host "  Runtime:   $pythonCandidate" -ForegroundColor DarkGray
    Write-Host "  Local URL: http://localhost:$Port" -ForegroundColor Yellow
    Write-Host "================================================================" -ForegroundColor Cyan
    Write-Host ""
    
    & "$pythonCandidate" "$scriptDir\server.py"
    exit 0
}

# ==============================================================================
# Fallback: Pure PowerShell Native .NET HttpListener (Zero Dependencies)
# ==============================================================================
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  Starting Native PowerShell HTTP Server on Port $Port..." -ForegroundColor Green
Write-Host "  Local URL: http://localhost:$Port/" -ForegroundColor Yellow
Write-Host "  Serving:   $scriptDir" -ForegroundColor DarkGray
Write-Host "  Status:    ONLINE (Press Ctrl+C to terminate)" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
} catch {
    Write-Host "Failed to start listener on port $Port : $_" -ForegroundColor Red
    Write-Host "Ensure no other process is utilizing port $Port." -ForegroundColor Yellow
    exit 1
}

# Auto-launch default browser
Start-Process "http://localhost:$Port/"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".pdf"  = "application/pdf"
    ".ico"  = "image/x-icon"
    ".txt"  = "text/plain; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $response.Headers.Add("Access-Control-Allow-Origin", "*")
        $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($localPath) -or $localPath -eq "/") {
            $localPath = "index.html"
        }

        $filePath = [System.IO.Path]::GetFullPath((Join-Path $scriptDir $localPath))
        if (-not $filePath.StartsWith([System.IO.Path]::GetFullPath($scriptDir))) {
            $response.StatusCode = 403
            $response.Close()
            continue
        }

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $mime

            $buffer = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.StatusCode = 200
            
            $now = Get-Date -Format "HH:mm:ss"
            Write-Host "[$now] 200 OK: $localPath" -ForegroundColor DarkGreen
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            
            $now = Get-Date -Format "HH:mm:ss"
            Write-Host "[$now] 404 Not Found: $localPath" -ForegroundColor Yellow
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "`nLocalhost server stopped." -ForegroundColor DarkYellow
}
