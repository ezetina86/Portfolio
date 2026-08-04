# Update Profile Picture to Profile_2026.jpg Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the profile picture source in the About component to `/img/Profile_2026.jpg` and verify proper visual scaling and passing tests.

**Architecture:** Modify the `src` attribute of the `<img>` tag in `src/components/About.astro` to target `/img/Profile_2026.jpg` and add modern aspect-ratio CSS utility classes.

**Tech Stack:** Astro, HTML5, Tailwind CSS

## Global Constraints

- Preserve all existing English and Spanish locale text and component structure.
- Ensure the image scales responsively and cleanly.

---

### Task 1: Update About Component & Verify Build

**Files:**
- Modify: `src/components/About.astro:9`

**Interfaces:**
- Consumes: `/img/Profile_2026.jpg` from `public/img/Profile_2026.jpg`
- Produces: Updated About Me profile image rendered in English & Spanish views

- [ ] **Step 1: Update About.astro image tag**

Modify `src/components/About.astro`:
Replace line 9:
```astro
        <img src="/img/Profile_photo.png" alt="Enrique Zetina" width="384" height="384" class="rounded-lg mx-auto w-2/3 md:w-full max-w-sm">
```
With:
```astro
        <img src="/img/Profile_2026.jpg" alt="Enrique Zetina" width="384" height="384" class="rounded-lg mx-auto w-2/3 md:w-full max-w-sm object-cover aspect-square shadow-xl border border-gray-700/50">
```

- [ ] **Step 2: Run unit test suite**

Run: `npm run test:run`
Expected output: 5 test files passed (17 tests)

- [ ] **Step 3: Build Astro site**

Run: `npm run build`
Expected output: Static routes `/index.html` and `/es/index.html` generated successfully.

- [ ] **Step 4: Commit changes**

```bash
git add src/components/About.astro
git commit -m "feat: update profile picture to Profile_2026.jpg in About component"
```
