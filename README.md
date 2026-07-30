# Abrar Zahin — Portfolio

A cinematic, responsive software-engineering portfolio built with Next.js,
TypeScript, Tailwind CSS, locally adapted React Bits presentation components,
Lenis, and a restrained Vanta NET treatment.

## Run locally

Use Node.js 22 LTS or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

- Identity and social links: `content/site.ts`
- Experience: `data/experience.ts`
- Projects and case-study sections: `data/projects.ts`
- Technology groups: `data/technologies.ts`
- Articles: `data/articles.ts`

The article collection is intentionally empty until verified writing is
provided. Its homepage and index states are designed for that condition.

## Media

The supplied source files remain at the repository root and are excluded from
deployment. Delivery-ready files are already generated:

- `public/images/hero-poster.webp`
- `public/images/profile.webp`
- `public/videos/hero.webm`
- `public/videos/hero.mp4`

The hero derivatives retain the full 21.2-second sequence and contain no audio.

## Optional configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before
deployment. GitHub and YouTube server routes are disabled-safe extension points;
the site does not require credentials to build or run.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```
