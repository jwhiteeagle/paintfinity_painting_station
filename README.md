---
id: bun-boilerplate
uri: jake://mini-project/bun-boilerplate
title: Bun Boilerplate
description: Lightweight React + TypeScript + Tailwind v4 starter template for Jake's workflow.
workflow_origin: bun-boilerplate
---

last_updated: "03-04-26"

## Bun Boilerplate

This repo is the jump-off point for lightweight SPA/static projects.

## Project Details

This repository is the canonical lightweight starter for projects using `workflow_origin: bun-boilerplate`.

## Stack

- React
- TypeScript
- Tailwind v4
- Shadcn components
- Some favorite registries preset in components.json
- Local jake_component_registry in components.json

## Bun

`bun install`, `bun run dev`, `bun run build`, `bunx shadcn@latest add ...`, `bun run typecheck`, `bun run lint`

### Shadcn Registries

- `cult-ui`: https://cult-ui.com/
- `react-bits`: https://reactbits.dev/
- `motion-primitives`: https://motion-primitives.com/
- `shadcnblocks`: https://www.shadcnblocks.com/
- `pacekit`: https://ui.pacekit.dev/

## First Clone Setup (Delete This Block After You Run It Once)

Use this exact order when you clone this boilerplate into a new project:

1. Clone and enter the new project directory.
2. Repoint git to your new Forgejo repo (if needed):

```bash
git remote -v
```

```bash
git remote remove origin
```

```bash
git remote add origin <your-new-forgejo-repo-url>
```

3. Install deps:

```bash
bun install
```

4. Start dev server and verify app loads:

```bash
bun run dev
```

5. Apply project identity updates:

- update `index.html` title
- update app header copy in `src/App.tsx`
- update this README for the actual project

6. Apply project theme:

- paste tweakcn value changes into `src/styles/theme-project.css`
- keep token names stable in `theme-contract.css`
- keep your custom extras in `theme-custom.css`

7. Pull any extra primitives/patterns you need:

```bash
bunx shadcn@latest add button card
```

```bash
bunx shadcn@latest add @jake/app-shell @jake/page-header @jake/section-container
```

8. Run quality gates:

```bash
bun run typecheck
```

```bash
bun run lint
```

```bash
bun run build
```

9. Make your first project commit and push to Forgejo.

## Frontend Canon Reference

Concept authority for frontend methodology lives in `jake://global/frontend-design`.

Use this README for `bun-boilerplate` implementation details only.

## Repo Roles

- `bun-boilerplate` = PoC + starter implementation.
- `jake_component_registry` = cross-project reusable pattern distribution.

## V1 Constraints

- Bun-first workflow.
- No router by default.
- Minimal dependencies.
- shadcn-compatible semantic token contract.
- tweakcn value-swap workflow.

## Theme Workflow (tweakcn Bridge)

Theme files are intentionally layered:

- `src/styles/theme-contract.css` = required semantic token names (do not rename).
- `src/styles/theme-project.css` = project value swaps (paste/adapt tweakcn values here).
- `src/styles/theme-custom.css` = personal extras and reusable utilities.

Import order is enforced in `src/index.css`:

1. contract
2. project values
3. custom extras

Rule: keep token names stable, change values per project.

## shadcn Compatibility Notes

- `components.json` is preconfigured for Tailwind CSS variables and aliases.
- Starter includes `cn()` and baseline `ui/button` + `ui/card` primitives.
- Add official primitives with:

```bash
bunx shadcn@latest add button
```

## Custom Registry Setup (`@jake`)

Default mapping is included in `components.json`:

```json
{
  "registries": {
    "@jake": "http://192.168.50.123:30142/forgejoadmin/jake_component_registry/raw/branch/main/public/r/{name}.json"
  }
}
```

Install pattern items:

```bash
bunx shadcn@latest add @jake/app-shell @jake/page-header @jake/section-container
```

## Reference-Up Notes

- Harden patterns in this repo first, then promote reusable patterns to `jake_component_registry`.
- If lightweight defaults no longer fit project needs, use `jake://helper/framework-escalation`.
