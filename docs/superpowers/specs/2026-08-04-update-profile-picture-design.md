# Design Spec: Update Profile Picture to Profile_2026.jpg

**Date:** 2026-08-04  
**Status:** Approved  

## Overview
Update the profile picture displayed in the **About Me** section of the portfolio to use the newly provided photo asset (`public/img/Profile_2026.jpg`).

## Proposed Changes

### Component: `src/components/About.astro`
- Update the `src` attribute of the `<img>` tag from `/img/Profile_photo.png` to `/img/Profile_2026.jpg`.
- Enhance image styling with `object-cover aspect-square shadow-xl border border-gray-700/50` for proper aspect ratio scaling and polished modern visuals across all screen resolutions.

```astro
<img
  src="/img/Profile_2026.jpg"
  alt="Enrique Zetina"
  width="384"
  height="384"
  class="rounded-lg mx-auto w-2/3 md:w-full max-w-sm object-cover aspect-square shadow-xl border border-gray-700/50"
/>
```

## Verification Plan

### Automated Verification
- Run `npm run test:run` to ensure all existing tests pass.
- Run `npm run build` to confirm Astro static site generation compiles without errors.

### Visual Verification
- Inspect generated HTML output or run local dev server (`npm run dev`) to confirm `/img/Profile_2026.jpg` renders properly in the About Me section in both English and Spanish locales.
