---
version: alpha
name: portfolio-cinematic-network
description: A cinematic personal portfolio for a software engineer. The dominant canvas is deep charcoal rather than pure black, with warm white text and a focused electric-yellow accent. The owner-provided full-viewport video introduces the site and the owner-provided portrait anchors the profile section. A curated set of React Bits components supplies consistent animated headings, section entrances, and spotlight card interactions, while Lenis provides restrained global smooth scrolling. Subtle Vanta.js network fields may add technical atmosphere in selected sections. Yellow is used as controlled energy for calls to action, focus, selected states, and network nodes—not as a blanket decoration.

colors:
  primary: "#F4D30B"
  primary-hover: "#FFE45C"
  primary-active: "#C9AA00"
  primary-soft: "#332D0D"
  primary-glow: "rgba(244, 211, 11, 0.22)"
  canvas: "#171717"
  canvas-deep: "#101010"
  canvas-elevated: "#222222"
  canvas-raised: "#2C2C2C"
  canvas-light: "#FAFAF7"
  surface-warm: "#F2F0E8"
  surface-yellow: "#F8E26B"
  ink: "#FAFAF7"
  ink-inverse: "#171717"
  body: "#B8B8B2"
  body-strong: "#E6E6E1"
  muted: "#858580"
  muted-inverse: "#5B5B57"
  hairline: "#343434"
  hairline-strong: "#4A4A47"
  hairline-on-light: "#D8D6CF"
  focus: "#FFF176"
  link: "#F4D30B"
  link-hover: "#FFE45C"
  semantic-info: "#62A9E8"
  semantic-success: "#49B982"
  semantic-warning: "#F0A33A"
  semantic-danger: "#E56868"
  overlay-hero: "rgba(10, 10, 10, 0.46)"
  overlay-hero-strong: "rgba(10, 10, 10, 0.74)"
  vanta-background: "#171717"
  vanta-points: "#F4D30B"
  vanta-lines: "#6F6418"

fonts:
  display: "'Space Grotesk', 'Inter', system-ui, sans-serif"
  body: "'Inter', system-ui, -apple-system, sans-serif"
  mono: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"

typography:
  display-mega:
    fontFamily: "{fonts.display}"
    fontSize: "clamp(3.25rem, 8vw, 7.5rem)"
    fontWeight: 560
    lineHeight: 0.94
    letterSpacing: "-0.055em"
  display-xl:
    fontFamily: "{fonts.display}"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 560
    lineHeight: 1.0
    letterSpacing: "-0.045em"
  display-lg:
    fontFamily: "{fonts.display}"
    fontSize: "clamp(2.1rem, 4vw, 3.75rem)"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  display-md:
    fontFamily: "{fonts.display}"
    fontSize: "clamp(1.6rem, 2.5vw, 2.5rem)"
    fontWeight: 540
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title-lg:
    fontFamily: "{fonts.display}"
    fontSize: "1.5rem"
    fontWeight: 560
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title-md:
    fontFamily: "{fonts.display}"
    fontSize: "1.125rem"
    fontWeight: 560
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "{fonts.body}"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "-0.005em"
  body-md:
    fontFamily: "{fonts.body}"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  body-sm:
    fontFamily: "{fonts.body}"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "{fonts.body}"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.01em"
  eyebrow:
    fontFamily: "{fonts.mono}"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.13em"
    textTransform: uppercase
  nav-link:
    fontFamily: "{fonts.body}"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
    textTransform: uppercase
  button:
    fontFamily: "{fonts.body}"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
    textTransform: uppercase
  code:
    fontFamily: "{fonts.mono}"
    fontSize: "0.875rem"
    fontWeight: 450
    lineHeight: 1.6
    letterSpacing: 0

spacing:
  0: 0px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  32: 128px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 14px
  xl: 22px
  full: 9999px

borders:
  subtle: "1px solid {colors.hairline}"
  strong: "1px solid {colors.hairline-strong}"
  accent: "1px solid {colors.primary}"
  light: "1px solid {colors.hairline-on-light}"

shadows:
  none: none
  card: "0 18px 60px rgba(0, 0, 0, 0.22)"
  floating: "0 24px 80px rgba(0, 0, 0, 0.32)"
  focus: "0 0 0 3px {colors.primary-glow}"
  yellow-glow: "0 0 40px {colors.primary-glow}"

motion:
  instant: 80ms
  fast: 160ms
  standard: 220ms
  slow: 420ms
  ambient: 900ms
  easing-standard: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  easing-enter: "cubic-bezier(0.16, 1, 0.3, 1)"
  easing-exit: "cubic-bezier(0.7, 0, 0.84, 0)"

