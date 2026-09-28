
function readInput(fallback) {
  if (fallback != null && String(fallback).length) return String(fallback);
  if (process.stdin && process.stdin.isTTY) return "";
  try {
    const fs = require("fs");
    if (typeof fs.readFileSync === "function") {
      // Non-blocking when no piped data: use readFileSync only if fd 0 has size or isn't a TTY.
      return fs.readFileSync(0, "utf8");
    }
  } catch (_) {}
  return "";
}

function unique(items) { return [...new Set(items)]; }
function intersect(a, b) { const s = new Set(b); return a.filter(x => s.has(x)); }
function run(argv) {
  const mode = argv[0] || "unique";
  const lines = (argv[1] || "a\nb\na\nc").split(/\r?\n/).filter(Boolean);
  if (mode === "count") return String(lines.length);
  return unique(lines).join("\n");
}

module.exports = { readInput, unique, intersect, run };
