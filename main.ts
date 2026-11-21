import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "A kettle is lifted off the stove before it sings. The steam rises into the morning. Nothing needs you. The light on the windowsill is the same light that fell there a hundred years ago, and it will still be falling after you finish this sentence.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const codePoints = [...TEXT].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, TEXT, "utf8");
  console.log(`wrote ${[...TEXT].length} code points to ${OUTPUT_PATH}`);
}

main();
