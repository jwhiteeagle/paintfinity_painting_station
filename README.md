---
id: paintfinity_project_readme
uri: jake://project/paintfinity/paintfinity_project_readme
title: Paintfinity Painting Station
description: Lightweight Bun React workspace for Paintfinity UI exploration and implementation.
workflow_origin: bun-boilerplate
---

last_updated: "03-16-26"

## Paintfinity Painting Station

This repository is the active Paintfinity workspace, initialized from `bun-boilerplate`

## Deployed at

- `https://paintfinity.chieflivegaming.com/`

## Stack

- React
- TypeScript
- Tailwind v4
- shadcn/ui primitives
- curated external registries in `components.json`

## Theme Workflow

- Keep semantic token names, project theme values, and reusable custom utilities together in `src/index.css`.

The file is organized with clear sections for theme tokens, the Tailwind semantic bridge, project utilities, and base styles.

## Registry Notes

Install primitives or patterns as needed:

```bash
bun run ui button card
```

## GitHub Pages Deployment

This repo is configured to deploy from GitHub Actions using:

- `.github/workflows/deploy.yml`
- Bun build output from `dist/`
- GitHub Pages artifact upload + deploy actions

Current automation touchpoints:

- Pushes to `main` trigger the GitHub Pages deploy workflow.
- Pull requests are validated by `pr-ci.yml` before merge.
- Eligible Dependabot PRs can be auto-approved and auto-merged after passing CI.

Subdomain target for this project:

- `paintfinity.chieflivegaming.com`