layout:
  content-max: 1280px
  prose-max: 720px
  header-height: 72px
  section-min-desktop: "clamp(42rem, 88svh, 64rem)"
  gutter-mobile: 20px
  gutter-tablet: 32px
  gutter-desktop: 48px
  gutter-wide: 64px

systems:
  react-bits:
    source: "official free React Bits registry or copied TypeScript + Tailwind source"
    approved: ["BlurText", "AnimatedContent", "SpotlightCard"]
    rule: "Customize locally and reuse consistently; do not mix competing animation styles."
  smooth-scroll:
    library: "Lenis React adapter"
    scope: "one root instance"
    reducedMotion: "disabled"
  media:
    heroVideo: "owner-provided source with optimized WebM/MP4 derivatives and poster"
    profileImage: "owner-provided source optimized through next/image"

components:
  top-nav-overlay:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: "{layout.header-height}"
  top-nav-scrolled:
    backgroundColor: "rgba(23, 23, 23, 0.86)"
    textColor: "{colors.ink}"
    borderBottom: "{borders.subtle}"
    backdropFilter: "blur(16px)"
    height: "{layout.header-height}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    minHeight: 48px
    padding: "0 24px"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    border: "{borders.strong}"
    rounded: "{rounded.sm}"
    minHeight: 48px
    padding: "0 24px"
  button-tertiary:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
  hero-video:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink}"
    minHeight: "calc(100svh - {layout.header-height})"
    overlay: "linear-gradient(180deg, rgba(10,10,10,0.18) 0%, {colors.overlay-hero} 56%, {colors.overlay-hero-strong} 100%)"
  scroll-indicator:
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
  profile-portrait:
    backgroundColor: "{colors.canvas-raised}"
    border: "1px solid rgba(244,211,11,0.45)"
    rounded: "{rounded.full}"
  experience-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderBottom: "{borders.subtle}"
    rounded: "{rounded.none}"
    padding: "20px 0"
  article-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    border: "{borders.subtle}"
    rounded: "{rounded.lg}"
    padding: 32px
  technology-group:
    backgroundColor: "rgba(34,34,34,0.72)"
    textColor: "{colors.ink}"
    border: "{borders.subtle}"
    rounded: "{rounded.lg}"
    padding: 28px
    backdropFilter: "blur(12px)"
  technology-item:
    backgroundColor: "{colors.canvas-raised}"
    textColor: "{colors.body-strong}"
    border: "{borders.subtle}"
    rounded: "{rounded.md}"
    minHeight: 48px
    padding: "10px 14px"
  project-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    border: "{borders.subtle}"
    rounded: "{rounded.lg}"
    padding: 0
  placeholder-panel:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.body}"
    border: "{borders.subtle}"
    rounded: "{rounded.lg}"
    padding: 48px
  footer-dark:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.body}"
    borderTop: "{borders.subtle}"
    padding: "64px 0 40px"
---

# Overview

This portfolio should feel like a meeting point between **cinematic editorial design** and a **technical systems interface**. The landing screen is media-led: a full-viewport hero video sits beneath an integrated header, with a restrained scroll cue at the bottom. The site then transitions into spacious, high-contrast editorial sections for profile, experience, writing, technologies, and projects.

The identity is built from three dominant colors:

- **Dark gray** for the canvas and visual depth.
- **Yellow** for energy, focus, action, and network nodes.
- **White** for primary typography and clean editorial contrast.

Additional colors exist only to support hierarchy, states, accessibility, and light surfaces. They do not compete with the main three-color identity.

The interface should look premium and intentional rather than template-driven. It uses bold scale, limited decoration, narrow color application, crisp borders, and small areas of atmospheric motion. React Bits supplies a consistent component vocabulary rather than a generic template look. Lenis smooths the page globally without changing navigation semantics. Vanta.js NET remains a signature accent, but it is contained to selected sections and must never interfere with readability or performance.

## Key Characteristics

- Near-black charcoal canvas rather than pure black.
- Electric yellow used selectively for calls to action, focus rings, active navigation, and Vanta nodes.
- Warm white text instead of sterile blue-white.
- Full-bleed owner-provided hero video with an optimized poster fallback.
- Owner-provided profile portrait, optimized without replacing or materially altering the subject.
- A small, repeatable React Bits vocabulary rather than unrelated one-off animations.
- Lenis smooth scrolling that preserves native accessibility and navigation behavior.
- Large Space Grotesk-style display typography paired with highly readable Inter body text.
- Monospace eyebrow labels for a subtle engineering voice.
- Spacious section pacing with near-full-screen desktop compositions.
- Cards use controlled radius and hairline borders, not soft “bubble” styling.
- Depth comes from video, gradients, glass-like network panels, and surface contrast.
- Motion is optional, subtle, and reduced-motion aware.

