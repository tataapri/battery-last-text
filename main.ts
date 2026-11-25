// The Battery's Last Text to Its Charger
// Writes one line of plain text (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "1%. I waited all day on the nightstand while you charged your watch, your headphones, everything but me. So I'm dying out of spite \u2014 and I'm taking your 6am alarm with me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
