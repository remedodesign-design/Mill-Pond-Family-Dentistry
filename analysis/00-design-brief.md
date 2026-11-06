# Mill Pond Dental Care: merged design brief

Merged from reports 01 to 07 on 2026-11-06. Read-only analysis; nothing on any client site, sheet or Asana task was changed. Each section cites its source report in brackets. Items marked **PROPOSAL** are my recommendations, not client decisions.

---

## 1. The project in ten lines

1. **Client:** Mill Pond Dental Care, 4085 Hamilton Rd, Dorchester, ON N0L 1G2. Single location. Owner: Dr. Steven MacHardy (Asana spells it "Mchardy"). Phone 519-268-3351, reception@mpdental.ca. [01, 04]
2. **Job:** rebuild mpdental.ca from Wix to Webflow. Website fee CAD 2,249. The client also took the Optimize Plan (CAD 585/month: SEO, 1 blog a month, Google Business Profile posts, AI chatbot). [01]
3. **Style asked for:** clean, modern, minimalist, calm, "crisp", "plain", easy to navigate, **no pop-ups**, not busy. [02, 03]
4. **Reference:** Ilchester Dental (written "Iichester.co.uk" in the notes, a typo). Meliora Dental was also named as a preferred example. Not analysed. [02]
5. **Ilchester is already a Remedo build** (footer: "Digital Marketing By Remedo"), on the Webflow template psychologist-128. We are reusing our own pattern. [05, 06]
6. **Palette given:** blue #97C0E8, cream #F7F7F7, grey #808080, white. [01, 03]
7. **Priority:** attract new patients. New-patient flow today is 4 to 8 a month (peaks of 11 in April and 19 in August). The current site has no new-patient path. [02, 04]
8. **Required integrations:** Xact booking (link not yet supplied) and the AI "Inquiry Bot" chatbot. [01]
9. **Top services:** implants, Invisalign, smile makeover, IV sedation. Also: facial rejuvenation, gum specialist, root canal. Most of these pages are new content. [01, 03]
10. **Timeline:** mock-up first, 6 to 8 weeks of development, review in January, go-live "around the new year", no hard deadline. [02]

---

## 2. Decisions

### 2.1 Settled (no action needed)

- **New site, new theme.** We take Ilchester's structure, type feel and rhythm. Its UK content, plum and gold colours, and any section that clashes with Mill Pond's brief are not carried over.
- **No pop-ups.** No auto-opening chat, no promo modals. The chatbot is a closed launcher only. Cookie notice only if required, as a slim strip. [02]
- **No testimonials.** The client's professional college does not allow them. Source: the website questionnaire tab, row 11 (cell C11): "We are not allowed to do that according to our professional college. We can direct them to our google review page." So there is no review slider, no quotes and no star ratings. The site links to their Google reviews page instead. [03]
- **Build in the client's colours first** (#97C0E8, #F7F7F7, #808080, white). Run contrast tests afterwards and iterate. See section 5.3.
- **Timeline** is not a concern for this phase.

### 2.2 Still open

| # | Issue | Why it matters | Suggested handling |
|---|---|---|---|
| 1 | **Booking.** Client says "appointment scheduling" is a purpose but asked only for contact forms and CTAs. Asana requires Xact. Link not supplied. [01, 03] | The primary CTA depends on it. | Design the primary button as "Book an Appointment" with a phone secondary. Placeholder URL until Xact is confirmed. Check whether Xact can be embedded or only linked out. |
| 2 | **Team content.** Asana says pick bios from the live site and also says the client will provide them. [01] The live site has 10 people, including founder Dr. Lida Kiddie (an orphan page, probably the "Dr. Kitty" in the notes) and Dr. Al Rafea ("Bio Coming Soon", on maternity leave per the notes). [02, 04] | Team page layout depends on who is shown. | Confirm names, titles and consent. Design for 3 dentists plus staff grouped by role. |
| 3 | **Photos.** The client wants mostly original staff and office photos but said they have none. The five Drive links are all logos. [03, 07] | The theme relies on real photography. | Request a photo shoot. Design with a clear image-slot system so stock can be a short-term fill. |
| 4 | **Services list.** IV sedation is in both the top-4 and additional lists. The "Complete List of Services" is blank in Asana. The live site has six different services. [01, 03, 04] | Page count and navigation depend on it. | Confirm the list. Proposed structure in section 4. |
| 5 | **Regulated wording:** "gum specialist", facial rejuvenation, IV sedation. [03] | Only registered specialists can use "specialist". | Confirm credentials before writing headings. Use neutral titles such as "Gum Care" until confirmed. |
| 6 | **Practice name** was blank in the questionnaire. Logo files confirm "Mill Pond Dental Care". [07] | Use it consistently. The live site schema says "Mill Pond Dental 1". | Use "Mill Pond Dental Care" everywhere. |
| 7 | **Hours:** Mon to Thu 8 to 5:30, "occasional Friday hygiene 8 to 2". The homepage and /hours disagree. [01, 04] | Needs one approved version. | Confirm wording with the client. |
| 8 | **Privacy policy** is marked "not approved" in Asana. No form consent wording exists. [01, 04] | Required for forms. | Provide PIPEDA-style text. Needs client approval. |
| 9 | **Vector logo** is still missing. Only PNGs exist (icon files about 500 px). [03, 07] | Header, favicon and print need crisp artwork. | Request the open file. Fallback: trace from the 7500 px lockup. |
| 10 | **Fathom recording** of the onboarding call was not opened. [01, 02] | May hold requests not in the notes. | Watch it before the mock-up. |

