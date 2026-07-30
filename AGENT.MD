# AGENTS.md

## Purpose

This file defines the implementation contract for coding agents working on the personal portfolio website. Build the site from the requirements in `Portfolio instructions.txt` and the visual system in `DESIGN.MD`. The owner will provide the hero video and profile picture; treat those supplied assets as the visual source of truth rather than replacing them with stock media or generated substitutes.

The result should feel cinematic, technical, and deliberate: a full-viewport video introduction, near-black editorial surfaces, controlled yellow accents, strong typography, and restrained motion.

## Project Summary

Create a responsive personal portfolio for a software engineer with:

- A full-screen landing hero using the owner-provided background video, with optimized delivery derivatives and a poster fallback.
- A persistent or overlay header with the owner's name and links to Projects, Experience, and Articles.
- A profile and experience overview using the owner-provided profile picture.
- A latest-articles section.
- A categorized technology-stack section with logos.
- A featured-projects section with navigable cards.
- A footer with credits, GitHub, and LinkedIn.
- Placeholder index pages for Projects, Experience, and Articles.
- Individual routes prepared for project and article detail pages.
- GitHub and YouTube integrations through server-side API calls.

## Preferred Technology Stack

Use the following unless the repository already establishes an equivalent choice:

- Next.js with the App Router
- React
- TypeScript with strict mode enabled
- Tailwind CSS
- Vercel for deployment
- MDX or typed local content for articles and project case studies
- Lucide React for interface icons
- Simple Icons or vetted local SVG assets for technology logos
- React Bits free components, installed as local TypeScript + Tailwind source through the official registry or copied from the official component documentation
- Lenis with its React adapter for site-wide smooth scrolling
- Vanta.js NET with Three.js for one optional ambient network treatment where it does not duplicate a React Bits background

Avoid adding a database until a feature requires persistent user-generated data. Prefer free, source-copied React Bits components rather than a paid component subscription.

## Core Engineering Principles

1. **Server first.** Components are Server Components by default. Add `"use client"` only where browser state, event handlers, video controls, animation, or Vanta.js require it.
2. **Keep secrets server-only.** Never expose GitHub tokens, YouTube API keys, or other private credentials in client bundles.
3. **Progressively enhance.** The page must remain usable when video autoplay, JavaScript animation, or third-party APIs fail.
4. **Prefer content over effects.** Motion supports hierarchy and storytelling; it must not obscure text or navigation.
5. **Build accessible interactions.** Keyboard focus, reduced motion, semantic headings, and meaningful labels are required.
6. **Optimize the critical path.** The hero poster and primary copy must render before large video or animation assets.
7. **Use design tokens.** Do not introduce arbitrary colors, spacing, typography, radii, or shadows when an existing token applies.
8. **Use one component language.** React Bits components must be adapted to the tokens in `DESIGN.MD`, wrapped consistently, and reused instead of introducing unrelated animation libraries or one-off visual effects.
9. **Remain Vercel Hobby compatible.** The production build must require no paid infrastructure and must stay within the current Vercel Hobby constraints through static generation, caching, compressed media, and restrained function usage.

## Required Routes

Use this route structure as the default:

```text
app/
├── layout.tsx
├── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── experience/
│   └── page.tsx
├── articles/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── api/
│   ├── github/route.ts
│   └── youtube/route.ts
├── sitemap.ts
├── robots.ts
└── not-found.tsx
```

Use `/experience`, singular, as the canonical route. The header label may read “Experience.” Redirect `/experiences` to `/experience` if that route is ever introduced.

## Suggested Project Structure

```text
app/
components/
├── providers/
│   └── SmoothScrollProvider.tsx
├── react-bits/
│   ├── AnimatedContent.tsx
│   ├── BlurText.tsx
│   └── SpotlightCard.tsx
├── layout/
│   ├── SiteHeader.tsx
│   ├── MobileNavigation.tsx
│   └── SiteFooter.tsx
├── home/
│   ├── HeroVideo.tsx
│   ├── ScrollIndicator.tsx
│   ├── ProfileOverview.tsx
│   ├── ExperiencePreview.tsx
│   ├── ArticlesPreview.tsx
│   ├── TechStack.tsx
│   └── FeaturedProjects.tsx
├── cards/
│   ├── ArticleCard.tsx
│   ├── ExperienceRow.tsx
│   ├── ProjectCard.tsx
│   └── TechnologyItem.tsx
└── effects/
    ├── VantaNet.tsx
    └── ReducedMotionBoundary.tsx
content/
├── projects/
├── articles/
└── site.ts
data/
├── experience.ts
├── technologies.ts
└── social-links.ts
lib/
├── github.ts
├── youtube.ts
├── env.ts
├── content.ts
└── utils.ts
public/
├── images/
│   ├── profile/
│   └── posters/
├── videos/
│   └── hero/
└── icons/
styles/
└── globals.css
```

