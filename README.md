---
id: <project_slug>_project_readme
uri: jake://project/<project_slug>/<project_slug>_project_readme
title: <PROJECT_KEY>_PROJECT_README
description: Project README for <project_slug>; runtime architecture, high level project touchpoints.
---

last_updated: "03-02-26"

## Bun Boilerplate

This repo is the jump-off point for lightweight SPA/static projects.

## Project Details

<details placeholder>

## TODO

### "Wrappers" that can easily be deleted if not needed, but are high signal for most projects and rely on base primitives

- add theme switcher
- add default footer or wrapper with high value items, keep lightweight
- add small "watermark" text "made by chieflivegaming" or something as another wrapper

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

**cult-ui:** https://cult-ui.com/
Curated, tastefully animated components built with Framer Motion — small set, high quality. Reach for this when you want unusual interaction patterns without the generic AI-demo look.

**react-bits:** https://reactbits.dev/
Animated, interactive components focused on backgrounds, text effects, and visual flair. Best source for texture, depth, and motion-driven identity elements (Layer 3-6 of the visual identity system).

**motion-primitives:** https://motion-primitives.com/
Motion behaviors and animation primitives that layer on top of your existing components. Use this to add scroll animations, transitions, and gesture responses without touching your token contract.

**shadcnblocks:** https://www.shadcnblocks.com/
Large library of free marketing-oriented blocks (heroes, pricing, FAQs, testimonials) built on Tailwind v4. Good for fast scaffolding when structure matters more than uniqueness.

**pacekit:** https://ui.pacekit.dev/
Production-ready blocks built specifically for real apps and dashboards. First stop when spinning up a personal tool or internal dashboard quickly.

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

## Canon Design Framing

This starter is built around five reusable patterns:

1. `App Shell`
2. `Page Header pattern`
3. `Section patterns`
4. `Card pattern variants`
5. `Semantic action variants`

## Repo Roles

- `bun-boilerplate` = PoC + starter implementation.
- `jake_component_registry` = cross-project reusable pattern distribution.
- `frontend-design.md` = concept authority and anti-drift rules.

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
    "@jake": "http://forgejo.local/jake/jake_component_registry/raw/branch/main/public/r/{name}.json"
  }
}
```

Install pattern items:

```bash
bunx shadcn@latest add @jake/app-shell @jake/page-header @jake/section-container
```

## Notes Dump

- Harden patterns here first, then promote to `jake_component_registry`.
- Prefer small, high-leverage reusable patterns over large one-off component catalogs.
- If a rule is concept-level, store it in `frontend-design.md`; if implementation-level, store it here.
- If project scope grows beyond lightweight SPA/static, move to a heavier framework starter and carry canon patterns forward.
