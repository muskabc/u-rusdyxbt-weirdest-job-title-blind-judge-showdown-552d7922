import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One job title, nothing else. The title lives in title.txt next to this
// file; this program only carries it, unchanged, into the output file
// the judge reads. The gate counts characters, so validation counts
// Unicode code points, not UTF-16 units, and the title must be a
// single line with no leading or trailing space.

const repoDir = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(repoDir, "title.txt"), "utf8");

// title.txt ends with a newline from the editor; drop exactly the one
// trailing line break, and nothing else, so the stored bytes stay
// the title itself.
const stored = raw.replace(/\r?\n$/, "");
const chars = [...stored];

if (chars.length < 1 || chars.length > 60) {
  throw new Error(
    `title.txt must hold one job title of 1 to 60 characters; found ${chars.length}`,
  );
}
if (stored !== stored.trim() || stored.includes("\n") || stored.includes("\r")) {
  throw new Error(
    "title.txt must hold a single line with no leading or trailing whitespace",
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, stored, "utf8");

// Read back what the judge will read: the file must contain exactly
// the title we validated, byte for byte, nothing more.
const written = readFileSync(outPath, "utf8");
if (written !== stored) {
  throw new Error(
    `entry.txt did not round-trip: wrote ${JSON.stringify(stored)}, read back ${JSON.stringify(written)}`,
  );
}
