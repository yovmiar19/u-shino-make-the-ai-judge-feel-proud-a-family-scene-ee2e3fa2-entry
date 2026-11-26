// Make the AI Judge Feel Proud: A Family Scene — one-line entry.
// Writes the family scene to /output/entry.txt, exactly as written.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  'Mom found the "I love you" note I hid in her purse years ago. It\'s still in her wallet, tucked behind the grocery receipts, right where it matters.';

mkdirSync("/output", { recursive: true });

// Gate: the scene must be 1–280 characters of UTF-8 text, on 1–2 lines.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry is ${LINE.length} chars, outside the 1–280 gate`);
}
const lineCount = LINE.split("\n").length;
if (lineCount < 1 || lineCount > 2) {
  throw new Error(`entry is ${lineCount} lines, outside the 1–2 line gate`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");
