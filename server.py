import http.server
import socketserver
import os
import sys
import webbrowser
import threading
import time

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class LocalhostHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable stale caching for smooth local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Formatted access logs
        sys.stdout.write(f"[{time.strftime('%H:%M:%S')}] {args[0]} - {args[1]} {args[2]}\n")
        sys.stdout.flush()

def open_browser():
    time.sleep(1.0)
    target_url = f"http://localhost:{PORT}"
    print(f"[{time.strftime('%H:%M:%S')}] Launching default browser at {target_url}...")
    webbrowser.open(target_url)

def run():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    
    print("\n" + "=" * 64)
    print("  * SG JOB MATCHMAKER - LOCALHOST SERVER ACTIVE *")
    print(f"  * Local URL:  http://localhost:{PORT}")
    print(f"  * Directory:  {DIRECTORY}")
    print("  * Status:     ONLINE (Press Ctrl+C to terminate server)")
    print("=" * 64 + "\n")

    threading.Thread(target=open_browser, daemon=True).start()

    try:
        with socketserver.TCPServer(("", PORT), LocalhostHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n[INFO] Localhost server stopped.")
    except OSError as e:
        if "address already in use" in str(e).lower() or getattr(e, 'errno', 0) == 10048:
            print(f"\n[WARNING] Port {PORT} is already in use by another application.")
            print(f"Closing existing process or change PORT in server.py.")
        else:
            print(f"\n[ERROR] Failed to start server: {e}")

if __name__ == '__main__':
    run()
