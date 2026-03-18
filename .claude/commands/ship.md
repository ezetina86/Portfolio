Ship all current changes: create a branch, conventional commit, push, and open a PR into `development`.

## Steps

### 1. Understand the changes
Run these in parallel:
- `git status` — see what files are modified, added, or deleted
- `git diff HEAD` — read the full diff to understand what changed

### 2. Determine the conventional commit type
Analyse the diff and pick **one** type:
- `feat` — new feature or content added (new project, section, page)
- `fix` — bug fix or broken link corrected
- `refactor` — code restructure without behaviour change
- `style` — visual/CSS/spacing changes only
- `content` — copy, data, or text updates (bio, job, cert data)
- `chore` — config, tooling, dependency updates
- `docs` — documentation only

### 3. Derive a branch name
Format: `type/short-kebab-description`
Examples: `feat/add-commit-project`, `fix/cert-credly-links`, `content/rbc-experience`
If the user passed `$ARGUMENTS`, incorporate those words into the branch name.
Keep it under 50 characters.

### 4. Create the branch
```bash
git checkout -b <branch-name>
```

### 5. Stage changes
```bash
git add -A
```
Skip any file that looks like it contains secrets (`.env`, `credentials*`, `*.key`). Warn the user if any such file is detected.

### 6. Write the commit message
Follow the Conventional Commits spec:
```
type(scope): concise imperative summary (≤72 chars)

- Bullet describing what changed and why
- Another bullet if needed
```
Scope is optional but helpful (e.g. `certifications`, `projects`, `hero`, `data`).

### 7. Commit
```bash
git commit -m "$(cat <<'EOF'
type(scope): summary

- detail line 1
- detail line 2

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

### 8. Push the branch
```bash
git push -u origin <branch-name>
```

### 9. Create the PR targeting `development`
```bash
gh pr create \
  --base development \
  --title "type(scope): summary" \
  --body "$(cat <<'EOF'
## Summary
- bullet 1
- bullet 2

## Test plan
- [ ] Run `make dev` and verify changes render correctly
- [ ] Check EN and ES versions if content was changed
- [ ] Verify any links open correctly

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

### 10. Report
Print the PR URL so the user can review it immediately.
