# 06 - Template analysis: "Psychologist" (psychologist-128.webflow.io)

Read-only analysis of the Webflow template that the Ilchester Dental theme is built on. Prepared for the Mill Pond Dental (mpdental.ca) redesign build.

- Template: Psychologist - Webflow HTML website template, by 128.digital (flowstar on Webflow Marketplace). Preview: https://psychologist-128.webflow.io/
- Analysed: 2026-11-06. Method: curl of every page's HTML and the published CSS/JS, plus Playwright screenshots (1440 and 390) and computed-style probes. No forms were submitted.
- Screenshots: `C:\Users\reala\OneDrive\Desktop\remedo\Mill Pond Dental\analysis\screenshots\template-psychologist-128\` (62 full-page PNGs named `<page>-desktop.png` / `<page>-mobile.png`, plus `mobile-menu-open.png` and `home-1-tablet768.png`).
- Screenshot caveats: desktop captures are 1425px wide (the scrollbar takes 15px of the 1440 viewport; mobile is 375 of 390). The blue "Boost your Webflow" popup and the "More Templates / Buy this Template" tabs are demo-only overlays and are not part of the template system. Scroll-triggered fade-ins can leave some cards half-faded in full-page captures (for example the team row on Home 1).

---

## 0. Headline findings

1. It is a calm, soft-green "clinic" system: deep forest green (#163c3d) + pale sage (#e2eddf) + white. One serif display face (Castoro) on a rounded geometric sans (Lexend). 12px radius on almost everything, almost no shadows, no gradients.
2. The structure is simple and repeatable. Every inner page follows the same recipe: fixed white navbar, a hero or banner, 2 to 4 alternating content sections (white / sage / dark green), a dark-green "Don't Hesitate, Contact Us" band that is physically part of the footer, then the footer. Mixing and matching sections is easy.
3. Three home pages share one component pool. Home 1 is a "card hero" (rounded dark panel with a 4-photo collage), Home 2 is a dark hero with stats, a rounded video-style image and a logo strip, Home 3 is a full-bleed photo hero (100vh) with a booking form near the bottom. Ilchester is presumably a re-skin of one of these (the other agent confirms which).
4. 24 static pages plus 6 CMS templates (services, sessions, team members, success stories, blog posts, blog categories) plus a 404. Total about 31 distinct layouts and about 55 published URLs including CMS items.
5. The funnel is a single repeated CTA, "Contact Us". It appears in the navbar on every page, in the hero, and in the footer band on every page. A phone number sits in the navbar too. A real booking form (the `/appointment` form) is also embedded on Home 3, FAQ, Services and Appointment pages.
6. Build quality is "template-grade", not "agency-grade". Class naming is custom and inconsistent (not Client-First), several CMS list classes are per-page copies, there are leftover classes from the author's other templates, 3 of 9 colour variables are marked deleted, and there are small bugs (listed in section 8). Plan to rename, consolidate and tidy rather than ship it as is.
7. Dental fit is good structurally (services, team, reviews, FAQ, contact, blog all map directly), but the content model is therapy-flavoured (Sessions, Success Stories, Pricing in $/month) and it lacks dental-specific blocks (insurance/CDCP, emergency, new patient, hours and map, before/after, gallery).

---

## 1. Page inventory

### 1.1 Static pages (24, all listed in sitemap.xml)

| # | URL | Title in preview | Purpose / layout summary |
|---|-----|------------------|--------------------------|
| 1 | `/` | Landing (demo selector) | Template sales page only: demo thumbnails (Home 1-3), performance bars, key features, inner page thumbnails. NOT a real home page; discard. |
| 2 | `/home-1` | Home 1 | Card hero (dark rounded panel + 4-photo collage), 3 services w/ icons, "Our Center" image + 2 stats, sessions list, team grid, testimonial slider, blog grid, footer band. |
| 3 | `/home-2` | Home 2 | Dark hero w/ H1 left + 2 stats right, wide rounded image w/ play button (lightbox), client logo strip, 3 sage session cards overlapping the dark band, "Why choose" 3 mini-blocks + image, 2 big service cards, testimonial slider (type 2), 3 team cards, blog grid, footer band. |
| 4 | `/home-3` | Home 3 | Full-bleed photo hero (min-height 100vh, 50% black overlay), "How can we help you?" 5 numbered chips, doctor bio, dark service list w/ stats, "Free 15-min consult" banner, 3 session cards, testimonial slider, "Why choose", booking form, blog grid. |
| 5 | `/about-us-1` | About Us 1 | Dark inner banner, image + 2 stats, session list, "Who we are" dark stats band, team, testimonial slider, blog. |
| 6 | `/about-us-2` | About Us 2 | Photo banner (overlay), service cards on sage, long-form text + checklist, 4 stat counters (22 experts, 30+ yrs, 895+, 425+), testimonials, blog. |
| 7 | `/about-us-3` | About Us 3 | Hero w/ 2 overlapping photos, "30+ Years" big number, dark team section, numbered "how can we help" chips, testimonials, blog. |
| 8 | `/our-team` | Our Team | Dark banner, 3-col team grid (6 members), 4 stat counters, image + text, testimonials. |
| 9 | `/pricing` | Pricing | White banner, 3 sage plan cards (Basic / Group / Advances, $/month, "Buy Now"), review slider, 3 feature chips, logo strip. |
| 10 | `/faq` | FAQ's | White banner, accordion (4 Qs, sage section, white cards), booking form. |
| 11 | `/testimonials` | Testimonials | Dark banner, two different slider styles stacked (slider type 2 and the larger "What are they talking about" slider). |
| 12 | `/services` | Services | White banner, "What We Do" sage tag box, 2-col dark band w/ 6 image service cards, booking form, testimonials. |
| 13 | `/success-stories` | Success Stories | Dark banner, "Results of therapy" intro w/ checklist, 6 alternating image/text rows (zig-zag) on sage, 4-stat dark band. |
| 14 | `/sessions` | Sessions | Photo banner, tabbed filter (All / Therapy / Consultations / psychology / Relationship) over a list, dark CTA strip, image + text. |
| 15 | `/contact-us` | Contact Us | Photo banner, contact details + socials, message form (name, email, message), logo strip, 3 "cozy offices" cards (image + address). |
| 16 | `/appointment` | Contact Us 2 | Dark banner, booking form (name, phone, email, "Booking for" price select, "Pick a service" select) + FAQ accordion. |
| 17 | `/blog-1` | Blog 1 | Dark banner + 3-col card grid (6 posts). |
| 18 | `/blog-2` | Blog 2 | Featured post banner + "Recent posts" list on the right, then grid of 4 on sage. |
| 19 | `/blog-3` | Blog 3 | Dark banner + 2-col grid of posts with a right sidebar (search, recent posts, category chips). |
| 20 | `/search` | Search Results | Webflow site-search results page (sample results; real results need CMS/Business hosting). |
| 21 | `/coming-soon` | Coming Soon | Standalone (no nav/footer): logo, headline, email capture form, image. |
| 22 | `/templates/changelog` | Changelog | Template-vendor page (remove). |
| 23 | `/templates/licensing` | Licensing | Template-vendor page: image sources (Unsplash, Freepik), fonts, icons. Remove, but keep a credits note if any stock image is retained. |
| 24 | `/templates/style-guide` | Style Guide | Full type scale, colour swatches, grids, spacing, button set. Useful as the starting point for Mill Pond's own style guide. |

### 1.2 CMS template pages (6) + utility

| Collection | List page(s) | Template URL pattern | Sample items |
|------------|--------------|----------------------|--------------|
| Services | `/services`, homes, about-us-2 | `/services/{slug}` | 6 (e.g. personal-individual-therapy) |
| Sessions | `/sessions`, homes, about-us-1 | `/sessions/{slug}` | 4 (depression-problem, couple-counseling, couple-therapy, dating-relation) |
| Team Members | `/our-team`, homes, about pages | `/team-members/{slug}` | 6 |
| Success Stories | `/success-stories` | `/success-stories/{slug}` | 6 |
| Blog Posts | blog-1/2/3, homes | `/blog-posts/{slug}` | 6 |
| Post Categories | filter chips / sidebar | `/posts-categories/{slug}` | 2 (Mental Health, Relationships) |
| 404 | n/a | any unknown URL | "404 / Something's not right" + Back to homepage button (no nav/footer) |

Total: 24 static + 6 CMS templates + 404 = 31 distinct layouts. Counting CMS items there are about 55 published URLs.

Notes: the sitemap lists no Password page. The mega menu has copy-paste bugs ("About Us 2" and "About Us 3" both link to `/about-us-1`; the Team Member link points at a CMS item). The Appointment page title is "Contact Us 2".

---

## 2. Design system

### 2.1 Colour (CSS custom properties on `:root`)

| Variable | Hex | Role |
|----------|-----|------|
| `--primary` | #163c3d | Deep forest/teal green. Headings, body text colour, primary buttons, dark sections, navbar text, footer background. |
| `--primary-light` | #e2eddf | Pale sage. Alternate section background ("light-background"), cards, blockquotes, pricing cards, tags, mobile menu panel. |
| `--paragraph-gray` | #535b53 | Body paragraph colour, link hover colour. |
| `--white` | #ffffff | Page background, text on dark, secondary buttons on dark. |
| `--dark-grey` | #475467 | Style-guide only. |
| `--primary-dark` | #0e0e0e | Flagged "deleted" in the CSS (orphaned variable). |
| `--light-gray` | #f9f9fa | Orphaned/deleted. |
| `--dark-gray` | #afafaf | Orphaned/deleted. |
| `--small-img-radius` | 5px | Only non-colour variable. |

Other literals in the CSS: #535b5380 (50% grey for borders on inputs and hover underline), #163c3d1a (10% green wash used in image overlays), #00000080 (50% black image overlay), #d3eccc (a lighter green used in a few spots). Overall palette = 3 working colours, which is why swapping to a Mill Pond palette is trivial: change `--primary`, `--primary-light`, `--paragraph-gray` and everything follows. Check that the dark-green + sage pairing still meets contrast after re-colouring (white on #163c3d is about 12:1, fine).

### 2.2 Typography

- Headings: **Castoro** (Google Font, Regular 400 only; no bold, no italic). Sentence flow is serif, light, editorial.
- Body, nav, buttons, UI: **Lexend** (300/400/500/600/700 loaded; 400/500 do 95% of the work). Lato is loaded via WebFont but barely used.
- Icons: Font Awesome Free (uploaded as custom fonts "Fa solid 900", "Fa Brands 400") for social glyphs, phone, arrows. Service/session icons are PNG images (dark green, plus white variants for dark backgrounds), not SVG.
- Global rules worth knowing: `body` 16px / 1.2em, letter-spacing -0.16px; `p` line-height 1.5em, `#535b53`; **`h2` and every `a` are `text-transform: capitalize`** (this will mangle "CDCP", "Dr.", "Invisalign" style words and acronyms; override it); `h1` letter-spacing -2px, `h2` -1px; `a` weight 500; `ul` is a flex column with 15px gap and uses a clipped background text colour trick (rich text bullets need a reset); `blockquote` is a centred sage card with 12px radius.

