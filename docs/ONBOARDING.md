# Onboarding Guide

Gets the project running on your machine and points you at everything else. Follow it top to bottom.

If something here is wrong, that's a bug. Tell the Lead so the next person doesn't hit it.

---

## 1. Install

| Tool                                     | Version    | Check           |
| ---------------------------------------- | ---------- | --------------- |
| [Node.js](https://nodejs.org)            | 24+        | `node -v`       |
| npm                                      | 10+        | `npm -v`        |
| [Git](https://git-scm.com)               | Any recent | `git --version` |
| [VS Code](https://code.visualstudio.com) | Latest     | —               |

**Node 24 is required.** `wrangler` needs Node >=22, and `.nvmrc` pins the version for both Cloudflare and local dev, run `nvm use` in the repo root. Check with `node -v`.
Use [nvm](https://github.com/nvm-sh/nvm) if you juggle versions.

**VS Code extensions:** `bradlc.vscode-tailwindcss` (install this one) and `dbaeumer.vscode-eslint`.

---

## 2. Set up

```bash
git clone https://github.com/ColorStack-UPRM/ColorStack-UPRM-Website.git
cd ColorStack-UPRM-Website
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Open it and you should see the site, and edits under `src/` hot-reload. `Ctrl + C` stops it.

Then confirm the build works:

```bash
npm run build
npm run lint
```

`build` runs `tsc -b && vite build` — a full TypeScript check, then a compile. It's the same command Cloudflare runs, so a failure here is a failure in deploy. Run it before every push.

Those plus `npm run preview` are the only scripts. No `test` or `format`.

**Stack:** React + TypeScript, Vite, Tailwind CSS **v4**, react-router-dom, hosted on Cloudflare. The [README](../README.md) has the directory breakdown i suggest you read it. Tailwind being v4 matters: there's no `tailwind.config.js`, just `@import "tailwindcss";` in `src/styles/index.css`. v3 tutorials will mislead you.

---

## 3. How we work

**The board.** Work lives on the StackWorks GitHub Projects board, linked from the repo's Projects tab. Every card maps to an issue.

**Assignment.** The Lead assigns issues at sprint planning, so you'll know what you own before the sprint starts. Don't start on an issue that isn't assigned to you unless the Lead says otherwise. Move your card to In Progress when you actually start; the board is only useful if it's honest. If you're stuck, say so early.

**Contributing.** [CONTRIBUTING.md](../CONTRIBUTING.md) is the source of truth for branch naming, commit format, and PR rules — read it before your first PR. The shape of it:

```bash
git checkout main && git pull origin main
git checkout -b docs/11-onboarding-guide    # <type>/<issue-number>-<description>
# ...work...
git commit -m "docs: add setup steps"       # Conventional Commits
npm run build && npm run lint               # both must pass
git push -u origin docs/11-onboarding-guide
```

Then open a PR against `main`, fill out the template rather than deleting it, and link the issue with `Closes #11`.

**Never commit to `main`** — it's protected and it's what's live. **Only the Lead merges**, enforced by branch protection and `CODEOWNERS`. Don't merge your own PR even if the button looks available.

---

## 4. Troubleshooting

**`npm run build` fails but `npm run dev` works.** The most common surprise here. `dev` doesn't type-check; `build` runs `tsc -b` first. The errors are TypeScript, not Vite.

**Dev server won't start, or the app breaks after pulling.** Usually the wrong Node version or a stale `node_modules`:

```bash
node -v          # must be 20.19+
rm -rf node_modules
npm ci
```

On Windows PowerShell: `Remove-Item -Recurse -Force node_modules`.

**Port 5173 in use.** Another dev server is running. `npm run dev -- --port 5174`.

**Tailwind classes do nothing.** Check that `src/styles/index.css` has `@import "tailwindcss";`, that `src/main.tsx` still has `import './styles/index.css'`, and that you restarted the dev server. Also make sure you aren't building class names dynamically — `` `text-${color}-500` `` never gets generated.

**Push to `main` rejected.** Working as intended. Branch and open a PR.

**`Permission denied` or `403` pushing your branch.** You're not in the org yet, or Git is authenticated as a different account. Check `gh auth status` and message the Lead.

**Anything else.** Search closed issues, then ask in the team channel and paste the exact command and full error text, not a screenshot.
