# 04 - Current Site Analysis: www.mpdental.ca (Mill Pond Dental Care)

Analysed 2026-11-06. Read-only: nothing was submitted, booked or changed. Sources: live HTML and sitemaps (curl), rendered DOM and computed styles (Playwright), screenshots at 1440 px and 390 px.
Screenshots: `analysis/screenshots/current-site/` (`<page>-1440.png`, `<page>-390.png`, plus `home-390-menu-open.png`, `home-1440-more-menu-open.png`). Note: the 1440 home/services/team captures are 1425 px wide because of the scrollbar.

---

## 0. Executive summary

- **Platform: Wix (Thunderbolt renderer)**, `generator = Wix.com Website Builder`, served behind Cloudflare. It is a 27-URL site (26 pages including the blog index, plus 1 blog post), almost all of it thin: most service pages are 50-130 words of body copy, one image and one "Get in Touch" button.
- **Visual identity is a pale-blue (#97C0E8) / white / black Wix template.** The type is Work Sans ExtraLight and the stock-photo-heavy imagery is generic. Much of the pale-blue text and the buttons fail WCAG contrast (about 1.9:1 on white).
- **No real new-patient path.** The only conversion mechanisms are "Call 519.268.3351" and a generic 5-field "Appointment Request" contact form (name, email, phone, subject, message). There is no online booking, no new-patient forms, no insurance page apart from CDCP, no FAQs, no real reviews or testimonials and no before/after.
- **The reviews section is fake-looking.** It is a blurred five-star graphic with "OUR Google REVIEWS" and a "View Here" button that opens a long Google search URL. No rating, count or quotes appear on the site.
- **SEO is weak.**
  - Missing meta descriptions on 3 pages.
  - Placeholder site name "Mill Pond Dental 1" in the WebSite schema, `og:site_name` and the blog title tag.
  - Two H1s on the homepage and none on one staff page.
  - Only a bare LocalBusiness schema (no Dentist type, hours, geo or sameAs).
  - Several typos in titles and meta descriptions.
  - No H2/H3 structure on inner pages.
- **Stale and orphaned content.**
  - The COVID-19 announcement page is still live and indexed.
  - Dr. Lida Kiddie (the practice founder) has a live page but is not on the Team page or in the hero.
  - Dr. Al Rafea's bio says "Bio Coming Soon".
  - The Invisalign page is an orphan: it is in the sitemap but not in any menu.
  - The footer reads "(c)2025".
- **Mobile.** Wix serves a dedicated mobile layout (viewport `width=320`, hamburger menu). It works and is readable, but it is a scaled-down copy of the desktop template (see section 2). The phone CTA is a ghost button that is easy to miss, and there is a large empty gap under the homepage form.
- **Redirects.** `http`/non-www redirect to `https://www`, a trailing slash redirects to the no-slash URL, and 404s return a true 404.

---

## 1. DESIGN

### 1.1 Logo and brand
- Header lockup: a 60x60 px light-blue tooth icon in a thin outlined square ("Original on Transparent.png"), then the wordmark **"Mill Pond Dental Care"** in Work Sans ExtraLight, pale blue (#97C0E8), with the tagline **"Dorchester Dentist Serving Thames Centre"** in small black sans.
- The tooth icon is tiny, low-detail and has no clear-space system. There is no visible full brand guide. The 4085 Hamilton Rd street sign (blue tooth plus bold "MILL POND DENTAL CARE") is the strongest brand asset on the site and is used only as the homepage "Welcome" photo.
- Favicon and og:image: LocalBusiness schema image is `wixstatic .../138cf1_ac99e75bbcc24f8d907d00765aa24574~mv2.jpg`.

### 1.2 Colour palette (computed from the live DOM and Wix theme variables)
| Role | Value | Notes |
|---|---|---|
| Brand blue (headings, wordmark, ghost buttons, "Call Now" fill, ticker band) | `#97C0E8` (rgb 151,192,232) | Wix `--color_18`. About 1.9:1 contrast on white, so it fails AA for text |
| Body text | `#000000` | Wix `--color_1` / `--color_15` |
| Dark text variant | `#191919` | few uses |
| Section background (cards, form, hours) | `#F7F7F7` | alternating with white |
| White | `#FFFFFF` | header, footer, some sections |
| Primary button (CDCP, Submit) | `#000000` fill, white text | |
| Default unstyled link | `#0000EE` (browser blue) | leaks on service tile titles (underlined blue/pale-blue links) |
| Grey overlay | `#BFBFBF` | band behind the homepage "Welcome" section |
| Theme leftovers | `#C0F1EF` (--color_5), `#808080` (--color_8), `#116DFF` (Wix default blue) | unused template colours |

The palette is effectively monochrome plus one pastel. There is no secondary or accent colour and no dark brand colour, which gives poor hierarchy and weak CTA emphasis.

### 1.3 Typography
- **Headings and large text:** `worksans-extralight` / "Work Sans" ExtraLight, weight rendered at 200-300, H1 58px (line height 72.5px), H2 40px (54px), body paragraphs 28px on the homepage hero panels but smaller in cards.
- **Body, buttons, nav:** `proxima-n-w01-reg` (Proxima Nova) about 15 px for buttons; Arial/Helvetica 10 px base for some text (e.g. "Call Now" button text is 10px Arial, and the 10px body default leaks through).
- Headings are all caps on the home hero ("MILL POND DENTAL CARE DORCHESTER", "WELCOME TO...", "DENTAL SERVICES") and Title Case on inner pages. This is inconsistent.
- ExtraLight at pale blue on white/grey is hard to read. Line spacing in service-page paragraphs is very loose (about 28px for a 15px font).

### 1.4 Imagery
- All stock: dental tools in a coat pocket (hero), X-ray film, smiling patient with mirror, female dental assistant, male dentist with clipboard, smiling woman in the chair, a lotus bud (used as the placeholder for Dr. Al Rafea), a macro mouth shot (hygienist tile) and a woman at a front desk (reception tile).
- Exceptions: the 4085 Hamilton Rd sign photo, a black-and-white portrait on the Dr. MacHardy tile (appears to be stock-style, not clearly a real portrait) and one real candid group photo of three dental assistants (the only authentic team photo).
- Quality: clean but generic, visibly stock. Homepage tile images are 474x315 (small, soft when scaled to 480px+ columns). The team page uses alternating image/text 50:50 blocks.
- The lotus bud for Dr. Al Rafea reads as a placeholder.

### 1.5 Iconography
Essentially none. The only icons are the Facebook and Instagram glyphs (20 px) in the footer and the tooth logo. Services are not represented by icons.

### 1.6 Components
- **Buttons:**
  - Primary: black fill, white Proxima text, 6px radius ("More CDCP Information", "Submit").
  - Ghost: 1px #97C0E8 border, pale-blue text, 6px radius ("Get in Touch", header "Call 519.268.3351"). Very low contrast.
  - "Call Now" (home): #97C0E8 fill, black 10px Arial text, 10px radius.
  - Button styles are inconsistent in font, size and radius.
- **Cards:** Wix "strip" with a flat #F7F7F7 panel and a full-bleed photo. No shadows, no borders.
- **Forms:** 5 fields in sharp-cornered 1px black bordered inputs ("Your Name", "Your Email", "Your Phone", "Subject", "Type your message here..."), black Submit button. Visually utilitarian compared with the rest of the pale design.
- **Ticker:** a #97C0E8 horizontal marquee with `MILL POND DENTAL CARE // DORCHESTER DENTIST // PERCISION // DIGITAL TECHNOLOGY // SAME DAY CROWNS // WHITENING // PATIENT COMFORT // SPORTS GUARDS // LASER TREATMENT //` (typo "PERCISION"). It also makes claims (laser treatment, same day crowns, digital technology) that appear nowhere else on the site.

### 1.7 Spacing and rhythm
Generous white space and a calm, airy feel, but sections are poorly bounded: empty vertical gaps (e.g. about 400 px of blank space below the homepage form and map region), inconsistent section padding and a repeated 3x4 image/text checkerboard that mixes service tiles and unrelated stock photos.

### 1.8 Tone of voice
Warm, plain, family-focused ("team captain", "comfortable home like environment where your oral health is our priority"). Short and generic, with no differentiators, no specifics (no technology names, no insurance or payment details, no new-patient welcome copy). Some copy errors are listed in section 5.

### 1.9 Overall impression
Calm, clean and gentle, but a thin template site that looks like a 2016 Wix preset: tiny logo, low-contrast pastel text, stock photography and very little content. It reads as an under-invested site compared with competing GTA/London-area practices.

**Worth keeping**
- The soft blue brand colour family and the clean, airy feel.
- The tooth icon concept.
- The real photo of the 4085 Hamilton Rd sign (a strong local landmark and brand asset).
- The real group photo of the dental assistants (use more real team imagery).
- The warm, family-first tone ("team captain" language).
- The CDCP messaging (a genuine differentiator).

**Dated or off-brand**
- ExtraLight pastel type.
- Mixed button styles.
- Stock imagery and the lotus placeholder.
- Default blue underlined links.
- The fake-looking blurred-star "Google Reviews" block.

---

## 2. LAYOUT

### 2.1 Grid and containers
- Wix absolute-positioned strips: content width about 980 px (Wix standard), with some sections going full bleed at 1425-1440 px (hero, tile grid, ticker). Header content sits at 80 px left and right padding.
- Navigation: single white header bar (140 px high) with logo lockup on the left and menu on the right.

### 2.2 Header (all pages)
Logo and wordmark (links home) | **Services** | **Our Team** | **Contact** | **More** (dropdown: Instagram, Hours, CDCP, Blog) | ghost button **"Call 519.268.3351"** (`tel:+1-519-268-3351`). The Services item has a sub-menu of the six service pages on mobile. On desktop the nav links read "Services / Our Team / Contact / More" in 11-12 px text.

### 2.3 Footer (all pages)
Centred stack: "Mill Pond Dental Care", `4085 Hamilton Rd, Dorchester, ON N0L 1G2`, `reception@mpdental.ca` (mailto), `519-268-3351` (tel), Facebook + Instagram icons, "(c)2025 by Mill Pond Dental Care." No footer links, no hours, no sitemap, no privacy policy or accessibility statement, no logo.

### 2.4 Homepage section by section (1440)
| # | Section | Purpose | Content | Pattern |
|---|---|---|---|---|
| 1 | Hero | Identify practice, announce CDCP | Dental tools photo background; frosted panel: H1 "MILL POND DENTAL CARE DORCHESTER", links to Dr. Steven MacHardy and Dr. Aya Al Rafea, "Accepting the Canadian Dental Care Plan", black button "More CDCP Information" | Full-bleed image, translucent card on left |
| 2 | Welcome | Value prop and CTA | Photo of 4085 sign; second H1 "WELCOME TO MILL POND DENTAL CARE"; "State-of-the-art technology in a comfortable home like environment where your oral health is our priority."; "Call Now" | Grey band, overlaid frosted card |
| 3 | Dental Services | Navigate to six service pages | 3x4 checkerboard of alternating photo and text tiles: Preventative Care and Dental Check-up ("Elevating Your Health"), Team Approach to Family Dentistry ("Taking Care of You"), Teeth Whitening ("Highlighting Your Smile"), Prosthetics and Appliances ("Protecting Your Smile"), Restorative Treatment ("Enhancing Function and Aesthetics"), Emergencies ("We Are Here to Help") | Tile grid, text-link titles (blue, underlined) |
| 4 | Ticker | Keyword strip | Marquee of keywords (see 1.6) | Full-width blue band |
| 5 | Google Reviews | Social proof | Blurred gold star graphic, "OUR Google REVIEWS", "View Here" button | Centred, grey background; links to a Google search results URL |
| 6 | Appointment Request | Lead capture | NAP block (name, address, email, phone) plus 5-field form and Submit; large blank area below (map not rendered on the homepage) | 2-column in grey card |
| 7 | Opening Hours | Hours | "Mon - Thurs: 8am - 5:30pm / Fri - Sun: Closed"; "Get in Touch" button to /contact | Centred, grey |
| 8 | Footer | NAP and social | See 2.3 | Centred |

Page height: about 5,850 px at 1440 and about 3,700 px at 390.

### 2.5 Inner page templates
- **Service pages** (family dentistry, check-up, whitening, restorative, prosthetics, emergencies, Invisalign): 50/50 split, full-height stock photo on one side, pale-blue H1, 40-130 words of copy, a "Get in Touch" ghost button on the other side, then the footer. 1,000-1,350 px tall. There are no sub-headings, FAQs, pricing, process, related-services or booking CTA.
- **Services index** (`/services`): the same 3x2 tile grid as the homepage.
- **Team index** (`/our-team`): alternating image/text 2-column rows (Dr. MacHardy, Dr. Al Rafea, Hygienists, Assistants, Reception), group-level copy with name links to bio pages and a "Get in Touch" button for each.
- **Bio pages:** H1 name, single portrait and a text bio (roughly 40-345 words).
- **Contact** (`/contact`): H1 "Appointment Request", NAP, 5-field form, then a full-width Google Map iframe (with an info window showing the address and a "Directions" link), followed by about 250 px of empty space.
- **Hours, CDCP, COVID-19, Instagram, Blog:** plain single-column pages.
- **Blog index** (`/blog`): "The Mill Pond Dental Journal", a single post card.
- **Blog post:** 3 min read, 40 views, "likes" counter widget.

### 2.6 Responsive behaviour
- **1440:** full-width strips, content aligns to the Wix 980 px grid or full bleed.
- **390 (iPhone UA):** Wix serves a dedicated mobile layout (`<meta viewport width=320>`; page width 320 px, no horizontal scroll). The header collapses to a logo plus hamburger, the phone ghost button drops below the header, tiles stack as text-only links (service photos are dropped), the hero image is cropped and the "Welcome" card sits below the sign photo. Hamburger menu: Services (expandable), Our Team, Contact, Instagram, Hours, CDCP, Blog. It is readable, but text rendering is small and the ghost phone button is low contrast. There is a long empty gap under the form on the homepage. A raw desktop browser emulation without a mobile UA displays a 980 px scaled-down desktop layout, which is only relevant to Wix's UA sniffing.

---

## 3. FLOW / UX

### 3.1 Navigation tree
```
Home (/)
|- Services (/services)
|  |- Team Approach to Family Dentistry (/family-dentistry)
|  |- Preventative Care and Dental Check-up (/preventative-care-dental-check)
|  |- Teeth Whitening (/teeth-whitening)
|  |- Restorative Treatment (/restorative-treatment)
|  |- Prosthetics and Appliances (/prosthetics-and-appliances)
|  `- Emergencies (/emergencies)
|- Our Team (/our-team)
|  |- Dr. Steven MacHardy (/dr-steven-machardy)
|  |- Dr. Aya Al Rafea (/dr-aya-al-rafea)
|  |- Hygienists: Cali VanBommel (/cali-vanbommel), James Stemp (/james-stemp)
|  |- Assistants: Heather Brulotte (/heather-brulotte), Myranda Deml (/myranda-deml), Sophie Zegers (/sophie-zegers)
|  `- Reception: Cynthia Lope (/cynthia-lope), Jessica Wilton (/jessica-wilton)
|- Contact (/contact)  [Appointment Request form + map]
|- More
|  |- Instagram (/instagram)
|  |- Hours (/hours)
|  |- CDCP (/canadiandentalcareplan)
|  `- Blog (/blog) -> /post/teeth-whitening-a-safe-and-effective-way-to-brighten-your-smile
Not linked from nav or the body (orphans in the sitemap):
|- Dr. Lida Kiddie (/dr-lida-kiddie)
|- Invisalign (/invisalign)  [linked only from nowhere discovered; external link to invisalign.com on the page]
`- COVID-19 Announcement (/covid-19-announcement)
```

### 3.2 Full URL inventory (all from sitemap.xml: `pages-sitemap.xml` 26 URLs incl. home, `blog-posts-sitemap.xml` 1 URL, `blog-categories-sitemap.xml` 1 URL = /blog). All lastmod 2026-07-24, all 200, canonical = self, no robots meta.

Word counts are approximate main-content words (rendered text minus about 45 words of header and footer chrome).

| # | URL | Title tag | H1 | Meta description | ~Words | Notes |
|---|---|---|---|---|---|---|
| 1 | `/` | Home \| Dorchester Dentist Ontario \| Mill Pond Dental Care | **2 H1s**: "MILL POND DENTAL CARE DORCHESTER" and "WELCOME TO MILL POND DENTAL CARE" | Located in the heart of Dorchester, Mill Pond Dental Care, a Dorchester Dentist, is here for all your family dentistry needs. Whether you are a new patient, returning patent, or looking for an emergency dentist, we are here for you. | 195 | Typo "patent"; LocalBusiness + WebSite JSON-LD |
| 2 | `/services` | Services \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Dental Services | At Mill Pond Dental Care, a Dorchester Dentist, we provided general dental and family dental services. Dental fillings, dental check-ups, dental crowns, teeth whitening, dental cleaning, dentures, dental implants, and more. | 75 | Tile index; "provided" tense error |
| 3 | `/family-dentistry` | Family Dentistry \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Team Approach to Family Dentistry | Mill Pond Dental Care, a Dorchester Dentist, is a family focused general dental practice. We officer services in all areas of dentistry for children, adults, and seniors. Our network of dental specialists will be utilized to optimize your care when needed. | 125 | Typo "officer"; title differs from H1 |
| 4 | `/preventative-care-dental-check` | Check-up \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Preventative Care and Dental Check-up | Mill Pond Dental Care, a Dorchester Dentist, focuses on prevention and keeping you healthy. Visiting our dental hygienists for your preventative cleanings will help to keep your gums and teeth healthy. Regular dental check-up exams will ensure that issues are identified when they are small and easily managed. | 100 | Title tag is just "Check-up"; mentions oral cancer screening at every visit |
| 5 | `/teeth-whitening` | Teeth Whitening \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Teeth Whitening | Whiten your smile at Mill Pond Dental Care, a Dorchester Dentist. We provide teeth whitening treatment to highlight your smile. | 70 | Custom trays; duplicate topic with blog post |
| 6 | `/restorative-treatment` | Treatment \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Restorative Treatment | If you have broken or lost a tooth Mill Pond Dental Care, a Dorchester Dentist, can help. Dental fillings, crowns, caps, implant dentistry, veneers, and dentures are some of the treatments we provide to restore your smile. | 70 | Title tag only "Treatment"; bullet list of 6 treatments |
| 7 | `/prosthetics-and-appliances` | Prosthetics & Appliances \| Dorchester Dentist \| Mill Pond Dental Care | Prosthetics and Appliances | Mill Pond Dental Care, a Dorchester Dentist, can make new dentures or fix old and broken dentures. For patients who clench or grind their teeth, are active in sports, or suffer form jaw pain, dental appliances can be made to protect teeth or reduce symptoms. | 90 | Typo "form" for "from" |
| 8 | `/emergencies` | Emergencies \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Emergency Care | Dental emergencies happen, Mill Pond Dental Care, a Dorchester Dentist, can help. If you experience a dental emergency, contact us. | 105 | Directs after-hours callers to the answering service; ER advice for swelling |
| 9 | `/invisalign` | Invisalign \| Mill Pond Dental Care | Invisalign | Straighten your teeth with Invisalign clear aligners | 85 | **Orphan** (not in nav or on the homepage); external link to invisalign.com |
| 10 | `/our-team` | Team \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Our Team | Dr. Lida Kiddie, Dr. Steven MacHardy, and our team of dental hygienists, dental assistants, and administrative staff look forward to building a lasting relationship with you at Mill Pond Dental Care, a Dorchester Dentist. | 280 | Meta lists Dr. Kiddie, but she is not on the page; 5 H2s |
| 11 | `/dr-steven-machardy` | Dr. Steven MacHardy \| Dorchester Dentist \| Mill Pond Dental Care | Dr. Steven MacHardy | Dr. Steven MacHardy is a Dorchester Dentist at Mill Pond Dental Care. | 330 | Joined 2020, practising since 2007 |
| 12 | `/dr-aya-al-rafea` | Dr. Aya Al Rafea \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Dr. Aya Al Rafea | Dr. Aya Al Rafea is a dentist at Mill Pond Dental Care, Dorchester Dentist | 40 | **"Bio Coming Soon"** (thin page) |
| 13 | `/dr-lida-kiddie` | Dr. Lida Kiddie \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Dr. Lida Kiddie | Dr. Lida Kiddie is a Dorchester Dentist at Mill Pond Dental Care. | 345 | **Orphan**; founder bio (established the practice, U of Waterloo BSc, U of Toronto DDS) |
| 14 | `/cali-vanbommel` | Cali Van Bommel \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Cali VanBommel | Cali VanBommel is a dental hygienist at Mill Pond Dental Care, Dorchester Dentist | 195 | Title spelling differs from H1 ("Van Bommel") |
| 15 | `/james-stemp` | James Stemp \| Dorchester Dentist Ontario \| Mill Pond Dental Care | James Stemp | James Stemp is a dental hygienist at Mill Pond Dental Care, Dorchester Dentist | 125 | |
| 16 | `/heather-brulotte` | Heather Brulotte \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Heather Brulotte | Heather Brulotte is a dental assistant at Mill Pond Dental Care, Dorchester Dentist | 185 | |
| 17 | `/myranda-deml` | Myranda Deml \| Dorchester Dentist \| Mill Pond Dental Care | Myranda Deml | Myranda Deml is a dental assistant at Mill Pond Dental Care, Dorchester Dentist | 35 | Very thin |
| 18 | `/sophie-zegers` | Sophie Zegers \| Dorchester Dentist \| Mill Pond Dental Care | **No H1** | Sophie Zegers is a dental assistant at Mill Pond Dental Care, Dorchester Dentist | 95 | Missing H1 |
| 19 | `/cynthia-lope` | Cynthia Lope \| Mill Pond Dental Care | Cynthia Lope | Cynthia is a dental administrative coordinator at Mill Pond Dental Care, Dorchester Dentist | 130 | |
| 20 | `/jessica-wilton` | Jessica Wilton \| Dorchester Dentist \| Mill Pond Dental Care | Jessica Wilton | Jessica Wilton is a dental administrative coordinator at Mill Pond Dental Care, Dorchester Dentist | 130 | |
| 21 | `/contact` | Contact \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Appointment Request | Mill Pond Dental Care, a Dorchester Dentist, contact information | 50 | Form plus Google Map iframe |
| 22 | `/hours` | Hours \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Opening Hours | Mill Pond Dental Care, a Dorchester Dentist, hours of operation. | 55 | Only page mentioning occasional Friday hygiene |
| 23 | `/canadiandentalcareplan` | CDCP \| Mill Pond Dental Care | Canadian Dental Care Plan - CDCP | We accept he Canadian Dental Care Plan. Learn more about how you can apply! | 195 | Typo "he"; link text "Quailfy"; 1 H2; slug has no hyphens |
| 24 | `/instagram` | Instagram \| Dorchester Dentist Ontario \| Mill Pond Dental Care | Mill Pond Instagram | Social Media for Mill Pond Denatal Care, a Dorchester Dentist. Instagram, Facebook | 30 | Typo "Denatal"; Instagram feed widget (iframe, instafeed.codev.wixapps.net) |
| 25 | `/covid-19-announcement` | COVID-19 ANNOUNCEMENT \| Mill Pond Dental Care | COVID-19 ANNOUNCEMENT (split in 2 lines) | **None** | 165 | **Outdated 2020 notice**, orphan, no meta description |
| 26 | `/blog` | Blog \| Mill Pond Dental 1 | The Mill Pond Dental Journal | **None** | 135 | Placeholder site name "Mill Pond Dental 1"; 1 post |
| 27 | `/post/teeth-whitening-a-safe-and-effective-way-to-brighten-your-smile` | Teeth Whitening: A Safe and Effective Way to Brighten Your Smile | Teeth Whitening: A Safe and Effective Way to Brighten Your Smile | **None** | about 640 | Posted Jul 24 (2026), 3 min read, 40 views; 2 JSON-LD blocks; the only blog post |

Totals: 26 URLs in `pages-sitemap.xml` (home, /blog and 24 other pages) + 1 blog post = 27 indexable URLs (the `/blog` index is also in `blog-categories-sitemap.xml`; counted once). `robots.txt` has no disallows for content pages.

Additional URLs that will need handling in the redirect map: `http://` and `https://mpdental.ca` (non-www), trailing-slash variants, and any `/blog/categories/*` or `/post/*` paths Wix may generate (the blog category sitemap contains only /blog).

### 3.3 Primary CTAs and where they appear
| CTA | Where | Target |
|---|---|---|
| "Call 519.268.3351" (ghost button) | Header on every page | `tel:+1-519-268-3351` |
| "Call Now" | Homepage Welcome section | `tel:` |
| "More CDCP Information" (black) | Homepage hero | /canadiandentalcareplan |
| "Get in Touch" (ghost) | Every service page, team page (x5), homepage hours | /contact |
| Appointment Request form + Submit | Homepage and /contact | Wix form |
| "View Here" (Google reviews) | Homepage | Long Google search URL |
| "Click Here To See If You Quailfy" / "Click Here To Apply" | /canadiandentalcareplan | canada.ca CDCP pages |
| mailto reception@mpdental.ca / tel | Footer on every page | |

### 3.4 Appointment / new-patient path (as it exists)
1. Land on the home page or a service page.
2. Click "Get in Touch" (or the header phone button).
3. Arrive at /contact ("Appointment Request"): fill name, email, phone, subject and free-text message, then Submit. (The form was not submitted.) The site does not explain what happens next (response time, new-patient intake) and there is no new-patient page, patient forms, insurance or payment information, or online booking.
4. The alternative path is calling during Mon-Thu hours.

There is no new-patient welcome page, no "what to expect", no intake forms and no emergency triage detail beyond the Emergencies page.

### 3.5 Contact information placement
- **Phone:** header button, hero/Welcome CTA, NAP block and footer on every page. Presented in two formats (519.268.3351 in the header, 519-268-3351 in the body and footer).
- **Address:** homepage NAP block, contact page and footer. The Google Map embed appears only on /contact.
- **Hours:** homepage (Mon-Thurs 8am-5:30pm, Fri-Sun Closed) and /hours (adds "Occasional Friday Hygiene Appointments: 8am-2pm"). Hours are not in the footer or header, and the two pages disagree in detail.
- **Email:** reception@mpdental.ca in the NAP block and footer.

### 3.6 Trust signals
- Google reviews: blurred stars graphic only; no rating, count, quotes or live widget.
- Credentials: only in the Dr. MacHardy and Dr. Kiddie bios (Boston University DMD, U Michigan AEGD, U of Toronto, ODA/study clubs). No licence, association badges, or CDA/ODA logos on the site.
- CDCP acceptance: strong and visible, and the only insurance-related content (no direct billing, private insurance or payment-plan info).
- Before/after: none. Testimonials: none. Awards: none. Patient safety/sterilisation: none.

### 3.7 Forms and what they collect
One form (the homepage and /contact use the same Wix form): Name, Email, Phone, Subject, Message. No consent, no appointment-type or preferred-time fields, no new/existing-patient question, no privacy notice and no confirmation messaging captured. Nothing was submitted during this analysis.

### 3.8 Friction points
1. No booking and no new-patient path.
2. Contact form is generic and not labelled "new patient".
3. The phone CTA is a pale ghost button (about 1.9:1 contrast).
4. Hours are inconsistent between the homepage and /hours and are missing from the header and footer.
5. Key information is hidden in a "More" dropdown (Hours, CDCP, Blog).
6. Orphan pages (Dr. Kiddie, Invisalign, COVID).
7. Services have no detail, FAQs, pricing guidance, or "what to expect".
8. "Reviews" block leads to a Google search and not a review page.
9. Ticker claims (laser, same-day crowns, digital technology) have no supporting content.
10. Blank space under the form on the homepage and contact page.

---

## 4. CONTENT INVENTORY

### 4.1 Services offered (content found)
- Family dentistry (children, adults, seniors; network of specialists, "team captain").
- Preventative care and check-up (hygiene visits, exams, oral cancer screening at every visit).
- Teeth whitening (custom whitening trays, take-home).
- Restorative treatment (fillings, crowns, bridges, implants, dentures, veneers).
- Prosthetics and appliances (complete and partial dentures; grinding/clenching appliances, sports guards, night guards, retainers).
- Emergency care (after-hours answering service; ER advice for swelling).
- Invisalign (orphan page).
- Mentioned only in the ticker or meta (no pages): same day crowns, digital technology, laser treatment, patient comfort, root canals/extractions (CDCP page only).

### 4.2 Team (names and roles only)
| Name | Role | Page |
|---|---|---|
| Dr. Lida Kiddie | Dentist, founder (orphan page, not on the Team page) | /dr-lida-kiddie |
| Dr. Steven MacHardy | Dentist | /dr-steven-machardy |
| Dr. Aya Al Rafea | Dentist (bio "coming soon") | /dr-aya-al-rafea |
| Cali VanBommel | Dental hygienist | /cali-vanbommel |
| James Stemp | Dental hygienist | /james-stemp |
| Heather Brulotte | Dental assistant | /heather-brulotte |
| Myranda Deml | Dental assistant | /myranda-deml |
| Sophie Zegers | Dental assistant | /sophie-zegers |
| Cynthia Lope | Dental administrative coordinator (Reception/Administration) | /cynthia-lope |
| Jessica Wilton | Dental administrative coordinator (Reception/Administration) | /jessica-wilton |

### 4.3 NAP (exactly as shown)
- **Name:** Mill Pond Dental Care (tagline: "Dorchester Dentist Serving Thames Centre"; some titles "Mill Pond Dental"; WebSite schema name "Mill Pond Dental 1")
- **Address:** 4085 Hamilton Rd, Dorchester, ON N0L 1G2 (schema: 4085 Hamilton Road, Dorchester, ON, CA)
- **Phone:** 519-268-3351 (header: "Call 519.268.3351"; `tel:+1-519-268-3351`)
- **Email:** reception@mpdental.ca
- **Hours:** Mon - Thurs: 8am - 5:30pm; Fri - Sun: Closed (homepage). /hours adds "Occasional Friday Hygiene Appointments: 8am - 2pm".
- **Social:** facebook.com/millponddental, instagram.com/millponddentalcare

### 4.4 Testimonials, FAQs, blog, downloads
- Testimonials: none (only the Google reviews graphic). FAQs: none.
- Blog: 1 post ("Teeth Whitening: A Safe and Effective Way to Brighten Your Smile", Jul 24, 3 min read, 40 views). Blog title is "The Mill Pond Dental Journal".
- Downloads: none found (no PDFs or forms).
- Other: CDCP information page (what's covered, how to apply, canada.ca links), a COVID-19 notice (outdated), an Instagram feed page.

---

## 5. TECH / SEO SNAPSHOT

- **Platform:** Wix (Thunderbolt), Cloudflare CDN, assets on static.parastorage.com / static.wixstatic.com. Home HTML is about 612 KB. React 18, lodash, core-js polyfills and Sentry are loaded. Fonts: Work Sans (`worksans`, `worksans-extralight`), Proxima Nova (`proxima-n-w01-reg`), Arial.
- **Third-party scripts / widgets:** Wix tag manager (siteTags bundle), Sentry, Google Maps (contact page), Instagram feed app (instafeed.codev.wixapps.net), Wix Blog likes/views. No visible booking widget, chat or reviews widget, and no obvious GA/GTM ID in the static HTML (analytics may be injected by Wix site settings; to be confirmed with the client).
- **Schema:** homepage only: `LocalBusiness` (name, url, image, address, telephone) and `WebSite` (name "Mill Pond Dental 1"). Blog post has 2 JSON-LD blocks (Wix default). No `Dentist`/`MedicalBusiness`, hours, geo, sameAs, areaServed, Physician or FAQ schema.
- **Meta:** the OG/Twitter tags are present and auto-generated; `og:site_name` = "Mill Pond Dental 1". Missing meta description: /covid-19-announcement, /blog, the blog post. Title pattern is `Page | Dorchester Dentist Ontario | Mill Pond Dental Care` (inconsistent: some omit "Ontario" or the location; some are just "Treatment" or "Check-up"). Two H1s on the homepage; no H1 on /sophie-zegers; inner pages have no H2s.
- **Canonical / HTTPS / redirects:** canonical is self-referencing without a trailing slash; the home canonical is `https://www.mpdental.ca`. `http://mpdental.ca` -> 301 `https://mpdental.ca/` -> 301 `https://www.mpdental.ca/` (two hops). `http://www` -> 301 https. `/services/` -> 301 `/services`. Unknown URLs return a proper 404 (e.g. /about, /blog-2). HSTS is enabled. `<html lang="en">` (should be `en-CA`).
- **Robots / sitemap:** `robots.txt` allows all and points to `sitemap.xml` (an index of 3 sitemaps). It blocks PetalBot and rate-limits Ahrefs and dotbot. The sitemap includes the orphan and stale pages (COVID, Dr. Kiddie, Invisalign).
- **Accessibility:**
  - Pale-blue (#97C0E8) text and ghost buttons at about 1.9:1 contrast.
  - Default-blue links on service tiles.
  - 10 px base text in places.
  - ExtraLight weights at small sizes.
  - Missing alt text on one homepage image (the sign photo has `alt=""`), generic alt text ("Dentist", "Dental Assistant") elsewhere.
  - Skip link present ("Skip to Main Content").
  - The form has placeholder-style labels.
  - No accessibility statement.
- **Performance:** a heavy Wix runtime (about 600 KB HTML plus large JS bundles), small tile images upscaled, a Google Maps iframe on the contact page and an Instagram widget iframe. No Lighthouse was run in this pass (see the page-speed agent's report).
- **Typos and copy errors to correct on the new site:** "Mill Pond Denatal Care" (Instagram meta), "returning patent" (home meta), "We officer services" (family-dentistry meta), "suffer form jaw pain" (prosthetics meta), "We accept he Canadian Dental Care Plan" (CDCP meta), "Click Here To See If You Quailfy" (CDCP), "PERCISION" (ticker), "with out metal brackets" (Invisalign), "Suma Cum Lauda" (MacHardy bio, should be Summa Cum Laude), "make inform decisions" (Kiddie bio), "we provided" (services meta), "Thames Centre" and "Dorchester Dentist" keyword repetition in every title and description, "(c)2025".

---

## 6. RECOMMENDATIONS

### Keep
- Soft sky-blue family (as an accent) and the airy, calm feeling; the tooth icon idea (redraw as a proper logo).
- Real photography: the 4085 Hamilton Rd sign and the real team photos (commission a proper team and office shoot to replace all stock).
- The family-first, "team captain" tone and CDCP messaging; the six-service structure (Family, Preventative, Whitening, Restorative, Prosthetics, Emergencies), plus Invisalign.
- The bio content for Dr. MacHardy and Dr. Kiddie (edit and correct).
- Existing slugs where practical (to minimise redirects), or 301 every changed URL.
- `tel:` header CTA (make it prominent) and Mon-Thu hours content.

### Fix
1. **Conversion path:** add a "New Patients" page (what to expect, forms, insurance and payment, CDCP), a proper appointment-request form (new/existing patient, service, preferred time, consent) and ideally online booking. Make "Request an Appointment" the primary CTA beside the phone.
2. **Contrast and type:** a darker brand blue for text and buttons, regular weight for body copy, 16 px+ body, and one consistent button system.
3. **Real social proof:** a live Google reviews widget with rating and count, real testimonials and credentials/associations (ODA, RCDSO).
4. **Service pages:** 300-600 words each with H2s, FAQs, "what to expect", related services and a CTA; add dedicated pages for Invisalign, implants, crowns/same-day crowns, dentures, root canal, laser, children's dentistry, etc. if offered.
5. **Hours and NAP:** one source of truth, in the header or footer and in schema (use `Dentist` with openingHours, geo, sameAs, areaServed Dorchester / Thames Centre / London); reconcile the Friday hygiene note.
6. **Meta and structure:** unique titles and descriptions for every page, one H1 per page, fix the placeholder "Mill Pond Dental 1", set `lang="en-CA"`, add alt text.
7. **Team:** add Dr. Kiddie (confirm her status with the practice), finish Dr. Al Rafea's bio, use real portraits and correct the Cali VanBommel spelling.
8. **Mobile:** design mobile-first (click-to-call and "Book" sticky bar, a visible hours/address block).
9. Correct all typos in section 5.

### Drop
- The COVID-19 page (301 to home or /emergencies), the blurred-stars "Google reviews" block, the keyword ticker (or only keep claims that the practice can substantiate), the stock lotus placeholder, the "likes/views" blog widgets, the dedicated /instagram page (embed a feed in the footer or the homepage instead) and the "Dorchester Dentist" keyword repetition in every title.

### Content gaps to fill
New-patient information, patient forms, insurance/direct billing and payment options, FAQs, pricing guidance or financing, pediatric/seniors detail, technology claims, sterilisation and safety, accessibility info (parking, wheelchair access), after-hours emergency number, privacy policy, accessibility statement, a location/directions page ("serving Dorchester, Thames Centre, London, Ingersoll"), and a regular blog or news programme.

### Redirect-map notes
- The 27 URLs in section 3.2 are the complete set from the sitemap; the old site uses flat root slugs (no `/services/` or `/team/` folders) and `/post/<slug>` for the blog.
- Staff pages likely to be consolidated into the team page or kept as bio pages: map all 10 bios deliberately (do not drop Dr. Kiddie's).
- Map `/covid-19-announcement`, `/instagram`, `/hours`, `/canadiandentalcareplan` and `/blog` explicitly.
- Keep trailing-slash-less URLs and the www canonical.