Type scale (desktop > tablet >= 991 > mobile <= 767 > small <= 479):

| Level | 1440+ | 1280 | Desktop base | <=991 | <=767 | <=479 |
|-------|-------|------|--------------|-------|-------|-------|
| H1 | 67px | 64px | 62px | 52px | 48px | 42px |
| H2 | 43 | 43 | 43 | 40 | 36 | 32 |
| H3 | 33 | 33 | 33 | 33 | 30 | 28 |
| H4 | 30 | 30 | 30 | 28 | 26 | 26 |
| H5 | 22 | 22 | 22 | 22 | 22 | 22 |
| H6 | 20 | 20 | 20 | 20 | 20 | 20 |
| Body | 16px, 1.5 line-height for `p` | | | | | |

Line-height for headings is 1.2em. Hand-set per-breakpoint, no fluid `clamp()` type.

### 2.3 Buttons (all 8px radius, 12px x 24px padding, 16px, weight 500, .2-.3s transitions)

| Class | Look | Hover | Used for |
|-------|------|-------|----------|
| `.primary-button` | Solid green, white text | Becomes transparent with green text (outline inversion) | Section CTAs on white/sage ("All Sessions", "More Info", "View all posts") |
| `.primary-button-border` | Transparent, 1px green border, green text (padding 12/22, letter-spacing .5) | Fills green, white text | Navbar "Contact Us" on white pages, footer link variants |
| `.secondary-button` | Transparent, 1px white border, white text | Fills white, green text | Navbar "Contact Us" on dark-hero pages, CTAs on dark backgrounds |
| `.secondary-white-bg-button` | Solid white, green text | Becomes transparent with white text | Hero primary CTA on dark, footer band CTA |
| Text link with arrow (`.link-with-icon`, "Read more", "About Us ->") | Green/white text with a trailing arrow icon | Colour shifts to paragraph grey | Card links, secondary hero action |

