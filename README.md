# World Manifest — Country Explorer

A single-page app that fetches live country data from a public REST API and
displays it as a searchable, filterable card grid.

## Live demo & repo

This project is plain HTML/CSS/JS with no build step, so it's set up to be
deployed straight to **GitHub Pages**:

1. Create a new GitHub repository (e.g. `world-manifest`).
2. Add `index.html` (and this `README.md`) to the repo root, then commit & push.
3. In the repo, go to **Settings → Pages**, set the source branch to `main`
   and the folder to `/ (root)`, then save.
4. GitHub will publish the site at:
   `https://<your-username>.github.io/world-manifest/`

That URL is your hosted live project; the repo itself satisfies the GitHub
repository deliverable.

## What it does

- Fetches all ~250 countries from the **REST Countries API** on page load.
- Shows a loading state (spinner + message) while the request is in flight.
- Shows an error state with a **Retry** button if the request fails
  (e.g. offline, API down, non-200 response).
- Lets you **search by country name** (live, as you type).
- Lets you **filter by region** (Africa, Americas, Asia, Europe, Oceania,
  Antarctic) via a dropdown.
- Search and region filter combine, and a result counter shows how many
  countries match.
- Each result is rendered as a "manifest" card showing the flag, official
  country code, capital, region/subregion, and population.

## API used: REST Countries

- **Base endpoint used:** `https://restcountries.com/v3.1/all`
- **Auth:** none required — fully open, no API key.
- **Why this API:** it's free, CORS-enabled (works directly from the
  browser), returns rich structured JSON (names, flags, capitals, regions,
  population), and is stable enough for demo/learning projects.
- **Fields requested:** the request is scoped with
  `?fields=name,capital,region,subregion,population,flags,cca3` to keep the
  payload small and avoid pulling unused data (currencies, languages, maps,
  etc.).
- **Response shape (simplified):**
  ```json
  {
    "name": { "common": "Japan", "official": "Japan" },
    "capital": ["Tokyo"],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 125836021,
    "flags": { "png": "...", "svg": "..." },
    "cca3": "JPN"
  }
  ```
- **Notes:** the API occasionally rate-limits or has brief downtime, which is
  exactly why the app includes an explicit error state with a retry button
  rather than assuming the fetch always succeeds.

## Tech

- Vanilla JavaScript using the **Fetch API** (`async`/`await`, `try/catch`)
- No frameworks or build tools — just `index.html`
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (data/labels) via
  Google Fonts

## Local preview

Just open `index.html` in a browser — no server required, since the API
is called directly over HTTPS and supports CORS.
🚀 Live Demo
🔗 Live Website: 

📂 GitHub Repository
🔗 Source Code:
