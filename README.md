---
id: paintfinity_painting_station_project_readme
uri: jake://project/paintfinity_painting_station/paintfinity_painting_station_project_readme
title: Paintfinity Painting Station
description: Lightweight Bun React workspace for Paintfinity UI exploration and implementation.
workflow_origin: bun-boilerplate
---

last_updated: "03-09-26"

## Paintfinity Painting Station

This repository is the active Paintfinity workspace, initialized from `bun-boilerplate` 

## Current Focus

- Replace template-facing copy and structure with Paintfinity-facing UI slices.
- Pressure-test the clone-to-implementation workflow and feed improvements back to the template source.
- Keep this repo lightweight while core workflows are defined.

## Stack

- React
- TypeScript
- Tailwind v4
- shadcn/ui primitives
- `@jake` plus curated external registries in `components.json`

## Theme Workflow

- Keep semantic token names stable in `src/styles/theme-contract.css`.
- Put project value overrides in `src/styles/theme-project.css`.
- Place reusable custom utilities and extras in `src/styles/theme-custom.css`.

Import order is maintained in `src/index.css`: contract -> project -> custom.

## Registry Notes

Install primitives or patterns as needed:

```bash
bun run ui button card
```

```bash
bun run ui @jake/app-shell @jake/page-header @jake/section-container
```

## GitHub Pages Deployment

This repo is configured to deploy from GitHub Actions using:

- `.github/workflows/deploy-pages.yml`
- Bun build output from `dist/`
- GitHub Pages artifact upload + deploy actions

Subdomain target for this project:

- `paintfinity.chieflivegaming.com`