Note the navbar swaps between `primary-button-border` (white navbar pages) and `secondary-button` (dark banner pages) per page. That is one reason the navbar is duplicated per page style; in the rebuild, make it a single component with a "dark/light" variant.

### 2.4 Cards and surfaces

- Radius: 12px dominant (56 uses), 8px for buttons/inputs (18), 5px for swatches, 50% for avatars.
- Shadows: almost none. A faint `0 0 20px rgba(0,0,0,.06)` on accordion cards and a few legacy shadows. The look is flat colour-block, not elevated.
- Service card (Home 1): centred, icon on top, serif title, 3-line description, no container. Home 2 service card: white image-card with image-top. Services page card: dark section, image top (rounded) + white serif title + small "Learn more ->".
- Session card (Home 2): sage rounded panel, icon, title, description, "Read more ->". Home 1: full-width row list with hairline dividers and an "active" row highlighted in sage (hover transitions the border-bottom colour).
- Team card: portrait image full-bleed, name + role + 3 social icons overlaid in white at the bottom of the image (on mobile it is a full-width stacked card). 3 or 4 columns, 30px gap.
- Blog card: 230px rounded image (12px), category label, serif title, excerpt, "Read more ->"; 3-column grid with 30/40px gaps.
- Pricing card: sage, centred, serif plan name, big price with small $/month, description, "Buy Now ->".
- Stat block: 43px-ish Castoro number + small caption, with hairline rule between rows.
- Tag/chip: sage rounded pill (blog category, "What we do" list).
- Testimonial: quote glyph (PNG), large Lexend quote, name in serif, 5-star PNG, round arrows (outlined circle buttons).

### 2.5 Forms

Two form families, both Webflow native (`w-form`):

- **Booking form** (`.form-submit`): row 1 = Name / Phone Number / Email (3 x 32% columns), row 2 = "Booking For" select (price 70$/120$/140$) + "Pick A Service" select (populated from the service names) + full-width green Submit. Sits in a sage rounded container with a serif heading ("Submit Your Details To Book Yourself An Online Consultation").
- **Contact form** (`.form-contacts`): Name, Email, Message (textarea), Submit.
- Others: coming-soon email capture, blog sidebar search (`type=search`), site search.
- Inputs: white, 1px #535b5380 border, 8px radius, min-height 46px, 16px/15px padding, .2s transition. Success/error messages use Webflow defaults ("Thank you! Your submission has been received!").

### 2.6 Spacing and layout scale

