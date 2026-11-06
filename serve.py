"""Local dev server for the birthday site.

Two things the stock `python -m http.server` gets wrong for this site:

  1. It caches, so edits look like they did not land.
  2. It ignores HTTP Range requests. Browsers need those to seek
     inside an audio file, so `startAt` never worked and dragging
     the seek bar did nothing.

This fixes both.

    python serve.py            -> http://127.0.0.1:8080
    python serve.py 9000       -> a different port
"""
import os
import re
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)")


class DevHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Accept-Ranges", "bytes")
        SimpleHTTPRequestHandler.end_headers(self)

    def send_head(self):
        """Serve a byte range when one is asked for; otherwise behave normally."""
        rng = self.headers.get("Range")
        if not rng:
            return SimpleHTTPRequestHandler.send_head(self)

        m = RANGE_RE.match(rng.strip())
        if not m:
            return SimpleHTTPRequestHandler.send_head(self)

        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return SimpleHTTPRequestHandler.send_head(self)
        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        size = os.fstat(f.fileno()).st_size
        first, last = m.group(1), m.group(2)

        if first == "":                       # "bytes=-500" = the last 500 bytes
            length = int(last or 0)
            start = max(0, size - length)
            end = size - 1
        else:
            start = int(first)
            end = int(last) if last else size - 1

        if start >= size:
            f.close()
            self.send_response(416)
            self.send_header("Content-Range", "bytes */%d" % size)
            self.end_headers()
            return None

        end = min(end, size - 1)
        f.seek(start)
        self._range_remaining = end - start + 1

        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", "bytes %d-%d/%d" % (start, end, size))
        self.send_header("Content-Length", str(self._range_remaining))
        self.end_headers()
        return f

    def copyfile(self, source, outputfile):
        """Copy only the requested slice when serving a 206."""
        remaining = getattr(self, "_range_remaining", None)
        if remaining is None:
            return SimpleHTTPRequestHandler.copyfile(self, source, outputfile)
        self._range_remaining = None
        while remaining > 0:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    def log_message(self, fmt, *args):
        pass


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    srv = ThreadingHTTPServer(("127.0.0.1", port), partial(DevHandler, directory="."))
    print("serving this folder at http://127.0.0.1:%d  (ctrl-c to stop)" % port)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass
