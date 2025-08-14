# Filecoin Open Grant submission note

**Title**  
Open media pipeline for Acts of Kindness with IPFS and Filecoin

**Summary**  
Give acts of kindness a durable memory. Build a small open pipeline that turns user photos and stories into CID addressed files, replicates them with Filecoin deals, and serves them quickly through gateways. The public index drives a real time map and a curated AI feed. Inspiration to act encourages people to echo an act in their own way and share their stories across other platforms.

**Value to the Filecoin ecosystem**  
Clear reference code for CID first media, practical deals, and fast retrieval. Civic and education projects can copy this pipeline and focus on people rather than storage plumbing. Open metrics enable a public Kindness Score for sponsors without personal data.

**Scope and deliverables**  
Upload service with hashing and privacy defaults  
Replication policies and example deals  
Retrieval path with a tiny map and feed demo  
Scripts for monitoring and basic load tests  
Documentation and examples

**Budget**  
Total 36,000 USD  
Development 28,000  
Storage and retrieval tests 3,000  
Security and privacy review 2,000  
Community pilot 2,000  
Contingency 1,000

**Openness and license**  
MIT. All repos public from day one. Clear readme and scripts so others can reuse the pipeline.

**Team**  
Senior Software Engineer in Berlin. I have spent many years in commercial software across startups, agencies and enterprise. Alongside that I have occasionally done collaborative art projects. I am now exploring Ethereum and content addressed storage to give my work more purpose. With this grant I will ship an open schema, a small SDK and a reproducible demo that others can adopt.

I want to give my work more purpose. This grant helps me turn hard won engineering practice into small open tools that others can reuse.

**Tone and care**  
We avoid pressure and performance. People can contribute privately, with pseudonyms, or in public. Consent and dignity come first, and the feed favors care and usefulness over spectacle.

**Risks and mitigation**  
Cost spikes from retrieval. Use caching and progressive media quality. Sensitive content. Ship privacy guidelines and defaults such as coarse location and optional blurring before upload.

**Links**  
[Repo media pipeline for IPFS and Filecoin](https://github.com/kindness-ledger/filecoin_media_pipeline)  
[Repo EAS schema and SDK](https://github.com/kindness-ledger/esp_eas_sdk)

**Non double funding statement**  
This request covers only the open media pipeline. It does not overlap with the ESP request.

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


**Non double funding and agreement**  
We request this grant for distinct work that does not overlap with any other funding. All paid outputs will be created after activation and will be documented with public proofs.


**Scope clarity**  
This grant covers hashing, upload, replication notes, retrieval and documentation. Sponsor dashboards and marketing features are out of scope. Media remains content addressed and open.
