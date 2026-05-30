# Personal Website Wireframe Prompt for Stitch

## Project Overview
Create a high-fidelity wireframe for a personal portfolio website for an AI Product Manager. The design should embody the **Kinetic Typography** aesthetic—bold, energetic, and motion-driven with dramatic scale contrasts and brutalist geometry. The wireframes should show layout structure and component hierarchy WITHOUT including actual images (avatars, photos, illustrations)—use labeled placeholders or text blocks instead.

---

## Design System Requirements

### Visual Style: Kinetic Typography
- **Color Palette**: Rich black background (#09090B), off-white text (#FAFAFA), acid yellow accent (#DFE104), zinc-700 borders (#3F3F46)
- **Typography**: All display text in UPPERCASE with ultra-large scale (viewport-based sizing using clamp()), massive numbers (8-12rem), body text at 20-24px
- **Shape Language**: Sharp corners (0px border-radius), 2px borders, completely flat (no shadows)
- **Motion**: Infinite marquees scrolling continuously, scroll-triggered parallax effects, dramatic hover color inversions
- **Layout**: Asymmetric, edge-to-edge layouts (max-w-95vw), generous vertical spacing (py-32 for sections)

---

## Site Structure

### Global Elements

#### Navigation Bar
- **Position**: Fixed at top-right corner, semi-transparent overlay effect
- **Style**: Minimal, uppercase labels with tight tracking
- **Items**: 
  - HOME
  - ABOUT
  - WORKS (link to #works section)
  - CONTACT (link to #contact button)
- **Behavior**: 
  - Smooth scroll to corresponding sections with URL hash update (#about)
  - Highlight active section indicator
  - Small icon decorations with glow effect on hover
- **Appearance**: 2px border, background with subtle blur, text in off-white → accent yellow on hover

#### Footer
- Minimal footer with social links and copyright
- Same styling as navigation (uppercase, bordered sections)

---

## Page Sections

### 1. HOMEPAGE (Hero Section)

#### Core Content
- **Main Headline**: Massive viewport-width typography (clamp(3rem,12vw,14rem))
  - Primary text: "AI PRODUCT MANAGER" (all uppercase)
  - Style: Bold (700), tight tracking, leading-none
- **Subheadline**: Large supporting text (text-4xl to text-6xl)
  - Text: "Building AI Products That Connect Technology and Users" 
  - Style: Medium weight, muted-foreground color
- **CTA Buttons**: Three prominent action buttons arranged horizontally or vertically
  - Button 1: "VIEW WORKS" → Navigate to #works section
  - Button 2: "CONTACT ME" → Navigate to #contact section  
  - Button 3: "LEARN MORE" → Scroll to About section
  - Style: Accent yellow background, black text, h-14 (56px), uppercase, hover scale 1.05

#### Visual Elements
- Large decorative background number in muted tone (optional)
- Scroll-triggered parallax effect: hero scales up (1.0 → 1.2) and fades out as user scrolls
- No images—text is the hero

---

### 2. ABOUT ME PAGE (Three-Part Layout)

#### Section Title
- Large section heading: "ABOUT ME" (text-7xl to text-8xl, uppercase)

#### Part 1: Professional Identity
- **Heading**: "CAREER PORTRAIT" (text-3xl, uppercase)
- **Content**: Text block in two lines
  - Line 1: "Exploring the boundaries of AI technology"
  - Line 2: "Documenting the business value of AI product management"
- **Style**: Large body text (text-xl to text-2xl), left-aligned, generous line-height

#### Part 2: Product Philosophy (Three Cards - Horizontal Grid)
- **Section Label**: "PRODUCT PHILOSOPHY (THREE-PART)" (text-2xl, uppercase)
- **Card Layout**: Three equal-width cards with 2px borders, gap-8
  
  **Card 1: Format/Approach**
  - Icon/Symbol: 💡 (or decorative element, no actual image)
  - Headline: "AI AS CAPABILITY AMPLIFIER"
  - Description: "AI is not a feature, it's a capability enhancer that amplifies what users can achieve"
  - Hover: Background floods to accent yellow, all text inverts to black
  
  **Card 2: Methodology**
  - Icon/Symbol: 📊 (or decorative element)
  - Headline: "DATA-DRIVEN, MVP ITERATION"
  - Description: "Make decisions driven by data, iterate rapidly with MVP approach"
  - Hover: Same color inversion
  
  **Card 3: Principle**
  - Icon/Symbol: 🔧 (or decorative element)
  - Headline: "BUILD TRUSTWORTHY AI"
  - Description: "Create AI products with warmth, trust, and reliability"
  - Hover: Same color inversion

#### Part 3: Technical Toolstack (Visualized Display)
- **Section Label**: "TECH TOOLSTACK (VISUALIZED)" (text-2xl, uppercase)
- **Content Structure**: Grid or list layout with three categories
  
  **Category 1: Product Tools**
  - Label: "PRODUCT TOOLS" (text-sm, uppercase, muted-foreground)
  - Items: Figma, Axure, XMind
  - Display: Large text labels or bordered tags, no logos
  
  **Category 2: AI Skills**
  - Label: "AI CAPABILITIES" (text-sm, uppercase)
  - Items: LLM Application Architecture, RAG, Prompt Engineering
  - Display: Same tag treatment
  
  **Category 3: Collaboration Tools**
  - Label: "COLLABORATION" (text-sm, uppercase)
  - Items: Confluence, Notion
  - Display: Same tag treatment

---

### 3. CONTACT PAGE (Split Layout)

#### Section Title
- "GET IN TOUCH" or "CONTACT" (text-8xl, uppercase)

#### Left Column: Contact Form
- **Form Fields**: Each field extra tall (h-24 / 96px), bottom-border only, transparent background
  
  **Field 1: Name Input**
  - Label: "YOUR NAME (REQUIRED)" (text-xs, uppercase, tracked-wide)
  - Input: Text field with placeholder "ENTER YOUR NAME"
  - Style: text-4xl, bold, uppercase, border-b-2 in zinc-700 → accent on focus
  
  **Field 2: Email Input**  
  - Label: "YOUR EMAIL (REQUIRED)"
  - Input: Text field with placeholder "YOUR@EMAIL.COM"
  - Style: Same as name field
  
  **Field 3: Message Textarea**
  - Label: "MESSAGE (SUPPORT MARKDOWN)"
  - Input: Multiline textarea, minimum 6 rows
  - Style: Same border treatment, auto-resize
  
  **Submit Button**
  - Text: "SEND MESSAGE"
  - Style: Accent yellow, h-14, full width, hover scale effect

#### Right Column: Social Links
- **Heading**: "CONNECT WITH ME" (text-3xl, uppercase)
- **Link Items**: Vertical list with large touch targets
  
  **Item 1: XiaoHongShu (Little Red Book)**
  - Icon placeholder: 📱 (or text label "XHS")
  - Text: "FOLLOW ON XIAOHONGSHU"
  - Subtext: High engagement rate, verified profile
  
  **Item 2: WeChat**
  - Icon placeholder: 💬 (or text label "WECHAT")
  - Text: "CONNECT ON WECHAT"
  - Subtext: Can be displayed as QR code or text description
  
  **Item 3: GitHub**
  - Icon placeholder: 💻 (or text label "GITHUB")
  - Text: "VIEW MY CODE"
  - Subtext: "USERNAME" (displays GitHub username or profile link with automatic API)
  - Additional note: "View most used languages, auto-updated via API"

- **Style for all links**: 
  - 2px border cards
  - Hover: Translate right (translate-x-8) with background color flood
  - Large text (text-xl to text-2xl), uppercase labels

---

### 4. PORTFOLIO/WORKS PAGE

#### Section Title
- "SELECTED WORKS" or "PROJECTS" (text-8xl, uppercase)
- Subtitle: "[AI Enterprise Solutions System]" (text-2xl, muted-foreground)

#### Project Display Cards (Repeated for each project)
Each project is displayed in a bordered card with sticky scroll behavior. Cards stack as user scrolls.

**Project Card Structure:**

1. **Project Number**: Massive decorative number in muted tone
   - Display: "01" or "02" (text-[8rem] to text-[12rem], absolute positioned)
   
2. **Background Context**  
   - Label: "BACKGROUND" (text-sm, uppercase, accent color)
   - Content: "AI-powered workplace application, underlying AI infrastructure"
   - Style: text-xl, left-aligned

3. **My Role**
   - Label: "MY ROLE" (text-sm, uppercase, accent color)  
   - Content: "Product Owner (0-to-1)" or "从0到1"
   - Style: text-xl, bold

4. **Requirements Analysis**
   - Label: "REQUIREMENTS" (text-sm, uppercase)
   - Content: "Analyzed 50+ customer needs"
   - Style: text-xl

5. **Technical Approach**  
   - Label: "TECH STACK" (text-sm, uppercase)
   - Content: "Selected RAG + Vector Database architecture"
   - Style: text-xl
   - Visual: Could include simple text-based diagram or bullet points (no actual images)

6. **Implementation Progress**
   - Label: "TIMELINE" (text-sm, uppercase)
   - Content: "Launched in 1 week, adoption rate 55%"
   - Style: text-xl
   - Visual: Simple timeline or milestone markers (text-based, no graphics)

7. **Data Results**  
   - Label: "IMPACT" (text-sm, uppercase)
   - Content: Large statistics displayed prominently
     - "70%-92% RESOLUTION RATE" (massive numbers)
     - "40% QUALITY IMPROVEMENT" (massive numbers)
   - Style: Decorative number treatment (text-[6rem]), accent color, bold
   - Layout: Numbers as hero elements with small label text

**Card Hover State:**
- Background floods to accent yellow
- All text inverts to black
- Border changes to accent color
- Transition: 300ms duration

**Card Layout Pattern:**
- Use sticky positioning (sticky top-32)
- Each subsequent card slides over previous cards as user scrolls
- Creates dramatic stacking effect

---

## Navigation & Interaction Patterns

### Navigation Behavior
- **Position**: Fixed header, top-right corner, semi-transparent background with backdrop blur
- **Highlight Pattern**: Current section highlighted by adding thick bottom border (border-b-4) in accent yellow or background color change
- **Responsive**: Collapses to hamburger menu on mobile (md breakpoint)

### Transition Patterns
- **Smooth Scrolling**: Click navigation items → smooth scroll to target section with hash update (#about)
- **URL Hash Synchronization**: Update browser URL hash as user scrolls through sections
- **Route Transitions** (if multi-page): Fade in/out (opacity 0 ↔ 1, duration 300ms)

---

## Loading & Visual Effects

### Initial Loading State
- **Skeleton Animation**: Display skeleton UI for content areas before full load
  - Use animated pulse effect (subtle opacity shift)
  - Skeleton mimics actual content structure (text blocks, card outlines)
  - Style: Muted background color (#27272A), rounded-none borders

### Scroll Effects
- **Hero Parallax**: Hero section scales up and fades out as user scrolls down (scale 1.0 → 1.2, opacity 1 → 0)
- **Sticky Cards**: Portfolio project cards use sticky positioning to create stacking effect
- **No additional scroll animations** mentioned in requirements (keep it minimal to match brutalist aesthetic)

### Page Transition Effects
- **Route Changes**: Simple fade in/out (duration 300ms)
- **No complex animations**: Keep transitions sharp and fast to match kinetic typography style

---

## Responsive Behavior

### Mobile (320px - 767px)
- Single column layout for all sections
- Navigation collapses to hamburger menu
- Hero text scales down using clamp() (maintains drama: clamp(2rem,10vw,4rem))
- Forms stack vertically, full-width inputs
- Project cards display in single column, sticky effect still active
- Marquees continue scrolling (essential to style)
- Touch targets minimum 44x44px

### Tablet (768px - 1023px)
- Two-column layout for About Me philosophy cards
- Contact page: Form above social links (stacked)
- Navigation items visible but compact
- Medium text scaling applies

### Desktop (1024px+)
- Three-column layout for philosophy cards
- Contact page: Side-by-side split (50/50 or 60/40)
- Full dramatic scale for typography
- All hover effects active
- Sticky scroll effects fully visible

---

## Motion System Requirements

### Continuous Motion (Marquees)
While not explicitly mentioned in the site structure, to achieve Kinetic Typography style, consider adding:
- **Stats Marquee**: Infinite scrolling banner showing key metrics (projects completed, clients served, technologies mastered)
  - Speed: 80 (fast), direction: left-to-right, no gradient edges
  - Background: Accent yellow (#DFE104)
  - Text: Black, uppercase, massive numbers paired with labels

### Micro-Interactions
- **Button Hover**: Scale 1.05, duration 200-300ms
- **Card Hover**: Background color flood (black → yellow), text invert (white → black), duration 300ms
- **Input Focus**: Border-bottom color change to accent yellow, instant
- **Navigation Hover**: Text color to accent yellow, scale 1.05

---

## Typography Hierarchy Examples

### Homepage
- Main headline: `text-[clamp(3rem,12vw,14rem)]` - "AI PRODUCT MANAGER"
- Subheadline: `text-4xl md:text-5xl lg:text-6xl` - Supporting text
- CTA buttons: `text-xl md:text-2xl` - Button labels

### About Page
- Section title: `text-5xl md:text-7xl lg:text-8xl` - "ABOUT ME"
- Card titles: `text-2xl md:text-3xl lg:text-4xl` - Philosophy card headings
- Body text: `text-lg md:text-xl lg:text-2xl` - Descriptions

### Contact Page
- Section title: `text-6xl md:text-7xl lg:text-8xl` - "CONTACT"
- Input text: `text-2xl md:text-3xl lg:text-4xl` - Form field text
- Labels: `text-xs md:text-sm` - Form labels

### Portfolio Page
- Section title: `text-5xl md:text-7xl lg:text-8xl` - "WORKS"
- Decorative numbers: `text-[8rem] md:text-[10rem] lg:text-[12rem]` - Project numbers
- Statistics: `text-[4rem] md:text-[6rem]` - Data results
- Content text: `text-lg md:text-xl` - Project descriptions

---

## Component Inventory

### Buttons
- **Primary (Accent)**: Yellow background, black text, h-14, uppercase, bold
- **Outline**: 2px border, transparent background, white text → inverts on hover
- **Ghost**: No border, white text → yellow text on hover

### Cards
- **Standard Card**: 2px border (zinc-700), p-8 to p-12 padding, sharp corners
- **Hover State**: Background floods to yellow, border to yellow, text to black
- **Sticky Card**: Adds `sticky top-32` positioning

### Inputs
- **Text Input**: h-24 (96px), border-b-2, transparent background, text-4xl, uppercase
- **Textarea**: Same styling, auto-resize, min 6 rows
- **Focus State**: Border-bottom to accent yellow

### Navigation
- **Fixed Header**: Semi-transparent, backdrop blur, 2px border-b
- **Nav Items**: Uppercase, text-sm to text-base, hover to accent color
- **Active Indicator**: Border-b-4 in accent yellow or background highlight

---

## Accessibility Notes

- All interactive elements have minimum 44x44px touch targets
- Color contrast exceeds WCAG AAA standards (15:1 ratio for primary text)
- Motion can be disabled via prefers-reduced-motion media query
- All form inputs have visible labels
- Focus indicators visible on all interactive elements (accent yellow, 2px)
- Keyboard navigation fully supported

---

## Content Placeholder Guidelines

Since wireframes should NOT include actual images:

1. **Avatar/Profile Photos**: Replace with labeled boxes "AVATAR PLACEHOLDER" or large initials in bordered square
2. **Project Screenshots**: Replace with text block describing the view: "PROJECT INTERFACE VIEW", "DASHBOARD SCREENSHOT", etc.
3. **Tool Logos**: Use text labels only: "FIGMA", "AXURE", "XMIND" in bordered tags
4. **Social Icons**: Use emoji placeholders (💬, 📱, 💻) or simple text labels
5. **Background Decorations**: Use large muted numbers or text elements instead of images

---

## Final Notes for Stitch

**Priority Elements to Emphasize:**
1. Massive typography scale - text fills the screen
2. Sharp, brutalist geometry - 0px border-radius everywhere
3. High contrast color system - near-black, off-white, acid yellow
4. Dramatic hover states - full color inversions
5. Generous spacing - py-32 for major sections
6. Uppercase treatment - all display text
7. Motion indicators - show marquee movement, parallax arrows
8. Sticky scroll - visualize card stacking behavior

**What Makes This Design Unique:**
- The aggressive scale (10x difference between largest and smallest text)
- The constant motion (marquees never stop)
- The hard color flips (not gradual transitions)
- The brutalist flatness (no shadows, no rounded corners)
- The dramatic space (extra padding, edge-to-edge layouts)

Generate wireframes that capture this bold, energetic, motion-driven aesthetic while clearly showing the functional structure of each page section.
