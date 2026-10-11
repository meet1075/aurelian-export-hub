# Aurelian Export Hub

Build a premium, multi-page B2B marketing website for "Aurelian International", an India-based trading and export firm that supplies high-quality dehydrated vegetable and fruit powders and agricultural products to global buyers (importers, food manufacturers, distributors, private-label brands).

The site should feel like a world-class international export brand: calm, trustworthy, luxurious and editorial. Think premium food-ingredient supplier, not a generic template.

────────────────────────
1. BRAND & DESIGN SYSTEM
────────────────────────
- Style: premium, minimal, editorial, lots of whitespace, B2B-trustworthy.
- Colors (define as CSS variables / Tailwind tokens):
  - Deep forest green: #0F2A1D (primary dark sections, header, footer)
  - Darker green: #0A1F15
  - Sage / leaf green accent: #6F9B4A (italic accent words)
  - Warm cream: #F6F2E9 (light sections)
  - Soft white: #FBF9F4 (cards)
  - Gold: #B8913F (CTAs, thin lines, small labels, icons)
  - Text on light: #1B2A22, muted #5C6B62; text on dark: #F4F1E8, muted #A9B8AC
- Typography:
  - Headings: Playfair Display (large, tight letter-spacing, light-to-regular weight)
  - Body/UI: Inter or DM Sans
  - Signature detail: in big headlines, one key word is set in italic sage green (e.g., "Nature, *beautifully* presented.")
  - Small uppercase gold eyebrow labels with wide letter-spacing and a short gold line before them (e.g., "—— OUR PRODUCTS")
- Buttons: solid gold primary button (dark text) and outlined secondary button; subtle arrow/external icon; smooth hover (slight lift + color shift).
- Cards: soft rounded corners (16–20px), thin border, very soft shadow, hover lift with a thin gold border.
- Alternate dark-green and cream sections to create rhythm.
- Nav links show small gold corner-bracket marks on the active/hovered item.
- Include a dark/light mode toggle in the header. Default is the light/cream + dark-green look.
- Fully responsive (mobile-first), accessible contrast, semantic HTML, fast loading with lazy-loaded images.

────────────────────────
2. ANIMATION & INTERACTION
────────────────────────
- Smooth scroll, fade-up on scroll reveal for sections/cards (staggered).
- Hero: subtle parallax on the product image, gentle floating animation.
- Sticky header that turns solid dark green with a slim scroll-progress bar in gold/green on scroll.
- Animated counters in the stats strip.
- Product cards: image zoom on hover.
- Respect prefers-reduced-motion.

────────────────────────
3. SITE STRUCTURE (pages / routes)
────────────────────────
Header: logo (monogram "AI" in a gold circle + wordmark "AURELIAN" with "INTERNATIONAL" in small spaced caps), nav: Home · About · Products · Quality & Export · Contact, theme toggle, gold "Get a Quote" button.
Footer: logo, short tagline, quick links, product categories, contact details, social icons, "© Aurelian International. All rights reserved."

HOME
1. Hero (dark green, full viewport): eyebrow "DEHYDRATED VEGETABLE & FRUIT POWDERS · EXPORTERS FROM INDIA". Headline: "Nature's finest, *dehydrated* and delivered worldwide." Subtext: 1–2 lines about consistent quality, hygienic processing and reliable export. Buttons: "Explore Products" (gold) and "Request a Quote" (outline). Right side: a large premium product visual (a pouch/bowl of vibrant powder, moringa leaves, onions) with soft glow. Small "Scroll to explore" indicator.
2. Trust strip: 4 animated stats (placeholders: "20+ Countries Served", "25+ Products", "100% Natural", "Bulk & Private Label") plus a row of certification-style badges (FSSAI, ISO, HACCP, APEDA, IEC, shown as "Certifications available on request" placeholders, not claimed as verified).
3. About teaser (cream): "Rooted in *quality*." Short company story + "Learn more" link, with a layered image composition.
4. Featured Products (cream): "Naturally *chosen*." Grid of 6–8 product cards with category filter chips (All / Vegetable Powders / Fruit Powders / Herbal & Superfoods). Each card: image, name, 1-line description, a "Enquire" link.
5. Why Aurelian: "A partner you can *plan around*." 6 icon cards: Direct farm network, Made to spec (mesh, colour, packaging), Export paperwork handled, Reliable dispatch, Responsive team, Private label ready.
6. How we work / Export process: 5-step horizontal timeline: Sourcing → Processing & Dehydration → Quality Testing → Packaging → Global Shipping.
7. Global reach: stylized world map with gold dots on key regions (Middle East, Europe, USA, Southeast Asia, Africa) and a short line on markets served.
8. Industries we serve: icons for Food Manufacturing, Snacks & Seasonings, Soups & Sauces, Nutraceuticals, Bakery, Baby Food, Retail/Private Label.
9. Testimonials/Trust (use clearly placeholder text and a note to replace with real client quotes).
10. CTA banner (dark green + gold): "Let's source *better* together." with "Get a Quote" button.

ABOUT
- Page hero, company story, mission/vision, values (Quality, Integrity, Reliability, Sustainability), what makes us different, sourcing philosophy, and a "Our commitment" section. Use big italic-accent headlines and editorial layouts.

PRODUCTS
- Hero with search field and category filter chips.
- Product grid of ~16 products across categories:
  - Vegetable powders: Onion (White, Pink/Red), Garlic, Tomato, Spinach, Carrot, Beetroot, Potato, Green Chilli, Red Chilli, Ginger
  - Fruit powders: Mango, Banana, Papaya, Pineapple, Lemon, Amla
  - Herbal & superfoods: Moringa leaf powder, Turmeric, Wheatgrass, Curry leaf
- Each product has a detail modal or page with: image, description, typical specs (mesh size, moisture %, colour, shelf life, packaging 25 kg bags/drums/custom, MOQ shown as "On request"), key applications, and an "Enquire about this product" button that pre-fills the contact form with the product name.
- Include a note: "Specifications can be customised to your requirement."

QUALITY & EXPORT
- Quality assurance process (testing, hygiene, traceability, lab reports, COA available).
- Packaging options with visual cards (bulk bags, drums, retail pouches, private label).
- Export capabilities: documentation (COO, phytosanitary, packing list, invoice, etc.), Incoterms (FOB, CIF, CFR), shipping modes, typical lead times, sampling policy.
- FAQ accordion for buyers (MOQ, samples, payment terms, shelf life, customisation, shipping).

CONTACT
- Two-column layout: left, contact details (company name, address, phone, email, WhatsApp, business hours, plus placeholders to fill in); right, an enquiry form with fields: Name, Company, Country, Email, Phone, Product(s) of interest (multi-select), Estimated quantity, Message, and a submit button. Add validation, a success state, and a toast message. Include a map embed placeholder.
- A floating green WhatsApp chat button on all pages.

────────────────────────
4. CONTENT & IMAGERY
────────────────────────
- Use high-quality, realistic, premium food photography style placeholders (powders in dark bowls, fresh vegetables/fruits, farm scenes, warehouse/packaging, shipping containers). Use cohesive color grading and consistent lighting.
- Write polished, professional B2B copy. Avoid fake certifications, fake client names or invented statistics; mark all such items as placeholders to be updated.
- Keep paragraphs short and scannable.
──────────────────────── 
5. TONE
 ──────────────────────── 
Confident, refined, trustworthy. The site should make an international buyer feel they are dealing with a serious, professional, export-ready company. Start by building the design system and the Home page first, then the remaining pages.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aurelian-export-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/95dfba2b-2607-4c61-8fbc-39a35a77fa2f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
