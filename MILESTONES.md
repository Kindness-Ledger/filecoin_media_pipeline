# Milestones

## Track A  Next Step Grant  minimal storage and retrieval
Status  submitted  
Payment terms  after agreement and acceptance only

**M1  8,000 USD**  
**Goal**  path from post to CID and verified fetch  
**Deliverables**
- Record and hash script creates a JSON record from text and optional photo and prints CIDv1 for ten sample records
- Upload and retrieval script returns real CIDs and fetches from two public gateways with byte count and URL
- `docs/verification_guide.md` with steps and expected output
- Tagged release `v0.1.0` with logs and links  
**Acceptance**
- Ten records processed
- Two gateways verified per record
- Logs present in `docs/proof/next_step/v0.1.0`

## Track B  Open Grant  public index and documentation
Status  draft  
Note  scopes do not overlap with Track A. Track B M1 references the Next Step release.

**M1  7,000 USD  design and first publish**  
* `docs/index_spec.md` with fields and privacy notes  
* `scripts/build_index.ts` writes `docs/latest.json` and `docs/map.geojson` from public sources  
* Short verification guide with steps and expected output  
**Acceptance**  
* `latest.json` lists at least 200 records with required fields  
* Rebuild is reproducible with one command on a common laptop  
* The guide steps run as written and produce the expected files

**M2  8,000 USD  retrieval quality and replication note**  
* Measurement script writes `lastCheckedAt` and `msToFirstByte` into the index  
* Short note on pinning and first deals  
* Logs and a brief report  
**Acceptance**  
* Each item in `latest.json` has `lastCheckedAt` and `msToFirstByte`  
* Two gateway checks per item with byte count and URL recorded  
* Report shows median time to first byte under 2 seconds for a 200 KB file and explains the method  
* Pinning or first deal path is documented and verified with a public link  
* Logs and report are committed

**M3  11,000 USD  automation, archive, examples**  
* Hourly build with GitHub Actions  
* Daily JSON lines archive for 30 days  
* Example for a world map demo page in repo that reads `docs/map.geojson`  
**Acceptance**  
* Scheduled build runs hourly and logs show at least 72 hours of successful runs  
* Archive contains at least 30 daily `.jsonl` files with correct format  
* Map demo opens locally and renders markers from `docs/map.geojson` without keys  
* A simple feed script prints the last 5 records with their CIDs

**M4  10,000 USD  load check and docs**  
* Basic read check that sustains 1000 JSON reads per minute from static files using a local server or typical static hosting  
* Final docs, mirror steps, short ethics and privacy page  
* Two public mirrors confirmed with links  
**Acceptance**  
* Read check sustains 1000 reads per minute for 5 minutes with at least 99 percent success and logs are committed  
* Final docs and mirror steps are published and a clean clone can run all examples end to end  
* Two public mirrors are live, linked, and show `latest.json` and `map.geojson` with a recent timestamp
