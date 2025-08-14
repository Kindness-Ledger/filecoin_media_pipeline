# Verification guide — Next Step

_Date August 18, 2025_

This guide explains how reviewers will verify the **Next Step** milestone once the grant is activated.

> **Pre-activation**  
> The sample commands are **stubs** included for clarity. They only print a message and exit.  
> The live path ships in **Milestone 1** as tag `v0.1.0`.

## After agreement (Milestone 1)

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Create `.env` from the example and set values**
   ```bash
   cp .env.example .env
   # Fill in:
   # IPFS_API_ENDPOINT=
   # IPFS_API_TOKEN=
   # GATEWAY_URL=https://w3s.link
   ```

3. **Create sample records**
   ```bash
   pnpm run record:sample
   ```

4. **Upload and fetch**
   ```bash
   pnpm run upload:sample
   pnpm run fetch:sample
   ```

## Expected output (acceptance)

- CIDv1 printed for each sample record  
- Two gateway URLs per record with byte count  
- Median time to first byte reported for a ~200 KB sample  
- Logs written under `docs/proof/next_step/v0.1.0/` and committed

## Where files go

```
docs/
  proof/
    next_step/
      v0.1.0/
        upload_logs.txt
        fetch_results.json
```

## Troubleshooting

- Ensure `.env` values are set and your token has permission to upload.  
- If gateways differ in response time, re-run once and note the variance.  
- File not found errors usually mean the sample records have not been generated (`record:sample`).

## System requirements

- Node 18 or higher, `pnpm` installed  
- A common laptop (no GPU or special hardware required)
