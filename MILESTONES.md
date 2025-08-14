# Milestones and payments for Filecoin media pipeline

## Payment terms
Work is paid after agreement only. We will not claim payment for work done before the agreement. Payments are made after acceptance of each milestone deliverable.

## F1 after agreement  7,000 USD
**Goal**  proof of the full media path hash, upload, retrieval

**Deliverables**
- Hash script prints a CIDv1 for a sample file
- Upload script using `ipfs http client` returns a real CID
- Retrieval script fetches the first bytes from a public gateway and prints the byte count
- `.env.example` with `IPFS_API_ENDPOINT`, `IPFS_API_TOKEN`, `GATEWAY_URL`
- `docs/expected_output.md` and a short verification guide
- Tagged release `v0.1.0` with logs and commands

**Acceptance**
- All three commands run and match the expected output

**Reviewer steps**
```
npm install
cp .env.example .env   # set values
npm run hash
npm run upload         # prints a CIDv1
node scripts/retrieve_via_gateway.js <your_cid>
```

## F2 retrieval and simple replication note  8,000 USD
**Goal**  retrieval is fast and the first replication approach is documented

**Deliverables**
- Two example CIDs that retrieve in seconds through at least two gateways
- Retrieval script with basic timeout and helpful error messages
- Short README note on the service used to make deals and how to verify them

**Acceptance**
- Both example CIDs are retrievable as described

## F3 map and feed sample  11,000 USD
**Goal**  visible result for civic projects

**Deliverables**
- Tiny sample map that renders items for a small set of CIDs
- Small feed endpoint or script that returns a simple list with timestamps and CIDs
- Short note on privacy defaults and consent handling

**Acceptance**
- Map and feed show the same items and load quickly

## F4 load check and docs  10,000 USD
**Goal**  stability and hand off

**Deliverables**
- Basic load check with a short report
- Final documentation pass and script list
- `v0.2.0` tag and a short changelog

**Acceptance**
- Docs reviewed and demo scripts run cleanly
