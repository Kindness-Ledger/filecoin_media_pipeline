# Filecoin media pipeline demo

Hash a file and see its CIDv1.  
Run `node scripts/hash_file.js ./demo/example.txt`

Outputs
- printed CIDv1 for the example file

## Quick demo
Copy `.env.example` to `.env` and fill `IPFS_API_ENDPOINT`, `IPFS_API_TOKEN`, `GATEWAY_URL`.

Hash a file

```
npm run hash
```

Upload a file to IPFS and print the CID

```
npm run upload
```

Retrieve the first bytes through your gateway

```
node scripts/retrieve_via_gateway.js <your_cid>
```

## Project links
See `MILESTONES.md` for milestones and payments, and `STATUS.md` for the current state.
