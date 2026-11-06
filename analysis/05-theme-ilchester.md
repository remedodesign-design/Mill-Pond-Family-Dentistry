# 05 - Theme analysis: ilchesterdental.co.uk (chosen theme for the Mill Pond Dental redesign)

Scope: read-only analysis of https://ilchesterdental.co.uk/ (Ilchester Dental & Implant Centre, Yeovil, Somerset, UK). Live site last published 2 Nov 2026. Method: curl of HTML, sitemap and the published Webflow CSS, plus Playwright computed-style extraction and screenshots at 1440 and 390. Nothing was submitted or booked.

Screenshots: `analysis\screenshots\theme-ilchester\` (files named `<page>-1440.png` and `<page>-390.png`; also `home-390-menu-open.png`, `home-1440-treatments-dropdown.png`, `home-1440-scrolled-header.png`, `home-390-viewport-top.png`).
Caveats: the Google Map iframe and the Jotform contact form render blank in headless captures (they load as empty white and plum boxes); the cookie banner and chatbot overlay several 1440 captures. The form fields are visible in `contact-1440.png`.

Useful context: the site footer reads "Digital Marketing By Remedo", so this theme is already a Remedo build on Webflow. Page assets live on `cdn.prod.website-files.com`, site ID `68d75cd1e59742836ee564c4`.

---

## 0. Summary in 10 lines

1. Mood: warm, "boutique private practice". It is not clinical blue and white. The palette is deep plum, antique gold and warm cream, with a dark aubergine footer.
2. Serif display type (Libre Caslon Text and Castoro) over a rounded humanist sans (Nunito). Buttons and nav use Lexend. The serif carries the premium feel.
3. Full-bleed hero (100vh) with a dark 50% overlay, white serif H1 and a crossfading slideshow of three lifestyle photos (custom JS, desktop only).
4. A fixed, translucent, blurred header sits over the hero. A thin dark top bar carries phone and email. A gold gradient "Book Appointment" button is always visible.
5. Homepage story order: hero, accreditation logo marquee, testimonial slider with Google rating, plum "offers" block, yellow phone CTA band, 3 featured services, practice intro, "what sets us apart", map, contact card and form, 3 latest blog posts, footer.
6. Everything is one repeated rhythm: 1340px container, 80px section padding, 12px image radius, 8px button radius. Section backgrounds alternate white, cream (#faf7f0) and plum.
7. Services are a CMS collection (card grid, then detail template with a yellow "Have Additional Questions?" sticky card, rich text, FAQ accordion, before/after gallery, CTA band).
8. SEO-heavy local structure: 9 "Dentist in [town]" pages and 12 "Dental services in [town]" pages, linked from the footer "Locations" column.
9. Conversion is repeated at five touchpoints: top bar phone, header Book button, mid-page phone CTA band, contact card and form, and a mobile sticky Book Now / Call Now bar. Online booking is an external Carestack portal (new tab).
10. Strong, reusable system, but heavy on UK specifics (NHS vs private wording, GBP prices, CQC/GDC/BDA marks, UK phone and postcode, Tabeo finance, a UK emergency scheme) and has several weaknesses (see section 7).

---

## 1. DESIGN

### 1.1 Colour palette (computed values from the live CSS)

Webflow variables (`:root`): `--primary #0d4477` (blue, used as default body text colour and in a few legacy places), `--text-purple #4c2a4c`, `--star-colours #ebc426`, `--primary-light #e2eddf`, `--paragraph-gray #333`, `--dark-grey #475467`, `--light-blue #cbecff`, `--fees-text-black #2c2c2c`, `--small-img-radius 5px`, `--color #e70000`. Several variables are template leftovers (blue `--primary`, green `--primary-light`) that are barely visible on the live pages. The working palette is hard-coded or applied through classes:

| Role | Hex | Where used |
|---|---|---|
| Plum / aubergine (brand primary) | `#4c2a4c` | Service-card titles, client names, "offers" section background (`.bg_maroon`), contact form card, cookie/confirm buttons, button text |
| Deep aubergine-black | `#201620` | Top contact bar, footer background (`.footer_v1`), `#291e29` for link text |
| Antique gold / brown (headings) | `#815902` (h2/h3 brown, `.t_brown`) | All section headings on white and cream |
| Gold gradient (buttons) | `linear-gradient(90deg,#cdaa35,#e5c457 49%,#cdaa35)` | `.secondary-button` (every primary CTA), contact icons, map frame border `#d3b13e`, "Next" pager buttons |
| Warm yellow (CTA band) | `#fed57a` | "Call us to schedule your appointment" band; sticky "Have Additional Questions?" card is a gold gradient version |
| Cream | `#faf7f0` | Alternating section background (`.bg_cream`), review section, referral cards |
| White | `#fff` | Base page, white inner-page banners, dropdown panel |
| Body copy | `#333` / `#2c2c2c` / `#4c2a4c` | Paragraphs (plum on cream, near-black on white) |
| Star yellow | `#ebc426` | Mobile sticky bar background, rating stars, nav hover colour |
| Teal-black tint (hero overlay) | `rgba(22,60,61,.1)` over `rgba(0,0,0,.5)` | Hero image overlay |
| Header glass | `rgba(0,0,0,.3)` at top, `rgba(17,17,17,.9)` when scrolled, with `backdrop-filter: blur(5px)` | Fixed navigation |

