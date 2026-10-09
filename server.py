import http.server
import socketserver
import os
import sys
import webbrowser
import threading
import time
import argparse

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class LocalhostHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and aggressively disable stale caching to prevent cross-project page bleeding
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        # Formatted access logs
        sys.stdout.write(f"[{time.strftime('%H:%M:%S')}] {args[0]} - {args[1]} {args[2]}\n")
        sys.stdout.flush()

def open_browser(port):
    time.sleep(0.8)
    target_url = f"http://localhost:{port}"
    print(f"[{time.strftime('%H:%M:%S')}] Launching default browser at {target_url}...")
    webbrowser.open(target_url)

def parse_args():
    parser = argparse.ArgumentParser(description="SG Job Matchmaker Localhost Server")
    parser.add_argument("--port", "-p", type=int, default=8080, help="Port to serve on (default: 8080)")
    parser.add_argument("positional_port", nargs="?", type=int, default=None, help="Optional positional port")
    args, _ = parser.parse_known_args()
    return args.positional_port if args.positional_port is not None else args.port

def run():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    
    initial_port = parse_args()
    active_port = initial_port
    httpd = None

    # Intelligent port binding with auto-fallback to prevent collisions (e.g. with Primal Ball)
    max_attempts = 10
    for attempt in range(max_attempts):
        try:
            httpd = socketserver.TCPServer(("", active_port), LocalhostHandler)
            break
        except OSError as e:
            if "address already in use" in str(e).lower() or getattr(e, 'errno', 0) in (10048, 98, 48):
                print(f"[NOTICE] Port {active_port} is already in use by another application.")
                active_port += 1
                print(f"[RETRY] Trying port {active_port} instead...")
            else:
                print(f"\n[ERROR] Failed to bind port {active_port}: {e}")
                sys.exit(1)

    if not httpd:
        print(f"\n[FATAL] Unable to bind to any free port between {initial_port} and {initial_port + max_attempts - 1}.")
        sys.exit(1)

    print("\n" + "=" * 64)
    print("  * SG JOB MATCHMAKER - LOCALHOST SERVER ACTIVE *")
    print(f"  * Local URL:  http://localhost:{active_port}")
    print(f"  * Directory:  {DIRECTORY}")
    print("  * Status:     ONLINE (Press Ctrl+C to terminate server)")
    print("=" * 64 + "\n")

    # Only open browser to the port that was ACTUALLY successfully bound
    threading.Thread(target=open_browser, args=(active_port,), daemon=True).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n[INFO] Localhost server stopped.")
    finally:
        httpd.server_close()

if __name__ == '__main__':
    run()
