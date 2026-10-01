@echo off
REM ==============================================================================
REM SG Job Matchmaker — Windows Command Line / Double-Click Launcher
REM ==============================================================================

title SG Job Matchmaker - Localhost Server
cd /d "%~dp0"

echo.
echo ================================================================
echo   SG Job Matchmaker - Starting Localhost Server...
echo ================================================================
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"

pause
