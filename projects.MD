# Creating a Project Page

This guide explains how to add a project that uses the same project-card, case-study, video, source-table, technology-stack, and repository-link system as the Physician's Assistant project.

## How project pages are created

Project pages are data-driven. You do not need to create a new route file for each project.

- Project content is stored in [`data/projects.ts`](data/projects.ts).
- Project types are defined in [`types/content.ts`](types/content.ts).
- [`app/projects/[slug]/page.tsx`](app/projects/[slug]/page.tsx) generates a page for every project entry.
- [`app/projects/page.tsx`](app/projects/page.tsx) automatically lists every project.
- [`components/home/FeaturedProjects.tsx`](components/home/FeaturedProjects.tsx) automatically shows entries with `featured: true` on the landing page.
- Project-card presentation is handled by [`components/cards/ProjectCard.tsx`](components/cards/ProjectCard.tsx).

Adding a valid object to the `projects` array creates `/projects/<slug>` during the build.

## Required project fields

Every project must satisfy the `Project` type:

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  detailLayout?: "standard" | "expanded";
  technologies: string[];
  publishedAt: string;
  featured: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
  status: "building" | "complete";
  sections: ProjectSection[];
};
```

| Field | Purpose |
| --- | --- |
| `slug` | URL-safe identifier, such as `clinical-search-platform`. It becomes `/projects/clinical-search-platform`. |
| `title` | Project name displayed on cards, the page, metadata, and social previews. |
| `summary` | Short description displayed below the title and on project cards. |
| `role` | The contributor role, such as `AI & Backend Engineering`. |
| `detailLayout` | Optional presentation mode. Use `expanded` for the full editorial layout described below. |
| `technologies` | Short technology names displayed as tags on project cards and as default project metadata. |
| `publishedAt` | ISO date in `YYYY-MM-DD` format. |
| `featured` | Set to `true` to include the project on the landing page. |
| `repositoryUrl` | Optional GitHub or source repository URL. It creates the top-right repository button. |
| `liveUrl` | Optional deployed-project URL. |
| `status` | Use `building` or `complete`. |
| `sections` | Ordered case-study content rendered below the project hero. |

Slugs must be unique, lowercase, and route-safe. Prefer words separated by hyphens.

## Minimal example

Add a new object to the `projects` array in `data/projects.ts`:

```ts
{
  slug: "example-ai-platform",
  title: "Example AI Platform",
  summary: "A concise explanation of the problem and the product.",
  role: "AI & Backend Engineering",
  detailLayout: "expanded",
  technologies: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
  publishedAt: "2026-07-31",
  featured: true,
  status: "building",
  repositoryUrl: "https://github.com/username/repository",
  liveUrl: "https://example.com",
  sections: [
    {
      heading: "Problem",
      body: "Explain the user problem, constraints, and why it matters.",
    },
    {
      heading: "Approach",
      body: "Explain the main workflow and engineering approach.",
    },
    {
      heading: "Architecture",
      body: "Explain the system components and how data moves through them.",
    },
    {
      heading: "Reliability",
      body: "Explain monitoring, failure handling, testing, and deployment reliability.",
    },
  ],
},
```

The section headings are not restricted to the four names above. Use the sections appropriate for the project, such as Outcome, Lessons, Security, or Performance.

## Rich section content

A section supports a main paragraph plus optional details, a YouTube video, a technology grid, and a source-document table:

```ts
type ProjectSection = {
  heading: string;
  body: string;
  highlights?: {
    label: string;
    body: string;
  }[];
  video?: {
    youtubeId: string;
    title: string;
  };
  technologyTable?: {
    title: string;
    technologies: Technology[];
  };
  documentTable?: {
    introduction: string;
    documents: ProjectDocument[];
  };
};
```

Content is rendered in this order:

1. Section heading and main `body` paragraph.
2. `highlights` in their array order.
3. `video`.
4. `technologyTable`.
5. `documentTable`.

### Labeled detail paragraphs

Use `highlights` for bold labels followed by explanatory text:

```ts
{
  heading: "Reliability",
  body: "The platform includes production observability and model tracing.",
  highlights: [
    {
      label: "Prometheus + Grafana observability",
      body: "Explain which metrics are collected and how dashboards are used.",
    },
    {
      label: "LangSmith LLM monitoring",
      body: "Explain how model calls, retrieval steps, latency, and failures are traced.",
    },
  ],
},
```

Do not add Markdown formatting inside these strings. The renderer automatically makes the label bold and adds the colon.

### YouTube video

Add the video ID, not the full YouTube URL:

```ts
video: {
  youtubeId: "3GtZVTIvmpc",
  title: "Accessible description of the project demonstration",
},
```

For `https://www.youtube.com/watch?v=3GtZVTIvmpc`, the ID is `3GtZVTIvmpc`.

