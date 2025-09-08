
# Page-level structure (from the live demo)

* *Header / Mega-menu*: multi-level nav with “Home” (many homepage variants), “Pages” (About, Team, Projects, Careers, Case Studies, Pricing, Gallery, FAQ, Typography, 404), “Services”, “Shop”, “Blog”, and “Contacts”. The demo also includes a “Get in touch” quick CTA and an off-canvas contact panel. ([Artureanec][1])

* *Homepage sections (order as seen on “Neural Networks”/similar demo page):*

  1. Hero, 2) Services (feature cards), 3) About, 4) Features (value props), 5) Pricing, 6) Testimonials, 7) FAQ, 8) Blog preview, 9) Contact/Lead form, 10) Footer. ([Artureanec][1])

* *Theme widgets & content blocks* (Elementor in WP; map to your components): Heading, Icon Box, Image Carousel, Price Item, Projects Listing, Services Listing, Special Text, Step Carousel, Team Members, Testimonial Carousel, Video Button, Products, WPForms/MailChimp, plus a Content Slider. Use these as naming inspiration for your React components. ([Artureanec][2])

---

# Section-by-section spec (layout + content)

## 1) Hero / Intro

*Goal:* Bold value prop + primary action.
*Layout:*

* Full-bleed section; optional background image/gradient.
* Left/center column with H1, short subhead, *Primary CTA* (solid) and optional *Secondary CTA* (ghost).
* Optional *Video Button* (opens modal).
* Optional decorative image on the side/below.
  *Widgets to mirror:* ContentSlider or Heading + Button + VideoButton. ([Artureanec][2])

## 2) Services / What we do

*Goal:* Surface core offerings quickly.
*Layout:*

* *3–4 column grid* (cards with icon, title, 1–2 line description).
* Light hover elevation or icon animation.
  *Widget to mirror:* IconBox or ServicesListing (if you want it CMS-driven later). ([Artureanec][2])
  *Seen on demo:* “AI Strategy and Consulting”, “Machine Learning Solutions”, “NLP”, etc. ([Artureanec][1])

## 3) About

*Goal:* Short story + trust.
*Layout:*

* *Two-column split*: media (image/illustration) + text stack (H2, paragraph, bullets), optional CTA.
  *Widget to mirror:* Heading + basic content. ([Artureanec][1])

## 4) Features / Value props

*Goal:* Why choose us.
*Layout:*

* *2–3 column grid* of concise “value tiles” (title + one sentence).
* Keep line length short for scanability.
  *Widget:* IconBox or a simple feature list. ([Artureanec][1])

## 5) Pricing

*Goal:* Plan comparison + conversion.
*Layout:*

* *3 plans* side-by-side (Basic / Premium highlighted / Enterprise).
* Each card: plan name, short tagline, price, checklist, CTA.
* Emphasize the middle card with accent or scale.
  *Widget:* PriceItem. ([Artureanec][2])

## 6) Testimonials

*Goal:* Social proof.
*Layout:*

* *Carousel* of quotes (text, avatar, name, role/company).
* Optionally show a “happy clients” metric.
  *Widget:* TestimonialCarousel. ([Artureanec][2])

## 7) FAQ

*Goal:* Objection handling.
*Layout:*

* *Accordion* list (question → answer).
* Keep answers 2–4 lines each.
  *Widget:* (No named FAQ widget in list; build custom accordion).
  *Seen on demo:* “What is AI?”, “How does ML relate to AI?” etc. ([Artureanec][1])

## 8) Blog preview

*Goal:* Content/SEO surface.
*Layout:*

* *3-card grid*: thumbnail, category/date, title, “More articles” link.
  *Widget:* BlogListing (doc lists “Blog Listing”). ([Artureanec][2])

## 9) Contact / Lead capture

*Goal:* Convert and connect.
*Layout:*

* *Two-column*: contact details + form (Name, Email, Subject, Message).
* Social links row, phone, address, email block.
  *Widgets:* WPForms / MailChimp in WP; in Next, wire to your API/email service. ([Artureanec][2])

## 10) Footer

*Goal:* Wayfinding + credibility.
*Layout:*

