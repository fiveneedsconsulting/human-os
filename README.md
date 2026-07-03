# Human OS Site

Scaffold for the Human OS manual, built as a real Next.js site instead of
Squarespace. Home page, a tools index, and the first live interactive
module (Signal Sensitivity Calibration) are wired up and building cleanly.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  page.jsx                        → home page
  tools/page.jsx                  → tools index (list of modules)
  tools/sensitivity-spectrum/     → first live module
  layout.jsx, globals.css         → shared shell + design tokens
components/
  Nav.jsx, Footer.jsx             → shared site chrome
  SensitivitySpectrum.jsx         → the assessment itself
tailwind.config.js                → the "instrument panel" color system
```

## Adding a new Human OS tool

1. Build the component in `components/YourTool.jsx`.
2. Create `app/tools/your-tool/page.jsx` that imports and renders it.
3. Add an entry to the `TOOLS` array in `app/tools/page.jsx` so it shows up
   in the index.

That's the whole pattern — every future module follows this same shape.

## Deploying — no domain required to start

You do not need to own a domain to get this live. The fastest path:

1. **Push this folder to a GitHub repo.**
   ```bash
   git init
   git add .
   git commit -m "Human OS site scaffold"
   git branch -M main
   git remote add origin https://github.com/<your-username>/human-os-site.git
   git push -u origin main
   ```
   (Create the empty repo on github.com first, then run the commands above.)

2. **Go to [vercel.com](https://vercel.com)** and sign in with your GitHub
   account. Click "Add New Project," select the `human-os-site` repo, and
   click Deploy. No configuration needed — Vercel auto-detects Next.js.

3. You'll get a free live URL immediately, something like
   `human-os-site.vercel.app`. That's a real, working, shareable link —
   this is the moment it's actually "live."

4. **Custom domain (optional, whenever you're ready):** buy a domain
   (Namecheap, Google Domains, etc. — usually $10–15/year), then in the
   Vercel project settings under "Domains," add it and follow the DNS
   instructions. Takes about 15 minutes, and nothing else about the site
   changes.

Netlify works the same way if you'd rather use that instead of Vercel.

## Notes

- Colors, type, and the gauge visual all live in `tailwind.config.js` and
  `SensitivitySpectrum.jsx` — change the palette once in the config and it
  propagates everywhere.
- This scaffold intentionally has no CMS or database. If a future module
  needs to save user results, that's a small, separate addition — ask
  when you're ready for it.
