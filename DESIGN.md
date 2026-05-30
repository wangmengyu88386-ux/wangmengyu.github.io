---
name: Kinetic Portfolio
colors:
  surface: '#121319'
  surface-dim: '#121319'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e14'
  surface-container-low: '#1b1b21'
  surface-container: '#1f1f25'
  surface-container-high: '#292930'
  surface-container-highest: '#34343b'
  on-surface: '#e3e1ea'
  on-surface-variant: '#c8c5ca'
  inverse-surface: '#e3e1ea'
  inverse-on-surface: '#303037'
  outline: '#919095'
  outline-variant: '#47464a'
  surface-tint: '#c8c6c8'
  primary: '#c8c6c8'
  on-primary: '#313032'
  primary-container: '#09090b'
  on-primary-container: '#7a787b'
  inverse-primary: '#5f5e60'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#cccd00'
  on-tertiary: '#323200'
  tertiary-container: '#0a0a00'
  on-tertiary-container: '#7c7e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e1e4'
  primary-fixed-dim: '#c8c6c8'
  on-primary-fixed: '#1c1b1d'
  on-primary-fixed-variant: '#474649'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e8ea1b'
  tertiary-fixed-dim: '#cccd00'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#494900'
  background: '#121319'
  on-background: '#e3e1ea'
  surface-variant: '#34343b'
typography:
  display-xl:
    fontFamily: Archivo Narrow
    fontSize: clamp(5rem, 15vw, 12rem)
    fontWeight: '800'
    lineHeight: '0.9'
    letterSpacing: -0.05em
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: clamp(3rem, 8vw, 6rem)
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
spacing:
  container-max: 95vw
  section-padding-v: 8rem
  gutter: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 4rem
---

## Brand & Style
The design system is engineered for an AI Product Manager’s portfolio, prioritizing high-impact motion and structural authority. The brand personality is technical, direct, and uncompromisingly modern, blending the utilitarian aesthetics of developer tools with the expressive energy of kinetic typography.

The visual style is a fusion of **Neo-Brutalism** and **High-Contrast Minimalism**. It utilizes a strict "all-killer-no-filler" approach: zero shadows, zero rounded corners, and maximum contrast. The intent is to evoke a sense of velocity and precision, positioning the user as a leader at the intersection of rigorous AI logic and creative product execution.

## Colors
The palette is built on a "Rich Dark" foundation to provide an infinite depth for kinetic elements.

- **Background (Rich Black):** Used for the primary canvas to ensure the acid yellow and off-white elements "vibrate" against the surface.
- **Content (Off-White):** Used for primary body text and structural elements to maintain readability without the harshness of pure #FFFFFF.
- **Accent (Acid Yellow):** Reserved for high-priority calls to action, active states, and kinetic highlights. It represents energy and the "spark" of AI intelligence.
- **Border (Zinc-700):** A low-contrast utility color used to define boundaries and grids without breaking the dark-mode immersion.

## Typography
Typography is the core of this design system. It functions as both content and graphic imagery.

- **Display Text:** Uses `Archivo Narrow` for its condensed, authoritative profile. It should be set with negative letter-spacing to create a "wall of text" effect. Line heights are intentionally tight to facilitate vertical stacking.
- **Body Text:** Uses `Geist` to provide a technical, clean counterpoint to the aggressive display fonts. Sizing is oversized (20-24px) to maintain hierarchy against the massive headlines.
- **Technical Labels:** Uses `JetBrains Mono` for metadata, dates, and AI-related labels to reinforce the product management and engineering context.

## Layout & Spacing
The layout follows an asymmetric, edge-to-edge philosophy that rejects standard container constraints.

- **Grid:** A 12-column fluid grid that extends to `95vw`, leaving only a narrow sliver of breathing room at the edges.
- **Verticality:** Extreme vertical padding (`py-32` or `8rem`) is used between sections to create a "reveal" effect during scrolling.
- **Alignment:** Elements should frequently break the vertical axis. For example, a headline may be left-aligned while its description is pushed to the final four columns on the right.
- **Mobile:** On mobile, the `clamp()` typography ensures headlines remain impactful. Layouts collapse to a single column, but maintain the high vertical spacing to preserve the premium, editorial feel.

## Elevation & Depth
This design system is strictly **Flat**. Depth is achieved through color contrast and overlapping elements rather than shadows or blurs.

- **Tiers:** Hierarchy is defined by the brightness of the element. Acid Yellow is the "top" tier, followed by Off-White, then Zinc-700.
- **Borders:** Every container and card uses a 2px solid border (`Zinc-700`). There are no ambient shadows.
- **Intersections:** When elements overlap, use "Hard Inversion." For example, if a black text element moves over an acid yellow block, the text color must instantly flip to black to remain visible, creating a "X-ray" effect.

## Shapes
The shape language is industrial and architectural. All corners are set to **0px (Sharp)**. 

This rejection of roundedness reinforces the "Kinetic" aspect of the design system—sharp corners feel faster and more aggressive when in motion. Boxes, buttons, and input fields must all be perfectly rectangular to maintain the grid-based brutalist aesthetic.

## Components
Consistent styling across components ensures the portfolio feels like a unified piece of software.

- **Buttons:** Large, rectangular blocks with 2px borders. The default state is a black background with off-white text. On hover, the button performs a full color inversion (Acid Yellow background, Black text).
- **Marquees:** Continuous horizontal tickers used for "Tech Stack" or "Project List." These move at a constant, slow speed and pause on hover.
- **Cards:** Simple 2px bordered boxes. Project cards should use a "Large Image, Small Label" format. Images should have a grayscale filter by default, snapping to full color only on hover.
- **Input Fields:** Underscore-only or full 2px box borders. Focus states are indicated by the border color changing to Acid Yellow.
- **Navigation:** A fixed, top-aligned bar using `Label-Mono`. It should be minimal, letting the kinetic typography of the page body take center stage.
- **Cursor:** A custom "Inversion Cursor"—a large circle that inverts the colors of whatever text or element it moves over.