* *3–4 columns*: About/brand, Quick links, Services list, Contact/social.
* Bottom bar with copyright. ([Artureanec][1])

---

# Auxiliary/Inner pages you may replicate

From the demo nav: *About, Team (list + single), Projects (grid + modern + single), Careers (list + single), Case Studies (list + single), Services (list + single), Pricing plans, Galleries (grid & masonry), FAQ, Typography, 404, Shop (PLP/PDP/Cart/Checkout/Account), Blog (Classic/Grid/Single), Contacts.* ([Artureanec][1])

The docs show *custom post types* the theme uses (useful for your content models if you later add a headless CMS): *Projects, Team Members, Careers, Services, Case Studies.* ([Artureanec][2])

---

# Component catalog (map these to React components)

The official docs enumerate reusable blocks you can parallel 1:1 in your design system:

* Heading, Button, ContentSlider, IconBox, ImageCarousel, PriceItem, ProjectsListing, ServicesListing, SpecialText (for full-width highlight lines/stats), StepCarousel (for process), TeamMembers, TestimonialCarousel, VideoButton, Products, WPForms, MailChimp. ([Artureanec][2])

*Tip:* Even if you won’t use all of them day one, keeping names aligned makes handoff and future parity easier.

---

# Visual language & motion (what to copy)

* *Type:* Bold sans-serif display for headings; readable body (Inter/Montserrat-like). (Typography settings are emphasized in docs.) ([Artureanec][2])
* *Color:* Light sections alternating with darker “contrast” bands; strong accent for CTAs (docs describe a *Standard/Contrast* color system and button states). ([Artureanec][2])
* *Grid/Spacing:* Tall section padding; 3–4 column cards on desktop → stack on mobile; clear visual rhythm as on the demo. ([Artureanec][1])
* *Motion:* Subtle card hovers; carousels for testimonials/projects/steps (docs note Owl/Slick usage; in Next use Swiper/Keen). ([Artureanec][2])

---

# Suggested Next.js layout (quick blueprint)


<Header />        // mega-menu, sticky optional
<Hero />
<Services />
<About />
<Features />
<Pricing />
<Testimonials />
<FAQ />
<BlogPreview />
<ContactLead />
<Footer />


Each section can be a *server component* with a simple props interface:

* Hero: { title, subtitle, ctaPrimary, ctaSecondary, videoUrl, media }
* Services: { items: \[{ icon, title, text, href }] }
* Features: { items: \[{ title, text, icon? }] }
* Pricing: { plans: \[{ name, price, features\[], cta }] }
* Testimonials: { items: \[{ quote, name, role, avatar }] }
* FAQ: { items: \[{ q, a }] }
* BlogPreview: { posts: \[{ title, href, date, category, image }] }
* ContactLead: { formAction, contacts: { phones\[], email, address }, socials\[] }

---

# Reference (for parity)

* *Live demo structure* (sections, menus, content blocks). ([Artureanec][1])
* *Official docs* (widgets list, color/typography systems, carousels, forms). ([Artureanec][2])
* *Widget/Block names* you can mirror in code. ([Artureanec][2])

[1]: https://demo.artureanec.com/themes/neuros/ "Neuros"
[2]: https://demo.artureanec.com/documentation/Neuros/ "Neuros — Artificial"


# tech stack

{
  "name": "bitcoin-v1-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.363.0",
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^6.19.0",
    "@typescript-eslint/parser": "^6.19.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0",
    "postcss": "^8.4.0",
    "prettier": "^3.2.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
# End of file

# color system

Official brand green

Primary: #35D687 (RGB 53,214,135). 
Brandfetch

Extended palette (practical for UI)

Primary (brand): #35D687 – buttons, links, highlights. 
Brandfetch

Primary hover: #2FC178

Secondary teal: #1FBFA2

Accent lime: #7AF0B0

Dark gradient start: #071B16

Dark gradient end: #0E2E24

Surface dark: #0B0F0D

Card/raised surface: #111816

Borders/dividers: #1D2A25

Text on dark: #E7F6EF

Muted text: #95B7AB





