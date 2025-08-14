
// scripts/upload_ipfs.js
import fs from "fs";
import path from "path";
import "dotenv/config";
import { create as createClient } from "ipfs-http-client";

const API = process.env.IPFS_API_ENDPOINT || "https://api.web3.storage";
const TOKEN = process.env.IPFS_API_TOKEN || "";

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("Usage: node scripts/upload_ipfs.js ./path/to/file");
    process.exit(1);
  }
  const abs = path.resolve(process.cwd(), filePath);
  const bytes = fs.readFileSync(abs);

  const authHeaders = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};
  const client = createClient({ url: API, headers: authHeaders });

  const { cid } = await client.add(bytes);
  console.log("CIDv1", cid.toString());
}
main().catch(err => {
  console.error(err);
  process.exit(1);
});