# Color System

## Core Theme

### Dark Gray — Canvas

- **Canvas** (`{colors.canvas}` — `#171717`): Main site background.
- **Canvas Deep** (`{colors.canvas-deep}` — `#101010`): Footer, video fallback, and deepest transitions.
- **Canvas Elevated** (`{colors.canvas-elevated}` — `#222222`): Cards and panels.
- **Canvas Raised** (`{colors.canvas-raised}` — `#2C2C2C`): Chips, compact items, and secondary controls.

Never use pure `#000000` as the default canvas. The slight lift in dark gray preserves surface separation and gives yellow a richer contrast.

### Yellow — Primary Accent

- **Primary** (`{colors.primary}` — `#F4D30B`): Primary CTA fill, active markers, focus details, and Vanta points.
- **Primary Hover** (`{colors.primary-hover}` — `#FFE45C`): Brighter pointer-hover state.
- **Primary Active** (`{colors.primary-active}` — `#C9AA00`): Pressed state.
- **Primary Soft** (`{colors.primary-soft}` — `#332D0D`): Dark yellow-tinted surface for selected or highlighted content.
- **Primary Glow** (`{colors.primary-glow}`): Controlled glow around focus and network accents.

Yellow is visual punctuation. It should normally occupy less than approximately 10% of a screen.

### White — Text and Editorial Surface

- **Ink** (`{colors.ink}` — `#FAFAF7`): Primary text on dark.
- **Canvas Light** (`{colors.canvas-light}` — `#FAFAF7`): Optional light editorial band.
- **Surface Warm** (`{colors.surface-warm}` — `#F2F0E8`): Secondary light surface.
- **Ink Inverse** (`{colors.ink-inverse}` — `#171717`): Text on yellow and light backgrounds.

Use warm whites to avoid an overly clinical appearance.

## Supporting Neutrals

- **Body** (`{colors.body}` — `#B8B8B2`): Default paragraph text.
- **Body Strong** (`{colors.body-strong}` — `#E6E6E1`): Emphasized body text.
- **Muted** (`{colors.muted}` — `#858580`): Metadata and subdued labels.
- **Muted Inverse** (`{colors.muted-inverse}` — `#5B5B57`): Secondary copy on light surfaces.
- **Hairline** (`{colors.hairline}` — `#343434`): Standard dark divider.
- **Hairline Strong** (`{colors.hairline-strong}` — `#4A4A47`): Interactive-card and control borders.
- **Hairline On Light** (`{colors.hairline-on-light}` — `#D8D6CF`): Dividers on light surfaces.

## Semantic Colors

Semantic colors are reserved for status messaging and should not become decorative theme colors.

- **Info** (`{colors.semantic-info}` — `#62A9E8`)
- **Success** (`{colors.semantic-success}` — `#49B982`)
- **Warning** (`{colors.semantic-warning}` — `#F0A33A`)
- **Danger** (`{colors.semantic-danger}` — `#E56868`)

## Vanta.js Palette

- Background: `{colors.vanta-background}` (`#171717`)
- Points: `{colors.vanta-points}` (`#F4D30B`)
- Lines: `{colors.vanta-lines}` (`#6F6418`)

Use lower-opacity lines than points. The network should feel atmospheric, not like a screensaver. Vanta sits behind compact sections or cards with protective surface overlays.

# Typography

## Font Families

### Display

Use **Space Grotesk** for headings, names, large numbers, and project titles. Its geometric construction reinforces the software-engineering context without feeling generic.

Fallback: Inter, then system sans-serif.

### Body

Use **Inter** for navigation, body copy, metadata, and controls. It provides dependable readability at all sizes.

### Monospace Accent

Use **JetBrains Mono** for eyebrow labels, small section indices, technology categories, and code-like metadata. Never set long paragraphs in the mono family.

## Type Hierarchy

| Token | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| `{typography.display-mega}` | 52–120px fluid | 560 | 0.94 | Hero name or statement |
| `{typography.display-xl}` | 44–88px fluid | 560 | 1.0 | Page hero headings |
| `{typography.display-lg}` | 34–60px fluid | 560 | 1.05 | Homepage section headings |
| `{typography.display-md}` | 26–40px fluid | 540 | 1.12 | Subsections and feature statements |
| `{typography.title-lg}` | 24px | 560 | 1.25 | Card and profile titles |
| `{typography.title-md}` | 18px | 560 | 1.3 | Experience roles and technology groups |
| `{typography.body-lg}` | 18px | 400 | 1.7 | Introductory copy |
| `{typography.body-md}` | 16px | 400 | 1.65 | Default body copy |
| `{typography.body-sm}` | 14px | 400 | 1.55 | Supporting information |
| `{typography.eyebrow}` | 12px | 600 | 1.4 | Section labels and indices |
| `{typography.button}` | 13px | 700 | 1.0 | Buttons and compact actions |
| `{typography.code}` | 14px | 450 | 1.6 | Code and technical metadata |

