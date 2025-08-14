// scripts/hash_file.js
// Purpose: read a file, compute SHA-256, and create a CIDv1 in raw format
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sha256 } from "multiformats/hashes/sha2";
import { CID } from "multiformats/cid";
import * as raw from "multiformats/codecs/raw";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function makeCid(filePath) {
  const abs = path.resolve(__dirname, "..", filePath);
  const bytes = fs.readFileSync(abs);
  const hash = await sha256.digest(bytes);
  const cid = CID.createV1(raw.code, hash);
  return cid.toString();
}

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.error("Please provide a file path");
    process.exit(1);
  }
  const cid = await makeCid(target);
  console.log("CIDv1", cid);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