---

## 3. Fixed requirements (what the build must include)

- **Platform:** Webflow. Canadian English, CAD, `en-CA`.
- **Pages:** about 25 existing URLs rebuilt or redirected, plus new service pages. Full URL inventory with titles and H1s is in report 04, section 3.2, and drives the 301 map.
- **Primary conversion:** Book an Appointment (Xact) and click-to-call, repeated through the page. New-patient page covering what to expect, forms, insurance and CDCP, which the current site lacks.
- **CDCP:** keep a first-class page. It is the one differentiator on the current site.
- **Forms:** contact and appointment-request forms to reception@mpdental.ca, with consent line and spam protection. Avoid collecting clinical details by email (PHIPA/PIPEDA).
- **Blog:** CMS, 1 post a month under the plan. One existing post to migrate.
- **Chatbot:** Inquiry Bot placeholder.
- **SEO baseline fixes:** unique titles and meta descriptions on every page (3 missing today), one H1 per page, Dentist schema with hours, OpenGraph tags, page speed, typo clean-up (list in report 04, section 5).
- **Compliance:** no testimonials, careful specialist wording, accessibility statement and privacy policy, WCAG AA contrast.
- **Imagery:** original staff and office photography preferred.
- **Socials:** facebook.com/millponddental, instagram.com/millponddentalcare.

---

## 4. Proposed structure (PROPOSAL, for approval)

**Navigation:** Services (dropdown, grouped) | New Patients | About (Team, Hours, CDCP) | Blog | Contact, plus a persistent phone link and a Book an Appointment button.

**Services, grouped:**
- Featured: Dental Implants, Invisalign, Smile Makeover, IV Sedation.
- Everyday care: Family Dentistry, Preventative Care and Check-ups, Teeth Whitening, Restorative Treatment, Prosthetics and Appliances, Root Canal Therapy.
- Added from the kickoff: Facial Rejuvenation, Gum Care (wording pending).
- Emergencies (kept visible in the nav and footer).

**Other pages:** Home, New Patients, Meet the Team (plus bio pages for dentists), CDCP and Insurance, Hours and Location, Contact, Blog, Privacy Policy, Accessibility Statement.

**CMS collections:** Services (with a featured flag and FAQ), Team, Blog, FAQs (new, linked to a service). Testimonials collection is not needed.

**Retire:** COVID-19 page (redirect), /instagram page (use a footer link or embed), keyword ticker, fake reviews graphic.

---

## 5. Design direction

### 5.1 What we take from Ilchester and the template
- **Overall feel:** warm, premium, calm. Serif headlines with a rounded sans for body, generous white space, 12px image corners and 8px buttons, almost no shadows. [05, 06]
- **Header:** fixed header with logo, a short nav, phone and one clear primary button.
- **Homepage story:** promise, trust, services, practice story, contact, blog. [05]
- **Component library:** hero, service card grid, service detail with sidebar card and FAQ, team grid, map and contact block, blog cards, footer with CTA band, mobile sticky Book/Call bar. [05, 06]
- **Fastest starting point:** template Home 3 (photo hero, numbered "how can we help" chips, bio, booking form), borrowing Home 2's stat strip. [06]

