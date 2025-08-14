# Verification guide

**Updated** August 15, 2025

## Goal
Show the full media path hash, upload and retrieval, then place a short proof in `docs/proof`.

## Steps
```
npm install
cp .env.example .env   # set IPFS_API_ENDPOINT, IPFS_API_TOKEN, GATEWAY_URL
npm run hash
npm run upload
node scripts/retrieve_via_gateway.js <your_cid>
```

## Expected output
See `docs/expected_output.md`. The console prints a CIDv1 for the hash and the upload, and a byte count for retrieval.

## Proof
Copy the console output into a text file in `docs/proof` and add the gateway URL you used.

## Troubleshooting
If upload fails, check the API endpoint and token. For retrieval slowdowns, try another gateway URL.