- `.section`: 80px top/bottom (<=1279), **120px at >=1280**, 60px at <=767. Utility combo classes: `.without-top-spacing`, `.without-bottom-spacing`, `.without-space`, `.padding-60-40`.
- `.base-container`: **max-width 1200px**, 15px side padding, flex column centred (so the live content width is about 1170px). Webflow's own `.w-layout-blockcontainer` (940 / 728 / none) is used as the wrapper.
- Grids: `.w-layout-grid` (2-col, 16px) for banners; collection lists are CSS grids with their own gaps: services 3-up flex gap 40, team 4-up gap 0-30, blog 3-up gap 30/40.
- Small margin utilities: `.mt-5/15/20/30`, `.mb-0/20/30`, `.margin-bottom-medium/large`.
- Breakpoints: Webflow defaults (>=1920 none, 1440, 1280, 991, 767, 479). Nav collapses at 991 (`data-collapse="medium"`).

### 2.7 Imagery and iconography

- Photography: warm, natural-light, candid stock (Unsplash and Freepik), mostly people in conversation, hugs, group circle; portraits for team and clients; all with 12px radius. Desaturated slightly, no filters. Images are WebP with responsive `srcset`.
- Image-on-dark treatment: `linear-gradient(#00000080) + linear-gradient(#163c3d1a)` overlay on photo banners (contact, sessions, about-2, home-3).
- Icons: custom dark-green line/solid pictogram PNGs per service/session (white versions for dark sections). Font Awesome for social.
- Logo: simple "Psychologist" wordmark with a head-profile glyph (SVG, dark and white versions). Favicon + webclip are PNG.
- Decorative: Instagram 6-up thumbnail strip in the footer (static images, not a feed), partner logo strip (grey logos, 6 across).

### 2.8 Motion and interactions

- Webflow IX2 (Interactions) is used lightly. About 63 elements on Home 1 carry `data-w-id`. Almost everything is **fade-in / slight rise on scroll into view** (initial state `opacity:0`, stagger on collection items: services, team cards, blog cards, stats, testimonial block, Instagram tiles). Hover interactions: the three navbar dropdowns (open on hover, 0 delay), session rows (border-bottom colour reveal), team card name colour. No parallax, no scroll-scrubbed sections, no Lottie, no marquee.
- CSS hover transitions: .3s colour on all links and buttons; `.flex-vertical-card:hover` background-position shift; `.industries-block-wrapper:hover` lifts a shadow (leftover class).
- Native Webflow components: Navbar (over-left menu), Dropdown (nav + FAQ accordion), Slider (testimonials, arrows only, nav dots hidden), Tabs (sessions filter), Lightbox (Home 2 play button), Forms, Search.
- Performance: jQuery 3.5.1 + `webflow.js` + Google Analytics + Google WebFont loader. No other libraries.

### 2.9 Class-naming approach

Not Client-First, not BEM. It is a hand-rolled, partly semantic convention with Webflow combo classes:
- Shared: `.section` (+ combos `.light-background`, `.blue-background`, `.without-top-spacing`, `.inner-banner`, `.landing-banner`...), `.base-container`, `.primary-button`, `.section-title-wrapper`, `.collection-list-*`.
- Page-bound duplicates: `.collection-list-team-home-1`, `.collection-list-team-home-2`, `.collection-list-service-home-2`, `.collection-list-service-home-3`, `.collection-list-session-home-2/-3`, `.collection-item-blog-2`; plus many one-off wrappers (`.banner-home-wrapper`, `.about-wrapper`, `.contacts-wrapper-2`, ...).
- Leftovers from other templates by the same vendor: `.home-9-team-item`, `.home-23-team-item`, `.home-19-gallery-img-link`, `.about-4-video-wrapper`, `.about-6-projects-item`, `.industries-block-wrapper`, `.portfolio-masonry-image-wrapper`, `.courses-collection`, `.promotion-label-*` (the demo popups).
- Typos in class names: `.stotistic-wrap`, `.reviw-wrapper`, `.serch-button`, `.reting-text`, `.central-alignment-heaading`, `.middlr-style-spacing-mobile`.
- Roughly 700 class definitions, ~190KB CSS. Expect to prune.

