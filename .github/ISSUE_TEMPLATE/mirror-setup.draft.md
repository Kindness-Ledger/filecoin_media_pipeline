---
name: Mirror setup
about: Host a public mirror of the static index after Open Grant activation
labels: mirror
---

> Note  
> Use this after the Open Grant is activated and the index files exist.

### Mirror
**URL**  
**Host**  Cloudflare Pages, Netlify, GitHub Pages, or similar

### Source
**Repo and tag**  
**Files mirrored**  docs/latest.json, docs/map.geojson

### Rebuild
**Schedule**  hourly or daily  
**Method**  cron, GitHub Action, or platform scheduler  
**Logs**  link to recent runs

### Verification
**Head check**  status for both files  
**ETag or hash**  optional short value

### Contact
**Maintainer**  name and email

### Notes
Anything we should improve