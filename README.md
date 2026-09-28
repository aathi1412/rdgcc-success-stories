# RightDirect Success Stories

An Astro frontend for the RightDirect Success Stories page, with content sourced from Sanity CMS. The Sanity Studio is maintained as a separate project and is not part of this repository.

## Tech Stack

* Astro
* TypeScript
* Tailwind CSS v4 via `@tailwindcss/vite`
* Sanity CMS
* `@sanity/astro`
* `@sanity/client`
* `@sanity/image-url`
* GROQ

## Setup

### Prerequisites

* Node.js >= 22.12.0
* npm
* Access to the Sanity project and dataset used by the application

### Installation

```bash
git clone https://github.com/aathi1412/rdgcc-success-stories.git
cd rdgcc-success-stories
npm install
cp .env.example .env
```

Configure the required environment variables in `.env`, then start the development server:

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:4321
```

## Environment Variables

| Variable                   | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `PUBLIC_SANITY_PROJECT_ID` | Sanity project ID                                 |
| `PUBLIC_SANITY_DATASET`    | Sanity dataset (`production` in the example file) |

The Sanity `projectId` and `dataset` are loaded from these environment variables.

## Usage

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the site for production        |
| `npm run preview` | Preview the production build locally |
| `npm run astro`   | Run the Astro CLI                    |

## Project Architecture

The frontend follows a component-based Astro architecture.

```text
Sanity CMS
    ↓
GROQ queries
    ↓
Sanity client
    ↓
Astro pages
    ↓
Reusable Astro components
    ↓
Tailwind CSS
```

### Directory Structure

```text
src/
├── components/    # Reusable Astro components
├── layouts/       # Shared page layouts
├── lib/           # Sanity client, queries, helpers, and TypeScript types
├── pages/         # Astro routes
└── styles/        # Global styles
```

The Astro frontend and Sanity Studio are maintained as separate projects. The frontend retrieves editable content from Sanity and renders it through reusable Astro components.

## Sanity Integration

Sanity is integrated through `@sanity/astro`.

The frontend uses:

* `@sanity/astro` for Astro integration
* `@sanity/client` for querying Sanity content
* GROQ for structured content queries
* `@sanity/image-url` for generating Sanity image URLs

The application uses the `production` dataset and `useCdn: false`, so content is fetched through Sanity's API rather than the Sanity CDN.

Sanity project configuration is provided through environment variables and is not committed to the repository.

## Content Management

The Success Stories page uses Sanity CMS for editable content, including:

* Site settings
* Navigation and dropdown links
* Header CTA
* Success Stories content
* Case study cards
* Case study images and alt text
* Feature icons
* Case study icons
* CTA labels and URLs
* SEO metadata
* Footer content
* Social links

The frontend consumes this content through GROQ queries rather than hardcoding the CMS-managed page content.

## Deployment

* GitHub repository: https://github.com/aathi1412/rdgcc-success-stories
* Live website: https://rdgcc.netlify.app/success-stories/
The Astro frontend and Sanity Studio are deployed and maintained separately.

The Sanity Studio requires authentication for access. Sanity project access can be granted to reviewers when required.

## Assumptions

* Node.js >= 22.12.0 and npm are available locally.
* A Sanity project with the required `production` dataset already exists.
* The frontend has read access to the configured Sanity dataset.
* Environment-specific configuration is provided through `.env` and is not committed to the repository.
* The Sanity Studio is maintained separately from the Astro frontend.
* The implementation focuses on the RightDirect `/success-stories` page selected for the technical assessment.
* Where implementation details were not directly available from the source page, reasonable assumptions were made while maintaining consistency with the existing design.

## License

No license is specified in the repository. This project was created for a technical assessment.