Recommendation: keep the visual system, but re-class to Client-First (or Remedo's own convention) as part of the build, replace the 3 orphaned variables, and consolidate the per-home duplicate collection lists into one component each.

---

## 3. Layout

### 3.1 Global shell

- **Navbar**: `position:fixed`, white, height about 87px, padding 20px, z-index 1000, no shadow/border. Inside: logo (30px tall SVG) | menu | phone + CTA. Container is Webflow `.w-container` (940px max in CSS, but flexed full width with 50px side padding so it spans the page; logo hugs the far left, CTA the far right at 1440).
  - Menu items (desktop): `Demos v` | `About Us v` | `Services` | `Sessions` | `All Pages v` (3-column mega menu). Dropdowns open on hover, with a small line marker per item (`.nav-dropdown-lines`) as hover affordance.
  - Right cluster: phone icon + `(704) 555-0127` (tel link) + outline "Contact Us" button.
  - Dark variant: on pages with a dark banner the navbar is transparent/dark with white logo, white phone, white-outline button (classes `white-nav`, `white-number`, `secondary-button`).
- **Mobile / tablet (<=991)**: right-aligned burger (two-line icon). Opens a **left slide-in panel** (`over-left`, 320px wide, full height, sage #e2eddf background): logo + X row, accordion items (Demos, About Us, All Pages with chevrons; Services and Sessions are plain links), then phone link and outlined "Contact Us". Content behind is not dimmed in a heavy way; the page still scrolls under it in the capture. See `mobile-menu-open.png`.
- **Footer** (`.footer`, bg #163c3d, centred text, 80px/60px padding), three stacked tiers:
  1. **CTA band**: H2 "Don't Hesitate, Contact Us" (white serif), subline "Your Journey to Emotional Wellness Starts Here", white button "Contact us".
  2. A hairline divider, then a 2-column row: left = brand tagline + 5 links (About, Services, Pricing, Sessions, Appointment); right = "@instagram" label + 6 thumbnails.
  3. Bottom bar: "(c) Psychologist. All Rights Reserved. Licensing" left, "Webflow Templates by 128.Digital. Powered by Webflow" right.
  No address, no hours, no map, no NAP block, no newsletter, no social icon row in the footer (social icons only appear on team cards and contact page).

### 3.2 Homepage patterns, section by section

**Home 1 ("card hero")** - 7 sections after the nav
1. Hero (`section.banner-home-1`, 135px top): a rounded dark-green panel (about 1170 x 550) as a 2-col grid. Left: serif H1 "We're Helping You Start a New Life" (67px white), 3-line intro, white "Get Start" button + text link "About Us ->". Right: collage of 4 rounded photos in a staggered masonry (2 columns).
2. Services trio (3 flex columns, gap 40): icon, serif title, short blurb, centred; fade-in stagger.
3. "Our Center": image (rounded) left, H2 + paragraph + two stat rows (68% / 17%, number + sentence, hairline between) on the right.
4. "Magical Therapy For The People": H2 + subline left, "All Sessions" button right; below it a 3-row list (icon | title | short description) where the first is highlighted sage; rows divide with hairlines; "More Info" button.
5. "Meet Our Team": same title/button pattern, 4-up team grid (photos with name, role, socials overlay).
6. Testimonials on sage band: left "What Are They Talking About?" + "4.9 Average Rating" + 5 stars; right a portrait + big quote + name + round arrows (slider).
7. "Latest Blog Posts" 3-up grid + "View all posts" button.
Then footer (with CTA band).

**Home 2 ("dark hero + stats")** - dark navbar, H1 left / 2 stats right (895+ Happy clients, 425+ Success stories), large rounded image (full container width, about 300px high) with centred play button opening a Webflow lightbox, partner logo strip, session cards (sage rounded cards that straddle a white/dark-green background seam, which is a neat overlap detail), dark "Why Choose Our Center?" with 3 text blocks + big image, sage "Our Exceptional Services" (2 big cards), testimonial slider type 2 (portrait + short quote, small avatar), 3-up team ("Meet Our Spesialists", typo), sage blog band.

**Home 3 ("photo hero + funnel")** - 100vh photo hero with 50% black overlay, white H1 + CTA; "How Can We Help You?" + 5 numbered sage chips (01-05); doctor intro (portrait + H2 "I'm Dr. ... Expert Psychologist" + bullet points + button); dark band with services as icon list (white icons) + 2 stats; "Free 15-minute consult" banner (sage card with image right); 3 session cards; testimonial slider; "Why choose"; **booking form**; blog grid. This is the most conversion-oriented home page and the closest fit for a dental practice.

### 3.3 Inner page template recipes

- **Banner types** (all start with about 160-165px top padding to clear the fixed nav): (a) dark green solid (`.inner-banner`): H1 left, intro paragraph right (2-col, "inner-banner-wrapper"); (b) white (`.inner-white-banner`, `.banner-faq`): same layout on white; (c) photo with overlay (`.contacts-banner`, `.session-banner`, `.about-us-2-banner`); (d) blog featured banner; (e) detail banners (service, session, team, story, blog): title + image at the right (service) or below (session), or portrait left + name/role/contact right (team).
- **Service detail**: dark banner (H1 + short text + image right), body: H2 + intro, 2-col list, H3 + paragraph, wide image, left rich text column (about 2/3) + right sticky-looking sage sidebar "Have Additional Questions?" with address, phone, email, "Contact us" link; FAQ accordion; "Our Exceptional Services" related grid (2 other services); footer band.
- **Session detail**: dark banner, wide image, rich text with heading + checklist, "Recent Sessions" related list.
- **Team detail**: portrait left + name/title/bio/email/phone/socials right, "About psychologist" rich text, "Free 15-minute consult" banner, "Meet Our Specialists" other members.
- **Success story detail**: title + intro, big photo, intro text, sage band with quote-style H2, "More success stories" 3-up.
- **Blog post**: dark banner with category + H1 + excerpt + date, overlapping hero image, rich text (H2, H3, image, H4 list), sage "Recent Posts" strip.
- **Blog list**: three layouts (1: 3-col grid, 2: featured + recent list + grid on sage, 3: 2-col grid with sidebar search / recent / categories).
- **Category archive**: dark banner (category name only) + same 3-col grid.
- **Containers**: content 1200px max (about 1170 live); text-heavy columns about 640-720px; images fill their column with 12px radius.

### 3.4 Responsive behaviour

- **1440**: roomy; h1 67px; section padding 120px; 3/4-col grids; hero card 1170 x 550.
- **<=991 (tablet)**: nav collapses to burger; H1 52 / H2 40; 3-up grids drop to 2 or 1 col (`.collection-list-blog-home` becomes 2-col, team 2-col); `.primary-button` becomes `display:block`.
- **<=767**: H1 48, H2 36, section padding 60px; everything stacks to one column; text becomes **centre-aligned** in most blocks (service cards, session list, stats, blog cards); team cards become stacked full-width portrait cards with name/role/social overlaid; hero collage moves **above** the headline (visible in the 390 capture, the photos are first and the headline sits below them inside the dark card); testimonial slider keeps arrow buttons below the portrait.
- **<=479**: H1 42, H2 32, H3 28.
- Issues seen at 390: `/success-stories` overflows horizontally (page width 447px vs 390 because `.img-therapy-wrap` is wider than the viewport); the footer CTA heading "Don't Hesitate, Contact Us" runs edge to edge with no side padding on Home 1 (looks clipped in the capture, though no overflow was measured); slider slides report as overflowing (normal for sliders). Everything else scrolled cleanly at 375/390.

---

## 4. Flow and navigation

### 4.1 Navigation tree (as shipped)

```
Navbar
 |- Demos v         -> Home 1 / Home 2 / Home 3          (template-only; remove)
 |- About Us v      -> About Us / Our Team / Pricing / Testimonials / FAQ's / Appointments / Contact Us
 |- Services        -> /services  -> /services/{slug}
 |- Sessions        -> /sessions  -> /sessions/{slug}
 |- All Pages v     -> mega menu, 3 columns, 22 links (template-only; remove)
 |- (704) 555-0127  -> tel link
 '- [Contact Us]    -> /contact-us
Footer links: About, Services, Pricing, Sessions, Appointment (5 only)
Not in main nav: Blog, Success Stories, Our Team (reached via About dropdown / section buttons), Testimonials.
```

### 4.2 CTA placement and repetition

- Navbar "Contact Us" button + phone number: sitewide, always visible (fixed header). That is 2 conversion paths on every scroll position.
- Every page ends with the same footer CTA band (heading + "Contact us"). It is the only consistent bottom-of-page CTA.
- Hero CTA exists only on Home 1 and Home 3 ("Get Start" -> `/appointment`, text link "About Us" -> `/about-us-1`). Home 2 has no hero button, only stats.
- Section CTAs use the pattern "H2 + subline on the left, button on the right" (All Sessions, More Info, View all posts, All Services, Our Team). These are navigational, not conversion CTAs.
- Inline conversion modules: the booking form block (Home 3, FAQ, Services, Appointment), the "Get 15-minute complimentary session" banner (Home 3, team detail), the dark "Resolving your trauma issues will release you" CTA strip (Sessions), "Have Additional Questions?" sidebar (service detail), plus "Buy Now" on pricing.
- Typical guided path: Landing (hero) -> Services trio / sessions list -> team (trust) -> testimonials (proof) -> blog (education) -> footer "Contact Us". Services detail pages lead to "Contact us" (sidebar) and to other services. No page links a service directly to the booking form with the service preselected; the booking form selects are manual.

### 4.3 What a dental flow needs on top

The template's funnel is "read -> Contact Us". For Mill Pond the primary action is "Book an appointment" / call. Reuse the fixed navbar + phone + CTA pair (it is already the right pattern), repeat the booking CTA at hero, after services, after testimonials and in the footer band, and add an emergency / new-patient path (section 7).

---

## 5. CMS structure (inferred from markup)

Collections visible (all bound via Webflow Collection Lists; every list is a native `w-dyn-list`):

| Collection | Fields (likely) | Relations / notes |
|------------|-----------------|-------------------|
| **Services** | Name, Slug, Short description (plain text, 1 line), Thumbnail image (card), Icon image (white icon, Home 3 service list), Header image (detail banner), Body (Rich Text with H2/H3/lists), possibly Order | Shown on Home 1/2/3, Services, About 2, service detail ("other services": same list, filtered to exclude current). |
| **Sessions** | Name, Slug, Short description, Icon (PNG), Image, Body (Rich Text), **Category** (Therapy / Consultations / psychology / Relationship), maybe "Featured/Active" flag | Category powers the Tabs on `/sessions` (one filtered collection list per tab pane: 5 lists). Home 1 and About 1 use a 3-item list with "active" row. Recent sessions on detail pages. |
| **Team Members** | Name, Slug, Position, Photo, Details image, Short bio, Email, Phone, About (Rich Text paragraphs), Facebook / Instagram / LinkedIn links | Used on homes (limit 3-4), About pages, Our Team (all 6), team detail ("others"). |
| **Success Stories** | Name, Slug, Photo, Summary, Detail photo, Rich Text | 6 zig-zag rows on index (even/odd layouts built with separate lists, 7 `w-dyn-list` blocks), "More success stories" 3-up on detail. |
| **Blog Posts** | Title, Slug, Excerpt, Thumbnail, Main/overlap image, Date, Body (Rich Text), **Category (reference)** | Category chip on each card; Blog 2 uses a "featured" single-item list plus "recent". |
| **Post Categories** | Name, Slug | Drives `/posts-categories/{slug}` archive and sidebar chips. |

Static (not CMS) in the template: **testimonials** (3 slides per slider, hard-coded; there is no Testimonials collection), **FAQ** (hard-coded dropdown accordions, even the same 4 questions are pasted on service detail pages), **pricing plans**, **stats/counters**, **offices** (3 on Contact), **partner logos**, **Instagram tiles**, and **the booking form's service select** (typed list, not bound to the Services collection).

Patterns worth reusing: collection list as CSS grid with per-item fade interaction; collection list filtered by category (Tabs); "recent/other items" excluding the current item; conditional category label on the card.

Opportunities for Mill Pond: create Testimonials, FAQs (with a Service reference), Locations/Hours, Insurance providers and Before/After as real collections (section 7).

---

## 6. Component inventory (mix-and-match library)

Heroes
1. Card hero w/ photo collage (Home 1)
2. Dark hero w/ stats + wide rounded image + play-button lightbox (Home 2)
3. Full-bleed photo hero, 100vh, overlay (Home 3)
4. Inner banner, dark (H1 left, intro right)
5. Inner banner, white
6. Inner banner, photo with overlay
7. Detail banners: service (image right), session (image below), team (portrait + contact), blog (category + date + overlap image), story

Content sections
8. Icon service trio (3-col centred)
9. Service image cards, 2-col or 3-col (white on sage; light-on-dark variant)
10. Service icon list on dark with stats (Home 3)
11. Session/treatment list rows with hover/active highlight
12. Session cards in sage (3-up), overlapping a colour seam
13. "How can we help you?" numbered chips (5-up)
14. Split section: image + H2 + paragraph + 2 stat rows
15. Doctor/bio spotlight (portrait + bullet points + button)
16. "Why choose us" 3 text blocks + big image (dark)
17. Stat counter strip (4 numbers, dark or white)
18. Feature chips (3-up, sage)
19. Sage tag box ("What we do" topic tags)
20. Zig-zag stories rows (image / text alternating)
21. Rich-text article body with H2/H3/checklist/inline image

Social proof
22. Testimonial slider, large (portrait + quote + 5-star + rating)
23. Testimonial slider, compact (avatar + role + quote)
24. Partner logo strip (6-up grey)
25. Team grid 3/4-up with socials overlay; team detail

Conversion
26. Booking form block (name/phone/email + 2 selects)
27. Contact form + details + socials
28. Free-consult banner (sage card, image right)
29. Dark CTA strip
30. Footer CTA band (heading + subline + white button)
31. Pricing cards (3-up)
32. Contact "offices" cards (image + address)

Information
33. FAQ accordion (white cards on sage)
34. Blog grid (3-up), blog featured + recent list, blog with sidebar (search, recent, categories)
35. Tabs filter list (sessions)
36. Sidebar contact card ("Have Additional Questions?")

Shell
37. Navbar (light/dark, dropdowns, phone + CTA), mobile slide-in menu
38. Footer (CTA band + links + Instagram strip + legal row)
39. Utility: 404, coming soon, search results, style guide

---

## 7. Fit assessment for a dental practice (Mill Pond Dental, Dorchester ON)

### 7.1 What maps directly

- Services (+ detail) = dental services (Family Dentistry, Preventative Care/Check-ups, Restorative, Teeth Whitening, Invisalign, Emergencies, Prosthetics, CDCP).
- Team (+ detail) = dentists (Dr. Aya Al Rafea, Dr. Lida Kiddie, Dr. Steven MacHardy) and hygienists/staff; the portrait-card grid works as is.
- Blog (3 layouts), FAQ accordion, testimonials sliders, contact + booking forms, footer CTA band, stat counters ("years in Dorchester", "patients served").
- The "Sessions" collection can be repurposed as **Treatments** or **Patient Info** (with category tabs: Cosmetic / Restorative / Preventive / Orthodontic) or dropped to avoid duplicating Services.

### 7.2 Needs changing

1. **Content model and tone**: therapy copy ("psychologist center", "Success Stories", "Sessions", "Magical Therapy", "Online Consultation", "Buy Now", $70-$140 prices) all replaced. The warm, calm tone suits a family practice; keep the editorial serif voice but use plain, reassuring dental language.
2. **Imagery**: all stock is conversation/counselling. Replace with real practice photography (reception, operatories, team in scrubs, smiling patients, equipment, exterior in Dorchester). Dental icon set (PNG, 2 colours) must be redrawn or swapped for SVG tooth/clean-line icons; the existing icons are mental-health pictograms.
3. **Pricing page**: remove or convert to "Fees and Insurance" (no $/month plans). Dental fees are usually shown as guides or hidden.
4. **Booking form**: replace "Booking for / price" with Service, Preferred day/time, New or existing patient, Insurance provider, Message; connect "Pick a service" select to the Services CMS. Keep phone as a primary CTA (tel: link) since many Mill Pond patients will call.
5. **Navbar**: remove Demos / All Pages mega menu; define Services (dropdown), About (Team, Hours, Gallery), New Patients, Insurance/CDCP, Blog, Contact; keep the phone + "Book Online / Request Appointment" CTA. Add an "Emergency" shortcut.
6. **Footer**: expand to a real business footer: address, phone, email, hours table, map link, social icons, CDCP/accessibility/privacy links, Google rating. Current footer has none of these. Replace the Instagram image strip with a live feed or a gallery teaser.
7. **Colour**: pale sage + deep green already reads clinical-calm. Decide whether to keep it or move to Mill Pond's brand colours; change only 3 variables.
8. **CSS gotchas to fix**: global `text-transform: capitalize` on `h2` and `a` (acronyms, "Dr.", "CDCP"); `ul` styling for rich text; typos in class names; orphaned variables; 120px section padding at >=1280 (may be tall for content-dense dental pages).

### 7.3 Sections to add (not in the template)

| Dental need | Suggested block (built from existing components) |
|-------------|--------------------------------------------------|
| **New patient** | Page + home strip: 3-4 numbered steps (chips from "How can we help you?" or "Why choose" blocks), forms to download, what to bring, "Book your first visit" CTA |
| **Emergency dentistry** | Red/accent alert strip in navbar or hero + dedicated service page, tel link, after-hours instructions, same-day callout |
| **Insurance and CDCP** | Logo strip (reuse partner-logo strip) + FAQ accordion + direct billing statement; dedicated CDCP page (already exists on the current site) |
| **Hours and location** | Sage card with hours table + embedded map; also in footer; "Open now" label |
| **Before and after / Smile gallery** | Lightbox grid (Webflow lightbox is already used) or slider; collection "Smile Cases" with before/after images, treatment reference, consent flag |
| **Reviews with proof** | Google reviews badge + rating line (the "4.9 Average Rating" pattern exists), plus a Testimonials collection |
| **Treatment explainer** | Reuse service detail (H2, steps, FAQ, related) and add "What to expect", recovery, cost guide, "Book this treatment" CTA |
| **Technology / office tour** | Split section + photo grid |
| **Payment and financing** | Cards (reuse pricing cards, restyled without price) |
| **Patient resources / forms** | Link cards, PDFs |
| **Trust marks** | Association badges (RCDSO, ODA, CDA), accreditation, years in practice stat strip |
| **Accessibility and COVID/office notices** | Dismissible announcement bar above navbar (not present in the template; current Mill Pond has a COVID-19 announcement page) |

### 7.4 Build advice

- Start from Home 3 (photo hero + numbered help chips + bio + booking form) for the funnel, borrow Home 2's stat strip and logo strip for trust/insurance, and Home 1's session list for the treatment list.
- Collapse the three homes into one master homepage and delete Demos/Landing/Licensing/Changelog/Search sample/Coming Soon (keep Coming Soon only if used as a maintenance page) and two of the three About, Blog and Home variants.
- Keep: navbar + mobile menu pattern, footer CTA band, banner variants, service/team/blog CMS templates, FAQ accordion, testimonial slider, contact form, stat counter, 404.
- Re-class as Client-First while cleaning (rename `.section` -> `section_*`, consolidate the `*-home-1/2/3` collection list duplicates).
- The IX is light (fade in on scroll) so migration risk is low; consider reduced-motion handling.
- Licences: images are Unsplash/Freepik and fonts (Castoro, Lexend) are OFL. Everything must be replaced by practice photography for the real build.
- Verify at 390 after the build: the success-stories overflow and the tight footer heading are template flaws; do not carry them over.

---

## 8. Quick bug and quality list found in the template

- Mega menu links: "About Us 2" and "About Us 3" point at `/about-us-1`; "Team Member"/"Service Details"/"Blog Details" use absolute `psychologist-128.webflow.io` URLs.
- Typos: "Spesialists", "Get start", "Couple Theraphy", "Counceling", class names (`stotistic-wrap`, `reviw-wrapper`).
- Sessions tabs are named inconsistently ("psychology" lowercase).
- Page title of `/appointment` is "Contact Us 2"; `/` title is the generic marketplace title.
- Testimonial text is a repeated placeholder ("Untitled really understood..."); all 3 slides identical.
- Every service detail page repeats the same hard-coded 4 therapy FAQs.
- Horizontal overflow at 390 on `/success-stories`.
- ~700 classes, ~190KB CSS, 3 orphaned variables, leftover demo classes.
- No password, no cookie banner, no schema, no `tel:` on the in-menu phone link in mobile menu (`href="#"`), no hours/NAP anywhere.

## 9. Files produced

- This report: `C:\Users\reala\OneDrive\Desktop\remedo\Mill Pond Dental\analysis\06-template-psychologist-128.md`
- Screenshots: `C:\Users\reala\OneDrive\Desktop\remedo\Mill Pond Dental\analysis\screenshots\template-psychologist-128\` (64 PNGs)
  - Desktop 1440: index, home-1, home-2, home-3, about-us-1/2/3, our-team, team-member-sophia-kim, pricing, faq, testimonials, services, service-detail, success-stories, success-story-detail, sessions, session-detail, contact-us, appointment, blog-1/2/3, blog-post, blog-category, search, coming-soon, 404, style-guide, changelog, licensing
  - Mobile 390: the same 31 pages (`*-mobile.png`)
  - Extras: `mobile-menu-open.png`, `home-1-tablet768.png`