Feel: plum and gold on cream reads "heritage / boutique / luxury" more than "clinic". Contrast is mostly fine (white on plum, plum on gold, dark on cream). Gold-brown `#815902` on white is about 5.9:1, which passes AA for large headings. Gold gradient buttons with `#4c2a4c` text pass comfortably.

### 1.2 Typography

Loaded through WebFont loader (Google: Lato, Droid Sans, Libre Caslon Text, Nunito) plus Webflow-hosted fonts (Castoro, Lexend, Font Awesome "Fa solid 900" for arrow glyphs).

| Element | Family | Size / line-height | Weight | Tracking | Colour |
|---|---|---|---|---|---|
| H1 (hero) | Libre Caslon Text | 67px / 80.4px | 700 | -2px | white |
| H2 (section titles) | Libre Caslon Text | 43px / 51.6px | 700 | -1px | `#815902` |
| H3 `.t_brown` / service name | Castoro | 33px / 39.6px | 700 on brown headings, 400 on card titles | -0.16px | `#815902` or `#4c2a4c` |
| H4 in plum block | Castoro | 30px / 36px | 400 | -0.16px | white |
| Lead paragraph (`.paragraph-large`) | Nunito | 20px / 30px | 300 | -0.16px | white on hero |
| Body | Nunito | 16px / 19.2px (line-height only 1.2, tight) | 400 | -0.16px | `#333` |
| Review quote | Nunito | 24px / 31.2px | 400 | | `#333` |
| Buttons, nav, "Learn more" links | Lexend | 16px / 20.8px | 400-500 | -0.16px | plum `#4c2a4c` on gold |
| Top bar | Nunito | 16px | 400 | | white |

Notes: headings are Title Case via `text-transform: capitalize` (this produces "Of", "And", "In" capitalised in CMS titles, e.g. "Immediate Professional Attention For Accidents..."; a weakness, see section 7). H1 is very large and tightly tracked (-2px). Body line-height of 1.2 is tight for a calm brand and should be opened up (about 1.5-1.6) for Mill Pond. Breakpoints (Webflow): 991, 767, 479 plus upscale rules at 1280, 1440, 1920.

### 1.3 Logo treatment

A horizontal lockup: a gold pinwheel/flower mark plus "ILCHESTER" in small caps serif and "DENTAL & IMPLANT CENTRE" beneath. A light (gold and white) version sits on the dark translucent header and footer, and a dark version sits on white inner-page headers and in the mobile drawer. Displayed at about 217 x 46px in the header. The header swaps to a white background with dark text on inner pages that have a white banner (`white-text-navbar` vs `black_nav` variants).

### 1.4 Imagery