The shared renderer:

- Uses `youtube-nocookie.com` for a privacy-enhanced embed.
- Lazy-loads the iframe.
- Preserves a responsive 16:9 ratio.
- Centers the player after the section's detail paragraphs.
- Uses `title` as the iframe's accessible name.

Use a specific title such as `Example AI Platform workflow demonstration`, rather than `Video`.

### Technology stack grid

Use `technologyTable` to create the same icon-tile treatment used by the landing-page Technology Stack section:

```ts
technologyTable: {
  title: "Technology stack",
  technologies: [
    {
      name: "FastAPI",
      iconSlug: "fastapi",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      name: "PostgreSQL",
      iconSlug: "postgresql",
      url: "https://www.postgresql.org/",
    },
    {
      name: "Product without an available icon",
      url: "https://example.com/",
    },
  ],
},
```

Every technology requires:

- `name`: visible text.
- `url`: the official product or project website. The complete tile opens this URL in a new tab.
- `iconSlug`: optional key from the icon map in `components/cards/TechnologyItem.tsx`.

If `iconSlug` is omitted or unavailable, the component displays a two-letter fallback. Never use an unrelated brand icon as a substitute.

To support a new Simple Icons logo:

1. Confirm that the installed `simple-icons` package exports it.
2. Import the icon in `components/cards/TechnologyItem.tsx`.
3. Add it to the `icons` map with a lowercase key.
4. Use that key as `iconSlug` in the project data.

Example:

```ts
import { siRedis } from "simple-icons";

const icons = {
  redis: siRedis,
};
```

Do not add an icon-only tile. Visible technology names are required for accessibility.

### Source-document table

Use `documentTable` for references, datasets, standards, research papers, or other structured sources:

```ts
documentTable: {
  introduction:
    "The system uses the following authoritative source documents:",
  documents: [
    {
      source: "Source document name",
      purpose: "What the source contributes to the system.",
      approximatePages: "~100 pages",
      citationLabel: "Publishing organization",
      citationUrl: "https://official-source.example/document",
    },
  ],
},
```

The table is keyboard focusable and horizontally scrollable only when the viewport is too narrow. Use official source URLs and remove tracking parameters.

## Repository and live-project links

Set `repositoryUrl` to create the GitHub/source button in the project hero:

```ts
repositoryUrl: "https://github.com/username/repository",
```

The button:

- Appears at the upper-right of the project hero.
- Opens in a new tab.
- Includes a GitHub mark and upper-right arrow.

Set `liveUrl` to add a live-project link:

```ts
liveUrl: "https://project.example.com",
```

## Project card cover photos

Project cards support an optional static cover photo through the `visualImage` and `visualAlt` props in `ProjectCard.tsx`.

If a project cover photo is provided, it must replace the default circle graphic in both applicable locations:

1. The project card on `/projects`.
2. The project card on the landing page when `featured: true`.

A non-featured project does not appear on the landing page, so its cover photo only needs to be connected to the `/projects` card. If no cover photo is provided, keep the default graphic.

To add a cover photo:

1. Add an optimized image under `public/images/projects/`, or statically import a supplied image from the repository.
2. Add the image and alt text to the shared mapping in `data/project-visuals.ts`, which is imported by both `app/projects/page.tsx` and `components/home/FeaturedProjects.tsx`.
3. Select the image by project slug, not by array position, so reordering projects does not assign the wrong image.
4. Pass the image and alternative text to `ProjectCard` in `app/projects/page.tsx`.
5. If the project is featured, pass the same image and alternative text to `ProjectCard` in `components/home/FeaturedProjects.tsx`.
6. Provide concise alternative text that describes the visual.

Recommended pattern:

```ts
import type { StaticImageData } from "next/image";
import exampleProjectImage from "@/public/images/projects/example-project.png";

export const projectVisuals: Record<
  string,
  { image: StaticImageData; alt: string }
> = {
  "example-ai-platform": {
    image: exampleProjectImage,
    alt: "Example AI Platform dashboard showing the processing workflow",
  },
};
```

Then use the same lookup in both card-rendering locations:

```tsx
const visual = projectVisuals[project.slug as keyof typeof projectVisuals];

<ProjectCard
  project={project}
  visualImage={visual?.image}
  visualAlt={visual?.alt}
/>
```

