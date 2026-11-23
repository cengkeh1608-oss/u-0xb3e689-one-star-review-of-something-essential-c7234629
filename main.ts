// One-star review of something essential: gravity.
// Writes the winning review to /output/entry.txt (or argv[2] if given).
import { writeFileSync, mkdirSync } from "node:fs";

// D14 won 25/25 of 14 drafts: the sharpest true grievance (everyone has
// dropped a phone face-down), deadpan throughout, and the sting lands in
// the last three words — "face down, cracked" — after the complaint reads
// straight. One joke, no filler, no exclamation mark.
const REVIEW =
  "One star. Gravity keeps my feet on the ground and my phone on the floor, face down, cracked.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
