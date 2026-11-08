# Saad Shah — React Developer Portfolio

A responsive, single-page portfolio for **Hafiz Syed Muhammad Saad**, built with React, Vite, Lucide icons, and hand-written CSS.

## Run locally

1. Install **Node.js 18+** from https://nodejs.org if you do not already have it.
2. Open the project folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL displayed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

You can deploy the `dist` folder to a static hosting provider such as Vercel, Netlify, or Cloudflare Pages.

## What's inside

- `src/App.jsx` — content and interactive components (navigation, themes, skill filter, project case studies, contact form).
- `src/styles.css` — full styling and responsive breakpoints.
- `src/main.jsx` — React entry point.
- `public/Hafiz_Syed_Muhammad_Saad_Resume.pdf` — the downloadable resume linked in the navbar.
- `public/favicon.svg` — portfolio favicon.

## Make it your own

- Update your skills in the `skills` array near the top of `src/App.jsx`.
- Update projects in the `projects` array; use the case studies as a starting point.
- To modify contact details, update `EMAIL` and `LINKEDIN` near the top of `src/App.jsx`.
- To change branding, edit the hero copy and the CSS theme variables at the top of `src/styles.css`.

## Important

- Project thumbnail visuals are **custom illustrations**, not screenshots of a deployed application.
- The contact form uses `mailto:` to open an email draft. **It does not send messages to a server.** No backend is needed.
- Only links that were provided or can work without a deployed backend were used. Project details open in a modal; there are no invented live demo or GitHub URLs.
- The resume is a draft from information previously provided. Review its accuracy before applying to jobs.
