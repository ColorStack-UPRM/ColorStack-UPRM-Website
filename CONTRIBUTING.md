# Contributing to the ColorStack UPRM Website

This guide covers how we name branches, write commits, and open pull requests.
Read it atleast once before your first contribution.

---

## The one rule that matters most

**Nobody pushes to `main`. Ever.**

EVERY change goes through a pull request.
`main` is protected on GitHub, so direct pushes will be rejected anyway, but the
rule is the point: `main` is what's deployed to the live site, and it only
changes through a reviewed PR.

The full flow:

1. You branch off `main`.
2. You commit your work on that branch.
3. You push the branch to GitHub.
4. You open a pull request.
5. The **Lead** reviews it, tests it, and merges it.

**Only the Lead merges to `main`.** Do not merge your own PR, even if GitHub
shows the button as available.

---

## 1 issue = 1 branch = 1 PR

Every piece of work starts as a GitHub issue. One issue produces one branch,
which produces one pull request.

Do not bundle unrelated changes into a single PR. If you're working on the Home
page hero and you notice a typo in the footer, that's a second issue and a
second PR. Small, focused PRs get reviewed and merged fast. Large mixed PRs are harder to review.

---

## Branch naming

Format:

```
<type>/<issue-number>-<short-description>
```

| Type       | Use it for                                       |
| ---------- | ------------------------------------------------ |
| `feature/` | New functionality, new pages, new components     |
| `fix/`     | Fixing something that is broken                  |
| `docs/`    | Documentation only — README, this file, comments |
| `chore/`   | Tooling, config, dependencies, repo maintenance  |

Rules for the short description: lowercase, words separated by hyphens, three to
five words max.

Examples:

```
feature/12-home-hero-section
feature/23-become-a-member-form
fix/31-navbar-overlap-mobile
docs/8-contributing-guide
```

Creating your branch:

```bash
git checkout main
git pull origin main
git checkout -b feature/12-home-hero-section
```

Always branch off an up-to-date `main`. Never branch off someone else's branch.

---

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/). Format:

```
<type>: <what you did>
```

| Type     | Use it for                                                   |
| -------- | ------------------------------------------------------------ |
| `feat:`  | A new feature or user-visible addition                       |
| `fix:`   | A bug fix                                                    |
| `docs:`  | Documentation only                                           |
| `chore:` | Tooling, config, dependencies, cleanup. Nothing user-visible |

Rules:

- Imperative mood: `add`, not `added` or `adds`.
- Lowercase after the colon.
- No period at the end.
- Keep the subject line under ~72 characters.
- One logical change per commit. If your commit message needs the word "and",
  it's probably two commits.

Good:

```
feat: add responsive hero section to home page
fix: correct navbar overlap on screens under 640px
docs: document branch naming convention
chore: add prettier config
```

Bad:

```
updates
fixed stuff and added the footer
Feat: Added The Hero Section.
```

---

## Keeping your branch updated

Before you request review, bring your branch up to date with `main`. This is
your job, not the reviewer's, a PR with conflicts cannot be reviewed or merged.

```bash
git checkout main
git pull origin main
git checkout feature/12-home-hero-section
git merge main
```

Resolve any conflicts locally, make sure the site still runs, then push again.
If you're not sure how to resolve a conflict, stop and ask the Lead before
forcing anything.

---

## Opening a pull request

Push your branch, then open the PR on GitHub:

```bash
git push -u origin feature/12-home-hero-section
```

The PR template loads automatically. Fill it out completely.
A PR with an empty template gets sent back without review.

Before you request review, confirm all of the following:

- [ ] It runs locally (`npm run dev`) and you actually looked at it in a browser
- [ ] `npm run lint` passes with no errors
- [ ] No errors or warnings in the browser console
- [ ] Your branch is up to date with `main`
- [ ] The PR links its issue with `Closes #<number>`

## Review and merge

Once your PR is open and complete, request review from the Lead (or drop it in
the team channel).

The Lead will:

1. Read the diff.
2. Open the Cloudflare preview and test it.
3. Either approve and merge, or leave comments requesting changes.

If changes are requested, push new commits to the same branch, the PR updates
automatically. Don't open a new PR.

---

## Quick reference

```bash
# start work
git checkout main
git pull origin main
git checkout -b feature/12-home-hero-section

# work, then commit
git add .
git commit -m "feat: add responsive hero section to home page"

# stay current with main
git checkout main && git pull origin main
git checkout feature/12-home-hero-section && git merge main #in case main has had other changes

# push and open the PR
git push -u origin feature/12-home-hero-section
```

---

## Local setup

If you haven't set up the project yet, see the [README](README.md).