On `/projects`, apply the lookup to every project. On the landing page, apply it inside the existing featured-project map.

Use an informative `visualAlt`. Do not repeat only the project title.

## Using the expanded case-study layout

Set the layout in project data to match the Physician's Assistant presentation:

```ts
detailLayout: "expanded",
```

The expanded layout changes the following behavior:

- Removes the `In active development` or `Completed` status text and keeps the date.
- Removes the Role label and colors the role value yellow.
- Removes the default Stack metadata block.
- Removes the yellow section numbers.
- Uses the wider, left-aligned case-study body.
- Keeps section dividers centered.
- Prevents a duplicate repository link at the bottom because the repository is already linked in the hero.

Omit `detailLayout` or set it to `standard` to retain status text, Role and Stack labels, numbered sections, and the narrower centered body. Presentation choices should remain in project data rather than being inferred from a slug.

## Metadata and discovery

The shared route automatically generates:

- Static params for every project slug.
- Page title from `project.title`.
- Meta description from `project.summary`.
- Open Graph title and description.
- Sitemap entries from the projects array.

No additional routing or metadata file is required for a normal project.

Setting `featured: true` adds the card to the landing page. Every project appears on `/projects`, regardless of its `featured` value.

## Styling locations

Project-page styles are in `app/globals.css`. The main selectors are:

- `.case-study__hero`: project hero.
- `.case-study__hero-nav`: top navigation and repository action.
- `.case-study__meta`: role and stack metadata.
- `.case-study__body`: case-study section container.
- `.case-study__section-detail`: labeled detail paragraphs.
- `.case-study__video`: responsive YouTube player.
- `.case-study__technology-table`: project technology grid.
- `.case-study__document-table`: source-document table.
- `.case-study__links`: source and live-project links.

Reuse these shared selectors before adding project-specific CSS. If a new presentation pattern will be used by more than one project, make it a reusable typed option rather than a slug-specific selector.

## Content guidelines

- Keep the summary concise enough for a project card.
- Explain the problem before implementation details.
- State what the system actually does; do not claim unimplemented outcomes or metrics.
- Describe technology choices in terms of their role in the architecture.
- Use official source links for documentation tables and technology tiles.
- Use ISO dates in project data.
- Give videos and images meaningful accessible titles or alternative text.
- Keep external links HTTPS and add no private repository tokens or credentials.
- Do not place Markdown syntax in data strings unless the renderer explicitly supports it.

## Validation checklist

After adding or editing a project, run:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run test
npm.cmd run build
```

Then verify the following manually:

- `/projects/<slug>` loads successfully.
- The title, summary, role, status, and date are correct.
- The project appears on `/projects`.
- A featured project appears on the landing page.
- A provided cover photo replaces the default card graphic on `/projects`.
- A provided cover photo also appears on the landing page when the project is featured.
- The project card links to the correct route.
- Repository, live-site, source-document, and technology links point to the intended destinations.
- External links open in a new tab where expected.
- The video loads, has an accurate title, and maintains a 16:9 ratio.
- Technology icons and fallback initials render correctly.
- The source-document table does not overflow on desktop and remains usable on mobile.
- Keyboard focus is visible on cards, links, technology tiles, and scrollable tables.
- The layout works at mobile, tablet, desktop, and wide-screen sizes.
- No credentials or private environment values are present in client-side content.

## Files commonly changed for a new project

| File | When to change it |
| --- | --- |
| `data/projects.ts` | Always. Add the project and its case-study content. |
| `data/project-visuals.ts` | When a cover photo is provided for the project cards. |
| `types/content.ts` | Only when introducing a reusable content capability not covered by existing fields. |
| `app/projects/page.tsx` | When assigning a cover photo to the card on the projects index. |
| `components/home/FeaturedProjects.tsx` | When assigning the same cover photo to a featured landing-page card. |
| `components/cards/TechnologyItem.tsx` | When adding a supported Simple Icons mapping. |
| `app/projects/[slug]/page.tsx` | Only when adding reusable rendering behavior or generalizing the expanded layout. |
| `app/globals.css` | Only when existing project styles cannot express the required reusable presentation. |
| `tests/unit/content.test.ts` | When adding project-specific content expectations or data rules. |
| `tests/e2e/portfolio.spec.ts` | When the new page introduces a critical interaction that needs browser coverage. |

Most new projects should require a `data/projects.ts` entry and, when a cover photo is supplied, updates to the project-card image mapping used by `/projects` and the landing page.
