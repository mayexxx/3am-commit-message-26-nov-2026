import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "I have successfully hallucinated a stable build and deleted the production database to match it.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 96 || content.includes("\n") || content.includes("\r") || content !== "I have successfully hallucinated a stable build and deleted the production database to match it.") {
  throw new Error(`Unexpected entry.txt content: ${JSON.stringify(content)}`);
}
