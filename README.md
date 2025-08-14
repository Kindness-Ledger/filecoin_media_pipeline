# Filecoin media pipeline

## Quick start

**Today**

If you don't have pnpm installed
`npm i -g pnpm`

```bash
pnpm install
pnpm node scripts/hash_file.js ./docs/sample.txt
```

**After agreement — delivered in Milestone 1**
```bash
pnpm run record:sample   # stub now; real path ships in M1
pnpm run upload:sample   # stub now; real path ships in M1
pnpm run fetch:sample    # stub now; real path ships in M1
```

Expected output and acceptance steps for M1 will be included in `docs/verification_guide.md` with the v0.1.0 tag.


## Status
See `MILESTONES.md` for milestones and payments, and `STATUS.md` for the current state.

## Grants
Related proposals in the Filecoin Dev Grants program. Scopes do not overlap.
- Next Step Grant  minimal storage and retrieval path  see `grants/next_step_issue.md`
- Open Grant  public index and documentation  see `grants/open_grant_issue.md`