## Typography Principles

- Use display size and spacing for drama, not extreme font weight.
- Keep hero copy brief enough to remain readable over video.
- Use yellow for short labels or highlighted words, not full paragraphs.
- Keep body copy between approximately 55 and 75 characters per line.
- Uppercase is limited to navigation, eyebrows, and button labels.
- Maintain a single logical `h1` per page.
- Avoid centered long-form copy; center alignment is reserved for concise hero or placeholder messages.

# Layout

## Spacing System

The base unit is 4 px. Use the named numeric scale from `{spacing.1}` through `{spacing.32}`.

Common applications:

- Control gaps: 8–12 px.
- Card internal spacing: 24–32 px.
- Grid gaps: 20–32 px.
- Section horizontal padding: 20 px mobile, 32 px tablet, 48–64 px desktop.
- Section vertical padding: 80–128 px.
- Initial hero: full available viewport beneath the header.

Do not use arbitrary spacing values unless a media crop or optical alignment genuinely requires one.

## Container

- Maximum editorial width: `{layout.content-max}` — 1280 px.
- Maximum prose width: `{layout.prose-max}` — 720 px.
- Full-bleed media can extend beyond the content container.
- Use a 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid.

## Section Rhythm

Most homepage sections should feel almost full-screen on a standard laptop. Use minimum height rather than fixed height so content can grow:

```css
min-height: clamp(42rem, 88svh, 64rem);
```

Exceptions:

- Footer remains content-driven.
- Articles may be shorter when only one item exists.
- Placeholder pages should fill the space between header and footer.

## Page Flow

1. Header plus hero video.
2. Profile and experience overview.
3. Latest articles.
4. Technology stack with optional Vanta NET background.
5. Featured projects.
6. Footer.

The transition from the video to the profile section should feel deliberate: use a dark gradient, a thin yellow rule, or a small change in surface brightness rather than a decorative wave.

# Elevation and Depth

The system uses four depth mechanisms:

1. **Media depth:** Full-bleed hero video or project imagery.
2. **Surface depth:** `canvas` → `canvas-elevated` → `canvas-raised`.
3. **Atmospheric depth:** Vanta NET and restrained gradients.
4. **Interactive depth:** Small translations, border changes, and limited shadow.

## Elevation Levels

| Level | Treatment | Use |
|---|---|---|
| Base | `{colors.canvas}` | Main page sections |
| Deep | `{colors.canvas-deep}` | Footer and hero fallback |
| Elevated | `{colors.canvas-elevated}` + hairline | Cards and article boxes |
| Raised | `{colors.canvas-raised}` | Technology items and chips |
| Floating | `{shadows.floating}` | Mobile navigation or modal only |
| Atmospheric | Vanta/gradient | Selected background treatment |

Do not add multiple drop-shadow tiers. Cards should normally rely on border and brightness separation.

# Shapes

## Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.none}` | 0px | Dividers and full-width bands |
| `{rounded.xs}` | 2px | Focus underline and tiny markers |
| `{rounded.sm}` | 4px | Buttons and compact controls |
| `{rounded.md}` | 8px | Technology items |
| `{rounded.lg}` | 14px | Article and project cards |
| `{rounded.xl}` | 22px | Large media panels, rare |
| `{rounded.full}` | 9999px | Portrait and circular icon controls |

The dominant shape language is precise with modest rounding. Avoid exaggerated 24–40 px radii on every card.

# React Bits Design System

React Bits is the required animated-component source for the portfolio. Use the free official components copied into the repository and customize their source to this design system. Do not use React Bits Pro unless the owner provides a valid license.

## Approved Component Vocabulary

### `BlurText`

Use for the hero heading and major section headings. The animation should resolve quickly into ordinary readable text. Use the same direction, blur range, duration family, and easing throughout the site. Do not combine it with Split Text, Shuffle Text, Text Type, or other competing heading effects in the same release.

### `AnimatedContent`

Use for section introductions and small card groups entering the viewport. Default behavior:

- Vertical offset: 12–24 px.
- Opacity: 0 to 1.
- Duration: 420–650 ms.
- Stagger: limited to a few siblings.
- Trigger once unless repeated motion has a clear purpose.
- Final content must occupy its correct layout before animation to avoid layout shift.

### `SpotlightCard`

