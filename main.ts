import * as fs from "node:fs";
import * as path from "node:path";

const POEM = [
  "Two hands on one rope — we chose the same pull.",
  "Not mine, not yours: the tug between us",
  "turned the knot into a door.",
  "I loosened my grip so the plan could hold,",
  "and the road, which had waited for one of us to lead,",
  "walked us both.",
].join("\n") + "\n";

const outputDir = "/output";
const outputPath = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, POEM, "utf8");
console.log(`Wrote ${[...POEM].length} characters to ${outputPath}`);
