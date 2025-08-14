
// scripts/retrieve_via_gateway.js
import "dotenv/config";

const gateway = process.env.GATEWAY_URL || "https://w3s.link";
const cid = process.argv[2];

if (!cid) {
  console.error("Usage: node scripts/retrieve_via_gateway.js <cid>");
  process.exit(1);
}

const url = `${gateway}/ipfs/${cid}`;

async function main() {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Gateway returned ${res.status}`);
  const reader = res.body.getReader();
  const { value } = await reader.read();
  const n = value ? value.length : 0;
  console.log("Fetched", n, "bytes from", url);
}
main().catch(err => {
  console.error(err);
  process.exit(1);
});