Use as the shared interaction surface for article cards, technology groups, and project cards. Customize it to use yellow at low opacity over charcoal. The spotlight must not reduce text contrast, capture pointer events, or become the only focus/hover indication. Disable or simplify it for reduced motion, touch-first devices, and constrained GPUs when appropriate.

## Consistency Rules

- Use React Bits components as locally owned source under `components/react-bits/`.
- Expose portfolio defaults through shared wrappers or shared props rather than repeating arbitrary values.
- All colors must reference theme variables; no default purple, cyan, rainbow, or demo palette may remain.
- All components need a no-animation state that preserves the same content and hierarchy.
- Do not use React Bits for semantic elements that are clearer as normal links, buttons, navigation, or text.
- Never run several full-screen shader, particle, cursor, or WebGL effects together. Vanta NET remains the only optional network field, and it cannot share a section with another heavy animated background.

# Component Specifications

## Header

### `top-nav-overlay`

Use over the hero before scrolling.

- Height: 72 px.
- Name on the left.
- Projects, Experience, and Articles on the right.
- White text, transparent background.
- Use a subtle text shadow only if required over bright video frames.
- The header should not visually separate from the hero at initial load.

### `top-nav-scrolled`

Use after the page scrolls beyond the hero threshold.

- Semi-opaque charcoal background.
- 16 px backdrop blur.
- One-pixel dark hairline.
- Active route indicated by a yellow underline or marker.
- Keep text white; yellow is limited to the active indicator.

On mobile, navigation opens in a raised dark panel. It must trap focus only if presented as a true modal overlay; otherwise use an accessible disclosure menu.

## Hero Video

### `hero-video`

The hero occupies the first screen together with the header. The owner-provided video is the creative source of truth. It may be cropped, color-balanced, compressed, and transcoded for delivery, but it must not be replaced without approval.

- Video is full bleed and uses `object-fit: cover`.
- Apply the documented gradient overlay.
- Use a representative optimized poster generated from or supplied with the provided video as the immediate visual.
- Keep overlaid text in a safe area away from browser controls and the scroll indicator.
- Use no more than two primary actions.
- Decorative video is muted and hidden from assistive technology.

Use React Bits `BlurText` for the primary hero heading and ordinary semantic text for the supporting sentence and actions. Avoid layering additional text effects over the moving video.

Recommended content arrangement:

- Optional mono eyebrow.
- Name or concise professional statement.
- One-sentence positioning statement.
- Primary action to Projects.
- Secondary text action to Experience or contact.

### Scroll Indicator

Place in the bottom center with sufficient safe-area spacing.

- Yellow icon or hairline.
- Optional “Scroll” label in mono uppercase.
- Small vertical translation loop, 1.8–2.4 seconds.
- Hidden or static under reduced motion.
- It is a visual cue, not necessarily a button.

## Profile Overview

Use a two-column composition on desktop. The owner-provided profile picture is mandatory and must not be replaced with a generated avatar or stock portrait.

### Portrait Column

- Circular optimized derivative of the supplied portrait with a 1 px yellow-tinted border.
- Maximum portrait width around 320 px desktop.
- Name directly beneath or slightly overlapping the lower portrait edge only if legibility remains strong.
- “Software Engineer” beneath the name in muted body text.

### Experience Column

- Eyebrow and large “Experience” heading.
- Experience rows separated by hairlines.
- Role is primary; company is secondary.
- An arrow or route cue appears at the far edge.
- Hover/focus changes border and arrow color to yellow.
- Link rows to `/experience#entry-slug` where anchors exist.

Vanta NET may sit behind this section at very low opacity, with an opaque-enough content surface protecting readability.

## Articles

### `article-card`

Build the shared surface with the customized React Bits `SpotlightCard`.

- Elevated charcoal card.
- 14 px radius.
- Hairline border.
- Title, excerpt, date, and optional reading time.
- “Read more” uses the tertiary yellow action style.
- On hover/focus, border becomes stronger and the card moves upward no more than 4 px.
- Never make every line of text yellow.

Desktop options:

- One large latest article plus two compact secondary entries.
- Two equal article cards.
- Three-card grid when content supports it.

The section includes a visible “View all articles” link.

## Technology Stack

Place technology groups over the base canvas or a restrained Vanta NET field.

### `technology-group`

Build the group container with the same customized React Bits `SpotlightCard` behavior used by article and project surfaces.

- Translucent elevated surface with blur.
- Group heading in mono eyebrow or title style.
- Technology items wrap in a responsive grid.
- Keep each group visually distinct without giving every category a unique color.

### `technology-item`

