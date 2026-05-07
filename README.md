---
id: paintfinity_project_readme
uri: jake://project/paintfinity/paintfinity_project_readme
title: Paintfinity Painting Station
description: Lightweight Bun React workspace for Paintfinity SPA.
workflow_origin: bun-boilerplate
---

last_updated: "05-06-26"

## Paintfinity Painting Station

This repository is the active Paintfinity SPA, vibe developed by Chief Live Gaming.

Detailed module descriptions and model file hosting handled by third party (MakerWorld), this app just organizes and redirects.

## Deployed via Github pages with a subdomain target of:

- `https://paintfinity.chieflivegaming.com/`

- The build script recursively copies `public/` into `dist/` for CDN-style embed assets. Example: `public/embeds/file-name-v1.gif` deploys to `https://paintfinity.chieflivegaming.com/embeds/file-name-v1.gif`.

## Stack

- React
- TypeScript
- Tailwind v4
- shadcn + tweakcn frontend adoption strategy

## Data

- `src/data/paintfinity-modules.json` stores module-card data and catalog counts to populate this SPAs helper tools and other backend trackers.
