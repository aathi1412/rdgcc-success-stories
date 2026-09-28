# RightDirect Success Stories

An Astro frontend for the RightDirect Success Stories page, with content sourced from Sanity CMS.

<!-- TODO: confirm the project name and one-line description against src/pages -->

## Features

- Astro site using Tailwind CSS v4 (via `@tailwindcss/vite`)
- Content fetched from Sanity using `@sanity/astro` and `@sanity/client`
- Sanity image URL building via `@sanity/image-url`
- <!-- TODO: add only features confirmed in src/ (e.g. sections, SEO metadata, responsive layout) -->

## Setup

**Prerequisites:** Node.js `>=22.12.0` (from `package.json`) and npm.

1. Clone the repository:
```bash
   git clone https://github.com/aathi1412/rdgcc-success-stories.git
```
2. Enter the project directory:
```bash
   cd rdgcc-success-stories
```
3. Install dependencies:
```bash
   npm install
```
4. Configure environment variables:
```bash
   cp .env.example .env
```
   Then edit `.env` (see [Environment Variables](#environment-variables)).
5. Start the development server:
```bash
   npm run dev
```
   The site's configured URL is `http://localhost:4321`.

## Environment Variables

Defined in `.env.example`:

| Variable | Description | Example |
| --- | --- | --- |
| `PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | `Your_Project_Id` |
| `PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |

> Note: `astro.config.mjs` currently sets the Sanity `projectId` and `dataset` directly.
> <!-- TODO: state whether src/ reads these env vars, or whether they are unused -->

## Usage

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build locally |
| `npm run astro` | Run the Astro CLI |

## Project Architecture

**Stack** (from `package.json` and `astro.config.mjs`):

- **Astro** as the framework
- **Tailwind CSS v4** through the Vite plugin
- **Sanity** through the `@sanity/astro` integration, with `useCdn: false`
- **GROQ** (`groq` package) for queries

**Directory structure:**

```text
public/    Static assets
src/       <!-- TODO: paste real structure, e.g. components/, layouts/, pages/, lib/, styles/ -->
```

<!-- TODO: 3-5 sentences on how data flows: Sanity -> query in src/lib (?) -> page -> components -->

## Sanity Integration

- Integration: `@sanity/astro`, configured in `astro.config.mjs` with dataset `production` and `useCdn: false` (content is fetched without the Sanity CDN).
- Client and image helpers: `@sanity/client`, `@sanity/image-url`.
- <!-- TODO: document the document types and GROQ queries actually used in src/ -->
- <!-- TODO: if the Studio is a separate repo, link it here (do not link unless confirmed) -->

## Assumptions

- Node.js `>=22.12.0` is available locally.
- A Sanity project exists with a `production` dataset that the frontend can read.
- The Sanity CDN is disabled (`useCdn: false`), so content is fetched fresh at the cost of slower requests.
- The `site` value is set to `http://localhost:4321`; it needs updating for a real deployment.
- <!-- TODO: add assumptions from src/ (content shape, missing-data handling, design source, etc.) -->

## Contributing

No contribution guidelines are defined in this repository.

## License

No license file is included in this repository.