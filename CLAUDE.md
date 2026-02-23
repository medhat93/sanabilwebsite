# Sanabil Technologies — Landing Page

## Project Overview

Single-page landing website for **Sanabil Technologies** (سنابل) — a premium AI-native software engineering company. "Sanabil" is Arabic for "ears of wheat," symbolizing growth, cultivation, and harvest. This metaphor is woven throughout the brand: we plant ideas, AI cultivates them, clients harvest success.

**Live URL:** https://sanabilwebsite.lovable.app
**Built with:** Lovable (AI website builder) → to be maintained in Claude Code
**Type:** Single-page marketing/landing site with contact form

---

## Tech Stack

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS + inline styles (some components use inline for specificity)
- **Animations:** Framer Motion (scroll reveals, layout transitions, page animations)
- **Particles:** tsParticles (hero section background)
- **Icons:** Lucide React (all icons across the site)
- **Fonts:**
  - Headings: Space Grotesk (Google Fonts) → fallback: Exo 2 → Manrope
  - Body: Outfit (Google Fonts) → fallback: DM Sans → Inter
- **Build tool:** Vite
- **Package manager:** npm

---

## Brand Identity

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--navy-primary` | `#0A2540` | Primary dark backgrounds, navbar, cards |
| `--navy-deep` | `#060E1A` | Deepest backgrounds (footer, gradients) |
| `--navy-mid` | `#0D2D4A` | Gradient mid-tones |
| `--gold-primary` | `#E5A821` | Accent color — icons, badges, borders, CTAs |
| `--gold-light` | `#F0C040` | Hover states, gradient endpoints |
| `--gold-bright` | `#F0D060` | Icon gradient endpoints |
| `--white` | `#FFFFFF` | Headings, primary text on dark |
| `--white-muted` | `rgba(255,255,255,0.6)` | Body text on dark backgrounds |
| `--white-faint` | `rgba(255,255,255,0.35)` | Labels, secondary text |
| `--white-ghost` | `rgba(255,255,255,0.2)` | Placeholder text, ghost elements |
| `--blue-accent` | `rgba(59,130,246,0.08)` | Subtle cool-depth gradient orbs |

### Typography Scale
| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| H1 (Hero) | 64-72px | 32-36px | 700 |
| H2 (Section titles) | 42-48px | 26-30px | 700 |
| H3 (Card titles) | 24-28px | 18-20px | 600 |
| Body | 17-18px | 15px | 400 |
| Subtitles | 20-22px | 16px | 400 |
| Buttons | 16-18px | 15-16px | 600-700 |
| Small labels/badges | 13px | 11px | 500 |
| Stats numbers | 52-56px | 36px | 800 |

### Logo
- **Icon-only** PNG (gold wheat/tech symbol on black background)
- Black background handled with `mix-blend-mode: screen` on the `<img>` tag
- Paired with styled HTML text: "Sanabil" (white, 700) + "TECHNOLOGIES" (gold, 500, uppercase)
- Navbar: icon 48px + text lockup | Mobile: icon only 36px
- Footer: icon 40px + text lockup (slightly smaller)
- Favicon: same icon image

### Brand Voice
- Confident, not arrogant
- Technical, not jargon-heavy
- Premium, not flashy
- AI-native positioning: "We didn't bolt AI onto an old process — we rebuilt everything around it"
- Wheat/harvest metaphor: plant → cultivate → harvest = idea → development → success

---

## Page Architecture (Top to Bottom)

### 1. Navbar (Fixed)
- **Behavior:** Two-state — transparent at top → frosted glass on scroll (after 80px)
- **Scrolled state:** `rgba(10,37,64,0.75)`, `backdrop-filter: blur(16px)`, gold border-bottom
- **Transition:** `all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Height:** 72px desktop, 64px mobile
- **Mobile:** hamburger menu → full-screen glass overlay
- **CTA:** "Book a Meeting" gold button

### 2. Hero Section (100vh)
- **Background:** Dark navy gradient + tsParticles neural network
- **Badge:** `🌾 Sanabil (سنابل) — Arabic for "Ears of Wheat"`
- **Headline:** "We Plant Ideas." / "AI Cultivates Them." (gold shimmer) / "You Harvest Success."
- **CTAs:** "Plant Your Next Idea" (gold) + "Explore Our Services" (outlined)
- **Mobile:** buttons stack vertically, reduced particles

### 3. Trusted By / Client Marquee
- **Background:** `#0A2540` hardcoded on `<section>` (critical — was persistent bug)
- **Layout:** CSS `@keyframes marquee` infinite scroll
- **Two rows:** Primary (left) + secondary (right, smaller)
- **Edge fades:** CSS `mask-image` gradient
- **Ambient:** Horizontal gold light sweep