- Photography direction: bright, warm, candid stock lifestyle images (older couple lying on grass, family laughing, smiling women, practice front and reception), mixed with clinical close-ups (IV sedation hand, dental X-ray, tooth model). Mostly smiles, natural light, no heavy duotone.
- Shapes: rectangular crops with 12px rounded corners (`.link-block`, `.img-blog-wrapper`, about image). No circular masks except the 56px circular slider arrows and the team portrait cards (rounded, with a bottom dark gradient and name overlay on the card).
- Overlays: hero has a 50% black plus 10% teal overlay for white-text legibility. Team cards use a bottom-to-top dark gradient for the name and role.
- Real practice photos are used (exterior, reception, waiting room). Staff photos are real for some people, and a generic plum silhouette placeholder for others (visible weakness).
- Accreditation/brand logos in a full-colour marquee (A-dec, Belmont, Straumann, BDA, Durr Dental, Bien-Air, CQC, GDC, Planmeca, Midmark, Orascoptic, Mega'gen).

### 1.5 Iconography and illustration

- Small white line icons on plum (piggy bank, tooth, dental chair, heart-implant) in the "offers" block.
- Gold gradient circular icons (map pin, phone, clock) for contact info.
- Font Awesome arrows (`→` glyph in `.text-button-icon`) on text links; green circular check marks on plan cards; quotation-mark glyph in the testimonial.
- No custom illustration. Icons are simple and consistent but lightly used.

### 1.6 Components styling

- **Primary button `.secondary-button`**: gold horizontal gradient, plum text (Lexend 500, 16px), `border-radius: 8px`, padding 12px 24px, `transition: all .3s`. On hover it turns white background with `#333` text.
- **Hero secondary**: `.secondary-white-bg-button-3` white fill with dark teal text, same 8px radius, plus a text link with arrow ("About Us").
- **Text link with arrow** (`.link-with-icon`): Lexend 500, `#291e29`, arrow glyph after; used on service and blog cards.
- **Cards**: no borders or shadows on service and blog cards. They are image (12px radius, 300px high for services, 200px for blog), then a Castoro title, a short paragraph and the arrow link. Plan cards (dental plans) are white cards with a soft shadow, a price in large serif and a green-check list. Referral cards are cream tiles. Team cards are image tiles with a gradient name label. Hover on cards is a colour change on the title (`transition: color .3s`); some template collection items add `box-shadow: 0 0 30px rgba(0,0,0,.08)`.
- **Forms**: contact form is a Jotform embed (script `form.jotform.com/jsform/...`), inside a 420px-wide plum rounded (12px) card with a white heading ("Get in Touch / We'll Reach Out Quickly"). Fields: first name, last name, email, phone, message, GDPR consent checkbox, gold "Book Appointment" submit. Referral page has its own Jotform.
- **Borders, radii, shadows**: radii are 8px (buttons), 12px (images, cards, plum form card, yellow CTA), 16px (map frame with 2px gold border and 12px inner padding), 100% (slider arrows). Shadows are barely used (header `0 2px 5px rgba(0,0,0,.01)`, dropdown has a 1px translucent border and no shadow).
- **Dropdown (mega-menu)**: white panel, 360px wide, 15px 20px padding, 1px border at 18% black, Lexend 16px links in `#222`, hover colour gold `#ebc426` on the toggle.

### 1.7 Spacing system

Container `.base-container`: max-width 1340px with 20px side padding (1300px usable). Section padding 80px top and bottom (hero: 140-160px top, 80px bottom, `min-height: 100vh`). Plum "offers" block 80px top and 60px bottom. Large vertical gaps via `.spacer._64` (64px). Grid gaps 16 to 50px. Yellow CTA band is 1170px wide and overlaps the boundary between the plum block and the white section by half its height (`bg-absolute-small-top` trick), which is the one deliberate "layered" moment on the page.

### 1.8 Motion and interaction

- Hero background: custom JS crossfade slideshow (3 images, change every 3s, 1.5s opacity fade) on screens wider than 767px. A second near-duplicate script (`.home-3-banner1`) drives another banner variant. On mobile the hero is static: an image block sits above the text (`mobile-show` section).
- Logo marquee: continuous horizontal scroll of three duplicated logo grids (Webflow interaction on the loop banner).
- Testimonial slider: native Webflow slider, autoplay 3s, 500ms slide, round 56px outlined arrows (border `rgba(83,91,83,.5)`). Slide content: portrait image left, 24px quote, name in serif.
- Header: fixed (`position: fixed`), transitions from translucent black (0.3) to 0.9 black on scroll, blur(5px). Dropdowns open on hover (`data-hover="true"`, delay 0).
- Hover: link colour transitions at 0.3s (nav items turn gold, card titles shift colour, buttons invert to white). No parallax, no scroll-reveal animations. About 27 `data-w-id` attributes (mostly Webflow interaction hooks on dropdowns, collection items and the nav).
- Chat widget (RoboReception) pops open on load with "How can I help you today?" and three quick-reply buttons ("I would like a call back", "arrange an appointment", "further information").

### 1.9 What makes it feel premium/calming

Serif headlines at large scale; restrained palette (plum, gold, cream); generous section padding; warm natural-light photography with real faces; rounded, soft-cornered images; one accent colour for all calls to action; cream and white alternation that avoids hard clinical white. The weaker "calm" points are the always-on chat pop-up, the cookie banner overlay, the tight line-height, and the high density of plum text blocks.

---

## 2. LAYOUT

### 2.1 Global header

- Two layers inside a fixed `nav_block` (z-index 9999): (a) top bar, 42px, `#201620`, centred: phone icon + 01935 312692 (note: the nav markup uses `tel:01935840784`, a different number, a data inconsistency), email icon + address; (b) navbar 76px, translucent, blur.
- Navbar row: logo left (217px), nav centre-right, gold "Book Appointment" button far right (opens the Carestack portal in a new tab).
- Nav items: Home, About Us, Treatments (dropdown), Plans & Fees (dropdown), Blogs, Referrals, Contact Us.
- Treatments dropdown shows five links plus "View All Services" (not all 14 services; Sedation, Facial Aesthetics, Oral Surgery, Periodontics, Extractions and the others are missing from the menu). Plans & Fees dropdown: Dental Fees, Dental Plans, Payment Options.
- Mobile (collapses at 991px): top bar hides, header shows logo and burger. The burger opens a 320px-wide white left-sliding overlay drawer (`data-animation="over-left"`) with logo, close X, and stacked plum links. Treatments and Plans & Fees expand with chevrons. The Book Appointment button is hidden in the drawer and replaced by the sticky bottom bar.
- Sticky mobile CTA bar: fixed to the bottom, full width, `#ebc426` yellow with two halves: calendar icon "Book Now" and phone icon "Call Now", separated by a thin divider. Page footer gets 100px extra bottom padding so content is not hidden.

### 2.2 Homepage, section by section (1440px)

| # | Section | Purpose | Layout and treatment | CTA |
|---|---|---|---|---|
| 1 | Hero (`home-3-banner`), 900px (100vh) | State the brand promise | Left-aligned stack in the 1340 container: H1 "Smiles Begin at Ilchester Dental & Implant Centre", 20px light lead paragraph, two actions (white button, link). Full-bleed crossfading photo background with dark overlay. | "Get start" (placeholder `#` link, a bug) and "About Us" |
| 2 | Accreditation logo marquee, 163px | Trust and technology credibility | White strip, endless horizontal logo scroll (BDA, CQC, GDC, Straumann, equipment brands) | none |
| 3 | Testimonials (`bg_cream`), 540px | Social proof | 3 columns: left title "Smiles We've Transformed" in gold-brown + Google "G" + "4.9 Average Rating" + stars; centre portrait photo; right quote + serif name + round arrows. Auto-playing slider, 3 slides | none |
| 4 | Offers block (`bg_maroon`), 444px | Surface the four commercial hooks | 2x2 grid on plum: white icon, serif H4, white copy. Hooks: Implants from GBP 70 a month, Welcoming new patients, Interest-free finance, Emergency appointments | none |
| 5 | Phone CTA band (`section-22`), 258px | Convert to a call | Yellow `#fed57a` rounded card (1170px) overlapping plum and white. Left: serif H2 "Call us to schedule your appointment" + gold phone-number button. Right: reception photo (full height, clipped to card) | phone button |
| 6 | Featured services, 946px | Show three highest-value services | Centred brown H3, 3-column CMS collection (Emergency Dental Care, Dental Implants, Sedation): 12px image, Castoro title, 2-line copy, "Learn more" arrow link. Then centred "View all Services" gold button | per card + View all |
| 7 | Practice intro (`bg_cream`), 458px | Introduce the practice | 50/50: building exterior photo left (12px radius), right text vertically centred: brown H3, paragraph, "Book your consultation today" gold button | Book (Carestack) |
| 8 | What sets us apart, 925px | Differentiators | Left column: H3 + intro paragraph + three sub-points (Castoro brown H5, short paragraph). Right: portrait of smiling woman (12px radius) | none |
| 9 | Map, 695px | Location | Centred H2 "Find Us Easily in Ilchester", 2px gold-bordered rounded frame (16px) around Google Maps iframe | none |
| 10 | Contact (`bg_cream`), 964px | Capture leads | 2 columns: left "Contact Information" and "Hours of Operation" on a 4px gold left rule with gold circle icons; right 420px plum card with Jotform | form submit |
| 11 | Blog teaser, 829px | Content and SEO | Title row (H2 + one-line description left, "View all posts" button right), then 3-column CMS cards: image 200px, link tag, Castoro title, excerpt, "Read more" + date | per card |
| 12 | Footer (`footer_v1`), 628px | Navigation and NAP | `#201620`; thin divider; logo + about paragraph left; four link columns (Main Menu, Services, Locations, Patient Info); divider; copyright line with agency credit | links |

Note the two-block pattern at the top of mobile: the hero H1 is also repeated in a `mobile-show` section (image, then text) so mobile gets the photo uncropped.

### 2.3 Inner page templates

- **Services index** (`/services`): white banner with H2 left + intro right (2-column), plum grid section with 2-column CMS cards (image, white serif title, copy, "Learn more"), pagination button ("Next"), yellow CTA band, blog teaser, review slider.
- **Treatment detail** (`/services/{slug}`, CMS): white banner with large H1 and image; two-column body: long rich-text article (H2s such as "How Is It Done?", bullet lists) with a sticky yellow-gold sidebar card "Have Additional Questions?" (address, phone, email, "Contact Us" link); FAQ accordion (5 items, white rounded cards with chevrons, soft shadow); yellow CTA band; "Smile Makeovers That Speak for Themselves" before/after gallery slider (implant page only); blog teaser; contact block; footer.
- **About** (`/about-us`): plum banner with H1 left and intro right, large practice interior photo bleeding up into the plum, rich text with sticky "Have Additional Questions?" sidebar, "Meet Our Team" (CMS grid of 3 columns; photo cards with name and role over a gradient), testimonial slider, map, contact.
- **Team member** (`/team-members/{slug}`): two-column hero: portrait card (or silhouette placeholder), name in plum serif, role, "Book Appointment" button; then map and contact.
- **Fees** (`/dental-fees`): "Our Prices" centred title; striped table per category (Exam, X-Rays, Extractions, Restorations, Replacing Teeth, Dental Implants, Cosmetic, Other) with 3 columns: item, Pay As You Go, Maintenance Plan Members; deposit policy note; Dental Plans summary list; map.
- **Dental plans**: centred title; 2x2 plan cards (plan name, price per month, price per day, divider, green-check benefit list, gold "Sign Up Today" button); footnotes; image + text block about the worldwide emergency scheme.
- **Payment options**: text and logo content (finance provider).
- **Patient referral**: centred title, intro, 5 cream benefit tiles ("What can you refer to us for?"), collaborative-approach text, Jotform referral form.
- **Location pages** (`/dentist-in-{town}`, 9 towns, plus `/dental-services-in-{town}/{service}`): white banner with H1 and photo; long SEO rich text with sticky sidebar card; embedded related-services cards; map; contact.
- **Blog index and post**: index = "Latest Blog Posts" H1 and 3-column card grid with pagination; post = large H1 with side image, long rich text with H2/H3 hierarchy, blog teaser of other posts, map, contact, review slider.
- **Contact**: header "Get in Touch for Your Perfect Smile" with intro right; contact info plus form in cream section; map; testimonial slider.

### 2.4 Grid and containers

1340px max container (20px padding). Homepage grids: 2 columns (offers), 3 columns (services and blog), 50/50 (about and what sets us apart), 3-column testimonial. Inner text pages use a roughly 2/3 content, 1/3 sidebar split. Content text width on article pages is wide (around 900px+), which reads long.

### 2.5 Responsive behaviour (390px)

- Everything stacks to a single column and text turns centre-aligned (service cards, what sets us apart, blog cards), which looks consistent but long (homepage is 13,352px tall at 390px vs 7,791px at 1440px).
- Order on mobile: hero image above text, logo marquee, review (quote text first, then portrait, then arrows; the quote is shown in full, a very tall slide), plum offers (icon left of text), yellow CTA band with the photo below the button, service cards, practice intro, what sets us apart, map, contact details then form, blog, footer.
- Footer on mobile: logo and paragraph, then Main Menu and Services stacked, Locations and Patient Info side by side.
- Sticky bottom bar, floating chat button and cookie banner all stack at the bottom and compete for space (screenshot `home-390.png`).
- No horizontal overflow was detected on the sampled pages.

---

## 3. FLOW

### 3.1 Nav tree and sitemap (from sitemap.xml: about 110 URLs)

```
Home
About Us
  /team-members/{11 people: dentists, hygienist, nurses, practice manager}
Treatments (dropdown shows 5 + View All)
  /services (index)
  /services/ 14 detail pages: cosmetic-dentistry, dental-hygiene, dental-implants-yeovil,
     emergency-dental-care, emergency-dentist-appointment, endodontics, extractions,
     facial-aesthetics, invisalign, oral-surgery, periodontics, restorative-dentistry,
     sedation, teeth-whitening
Plans & Fees
  /dental-fees, /dental-plans, /payment-options
Blogs (/blog, ~33 posts)
Referrals (/patient-referral)
Contact Us (/contact)
Utility: /privacy-policy
Local SEO (footer "Locations" only, not in header):
  /dentist-in-{somerton, langport, west-camel, yeovil, tintinhull, yeovilton,
     south-petherton, bridgehampton, martock}
  /dental-services-in-yeovil/{5 services}, /dental-services-in-somerton/{7 services}
```

Footer columns: Main Menu (Home, About, Book an Appointment, Refer a Patient, Privacy Policy), Services (5 + View All), Locations (9 towns), Patient Info (Dental Fees, Dental Plans, Payment Options, Blogs, Contact).

### 3.2 CTA hierarchy and repetition

- Primary: "Book Appointment" (gold gradient, header, hero-equivalent buttons, practice intro, plan cards, team page). Always goes to the external Carestack online booking portal in a new tab. Prefetched in `<head>` for speed.
- Secondary: phone number (top bar, yellow CTA band, contact card, sticky mobile "Call Now").
- Tertiary: "Learn more", "Read more", "View all services/posts" arrow links; "Contact Us" in the sidebar card.
- Contact capture: Jotform on home, contact, about-style pages, team pages, location pages and blog; chat widget (callback, appointment, information) on all pages; referral form for dentists.
- Repetition count per page: roughly 6-8 conversion touchpoints (top bar phone, header button, mid-page band, practice intro button, contact card + form, sticky mobile bar, chat). Strong on commitment, but visually busy.

### 3.3 Appointment path

Header "Book Appointment" or any gold button, then Carestack (`onlineappointment.carestack.uk`) in a new tab, patient picks time and treatment there. Alternative path: phone, chat callback, or the Jotform "Book Appointment" submit. Because booking leaves the site, session continuity and analytics break at that point (GTM is installed on the site itself).

### 3.4 How services are presented and linked

Home shows 3 curated services, then "View all". The Services index is a 2-column CMS grid (9 per page with a pager). The detail pages are long-form SEO articles with an FAQ and a sidebar card. Cross-linking is via inline bold links in rich text (for example, implants article links to Oral Surgery and Emergency Care), blog teasers at the bottom and the footer Services column. Treatments dropdown is a short curated list and does not match the footer. Local pages repeat the service list per town as cards that link back to service pages.

### 3.5 Trust signals and placement

- Directly under the hero: logo marquee (BDA Good Practice, CQC, GDC, Straumann and others).
- Directly after: Google 4.9 rating with stars, real review quotes with names (3 on the page, plus an Elfsight Google reviews widget badge on mobile "5.0 (156)").
- Offers block (finance, new patients welcome, same-day emergency).
- Real team photos and roles, and practice exterior/reception photographs.
- Before/after gallery on the implant page; transparent price tables on `/dental-fees`.
- Weakness: no stats row, no years-in-practice or "patients treated" numbers, no awards.

### 3.6 Homepage storytelling order

Promise (hero) then proof (logos, reviews) then offers (finance, new patients, emergency) then "call us" then what we do (services) then who we are (practice) then why us then where (map) then contact then learn (blog) then footer. A classic problem, proof, offer, CTA arc, with a heavy front-loaded trust section and the practice story late.

---

## 4. REUSABLE COMPONENT INVENTORY (map onto Mill Pond content)

1. **Top contact bar** (phone, email) - thin dark strip, 42px.
2. **Fixed glass header** with logo, 5-7 nav items, hover dropdown and gold "Book Appointment" button; mobile left-sliding drawer.
3. **Hero, full-bleed** with overlay, H1, lead paragraph, 2 actions, optional crossfade slideshow; **inner-page banners** (white, plum, or white with image).
4. **Logo/accreditation marquee** (infinite scroll strip).
5. **Testimonial slider** with rating summary (Google G, 4.9, stars), portrait, quote, round arrows.
6. **Plum "offers/USP" 2x2 block** (icon + serif title + copy).
7. **Phone/appointment CTA band** (yellow rounded card with photo, overlapping the section edge) - also used on service and listing pages.
8. **Service card grid** (CMS), 3-column on home and 2-column on index; **service detail template** with rich text, sticky sidebar card, FAQ accordion, gallery slider.
9. **Image + text split** (practice intro, what sets us apart), cream background.
10. **Sticky "Have Additional Questions?" sidebar card** (address, phone, email, link).
11. **FAQ accordion** (white rounded cards, chevron).
12. **Before/after gallery slider**.
13. **Team grid** (CMS, 3-column photo cards with gradient name overlay) and **team member header**.
14. **Fees table** (category tables with plan-member comparison column) and **plan pricing cards** (2x2, check list, CTA).
15. **Referral tiles** (cream cards) and **referral form**.
16. **Map block** (gold bordered, rounded) and **contact block** (info card with gold rule + form card).
17. **Blog card grid** (CMS) and blog post template with rich text.
18. **Footer** (logo + blurb, 4 link columns, divider, copyright).
19. **Mobile sticky Book/Call bar**; chat widget; cookie banner.
20. **Location / local SEO page template** (long text, sidebar, service cards).

### Template vs customisation (inferred from class names and markup; the psychologist-128 template itself was not reviewed here, to be confirmed against the other agent's template report)

Inherited from the Webflow template (class names such as `home-3-banner`, `about-psychologist-wrapper`, `info-home-3-wrapper`, `advertising-wrapper-3`, `testimonials-wrap`, `collection-list-session-home-4`, `nav-dropdown`, `secondary-button`, `link-with-icon`, `footer-list-*`, `client-logo-marquee-*`, `psychologist-wrap`): the hero scaffold, the nav, the dropdown, the testimonial slider, the service/blog CMS cards, the advertising band, the logo marquee, the footer structure, and the underlying 1340 container and section rhythm.

Customised by Ilchester/Remedo: the whole palette (plum, gold, cream), the font pairing (Libre Caslon, Castoro, Nunito, Lexend) and Title Case treatment, the gold gradient buttons, the top contact bar, the JS hero slideshow, the plum offers block with icons, the yellow image CTA band, the "What Sets Us Apart" split, the gold-framed map, the gold-ruled contact card plus plum Jotform card, the sticky yellow mobile Book/Call bar, the fee tables, plan cards, referral page, local-SEO page families, the CookieYes banner, the RoboReception chat and the Elfsight reviews widget. Leftover template artifacts: unused blue `--primary`, green `--primary-light`, duplicate `home-3-banner1`, `.psychologist` class names, and "Get start" placeholder button.

---

## 5. UK-SPECIFIC ITEMS TO ADAPT FOR CANADA (Mill Pond Dental)

| Ilchester (UK) | Adapt for Mill Pond (Canada) |
|---|---|
| "Private dentist", "private dentistry vs NHS" blog post, "we also offer private care" framing | Remove NHS framing. Replace with fee-guide, insurance and CDCP language ("accepting new patients", "direct billing to most insurers"). Mill Pond's current site already has a Canadian Dental Care Plan page, so give it a first-class slot |
| GBP prices ("from GBP 70 a month", GBP fees table, 25% / 50% children's discounts) | CAD, with Ontario/Canadian price structure; likely drop public fee tables or use "estimates" and insurance coverage notes; keep the "Pay As You Go vs Plan Member" table only if Mill Pond has a membership plan |
| Dental Plans (Preventive, Care, Children's) and "Worldwide Dental Emergency Access Scheme" | Replace with in-office membership/no-insurance plan if offered, or an insurance and CDCP explainer; drop the worldwide scheme |
| Finance: "Tabeo" interest-free finance, "Interest Free Finance" USP | Replace with Canadian financing partners (for example Dentalcard, Clearpay-style options, or in-house plans) or remove |
| Accreditation logos: CQC, GDC, BDA Good Practice | Replace with Royal College of Dental Surgeons of Ontario (RCDSO), Ontario Dental Association (ODA), Canadian Dental Association (CDA), and equipment/implant partners as applicable. Check what Mill Pond is allowed to display |
| Phone format 01935 312692 (and a second number 01935 840784 in code) | Canadian format (519/226 area codes as applicable) and a single number sitewide |
| Address "17 Church St, Ilchester, Yeovil BA22 8LN, UK", "Somerset" local copy, 9 UK village location pages | Mill Pond address, province "ON", postal code; adapt local pages to nearby Ontario communities |
| Hours Mon-Fri 8:30-5, closed Sat-Sun | Mill Pond hours |
| Referrals page "from dentists and healthcare professionals", CBCT scan referral | Keep only if Mill Pond accepts specialist/colleague referrals; otherwise drop the nav item |
| GDPR consent line on the form ("I agree to have my information stored...") and CookieYes UK-style banner ("Accept All / Reject All / Customise") | PIPEDA / Ontario privacy wording; CASL-compliant consent for marketing email; keep a cookie banner only if analytics require it |
| Spelling: "Centre", "Specialised", "Personalised", "Colour" | Canadian English: "Centre" stays, but "personalized/specialized" in many Canadian dental sites. Confirm house style with the client |
| Dental terminology and procedures priced for NHS bands, "Emergency Dentist Appointment" | Use "emergency dentist" with clear same-day appointment instructions |
| Schema and meta: `en-GB`, `priceRange ££`, "medicalSpecialty", UK `PostalAddress` | `en-CA`, `$$` price range, Canadian address |
| Copy: "Dentophobia", "Smile Makeovers", "Maintenance Plan" | Keep the tone, localise names |
| Dates "October 30, 2026" format | Fine for Canada |
| Online booking on Carestack UK | Replace with Mill Pond's existing booking tool or a form/phone-first flow |

---

## 6. STRENGTHS

- Distinctive, warm, premium palette that separates it from the usual blue-and-white dental sites.
- Strong serif typography for headlines, with a very readable humanist sans for body copy.
- Clear, repeated conversion system (gold button, phone band, sticky mobile bar).
- Well-structured CMS: services, team, blog, locations. Reuses cards and blocks efficiently.
- Strong trust layer immediately after the hero (rating, accreditations, real reviews).
- Good local-SEO architecture (town pages and service-in-town pages).
- Mobile has a proper sticky Book/Call bar and a clean drawer menu.
- Pricing transparency (fees and plans pages) builds trust.

## 7. WEAKNESSES AND RISKS

- Cluttered first impression: chatbot pop-up, cookie banner, sticky mobile bar and floating review badge all overlap the hero, especially on mobile.
- Hero H1 is very large and tightly tracked (67px, -2px), and the hero secondary CTA reads "Get start" and links to `#`.
- Auto `text-transform: capitalize` creates awkward Title Case ("For", "Of", "And" capitalised in body copy and card text).
- Body line-height 1.2 and long article line lengths hurt readability; rich-text inner pages feel like walls of text with little visual rhythm.
- Header nav only shows 5 of 14 services; the footer and menu are inconsistent.
- Several staff have grey silhouette placeholders.
- Heavy reliance on third-party embeds (Jotform, Carestack, Elfsight, RoboReception, CookieYes) which load blank or late and break the premium feel; Jotform and map showed empty in headless captures.
- Header phone number mismatch (visible 01935 312692 vs link `tel:01935840784`), typos in testimonials (client-supplied), a "Next" pager on a 9-item list.
- No stats row, no process/steps section, no insurance block, no new-patient-info section.
- Mobile page length (13,000px) and centred text everywhere reduce scannability. Testimonial on mobile shows a very long unscrolled quote.
- Unused template variables (blue/green) and duplicate banner classes need cleaning before reuse.
- Colour contrast check needed: gold button on gradient and cream-on-plum small text; white text over the hero slideshow depends on the overlay.

## 8. RECOMMENDATIONS FOR MILL POND

1. Keep the theme's structure but treat it as a Webflow style guide: build a tokenised variable set (plum, gold, cream, ink) and delete legacy blue/green variables. Decide whether Mill Pond keeps plum/gold (matches the chosen theme) or shifts the accent to its existing brand colours; confirm with the client before final.
2. Keep the type system: serif display (Libre Caslon Text or an equivalent with a Canadian-English-safe licence), Castoro for sub-heads, Nunito for body, Lexend for UI. Open body line-height to 1.5-1.6, reduce H1 to about 56-60px with -1px tracking, drop `capitalize` and use real Sentence Case or intentional Title Case per CMS field.
3. Keep the homepage arc but reorder slightly: hero, trust strip, services (3-6), proof (reviews), practice story, offers/insurance/CDCP, CTA band, team preview, map and contact, blog, footer. Add a short stats row and a "new patient: what to expect" three-step row, both absent here.
4. Replace the UK offers block with: Accepting new patients, CDCP and insurance direct billing, Flexible payment, Emergency care.
5. Make one primary action unmistakable: "Book Appointment" (gold) with a phone secondary. Fix the hero secondary button. Keep the mobile sticky Book/Call bar but suppress the chat widget auto-open and hold the cookie banner to a slim bottom strip so they do not stack.
6. Build the mega-menu from the CMS so Treatments lists all services in groups (General, Cosmetic, Restorative, Emergency), and keep footer and header consistent.
7. Reuse the CMS collections as-is: Services (with sidebar card + FAQ + CTA band), Team (with a real-photo requirement), Blog, Locations (only for real service areas), and a Plans/Insurance page in place of Dental Plans.
8. Keep the 12px/8px radius system and the gold-framed map and contact block, since they are the most reusable and cheapest to rebuild in Webflow.
9. Plan the third-party embeds early (form tool, booking, reviews, cookie consent) and test them at both breakpoints; avoid blank states by using native Webflow forms where possible.
10. Build the hero slideshow with a Webflow-native slider or a single high-quality image (the custom JS adds weight and does not run on mobile). Provide a mobile-specific hero crop.
11. Accessibility pass: visible focus states on the gold buttons, label/aria on the slider arrows, alt text on every photo, enough contrast on cream-on-plum small copy, and a skip-link.
12. Content and compliance for Canada: use RCDSO-compliant wording and claims, CASL/PIPEDA consent text, CAD and en-CA metadata, and swap the accreditation logos before launch.
