# Professor Benedikt — Digital Assistant

A simple, responsive landing page built with Next.js (App Router), TypeScript,
and Tailwind CSS. It shows the professor's photo, a heading, and four identical
gold "language" buttons. Clicking a button plays that language's video, with an
**Open Chat** button underneath that opens your chat link in a new tab.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Add your media

1. **Professor photo** → `public/professor.jpg` (portrait, e.g. 600 x 800).
2. **One video per button** → `public/videos/`:
   - `intro-en.mp4` — Just give it a try
   - `intro-es.mp4` — Solo inténtalo
   - `intro-vi.mp4` — Cử thử xem sao
   - `intro-de.mp4` — Probier es einfach mal aus

See `public/README.md` and `public/videos/README.md` for details.

## Customize text & links

Everything visible is driven from `lib/config.ts`:

- `professorName`, `assistantName`, `headingPrefix`, `universityName`
- `professorPhoto` — path to the photo
- `customGptUrl` — the chat link opened by **every** Open Chat button (same for all four)
- `chatButtonLabel` — the button text (default "Open Chat")
- `languageOptions` — the four buttons; each has a `label` (circle text) and its own `video`

## Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata, green background
  page.tsx              Photo + heading + buttons + footer
  globals.css           Tailwind + base styles
components/
  LanguageButtons.tsx   The 4 gold buttons + video modal + Open Chat
lib/
  config.ts             Single source of truth for all editable values
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to GitHub + Netlify

1. Push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Digital assistant landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. On Netlify → **Add new site → Import an existing project** → choose the repo.
   Build command `npm run build`, publish directory `.next` (already set in
   `netlify.toml`). **No environment variables are required.**
