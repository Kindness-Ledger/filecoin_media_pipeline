# Open Grant Proposal: `Kindness Ledger public index and documentation`

**Project Name:** Kindness Ledger public index and documentation

**Proposal Category:** Developer and data tooling

**Individual or Entity Name:** Individual

**Proposer:** [@mittenimraum](https://github.com/mittenimraum)

**Project Repo(s):**   
[Kindness Ledger - Filecoin Media Pipeline](https://github.com/Kindness-Ledger/filecoin_media_pipeline)  
[Public Index Target Folder](https://github.com/Kindness-Ledger/filecoin_media_pipeline/tree/main/docs)

**(Optional) Filecoin ecosystem affiliations:** None

**(Optional) Technical Sponsor:** None

**Do you agree to open source all work you do on behalf of this RFP under the MIT/Apache-2 dual-license?:** Yes

# Project Summary

Kindness Ledger is a public database of acts of kindness. A global stream of kindness that people can see, trust, and join. A lasting memory that lifts attention toward care and cooperation. Each act is a short entry with an optional photo. With this grant we publish a small public index, clear specs, and examples that make it easy to find, verify, and reuse recent records. Scopes do not overlap with the Next Step Grant. Milestone one references the Next Step release for storage and retrieval and does not claim that work again.

## Impact 

This work makes Filecoin usage visible and practical for small teams, educators, and civic media. A simple public index with clear fields and gateway links lowers the effort for pilots, audits, and classes, and turns real stories into reusable data. It helps journalists and researchers find and check recent records in seconds while keeping storage portable and verifiable.

When this is done well, others can mirror the index, rebuild it from public sources, and embed small widgets without a backend. That reduces repeated effort across projects and creates a common starting point for community pilots that need trustworthy retrieval. If it is not done, teams will continue to re implement similar paths with higher cost and less clarity.

Success looks like fresh files served from a static host, fast checks on 2 public gateways, and at least 2 independent mirrors. We will document the path so new groups can adopt Filecoin with a short guide and a one command rebuild.

## Outcomes

- `docs/index_spec.md` with field list and privacy notes  
- `docs/latest.json` with the last two hundred records  
- `docs/map.geojson` for a simple map  
- Rebuild script that regenerates both files from public sources  
- Scheduled build and a daily JSON lines archive for thirty days  
- Example for a world map demo page in repo that reads `docs/map.geojson` 
- Short report with retrieval measurements across two gateways

We measure success by file freshness, rebuild time, median time to first byte for a 200 KB file, number of mirrors, and issue activity.

## Data Onboarding

This project does not onboard large data by itself. It improves discovery and verification of content that is already stored or will be stored by adopters.

## Adoption, Reach, and Growth Strategies

The audience includes small community groups, educators, librarians, local charities, civic media, and developer allies. The goal is to help people share true stories and make them easy to find and verify. We will run small pilots with local or online groups, publish brief updates, and invite a few technical allies to mirror the public index and try a one command rebuild. We may align a simple community moment with World Kindness Day on November 13. Success looks like 2 public mirrors, at least 20 external rebuilds, and median time to first byte under 2 seconds for a 200 KB record on 2 gateways. A modest bounty line may fund accepted mirrors, rebuilds, and documentation fixes. No marketing spend.

## Development Roadmap

**M1 design and first publish**  
- Index spec and privacy notes  
- Build script that writes `docs/latest.json` and `docs/map.geojson`  
- Short verification guide with steps and expected output

**M2  retrieval quality and replication note**  
- Script writes `lastCheckedAt` and `msToFirstByte` fields  
- Short note on pinning and first deals  
- Logs and a brief report

**M3  automation, archive, and examples**  
- Scheduled build on an hourly cadence  
- Daily JSON lines archive for 30 days  
- Example for a world map demo page in repo that reads `docs/map.geojson`

**M4  load check and docs**  
- Basic read check that sustains 1000 JSON reads per minute from static files using a local server or typical static hosting  
- Final docs with mirror steps and a short ethics and privacy page  
- Two public mirrors confirmed with links

## Total Budget Requested

| Milestone # | Description                         | Deliverables                                                       | Completion Date                 | Funding   |
| :---------: | :---------------------------------- | :----------------------------------------------------------------- | :------------------------------ | --------: |
| 1           | Design and first publish            | Index spec, rebuild script, latest and map files, verification guide | within two weeks after agreement | 7,000 USD |
| 2           | Retrieval quality and replication note | Measurement script, fields added, short note and logs              | within four weeks after agreement | 8,000 USD |
| 3           | Automation, archive, examples       | Scheduled build, daily archive for 30 days, world map example  | within seven weeks after agreement | 11,000 USD |
| 4           | Load check and docs                 | Load check, final docs, two mirrors linked                         | within nine to ten weeks after agreement | 10,000 USD |

## Maintenance and Upgrade Plans

I will maintain the spec, rebuild script, and docs, respond to issues, and invite mirrors. If adoption grows, I will add small features by pull request and community feedback. Outputs remain public and easy to mirror.

# Team

## Team Members
- Stephan Schulz

## Team Member LinkedIn Profiles
- [http://bit.ly/4mpGo6y](http://bit.ly/4mpGo6y)

## Team Website
- [https://stephanschulz.com](https://stephanschulz.com)

## Relevant Experience
Senior Software Engineer in Berlin with more than twenty years across startups, agencies, and enterprise. Recent focus on open work and public good. I ship small tools that others can verify and reuse.

## Team code repositories
-  [GitHub profile @mittenimraum](https://github.com/mittenimraum)
- [Kindness Ledger - Filecoin Media Pipeline](https://github.com/Kindness-Ledger/filecoin_media_pipeline)  

# Additional Information
We are also submitting a Next Step Grant for the minimal storage and retrieval path. Scopes do not overlap. If both are approved we will adjust schedules to avoid double funding. Best email for agreement and next steps [kontakt@stephanschulz.com](kontakt@stephanschulz.com). Learned about the program through the Devgrants repo and community docs.