### 4. Services — "What We Build" (Interactive Tabs)
- **Layout:** Vertical tabs (left) + detail panel (right)
- **6 services** with tech stack pills and AI badges
- **Auto-cycles** 6s with progress bar, pause on hover
- **Each service has unique animated visual**
- **Mobile:** Scrollable pill bar + full-width panel
- **Ambient:** Twinkling micro-dots constellation

### 5. Why Teams Choose Sanabil (Focus Card)
- **Layout:** One spotlight card + 6 small selector cards
- **Auto-rotates** 2s with progress bar, pause on hover
- **6 features** with decorative animated visuals + AI badges
- **Mobile:** Accordion (tap to expand/collapse)
- **Ambient:** Slow-drifting gradient orbs (gold + blue)

### 6. Stats ("Impact Dashboard")
- **4 glass cards** with animated count-up numbers
- **Decorative backgrounds** per card + live pulse dot
- **Mobile:** 2×2 grid
- **Ambient:** Dot grid + vertical light sweep

### 7. Process — "How We Build" (Vertical Timeline)
- **Scroll-activated gold fill** on timeline line
- **5 AI-native steps** with badges showing metrics
- **Pulsing dot** at gold fill leading edge
- **Mobile:** Timeline far left (12px)
- **Ambient:** SVG circuit board pattern (static)

### 8. Testimonials (Spotlight Carousel)
- **Center spotlight card** + dimmed side cards
- **Auto-rotates** 6s, stars animate on spotlight change
- **Swipe on mobile**, dots navigation
- **Ambient:** Centered radial spotlight glow

### 9. Contact / CTA
- **Shimmer headline:** "Let's Build Something Exceptional"
- **Glass form** (gold focus rings) + **glass info card**
- **Animated success state** (SVG checkmark draws itself)
- **Mobile:** Single column stack
- **Ambient:** Gradient orbs + film grain texture

### 10. Footer
- **Gradient fade** to `#030912`
- **4 columns** with gold dot headings, arrow hover links
- **Back-to-top button**, glass social icons
- **Mobile:** Single column stack
- **Ambient:** Top-edge gold mist

---

## Design System — Reusable Patterns

### Glass Card
```css
background: rgba(255, 255, 255, 0.02-0.04);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 20-24px;
backdrop-filter: blur(10-12px);
/* Hover: gold border, lift, shadow */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Gold AI Badge (⚡)
```css
background: rgba(229, 168, 33, 0.08-0.1);
border: 1px solid rgba(229, 168, 33, 0.2-0.25);
border-radius: 20px;
padding: 6px 14px;
font-size: 12-13px;
color: #E5A821;
```

### Auto-Rotation + Pause-on-Hover + Progress Bar
Used in: Services, Why Us, Testimonials
```tsx
useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, intervalMs);
  return () => clearInterval(interval);
}, [isPaused]);
```

### Easing Curves
- Scroll: `cubic-bezier(0.4, 0, 0.2, 1)`
- Navbar: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Hover: `cubic-bezier(0.16, 1, 0.3, 1)`

---

## Known Issues & Gotchas

1. **Client Marquee white background** — hardcode `background: '#0A2540'` on `<section>`, check all parents
2. **Logo black background** — always `mix-blend-mode: screen` on `<img>`
3. **iOS input zoom** — all inputs must be `font-size: 16px+`
4. **Clock SVG `transform-origin`** — must match SVG center point, not element center
5. **Marquee animation** — use CSS `@keyframes`, not Framer Motion (it overrides)
6. **`backdrop-filter` fallback** — `@supports not (backdrop-filter: blur()) { solid bg }`
7. **Mobile overflow** — `overflow-x: hidden` on all section containers

---

## Dummy Data (Replace Before Launch)

| Placeholder | Replace With |
|---|---|
| contact@sanabiltechnologies.com | Real email |
| +1 (555) 123-4567 | Real phone |
| Dubai, UAE / Cairo, Egypt | Real locations |
| Client logos (Clearbit URLs) | Real client logos |
| Calendly link (#) | Real booking URL |
| Social links (#) | Real social URLs |
| Testimonial names | Real testimonials |
| Nav links (#) | Real page URLs |

---

## File Structure (Expected)

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ClientMarquee.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Stats.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

---

## Development Notes

- Built iteratively through 22 Lovable prompts (full history in local `Sanabil_Landing_Page_Prompt.md`)
- Maintain the dark glass + gold design system consistently
- Every interactive section uses: auto-rotation + pause-on-hover + progress bar
- Every card uses the glass card pattern
- Every title uses: gold line + white title + muted subtitle
- AI-native narrative must be consistent across all copy
- Wheat/harvest metaphor in: hero, badge, CTA button, footer tagline