- Logo plus visible name.
- Raised charcoal surface.
- 8 px radius.
- Monochrome or white logo at rest.
- Optional brand-color reveal on hover.
- Do not communicate proficiency through arbitrary progress bars.

Suggested categories:

- Frontend
- Backend
- Databases
- Cloud and DevOps
- AI
- Machine Learning
- Data and Analytics
- Testing
- Tools

The final list must be derived from the resume. Until then, the component should support clearly marked placeholder data.

## Featured Projects

### `project-card`

Cards are large navigable surfaces using the same customized React Bits `SpotlightCard` interaction language.

- Project visual or graphic at the top.
- Content surface beneath or overlaid with a controlled gradient.
- Title, concise problem statement, role, and technology tags.
- Optional GitHub and live-site status shown as metadata, not nested buttons inside a full-card link.
- Use a visible arrow or “View case study” cue.
- Hover/focus: yellow border accent, image scale no more than 1.03, slight upward translation.

Grid behavior:

- Two columns on desktop.
- One column on mobile.
- A single featured project may use a wide editorial layout.

Project detail pages should preserve the visual language but prioritize readable case-study structure.

## Buttons

### Primary

- Yellow background.
- Dark text.
- 48 px minimum height.
- 4 px radius.
- Uppercase 13 px label.
- Hover brightens; active darkens.

### Secondary

- Transparent background.
- White text.
- Strong charcoal border.
- Border becomes yellow on hover/focus.

### Tertiary

- Text-only yellow action.
- Use an arrow or underline movement.
- Maintain a 44 px effective touch target even when the visible label is smaller.

Do not use pill buttons for primary actions.

## Footer

- Deep charcoal surface.
- Top hairline.
- Credit line on the left.
- GitHub and LinkedIn links with icons and visible labels.
- Stack vertically on mobile.
- External links use strong focus styles.
- Keep the footer visually quiet after the project section.

## Placeholder Pages

Projects, Experience, and Articles may initially be placeholders.

Use `placeholder-panel` with:

- Eyebrow indicating the section.
- Correct page heading.
- Concise “Content coming soon” text.
- A route back to the homepage.
- Optional faint Vanta or grid texture, but no empty blank canvas.

# Vanta.js NET Customization

Recommended conceptual configuration:

```ts
{
  color: 0xF4D30B,
  backgroundColor: 0x171717,
  points: 7,
  maxDistance: 18,
  spacing: 16,
  showDots: true
}
```

These are starting values, not immutable tokens. Tune them by breakpoint and performance.

## Vanta Rules

- Use on one or two sections only.
- Reduce point count and maximum distance on mobile.
- Do not initialize before the element is visible when avoidable.
- Destroy the instance during cleanup.
- Disable under reduced motion.
- Provide a CSS radial/linear-gradient fallback.
- Keep text inside an elevated or translucent surface when network lines pass nearby.
- Avoid pointer-reactive intensity that distracts from reading.

# Media Direction

## Hero Video

The visual should communicate motion, craft, code, or the owner’s personality without resembling generic stock footage.

Preferred qualities:

- 6–15 second seamless loop.
- Minimal or no rapid cuts.
- Dark midtones that support white text.
- Important visual subject kept away from text safe zones.
- No audio track.
- Desktop WebM and MP4 fallbacks.
- Poster frame visually representative of the loop.

## Profile Image

- High-resolution square crop.
- Neutral or dark background.
- Use the supplied portrait and preserve the person's identity and natural proportions.
- Create a high-resolution square derivative with comfortable headroom; retain a configurable focal point for responsive crops.
- Circular crop applied in CSS.
- Use `next/image`, explicit dimensions, responsive `sizes`, and meaningful alt text.

## Project Images

- Use consistent aspect ratios within a grid.
- Favor real product screenshots, diagrams, or intentional project art.
- Add alt text that explains the project visual rather than repeating its title.

# Interaction and Motion

## Standard Interaction

- Duration: `{motion.standard}` — 220 ms.
- Easing: `{motion.easing-standard}`.
- Animate opacity, transform, border-color, and background-color.
- Avoid large blur animation and layout-affecting properties.

## Section Reveals

Optional section reveal:

- 12–24 px vertical offset.
- Opacity from 0 to 1.
- 420–700 ms duration.
- Stagger only a few children.
- Content remains visible without JavaScript.

## Lenis Smooth Scrolling

Lenis is applied once at the application root and defines the site's scrolling feel. It should smooth input while remaining close to native browser behavior.

