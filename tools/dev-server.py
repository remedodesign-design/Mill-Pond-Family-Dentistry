"""Local preview server that follows vercel.json (cleanUrls, redirects, rewrites).

    python tools/dev-server.py [port]

Plain `python -m http.server` can't serve /our-team or the old mpdental.ca URLs;
this one behaves like the Vercel deployment, so links can be checked locally.
"""
import json
import re
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
CONFIG = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))


def compile_source(source):
    """Vercel path pattern -> regex. Supports :name and :name* segments."""
    pattern = re.sub(r":(\w+)\*", r"(?P<\1>.*)", source)
    pattern = re.sub(r":(\w+)", r"(?P<\1>[^/]+)", pattern)
    return re.compile("^" + pattern + "$")


def fill(destination, params):
    return re.sub(r":(\w+)\*?", lambda m: params.get(m.group(1), ""), destination)


REDIRECTS = [(compile_source(r["source"]), r["destination"], r.get("permanent", False)) for r in CONFIG.get("redirects", [])]
REWRITES = [(compile_source(r["source"]), r["destination"]) for r in CONFIG.get("rewrites", [])]


def file_for(path):
    """cleanUrls: /x -> x.html, / -> index.html."""
    if path in ("", "/"):
        return ROOT / "index.html"
    target = (ROOT / path.lstrip("/")).resolve()
    if ROOT not in target.parents and target != ROOT:
        return None
    if target.is_file():
        return target
    html = target.with_name(target.name + ".html")
    return html if html.is_file() else None


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parts = urlsplit(self.path)
        path = parts.path.rstrip("/") or "/"
        query = ("?" + parts.query) if parts.query else ""

        if path.endswith(".html") and file_for(path):  # cleanUrls: drop .html
            clean = path[:-5]
            return self.redirect("/" if clean in ("/index", "") else clean, query, True)
        if not file_for(path) or path in ("/home", "/index"):
            for regex, destination, permanent in REDIRECTS:
                m = regex.match(path)
                if m:
                    return self.redirect(fill(destination, m.groupdict()), query, permanent)
        if not file_for(path):
            for regex, destination in REWRITES:
                m = regex.match(path)
                if m:
                    path = fill(destination, m.groupdict())
                    break
        target = file_for(path)
        if not target:
            page = ROOT / "404.html"
            if not page.is_file():
                return self.send_error(404)
            body = page.read_bytes()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            return self.wfile.write(body)
        self.path = "/" + target.relative_to(ROOT).as_posix() + query
        return super().do_GET()

    def redirect(self, location, query, permanent):
        self.send_response(308 if permanent else 307)
        self.send_header("Location", location + ("" if location.startswith("http") else query))
        self.end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5199
    server = ThreadingHTTPServer(("127.0.0.1", port), partial(Handler, directory=str(ROOT)))
    print(f"Serving {ROOT} on http://127.0.0.1:{port}")
    server.serve_forever()
