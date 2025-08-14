# Submission note for Filecoin Dev Grants

**Date**  August 18, 2025

This repository contains two Filecoin grant drafts and the supporting docs. The goal is to keep scope clear, avoid double funding, and make reviewer verification simple.

## What is being submitted
- **Next Step Grant**  minimal storage and retrieval path. See `grants/next_step_issue.md`
- **Open Grant**  public index and documentation with a small MapLibre demo page in repo. See `grants/open_grant_issue.md`

Both drafts follow the official templates. All work is MIT licensed. People never pay fees and there is no marketing spend in these grants.

## Separation of scope and no double funding
- Track A Next Step delivers record to CID to public fetch with logs and a tagged release
- Track B Open Grant starts at index design and first publish and references the Next Step release for storage and retrieval
- Track B does not claim any work already funded by Track A
- If both are approved we will adjust schedules to avoid any overlap

See `NON_OVERLAP.md` for the short disclosure.

## What reviewers can expect
**Next Step acceptance**
- Ten records processed from short entries with optional photo
- Two public gateways verified per record with byte count and link
- Logs under `docs/proof/next_step/v0.1.0` and a tag `v0.1.0`

**Open Grant acceptance by milestone**
- M1  index spec, rebuild script, `docs/latest.json`, `docs/map.geojson`, and a short verification guide
- M2  retrieval quality script adds `lastCheckedAt` and `msToFirstByte`, plus a short replication note
- M3  hourly build, a 30 day JSON lines archive, and a world map demo page in repo that reads docs/map.geojson
- M4  basic read check at one thousand JSON reads per minute, final docs, mirror steps, and two public mirrors linked

## Privacy and integrity
- Index publishes only coarse location and fields already public in the record
- Consent is captured in the source record
- A local suppression list supports removal requests for the public index
- For provenance we link each record to an Ethereum attestation that contains only a CID or hash and minimal fields

## Adoption notes for context
We plan to align a small independent community moment with World Kindness Day on November 13. This is for outreach only and is not part of any milestone. The repo will include a world map demo page to show markers from `docs/map.geojson` for review on a local machine.

## External contributions
A modest bounty line may fund accepted verification runs, mirrors, and documentation fixes. All payouts will be recorded in `docs/proof` with links to the deliverable. No funds are used to pay people to post acts or for marketing.