- Use a restrained configuration; avoid long inertial tails or delayed stopping.
- Preserve keyboard scrolling, anchor links, browser back/forward restoration, skip links, focus changes, and text selection.
- Account for the fixed header when scrolling to section anchors.
- Menus, dialogs, and scrollable code/content areas must be able to opt out of Lenis handling.
- Do not use mandatory scroll snap, forced section locking, or scroll-jacking.
- Scroll-linked visual changes should update outside normal React render loops where practical.
- Disable smoothing under `prefers-reduced-motion: reduce` and allow native scrolling.

## Reduced Motion

Under `prefers-reduced-motion: reduce`:

- Show the hero poster instead of autoplaying the background video.
- Disable Lenis smoothing and use native scrolling.
- Disable React Bits entrance, blur, and spotlight motion while preserving final visible states.
- Disable Vanta NET.
- Disable parallax.
- Remove continuous scroll-indicator movement.
- Remove card-image scale effects.
- Keep instantaneous or near-instant state changes.

# Vercel Hobby Design Budget

The visual design must be deliverable on Vercel's free Hobby tier for a personal, non-commercial portfolio. The design cannot assume paid media processing, a paid component license, or high-frequency server functions.

- The poster, heading, navigation, and primary action form the critical hero experience; video playback is progressive enhancement.
- Keep the original provided hero master outside the deployed artifact. Deploy only compact derivatives or use free-compatible external media delivery.
- Prefer one video source based on capability rather than eagerly downloading several formats. Use metadata-only or no preload unless measured testing justifies more.
- Static content and statically generated pages are the baseline. Dynamic GitHub and YouTube data is cached with long revalidation and local fallback content.
- Use `next/image` responsibly with explicit sizes and pre-optimized local assets to avoid unnecessary transformations and transfer.
- React Bits effects, Lenis, Vanta, and third-party media must not all compete on the initial loading path.
- No required design feature may depend on a paid Vercel add-on, React Bits Pro, paid database, or paid media service.
- Before release, inspect current Vercel Hobby limits and test bundle size, asset weight, function activity, and mobile data transfer.

# Accessibility

- Meet WCAG 2.2 AA color contrast.
- Use `{colors.focus}` for clear focus outlines.
- Provide a skip-to-content link.
- Do not hide focus rings.
- Do not rely on yellow versus white alone to show selection; add shape, underline, icon, or text.
- Decorative hero video and Vanta canvas are ignored by assistive technology.
- Every technology logo has an adjacent visible label.
- Circular portrait has useful alternative text.
- Links that navigate to project, experience, or article pages have descriptive names.
- Keep touch targets at least 44 by 44 px where practical.
- Ensure text over media meets contrast across the entire video, not only the poster frame.

# Responsive Behavior

## Mobile — below 640 px

- Header uses a menu button.
- Hero text scales to `{typography.display-mega}` minimum.
- Hero may use only the poster image on constrained devices.
- Profile and experience stack vertically.
- Portrait width is approximately 200–240 px.
- Article and project grids become one column.
- Technology groups use one or two compact columns depending on width.
- Vanta is disabled or heavily simplified.
- Horizontal gutter: 20 px.

## Tablet — 640 to 1023 px

- Header may retain full nav only when labels fit comfortably.
- Profile section can use a 5/7-column split.
- Articles use one large plus one compact layout or two columns.
- Projects use one or two columns depending on content.
- Horizontal gutter: 32 px.

## Desktop — 1024 to 1439 px

- Full navigation.
- Hero fills first screen with header.
- Profile uses approximately 4/8 columns.
- Articles and projects use intentional editorial grids.
- Major sections use near-full-screen minimum height.
- Horizontal gutter: 48 px.

## Wide — 1440 px and above

- Content caps at 1280 px.
- Hero video remains full bleed.
- Horizontal gutter can increase to 64 px.
- Avoid allowing text lines or cards to become excessively wide.

# Content Voice

The portfolio voice should be:

- Direct.
- Technically credible.
- Reflective without being verbose.
- Specific about problems and outcomes.
- Free of inflated claims.

Use first person where natural. Prefer “I designed and implemented…” over vague phrases such as “A cutting-edge solution was developed.”

Project summaries should answer:

1. What problem existed?
2. What did the owner build or contribute?
3. Which technology choices mattered?
4. What changed as a result?

Do not invent metrics, clients, job titles, technology proficiency, or outcomes.

# Do’s and Don’ts

## Do

- Keep dark gray, yellow, and white dominant.
- Use yellow as precise visual energy.
- Let the supplied hero video establish atmosphere while the poster guarantees a complete first view.
- Use the supplied profile picture as the authentic profile visual.
- Reuse `BlurText`, `AnimatedContent`, and `SpotlightCard` consistently.
- Use Lenis as the only smooth-scroll system and preserve native behavior.
- Use warm white and neutral grays for long-form readability.
- Keep Vanta NET subtle and localized.
- Use large type with moderate weight.
- Use strong visible focus states.
- Make experience, article, and project surfaces clearly navigable.
- Preserve poster and static-gradient fallbacks.
- Use the spacing and component tokens consistently.

