---
id: paintfinity_project_readme
uri: jake://project/paintfinity/paintfinity_project_readme
title: Paintfinity Painting Station
description: Lightweight Bun React workspace for Paintfinity SPA.
workflow_origin: bun-boilerplate
---

last_updated: "05-13-26"

## Paintfinity Painting Station

This repository is the active Paintfinity SPA vibe developed by Jake/Chief Live Gaming.

Detailed module descriptions and model file hosting handled by third party (MakerWorld), this app just organizes and redirects.

## Deployed via Github pages with a subdomain target of:

- `https://paintfinity.chieflivegaming.com/`

- The build script recursively copies `public/` into `dist/` for CDN-style embed assets. Example: `public/embeds/file-name-v1.gif` deploys to `https://paintfinity.chieflivegaming.com/embeds/file-name-v1.gif`.

## Pages and Local Preview

- `/` uses `index.html` and `src/main.tsx` for the landing page.
- `/gridfinity/` uses `gridfinity/index.html`, `src/gridfinity.tsx`, and `src/pages/gridfinity.tsx`.
- `/amazonlinks/` uses `amazonlinks/index.html`, `src/amazonlinks.tsx`, and `src/pages/amazonlinks.tsx`.
- Content pages share `SectionContainer` with `variant="content"`, the site header/footer, and theme provider.
- `bun run dev` serves all three entries on port `3005`. Restart an existing dev process after changing the entry list.
- `bun run build` bundles each HTML entry separately into `dist`, preserving page directories and root-relative asset URLs. The existing GitHub Pages workflow publishes the whole directory.

## Stack

- React
- TypeScript
- Tailwind v4
- shadcn + tweakcn frontend adoption strategy

## Data

- `src/data/paintfinity-modules.json` stores module-card data and catalog counts to populate this SPAs helper tools and other backend trackers.