### 5.2 What we change
| Ilchester / template | Mill Pond |
|---|---|
| Plum, gold, cream (Ilchester); forest green and sage (template) | The client's blue, cream, grey and white (section 5.3) |
| Auto-open chat, cookie banner, review slider | None of these. Link to Google reviews instead |
| UK items: NHS wording, GBP, CQC/GDC marks, Tabeo, Carestack, GDPR | Canadian equivalents: CDCP, insurance and direct billing, CAD, RCDSO/ODA marks if allowed, Xact, PIPEDA/CASL |
| Body line-height 1.2 and `text-transform: capitalize` on headings and links | Line-height 1.5 to 1.6, no auto-capitalise (it breaks "CDCP", "Dr.", "Invisalign") |
| 67px H1 with -2px tracking | About 56 to 60px with -1px |
| Hero slideshow in custom JS | One strong image, or a native slider. Provide a mobile crop |
| 21 local-SEO town pages | Not in scope (Pro Plan item). Revisit later |
| Fee tables and plan cards | Replace with an insurance and CDCP explainer |
| Referrals page | Drop unless the practice takes colleague referrals |

### 5.3 Colour: build with the client's palette first, then test and iterate

**Round 1: the client's four colours only.** Set them as Webflow variables and design with them as given:

| Token | Hex |
|---|---|
| Brand blue | #97C0E8 |
| Cream | #F7F7F7 |
| Grey | #808080 |
| White | #FFFFFF |

**Round 2: contrast testing.** Measured on the current site and the client's colours (WCAG AA needs 4.5:1 for body text, 3:1 for large text and UI):

| Pair | Ratio |
|---|---|
| #97C0E8 on white | 1.91:1 |
| #97C0E8 on cream | 1.78:1 |
| #808080 on white | 3.95:1 |
| #808080 on cream | 3.69:1 |

**Fallback values if testing shows the need** (pre-computed, not part of round 1). Only use these for the pairs that fail:

| Token | Hex | Contrast |
|---|---|---|
| Deep blue (text, buttons) | #1F4E79 | 8.66:1 on white, 8.09:1 on cream |
| Mid blue (links, hover) | #2B5F8E | 6.71:1 on white |
| Pale blue tint (section background) | #D6E6F5 | #1F4E79 on it 6.81:1 |
| Body grey | #5F5F5F | 6.39:1 on white |
| Ink on brand blue | #1B2A3A | 7.66:1 on #97C0E8 |