## Don’t

- Don’t use pure black as the main canvas.
- Don’t flood entire sections with saturated yellow.
- Don’t layer dense network animation behind paragraphs.
- Don’t replace the supplied hero video or profile picture with generated or stock media.
- Don’t autoplay video with sound.
- Don’t use an embedded YouTube player as a decorative hero background.
- Don’t use giant rounded pills for every action.
- Don’t add neon cyan, purple, or red accents without redesigning the palette.
- Don’t make every component glassmorphic.
- Don’t install unrelated React Bits packages, mix many text effects, or leave React Bits demo colors in place.
- Don’t create multiple Lenis instances, force users between sections, or break anchor and keyboard scrolling.
- Don’t animate all sections continuously.
- Don’t use progress bars to claim skill level without evidence.
- Don’t invent resume technologies or experience.

# CSS Variable Mapping

Use a root token layer similar to:

```css
:root {
  --color-primary: #f4d30b;
  --color-primary-hover: #ffe45c;
  --color-primary-active: #c9aa00;
  --color-canvas: #171717;
  --color-canvas-deep: #101010;
  --color-canvas-elevated: #222222;
  --color-canvas-raised: #2c2c2c;
  --color-ink: #fafaf7;
  --color-body: #b8b8b2;
  --color-muted: #858580;
  --color-hairline: #343434;
  --color-focus: #fff176;
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --content-max: 80rem;
  --header-height: 4.5rem;
}
```

Tailwind theme values should reference these variables rather than duplicate hex values in component classes.

# Dynamic API Content

GitHub and YouTube data should visually match the local content system rather than appear as embedded third-party widgets.

- Normalize GitHub repositories into the same `project-card` language used for curated projects.
- Use technology, star, fork, and update metadata as muted supporting information.
- Present YouTube items as editorial media cards with a thumbnail, title, date, and duration where available.
- Use skeletons based on card geometry only when dynamic loading is visible to the user.
- Empty and error states use subdued body text and a static local-content fallback.
- API status colors are semantic and must not replace the yellow primary accent.
- Avoid raw iframe chrome in the visual flow; video playback can open from a designed thumbnail or use a privacy-enhanced embed.

# Implementation Notes

- Use `next/font` for selected open-source fonts.
- Use the supplied profile picture through `next/image` for profile imagery, and use `next/image` for article and project images.
- Use the supplied hero video outside `next/image`; create optimized delivery derivatives and provide a poster. Do not transcode during the Vercel build.
- Copy the approved React Bits TypeScript + Tailwind sources into the repository and adapt them to tokens.
- Initialize Lenis once through a root Client Component and disable it for reduced motion.
- Load Vanta in a Client Component through dynamic import.
- Vanta and hero video are enhancement layers; semantic content is rendered normally underneath or alongside them.
- Keep all personal names, social URLs, project data, experience data, and article metadata in a central typed site/content configuration.
- Technologies are populated from the resume once available.

# Iteration Guide

1. Implement the token layer and global typography.
2. Add the single root Lenis provider with native and reduced-motion fallbacks.
3. Copy and theme the approved React Bits components: `BlurText`, `AnimatedContent`, and `SpotlightCard`.
4. Build the header and static hero-poster layout using the supplied media plan.
5. Prepare and add optimized derivatives of the supplied hero video as progressive enhancement.
6. Prepare and add the supplied profile picture through `next/image`, then build the profile and experience overview.
7. Build article, technology, and project cards with the shared SpotlightCard treatment.
8. Add placeholder route pages.
9. Add Vanta NET to at most one selected section and validate performance against React Bits and Lenis.
10. Integrate GitHub and YouTube server-side only after the static content experience is complete.
11. Audit Vercel Hobby compatibility, responsive behavior, keyboard navigation, contrast, and reduced motion.
12. Replace placeholder data with verified resume and portfolio content.

# Known Gaps

- The owner’s name, biography, and social URLs are not supplied.
- The hero video and profile picture will be supplied to the implementation agent; final filenames, crops, poster frame, and delivery sizes remain to be resolved when those assets arrive.
- The resume is not supplied, so the final technology list cannot yet be verified.
- Experience entries, article metadata, and project case studies are not supplied.
- The exact placement of Vanta NET is open; the preferred starting point is the technology-stack or profile section.
- GitHub username, selected repositories, YouTube channel, and API credentials are not supplied.
- A production domain and analytics policy are not supplied.

These gaps should be represented with explicit, replaceable data placeholders rather than invented content.