Keep components focused. A section component owns its layout; cards and controls remain reusable.

## Home Page Composition

Render the homepage in this order:

1. Header and hero video, together occupying the initial viewport.
2. Profile and experience overview.
3. Latest articles.
4. Technology stack.
5. Featured projects.
6. Footer.

Major homepage sections should feel close to full-screen on a regular laptop without forcing every section to an inflexible `100vh`. Prefer:

```css
min-height: clamp(42rem, 88svh, 64rem);
```

Use `svh` or `dvh` rather than only `vh` to handle mobile browser chrome.

## Header Requirements

- Place the owner’s name at the left.
- Place links to Projects, Experience, and Articles at the right on desktop.
- Use a mobile menu below the tablet breakpoint.
- Keep the header visually integrated with the hero.
- The header may start transparent and gain a near-black backdrop after scrolling.
- Preserve a minimum 44-by-44-pixel touch target.
- Indicate the current page accessibly, not through color alone.
- The name links to `/`.


## React Bits Component System

Use React Bits as the default source for animated presentation components. Use the free official components only unless the owner supplies a React Bits Pro license. React Bits components are copied into the repository, so they must be reviewed, typed, styled, and maintained like first-party code.

Installation rules:

- Use the official React Bits shadcn registry command or copy the TypeScript + Tailwind variant from the official documentation.
- Do not install the unrelated `react-bits` npm package.
- Keep imported source under `components/react-bits/` and create portfolio-specific wrappers only when shared defaults are needed.
- Remove unused dependencies, demo styles, hard-coded colors, and pointer effects that do not serve the design.
- Every selected component must use the color, motion, radius, spacing, and reduced-motion tokens in `DESIGN.MD`.

Approved core set:

- `BlurText` for the hero heading and major section headings. Do not alternate between several competing text-animation styles.
- `AnimatedContent` for restrained section and content-group entrances. Content must remain visible if JavaScript fails.
- `SpotlightCard` for article, technology-group, and project-card surfaces. The spotlight must be subtle, keyboard-neutral, and disabled for reduced motion or coarse pointers when appropriate.

Use ordinary semantic React components for navigation, forms, links, tables, and long-form content when animation adds no value. React Bits is a presentation layer, not a substitute for semantic HTML or accessible behavior.

## Hero Video Requirements

The owner will provide the source hero video. Preserve its creative intent, but create delivery-ready derivatives before deployment. Do not substitute another video without explicit approval.

- Header plus hero must fill the first visible screen.
- Video fills the available hero area with `object-fit: cover`.
- Include `autoPlay`, `muted`, `loop`, and `playsInline`.
- Generate or receive a representative compressed poster image from the provided video. The poster must render before video playback begins.
- Produce WebM and MP4 delivery versions from the provided source when practical; do not transcode during the Vercel production build.
- Remove the audio track from background-video assets.
- Add a dark gradient overlay for reliable text contrast.
- Add a centered scroll indicator near the bottom edge.
- Pause the video when it is far outside the viewport when practical.
- Do not render native video controls for a decorative background video.
- The hero must degrade to the poster image when autoplay is blocked or reduced motion is enabled.

Recommended source order:

```tsx
<video autoPlay muted loop playsInline poster="/images/hero-poster.webp">
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

Keep the original master outside the production deployment. If the optimized hero remains large, serve it from a free-compatible object-storage or media CDN URL rather than sending the master through Vercel. The page must still work from its poster if external video delivery is unavailable.

## Vanta.js NET Requirements

Use Vanta NET as an optional enhancement, not as the only visual background.

- Load it only in a Client Component.
- Dynamically import Vanta and Three.js so they do not block the initial render.
- Use the dark-gray and yellow palette defined in `DESIGN.MD`.
- Keep line and point density restrained.
- Disable it under `prefers-reduced-motion: reduce`.
- Disable or simplify it on narrow screens and low-powered devices.
- Clean up the Vanta instance on unmount.
- Provide a static gradient fallback.
- Never layer dense Vanta lines directly behind long body copy.

Preferred placement: profile overview, technology stack background, or a subtle hero overlay at low opacity. Do not use it on every section.

## Profile Overview Requirements

The owner will provide the profile picture. Use that image as the source of truth; do not replace it with an avatar, generated portrait, or stock image. Create optimized derivatives without altering identity-defining features.

Desktop layout:

- Left column: circular profile image.
- Name immediately below the portrait.
- “Software Engineer” beneath the name in a smaller style.
- Right column: “Experience” heading with role and company rows.

Behavior:

- Each experience row links to `/experience` or to an anchored entry such as `/experience#company-slug`.
- The entire row may be clickable, but its purpose must be clear to keyboard and screen-reader users.
- On mobile, stack portrait and experience content vertically.
- Prepare a square, optimized derivative of the provided image and render it as a circle without distorting the face. Preserve the uncropped original outside the rendered component when possible.
- Use `next/image` with explicit dimensions, responsive `sizes`, meaningful alt text, and a configurable object-position focal point.

## Articles Requirements

- Show the newest available articles first.
- Display a small, intentional selection, normally two or three articles.
- Each card includes title, excerpt, date, optional reading time, and a “Read more” action.
- Link internal articles to `/articles/[slug]`.
- External articles may open in the same tab unless there is a strong reason not to.
- The section includes a route-level link to `/articles`.
- The homepage must render a useful empty state when no articles exist.

Use typed content metadata. Do not fetch article content from the client if it can be generated at build time.

## Technology Stack Requirements

Group technologies into meaningful categories, including as applicable:

- Frontend
- Backend
- Databases
- Cloud and DevOps
- AI
- Machine Learning
- Data and Analytics
- Testing
- Tools

The definitive technology list must eventually be derived from the owner’s resume. Until a resume is available:

- Keep the data in `data/technologies.ts`.
- Mark entries as sample or pending review.
- Do not invent proficiency levels or years of experience.
- Use official or well-recognized logos.
- Include visible text labels; logos alone are insufficient.
- Use monochrome logos by default and reveal brand color only as a restrained interaction where appropriate.

## Featured Projects Requirements

- Render projects as selectable cards.
- Each card links to `/projects/[slug]`.
- Cards should include title, short problem statement, technology tags, role, and optional media.
- Cards must have a visible hover and keyboard-focus state.
- Do not place invalid nested interactive elements inside a linked card.
- Provide a “View all projects” link to `/projects`.
- Project detail pages should support overview, problem, approach, architecture, outcome, lessons, and links.

## Placeholder Pages

The first implementation may use deliberate placeholder pages for:

- `/projects`
- `/experience`
- `/articles`

A placeholder page still requires:

- Shared header and footer.
- Correct page title and metadata.
- A clear “Content coming soon” message.
- A path back to the home page.
- The same visual system as the finished pages.

Do not use blank pages or unfinished lorem ipsum.

## Footer Requirements

Include:

- A concise credit line.
- GitHub link with icon and visible label.
- LinkedIn link with icon and visible label.
- Current year generated programmatically.
- External-link affordance where useful.

Use `rel="noreferrer"` when opening external links in a new tab. New tabs are optional, not mandatory.

## Content Model

Use typed data instead of hard-coding repeated content in components.

```ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  technologies: string[];
  image?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export type Experience = {
  slug: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  summary?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime?: string;
  externalUrl?: string;
  featured: boolean;
};
```

Dates are stored in ISO format and displayed through a shared formatter.

## GitHub API Integration

Use server-side requests for GitHub data.

Good portfolio uses include:

- Repository metadata.
- Stars and forks.
- Primary language.
- Last meaningful update.
- Links to source repositories.

Rules:

- Access `GITHUB_TOKEN` only in server code.
- Cache responses and revalidate; portfolio data does not require real-time requests.
- Select repositories explicitly rather than blindly displaying all public repositories.
- Normalize GitHub responses into local application types.
- Handle API errors with static project content as fallback.
- Never make the homepage dependent on GitHub availability.

Suggested environment variables:

```env
GITHUB_USERNAME=
GITHUB_TOKEN=
GITHUB_FEATURED_REPOS=
```

## YouTube API Integration

Use server-side requests for YouTube data when a video or media section is added.

Rules:

- Access `YOUTUBE_API_KEY` only in server code.
- Prefer channel uploads or a curated playlist over broad search calls.
- Cache results generously.
- Request only fields used by the UI.
- Use privacy-enhanced embeds when embedding playback.
- Lazy-load below-the-fold embeds.
- Show a static fallback if quota or network errors occur.

Suggested environment variables:

```env
YOUTUBE_API_KEY=
YOUTUBE_CHANNEL_ID=
YOUTUBE_PLAYLIST_ID=
```

A hero background video should normally be a self-hosted optimized asset, not a YouTube iframe.

## Environment Validation

Centralize environment access in `lib/env.ts`. Validate optional and required values separately. The site must build without API credentials by falling back to local content.

Never prefix private variables with `NEXT_PUBLIC_`.

## Styling Rules

- Use CSS variables backed by `DESIGN.MD` tokens.
- Keep the three dominant colors: dark gray, yellow, and white.
- Yellow is an accent, not the background of every section.
- Prefer flat surfaces, hairline borders, gradients, and media depth over heavy shadows.
- Use modest corner radii; cards are not pill-shaped.
- Do not apply brand-yellow text to long paragraphs.
- Use the spacing scale consistently.
- Keep readable line lengths around 55–75 characters for prose.

## Motion Rules

- Respect `prefers-reduced-motion` globally.
- Keep standard interaction transitions around 160–240 ms.
- Use slower motion only for ambient video fades or large section reveals.
- Animate transform and opacity when possible.
- Avoid scroll-jacking.
- Avoid continuous cursor-following effects.
- Do not animate every item on initial load.
- Scroll indicator animation should be subtle and stop under reduced motion.


## Lenis Smooth Scrolling

Lenis is the single smooth-scrolling system for the website. Initialize it once near the root through a small Client Component such as `SmoothScrollProvider`; do not create separate Lenis instances per section.

Requirements:

- Use the current `lenis` package and its React adapter.
- Keep the effect restrained: scrolling must feel smoother, not slower or detached from input.
- Preserve native keyboard scrolling, text selection, browser history, hash navigation, skip links, and focus movement.
- Implement anchor scrolling with the fixed-header offset accounted for.
- Stop or bypass Lenis under `prefers-reduced-motion: reduce`.
- Avoid scroll locking, forced scroll positions, mandatory scroll snapping, and decorative scroll-jacking.
- Use Lenis scroll events only where needed; do not rerender the React tree on every scroll frame.
- Ensure overlays and menus can opt out using the supported Lenis prevention mechanism where necessary.
- Clean up the instance on unmount and verify development hot reload does not create duplicates.

React Bits reveal components may respond to viewport entry, but Lenis remains the sole scroll coordinator.

## Accessibility Requirements

Target WCAG 2.2 AA.

Required behaviors:

- One logical `h1` per page.
- Semantic landmark elements: `header`, `nav`, `main`, `section`, and `footer`.
- Skip link at the start of the document.
- Visible keyboard focus using the focus token.
- Sufficient contrast for text and controls.
- Alternative text for informative images.
- Empty alt text for decorative imagery.
- Decorative hero video hidden from assistive technology.
- No content conveyed by color alone.
- Menu operable with keyboard and screen reader.
- Reduced-motion fallback for video, Vanta, parallax, and reveals.
- Touch targets of at least 44 by 44 pixels where practical.

## Responsive Requirements

Suggested breakpoints:

- Mobile: below 640 px
- Tablet: 640–1023 px
- Desktop: 1024–1439 px
- Wide: 1440 px and above

Behavior:

- Header collapses to a mobile navigation control.
- Hero uses art-directed cropping and shorter minimum height on small screens.
- Profile overview stacks vertically.
- Article and project grids become one column.
- Technology groups wrap naturally without horizontal scrolling.
- Video may be replaced with the poster on constrained devices.
- Full-width sections retain safe horizontal padding.

## Performance Budget

Aim for:

- Strong Core Web Vitals on a typical mobile connection.
- Hero poster under approximately 300 KB when feasible.
- Hero video aggressively compressed and short. Aim for a compact first-play asset, test transfer on mobile, and avoid loading multiple large formats unnecessarily.
- No unoptimized raster images.
- Minimal client-side JavaScript on initial load.
- React Bits source limited to the approved core set and dynamically loaded where its client cost is nontrivial.
- Lenis initialized once and kept out of Server Components.
- Vanta.js loaded after essential content and only where enabled. Do not run Vanta and a heavy React Bits background in the same section.
- Third-party embeds lazy-loaded.
- API requests cached on the server.

