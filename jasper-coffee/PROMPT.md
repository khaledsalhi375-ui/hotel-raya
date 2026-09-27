# Build Prompt — Jasper Café Doha (Demo Website)

> Copy everything below the line into Claude (or any AI coding tool) to generate the site.
> Facts marked **[verify]** came from public posts and delivery listings and could not be
> confirmed against the café's own pages. Check them with the owner before showing the demo.

---

## Role & goal

You are a senior front-end designer-developer. Build a **polished, responsive, bilingual (English / Arabic) demo website** for **Jasper Café**, a modern specialty coffee café in Doha, Qatar. The site is a sales demo for the owners, so it must look premium and finished at first glance.

## About the business

- **Name:** Jasper Café (Instagram: [@jasper.doha](https://www.instagram.com/jasper.doha/))
- **What it is:** Modern café in Doha serving specialty coffee, fresh bakes, sweet treats, light bites and hot food. Halal certified. **[verify]**
- **Positioning line (use or adapt):** "Fresh bakes, specialty coffee and light bites, with a view that speaks for itself."
- **Signature drink:** **Jasper Dream**, described by the café as "a magical concoction that will transport your senses" and "a unique and unforgettable coffee experience, crafted exclusively at Jasper."
- **Personality:** Warm, modern, social, Instagram-friendly, with a waterfront and skyline feel at The Pearl. There is a resident café cat, which works well as a small friendly detail (for example, in the About section). **[verify]**

### Branches

| Branch | Location | Hours |
|---|---|---|
| **Mall of Qatar** | Mall of Qatar, Al Rayyan | Daily 7:00 AM – 12:00 AM **[verify]** |
| **The Pearl (UDC – The Oyster)** | The Oyster, UDC, The Pearl-Qatar. Waterfront with Doha skyline views, valet parking available | Daily 8:00 AM – 12:00 AM **[verify]** |

Each branch card needs a "Get directions" button (Google Maps link, with placeholder `href="#"` until the real links are added) and a "Call" button (placeholder number `+974 0000 0000`, clearly marked as TODO).

### Menu (demo selection)

Use these real item names from public listings and reviews. **Prices are placeholders in QAR**. Show a small "Prices are indicative" note.

- **Signatures:** Jasper Dream (signature), Iced Latte, Matcha Latte, Karkade (hibiscus) drink
- **Coffee:** Espresso, Americano, Flat White, Cappuccino, Spanish Latte, V60 / pour-over
- **Breakfast & light bites:** Rusk Benedict with hash browns, Feta Cheese Sandwich, French Toast Bread
- **Sweets & bakes:** Tiramisu Loaf, Banoffee Montage, Strawberry Shortcake, Dulce de Leche dessert
- **Cakes:** Whole cakes available for pre-order. Add a "Pre-order a cake" call to action.

### Ordering and social links

- Delivery: **Talabat** and **Snoonu** (outlined buttons with the platform name as text; do not recreate their logos)
- Social: Instagram @jasper.doha, TikTok (placeholder link)

## Pages and sections (single page with anchor navigation)

1. **Sticky header:** Wordmark "Jasper" · Menu · Branches · About · Order. Include an **EN | ع** language toggle. Show a hamburger menu below 768px.
2. **Hero:** Full-bleed photo (latte art or the Pearl waterfront at golden hour). Headline, one-line subhead, primary button "View menu" and secondary button "Find us". Also show an "Open now / Closed" status for the nearest branch, calculated from today's hours in the Asia/Qatar time zone, with both a text label and an icon.
3. **Signature spotlight:** Jasper Dream in a large editorial layout (image plus copy), with 2–3 other signature drinks beside it.
4. **Menu:** Tabbed categories (Signatures · Coffee · Breakfast · Sweets). Each item card shows a photo, name, short description and price, with prices in tabular figures. The tabs must be keyboard accessible (proper `role="tablist"` pattern).
5. **Two branches:** Two cards, each with a photo, address, hours, directions button, call button and a feature list (for example, "Waterfront views · Valet parking" for The Pearl).
6. **About / our story:** Short warm copy about the café. Mention the resident cat as a playful touch. Leave a spot for the owners' real story.
7. **Social proof:** 3 short review quotes, clearly labelled as sample reviews, plus an Instagram-style 6-photo grid linking to @jasper.doha. If you use a carousel, give it pause and previous/next controls and stop it for users who prefer reduced motion.
8. **Pre-order and delivery call to action:** "Celebrating? Pre-order a cake" (a form with visible labels for name, phone, date, cake and notes, with inline validation and a success message) plus Talabat and Snoonu buttons.
9. **Footer:** Both branches with hours, social links, © Jasper Café, and "Demo website — content subject to confirmation."

## Design system (generated with UI/UX Pro Max, then adjusted)

- **Style:** Warm, editorial and photo-led, with a minimal feel, generous whitespace and soft rounded corners (12–16px). Do not use playful block colors or glassmorphism, since the café is premium and modern.
- **Colors (Bakery/Café palette):**
  - `--color-primary: #92400E` (espresso brown) · `--color-on-primary: #FFFFFF`
  - `--color-secondary: #B45309` (caramel)
  - `--color-background: #FEF3C7` (cream). Use it for section bands, and use `#FFFBF5` as the main page background.
  - `--color-foreground: #78350F` · `--color-card: #FFFFFF` · `--color-border: #FDE68A`
  - `--color-muted-foreground: #475569` · `--color-ring: #92400E`
  - Define colors as semantic CSS variables, not raw hex values in components. Body text must meet 4.5:1 contrast.
- **Typography:**
  - English: **Playfair Display** for headings and **Karla** for body text
  - Arabic: **Noto Naskh Arabic** for headings and **Noto Sans Arabic** for body text
  - Load from Google Fonts with `display=swap`. Body text is 16px minimum with 1.6 line height.
- **Icons:** One SVG set only (Lucide or Phosphor), used for clock, map pin, phone, coffee cup and so on. No emojis.
- **Motion:** Subtle only. Sections fade and rise as they scroll into view, and menu cards appear with a 40–60ms stagger. Animate only transform and opacity, keep durations between 200 and 400ms, and turn all motion off when `prefers-reduced-motion` is set.
- **Spacing:** 8px scale with spacious section padding (64–96px on desktop and 48px on mobile). Content max-width is about 1200px.

## Bilingual and RTL requirements

- The language toggle switches all text and sets `<html lang="ar" dir="rtl">`. Use CSS logical properties (`margin-inline-start` and so on) so the layout mirrors correctly.
- Keep all text in one translations object (`en` / `ar`). Remember the chosen language in `localStorage` (wrapped in try/catch).

## Technical requirements

- **Stack:** Static site using semantic HTML, Tailwind CSS and a small amount of vanilla JS. It needs no build step and can be deployed on Vercel or Netlify as-is. Put everything under `jasper-coffee/` (`index.html`, `assets/`).
- **Images:** Use high-quality Unsplash coffee and café photos as placeholders, with descriptive `alt` text, `width`/`height` or `aspect-ratio` set, and `loading="lazy"` below the fold. Add a comment marking each placeholder so it can be swapped for Jasper's real Instagram photos.
- **SEO:** Title "Jasper Café — Specialty Coffee in Doha | Mall of Qatar & The Pearl", a meta description, Open Graph tags, and `schema.org/CafeOrCoffeeShop` JSON-LD for both branches.
- **Accessibility:** Include a skip link, one `<h1>` with headings in order, visible focus rings, 44px minimum tap targets, labelled form fields, and errors announced with `aria-live`.
- **Responsive:** Test at 375, 768, 1024 and 1440px with no horizontal scrolling. Use `min-h-dvh` for the hero instead of `100vh`.

## Acceptance checklist

- [ ] Looks premium on mobile first
- [ ] Menu tabs, language toggle and the "Open now" status all work
- [ ] The Arabic RTL layout mirrors correctly with no broken alignment
- [ ] Lighthouse scores are 90 or higher for Performance, Accessibility, Best Practices and SEO
- [ ] Every placeholder (prices, phone numbers, map links, reviews, photos) is marked `TODO` in the code
