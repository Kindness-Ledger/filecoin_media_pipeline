# Grant Proposal: `Kindness Ledger minimal storage and retrieval path`

**Project Name:** Kindness Ledger minimal storage and retrieval path

**Proposal Category:** Retrieval

**Individual or Entity Name:** Individual

**Proposer:** [@mittenimraum](https://github.com/mittenimraum)

**Project Repo(s)** [Kindness Ledger - Filecoin Media Pipeline](https://github.com/Kindness-Ledger/filecoin_media_pipeline)

**Filecoin ecosystem affiliations:** None

**(Optional) Technical Sponsor:** None

**Do you agree to open source all work you do on behalf of this RFP under the MIT/Apache-2 dual-license?:** Yes


### 1. What is your project and what problem does it solve? (max 100 words)
Kindness Ledger is a public database of acts of kindness. A global stream people can see, trust, and join. A lasting memory that lifts attention toward care and cooperation. Each act is a short entry with an optional photo. This grant delivers a simple path from a post to a content address and a public retrieval link you can check in seconds. Today these moments fade or sit in places that cannot be verified. We make them visible and trustworthy with a compact JSON record, a CID, and a verified fetch through public gateways.

### 2. How is Filecoin used in this project? 
We turn each act into a compact JSON record with fields for text, time, a coarse location cell, category, and an optional photo CID. We create a CIDv1 for the record, upload it, and verify retrieval through public gateways. If a photo is present we store it as a separate CID and reference it. The repo ships short scripts, a verification guide with exact steps and expected output, and a proof folder with logs and links.
  
### 3. How will you improve your project with this grant? What steps will you take to meet this objective?

| Number | Grant Deliverable       | Briefly describe how you will meet deliverable objectives  | Timeframe (within 3 months)|
| :---   | :------                 | :---                                                       | :---                       | 
| 1.     | Record and hash script  | Build a JSON record from text and optional photo and print CIDv1 for ten sample records | within two weeks after agreement | 
| 2.     | Upload and retrieval    | Upload records, return real CIDs, fetch bytes from two public gateways, record byte count and URLs | within two weeks after agreement | 
| 3.     | Verification and tag    | Short guide with exact steps and expected output, publish v0.1.0 with logs and links | within two weeks after agreement | 

### 4. What is the total amount of this grant request? 
8,000 USD

### 5. Adoption, Reach, and Growth Strategies
We target small groups and curators who want to record and verify true stories of kindness. For this grant we run a small pilot with three to five partners and educators. They submit short stories, we store a compact record, and they confirm a public fetch from two gateways. First ten stories come from direct outreach, first one hundred from a few more partners and a small moment aligned with World Kindness Day on November 13. We are not affiliated with the World Kindness Movement. Success is ten external confirmations, two gateways per story, fast retrieval, and public logs. A modest bounty line may cover accepted verification runs and mirrors. No marketing spend.

### 6. If accepted, do you agree to share monthly project updates in this Github Issue until the project described here is complete?
Yes
  
### 7. Does your proposal comply with our Community Code of Conduct?
Yes

### 8. Links and submissions
None
  
### Additional questions:
* For each team member(s), please list name, email, Github account, and role in the project.  
  Stephan Schulz, [kontakt@stephanschulz.com](kontakt@stephanschulz.com), [@mittenimraum](https://github.com/mittenimraum), role solo maintainer
* How did you learn about this grant type program?  
  Devgrants repo and community docs
