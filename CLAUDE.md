# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build → /build
npm test           # Run Jest tests
npm run deploy     # Build + push to GitHub Pages (gh-pages branch)
```

## Architecture

Single-page portfolio (React 18, Create React App) deployed to GitHub Pages at `http://gyogon.github.io/Portfolio/`.

**Stack:** React Router DOM (basename `/Portfolio`), Tailwind CSS, MUI icons, i18next (EN/ES).

**App shell:**
- `src/index.js` → `App.js` (wraps with `<I18nextProvider>`) → `routes/index.jsx` (routing) → `pages/Home.jsx`
- One route (`/`), catch-all redirects back to `/`

**Key patterns:**
- **No global state** — component-level `useState` only
- **i18n:** Translations are hardcoded in `src/i18n.js` (not JSON files). Default language: Spanish (`es`), fallback: English (`en`). Toggle is in `Header.jsx`.
- **Smooth scrolling:** `Home.jsx` uses `useRef` on each section + an 80px navbar offset for header links
- **Styling:** Tailwind utilities as primary approach; custom CSS in `src/pages/css/style.css` for card layouts

**Tailwind content paths** (in `tailwind.config.js`):
- `src/pages/**/*.{js,ts,jsx,tsx}`
- `src/components/**/*.{js,ts,jsx,tsx}`

Note: `src/index.js` and `src/App.js` are **not** included in Tailwind's content scan — avoid adding Tailwind classes there.