Use `next/image` for content images. Do not use it for the `<video>` element itself.


## Vercel Hobby Deployment Contract

The portfolio must deploy and operate on Vercel's free Hobby tier without requiring a paid add-on. Hobby is appropriate only while the site remains a personal, non-commercial portfolio under Vercel's current terms. Re-check current limits before production release because platform quotas can change.

Architecture rules:

- Prefer static generation for pages and local content. Use dynamic rendering only when it provides clear value.
- Cache GitHub and YouTube requests on the server with long revalidation windows and static local fallbacks. Never request those APIs once per visitor when cached data is sufficient.
- The build must succeed without GitHub or YouTube credentials.
- Do not add a database, queue, cron service, analytics product, or paid media service as a mandatory dependency.
- Keep serverless Route Handlers few, fast, and read-only for the initial portfolio.
- Lazy-load Vanta, React Bits effects with meaningful client cost, and third-party embeds below the critical content.
- Keep the provided master video out of the deployment artifact. Commit only compact delivery derivatives when they are small enough; otherwise use external media delivery with the poster as fallback.
- Use `preload="metadata"` or `preload="none"` for the hero video unless testing proves eager video loading is necessary. The poster and primary text are the loading priority.
- Optimize the supplied profile image and all thumbnails before deployment; define sizes to avoid unnecessary image transformations and transfer.
- Avoid uncontrolled on-demand revalidation, uncached API fan-out, and per-scroll network requests.
- Add a release check that reviews the current Vercel Hobby usage dashboard, bundle sizes, static asset sizes, and function activity.

A feature that requires upgrading the hosting plan is out of scope unless the owner explicitly approves it.

## SEO and Metadata

Each route needs:

- Unique title.
- Clear description.
- Canonical URL when deployed.
- Open Graph metadata.
- Social sharing image.

Also provide:

- `sitemap.ts`
- `robots.ts`
- Structured data for `Person`, and optionally `Article` or `CreativeWork` on detail pages.

Do not publish placeholder social handles, email addresses, or canonical domains. Keep them in typed site configuration.

## Testing Expectations

At minimum, verify:

- Main navigation links resolve.
- Mobile navigation opens, closes, and returns focus appropriately.
- Hero renders a poster fallback.
- Reduced-motion mode disables React Bits entrances, Lenis smoothing, Vanta, and nonessential video motion.
- Featured project and article cards are keyboard accessible.
- API failures do not crash the page.
- Placeholder pages build successfully.
- No private environment variable appears in browser code.

Preferred tooling:

- Type checking through TypeScript.
- ESLint.
- Unit tests for data normalization and formatters.
- Playwright smoke tests for critical navigation and responsive behavior.

## Definition of Done

A task is complete only when:

- It follows the visual and component rules in `DESIGN.MD`, including the approved React Bits component set and global Lenis provider.
- It is responsive at mobile, tablet, desktop, and wide sizes.
- It works with keyboard navigation.
- It respects reduced motion.
- It does not expose private API credentials.
- It has loading, empty, and error behavior where data is dynamic.
- It introduces no avoidable layout shift.
- It deploys successfully on Vercel Hobby with no required paid service and with media/API behavior inside the documented free-tier budget.
- It passes type checking and linting.
- New reusable data is typed and separated from presentation.
- Placeholder content is clearly marked and easy to replace.

## Agent Guardrails

Do not:

- Replace the main dark-gray, yellow, and white identity.
- Add a second saturated accent without updating `DESIGN.MD`.
- Fetch private APIs directly from Client Components.
- Make the hero depend solely on video playback.
- Replace the owner-provided hero video or profile picture with stock or generated media.
- Install the unrelated `react-bits` npm package or mix multiple competing animation libraries.
- Use React Bits effects without adapting them to shared tokens and reduced-motion behavior.
- Create more than one Lenis instance or use Lenis to hijack navigation and keyboard scrolling.
- Add a feature that requires a paid Vercel plan or paid third-party service without explicit approval.
- commit secrets, `.env` files, or personal tokens.
- Invent resume experience, dates, skills, employers, article titles, or project outcomes.
- Use copied brand assets without clear rights.
- Add a database, authentication, analytics, or CMS without a requirement.
- Introduce large dependencies for effects achievable with CSS.
- turn every section into an animated canvas.

When information is missing, use explicit placeholders in the content layer and preserve the production-quality structure around them.
