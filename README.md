# Pulse Health

A responsive React conversion of the original CSCE 242 Pulse project, with seven pages: Home, Medications, Conditions, Doctors & Providers, Appointments & Care, Resources, and Guides.

## Run locally

```sh
npm install
npm start
```

## Build and publish

```sh
npm run build
npm run deploy
```

The site uses HashRouter so page links work on GitHub Pages under `/pulsehealth/`.

## Components

- `Layout`: shared header, main content, footer, and page titles.
- `Hero`: page introduction, with optional homepage search and side content.
- `CategoryCard`, `TopicCard`, `InfoCard`, `GuideCard`, `FeaturedGuide`, `GuideLink`: reusable repeated items.
- `PageSection`, `FeatureBanner`, `CallToAction`, `Checklist`: shared section layouts and content blocks.

Component styles live beside their components. Homepage layout overrides are in `src/pages/home/Home.css`; shared design tokens and base styles are in `src/index.css`.

Content is static for Part 9. Search fields are visual placeholders; no backend connection, form submission, or iframe is required. The Doctors map iframe is omitted. Guide cards preserve the original guide data as static React components. Resources has static expandable FAQs in place of the old empty dynamic FAQ container.

After publishing, update the main CSCE 242 Projects listing with the frontend repository and live-site links, plus the existing backend repository and Render API links required by the assignment.
