// Make the AI Judge Feel Proud: A Family Scene — one-line entry.
// Writes the family scene to /output/entry.txt, exactly as written.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  'Mom finds "IOU one hug" in her coat pocket from her son, redeems it immediately, and he pretends to be annoyed while hugging tighter.';

mkdirSync("/output", { recursive: true });

// Gate: the scene must be 1–280 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry is ${LINE.length} chars, outside the 1–280 gate`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");
