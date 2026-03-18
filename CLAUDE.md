# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

A `Makefile` wraps all common tasks. Run `make help` to list them.

```bash
make dev          # Start dev server at http://localhost:4321
make build        # Build static site to dist/
make preview      # Build then serve dist/ locally
make test         # Run tests once
make test-watch   # Run tests in watch mode
make test-ui      # Run tests with browser UI
make install      # Install dependencies
make clean        # Remove dist/
```

Run a single test file directly:
```bash
npx vitest run src/data/projects.test.js
```

## Architecture

This is a **static Astro site** deployed to GitHub Pages at `https://ezetina.com`. It is a single-page portfolio with stacked full-width sections. All sections are composed in `src/pages/index.astro` (English) and `src/pages/es/index.astro` (Spanish).

### Component hierarchy

```
Layout.astro        ← HTML shell, Google Fonts, global scripts
  Header.astro      ← Fixed nav, scroll-aware bg, EN/ES lang toggle
  <main>
    Hero → About → Education → Skills → Projects → Certifications → Experience → Contact
  </main>
  Footer.astro
```

### Bilingual pattern

Every data module in `src/data/` has a paired EN/ES file (e.g. `projects.js` / `projects-es.js`). Components read `Astro.currentLocale` at build time and import the correct data file. The i18n default locale is `en` (no URL prefix); Spanish lives at `/es/`.

### Client-side scripts

Two vanilla JS scripts are loaded globally via `Layout.astro` and registered on the `astro:page-load` event (Astro View Transitions lifecycle):

- `src/scripts/animate.js` — IntersectionObserver that adds `.animate-on-scroll` classes for scroll-triggered animations
- `src/scripts/certification-carousel.js` — Full carousel logic: auto-advance, nav buttons, ResizeObserver, modal display. This file must avoid DOM layout thrashing (see performance test below).

### Styling

Tailwind CSS with a custom color palette defined in `tailwind.config.mjs`:
- `primary` (#0D9488 teal), `secondary` (#3B82F6 blue), `accent` (#F59E0B amber)
- Brand colors per category: Cloud, DevOps, Data, Python
- Custom fonts: `Inter` (body), `Poppins` (headings) via Google Fonts

Custom CSS for animations, word cloud, carousel, and modal is in `src/styles/animations.css`.

### Testing

Tests are co-located with source files (`src/**/*.test.js`). The exception is `src/tests/layout-thrashing-benchmark.test.js`, a performance regression test that executes the carousel script in a mocked DOM environment and counts `offsetWidth` reads per update cycle to detect layout thrashing.

Test environment is `node` (vitest.config.js). Tests must pass before GitHub Actions deploys to GitHub Pages.

### CI/CD

- Push to `master` → runs `test:run` → `build` → deploys to GitHub Pages
- Push/PR to `development` → runs `test:run` only
