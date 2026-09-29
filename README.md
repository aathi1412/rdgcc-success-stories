# RightDirect Assessment
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
Astro pages & components
    ↓
HTML + Tailwind CSS
    ↓
Browser
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
* SEO metadata
* Navigation and dropdown links
* Header CTA
* Success Stories content
* Footer content

The frontend consumes this content through GROQ queries rather than hardcoding the CMS-managed page content.

## Deployment

* GitHub repository: https://github.com/aathi1412/rdgcc-success-stories
* Live website: https://rdgcc.netlify.app/success-stories/
The Astro frontend and Sanity Studio are deployed and maintained separately.

The Sanity Studio requires authentication for access. Sanity project access can be granted to reviewers when required.

## Assumptions

- The implementation focuses on the RightDirect `/success-stories` page selected for the technical assessment.
- Content intended to be editable is managed through Sanity CMS.
- Where the original website's implementation details were not available, a practical implementation was used while maintaining the visual design.
- The frontend receives the Sanity project ID and dataset through environment variables.
- The Sanity Studio is maintained separately from the Astro frontend.
- Environment-specific configuration is provided through `.env` and is not committed to the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
