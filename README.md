---
id: paintfinity_project_readme
uri: jake://project/paintfinity/paintfinity_project_readme
title: Paintfinity Painting Station
description: Lightweight Bun React workspace for Paintfinity UI exploration and implementation.
workflow_origin: bun-boilerplate
---

last_updated: "04-25-26"

## Paintfinity Painting Station

This repository is the active Paintfinity workspace.Scaffolded from local boilerplate repo `bun-boilerplate`

## Deployed at

- `https://paintfinity.chieflivegaming.com/`

## Stack

- React
- TypeScript
- Tailwind v4
- shadcn/ui primitives
- curated external registries in `components.json`

## Theme Workflow for my projects

- Single stylesheet (index.css) defines tokens and helper tailwind utilities utilize them.
- Components use utilities for lightweight and portable builds across projects.
- Theme values are swapped per project while the component-facing token contract stays stable.
- This keeps styling compatible with shadcn primitives and other future shadcn intake from registries.

## Data

- `src/data/paintfinity-modules.json` stores the current module catalog counts used by the static-site lane.

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
