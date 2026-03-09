---
id: paintfinity_painting_station_project_readme
uri: jake://project/paintfinity_painting_station/paintfinity_painting_station_project_readme
title: Paintfinity Painting Station
description: Lightweight Bun React workspace for Paintfinity UI exploration and implementation.
workflow_origin: bun-boilerplate
---

last_updated: "03-08-26"

## Paintfinity Painting Station

This repository is the active Paintfinity workspace, initialized from `bun-boilerplate` and now moving into project-specific implementation.

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

## Common Commands

```bash
bun install
```

```bash
bun run dev
```

```bash
bun run typecheck
```

```bash
bun run lint
```

```bash
bun run build
```

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

## Public Launch Checklist

Before first push to remote for deployment, confirm:

1. In GitHub repo settings, set `Pages -> Source` to `GitHub Actions`.
2. In `Pages`, set custom domain to `paintfinity.chieflivegaming.com` and enable HTTPS.
3. In DNS, add `CNAME` record:
   `paintfinity.chieflivegaming.com -> <github-account>.github.io`
4. Replace remaining placeholder copy/content in the app before go-live.
5. Verify no secrets are committed (`.env*` stays ignored).
6. Track `bun.lock` in git for deterministic deploys.
7. Keep CI installs frozen (`bun install --frozen-lockfile`) so dependency changes only land through committed lockfile updates.
8. Enable Dependabot for weekly Bun and GitHub Actions update PRs.