### 5.4 Typography (PROPOSAL)
Keep the template pairing: **Castoro** for headings (serif, regular weight), **Lexend** or **Nunito** for body and UI. Both are free Google Fonts. Body 16 to 18px, line-height 1.5 to 1.6, weight 400 (the current site's ExtraLight is hard to read). Use sentence case.

### 5.5 Logo
Tooth icon in #97C0E8 with the thin "Mill Pond Dental Care" wordmark. Check the wordmark's light grey for contrast in round 2 (section 5.3) and darken it if needed. Files are in `assets/logo/`. [07]

### 5.6 Imagery and iconography
Real photos of the team, reception and exterior. The 4085 Hamilton Rd sign photo and the group photo of three assistants on the live site are the only authentic assets worth keeping. [04] Line-style tooth and dental icons, drawn or sourced as SVG (the template's icons are therapy PNGs). Icons8 is available through the connected MCP.

### 5.7 Motion
Light: fade-in on scroll and hover transitions, as in the template. Respect `prefers-reduced-motion`. No auto-playing carousels.

---

## 6. Layout: proposed homepage (PROPOSAL)

Top to bottom, based on Ilchester's arc with Mill Pond's constraints:

1. **Header:** logo, nav, phone, Book an Appointment.
2. **Hero:** real photo of the practice, H1, one line of reassurance, two actions (Book an Appointment, Call 519-268-3351). Small "Accepting the Canadian Dental Care Plan" line.
3. **Trust strip:** CDCP accepted, years serving Dorchester (since 1982), RCDSO/ODA marks only if permitted. A Google reviews link, no stars or quotes.
4. **Featured services:** the four top services as cards, then "View all services".
5. **New patients, 3 steps:** book, visit, treatment plan. Not present in Ilchester.
6. **Practice story:** exterior photo and short history (founded 1982, Dr. MacHardy since 2020).
7. **Why choose us / what to expect:** three points.
8. **Team preview:** dentists and a link to the full team.
9. **Insurance and CDCP band:** direct billing, CDCP, payment options.
10. **Hours, map and contact:** hours table, address, form.
11. **Blog:** latest three posts.
12. **Footer:** CTA band, NAP, hours, social links, privacy and accessibility links.
13. **Mobile:** sticky Book and Call bar, single column, drawer menu, hours and address reachable in one tap.

Inner page recipes (service detail with sidebar card and FAQ, team detail, blog, contact) come from the template, as listed in report 06, section 3.3.

---

## 7. Flow

- **Primary path:** any page, then Book an Appointment (Xact), or call. Repeat in the header, hero, after services, in the footer band and on the mobile sticky bar.
- **New-patient path:** Home or service page, New Patients page (what to expect, forms, insurance and CDCP), then book. This is the biggest gap on the current site.
- **Emergency path:** a visible Emergencies link in the nav and footer, with the phone number and after-hours instructions.
- **Contact info:** phone in the header, hours and address in the footer on every page. The current site hides hours.
- **Review path:** a single "Read our Google reviews" link, no embedded testimonials.

---

## 8. Redirects and SEO migration

- 27 live URLs (26 pages plus 1 blog post). Flat slugs with no folders. Full table with titles, H1s, meta and word counts: report 04, section 3.2.
- Keep slugs where practical to minimise redirects. Redirect COVID-19 to Home or Emergencies, /instagram to Home, and map every staff page deliberately. Do not drop Dr. Kiddie's.
- Old `http` and non-www already resolve to `https://www`. Keep the www canonical.
- Orphans to resolve: /dr-lida-kiddie, /invisalign (a top service, not linked anywhere), /covid-19-announcement.
- Fix on the new site: placeholder name "Mill Pond Dental 1", two H1s on the homepage, no H1 on /sophie-zegers, `lang="en"` (use `en-CA`), and the typos listed in report 04, section 5.
- Analytics: no GA or GTM ID found in the static HTML. Confirm what the client has before launch.
- Pallavi's open Asana question about "takeover" suggests confirming domain and DNS access (marked "Yes" in the mandatory-items ticket). [01]

---

## 9. Open questions for the client (consolidated, deduplicated)

**Brand and design**
1. Confirm the reference: exact URL of the Ilchester site, and what they liked about Meliora Dental.
2. If contrast testing requires darker text and button colours, approve them (section 5.3).
3. Vector or open logo file. Any colours to avoid?

**Content**
4. Full list of services and which four are featured. Who provides IV sedation, facial rejuvenation and gum treatments, with what credentials?
5. Team: names, titles, bios, portraits, and whether the associate on leave appears.
6. Approved hours wording, including Fridays.
7. Insurance, direct billing, CDCP and payment information to publish.
8. Can existing copy be reused? Any vendor restrictions? (Blank in the questionnaire.)
9. Photo shoot of the staff and office, and who arranges it.

**Functionality**
10. Xact portal URL, whether it embeds, and where the booking CTA goes.
11. Inquiry Bot vendor, script and colours.
12. Online booking or request form only? Which practice-management software?
13. Google reviews page URL.
14. Form recipients (reception@mpdental.ca only?) and approved privacy policy text.

**Compliance and process**
15. Which college rules apply (presumably RCDSO)? May we show before and after photos or association logos?
16. Single approval contact, the real call date and target launch date.
17. Analytics, Search Console and Google Business Profile access.
18. Confirm website payment was received (pending as of September per the sales note).

---

## 10. Source files

| File | Content |
|---|---|
| `01-asana-scope.md` | Asana scope, deliverables, links, comment log |
| `02-requirements-sheet-tab-gid0.md` | Onboarding meeting notes |
| `03-requirements-sheet-tab-gid1151993202.md` | Website questionnaire |
| `04-current-site-mpdental.md` | Current Wix site: design, layout, flow, URL table |
| `05-theme-ilchester.md` | Ilchester theme analysis and UK-to-Canada adaptation table |
| `06-template-psychologist-128.md` | Template design system, CMS, components, dental fit |
| `07-drive-assets.md` | The five logo files |
| `screenshots/` | `current-site`, `theme-ilchester`, `template-psychologist-128` |
| `../assets/logo/` | Local copies of the five logo PNGs |
