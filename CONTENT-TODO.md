# Mill Pond Dental Care: content to write or confirm

Generic copy is in place so the pages read as finished. Each line below is still temporary. In the HTML, look for `<!-- GENERIC COPY -->` or `<!-- CONFIRM -->` comments next to it.

**Content team** = rewrite in the practice's voice. **Client** = we need a fact from the practice first.

## About (`about.html`)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Story timeline | 3 steps: 1982, 2020, Today (the generic "We keep welcoming…" step was removed because it broke the date order) | A real milestone between 1982 and 2020 (move, renovation, new service), added as a 4th step in order | Client |
| Comfort & technology: X-rays | "We take X-rays only when they help…" | Do they use digital X-rays? Any other technology worth naming? | Client |
| Comfort & technology: Sterilisation | "Instruments are cleaned and sterilised between every patient…" | The practice's own infection-control wording | Client |
| Comfort & technology: Comfort extras | "Tell us what helps you relax…" | Which extras they offer (blankets, headphones, TV, etc.) | Client |
| Getting here card | "Ask us about parking and access when you book." | Parking, wheelchair access, floor level | Client |

## Team (`our-team.html`, `index.html`)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Dr. MacHardy focus tags | Removed from the card (were Implants · Invisalign · Family dentistry) | Confirm focus areas for his bio page. Only list sedation if his credentials allow it | Client |
| Dr. Al Rafea | Removed from every page (18 Nov: no longer with the practice) | Nothing | Done |
| Dr. Kiddie | Named as founder only (home Our Story, About, one line on Team); not listed as a provider (18 Nov) | Nothing | Done |
| Staff photos | Bios are in (client's 24 Nov doc). Team page and bio pages still use initials | Team photos (client sending separately) | Client |
| Team bio pages | Cards are plain blocks, not clickable. The old "Read bio" dropdown copy (dentists' quotes) is in git history before this change and on mpdental.ca | Write one bio page per person at the old root-level URL (`/dr-steven-machardy`, `/cynthia-lope`…; see URL-MAP.md), then change each card's `<div class="team-card_link">` to `<a class="team-card_link" href="/NAME">`; the whole card becomes the link and "Read bio" appears | Content team |

## Services (`services.html`)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Gum Care | "Cleanings, checks and treatment to keep your gums healthy…" | Client asked for "gum specialist". "Specialist" is a regulated title in Ontario, so we need the provider's credentials before using it | Client |
| Root Canal | "Treats an infected or damaged tooth so you can keep it." | Final description | Content team |
| Facial Rejuvenation / Smile Makeover | Removed (18 Nov: no cosmetic work other than whitening) | Nothing | Done |
| Same-Day CEREC Crowns | Stock treatment-room photo on the home and Services cards | A photo of their CEREC unit or a crown being fitted; a CEREC service page | Client |
| Night guards | In the home icon row and "Also offered" | Confirm offered (taken from the client's reference image) | Client |
| Insurance band: Direct billing | "Direct billing" (shared band on Home, Services, Service detail) | Confirm they direct bill | Client |

## Service detail (`family-dentistry.html`, Family Dentistry example)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Who it's for, FAQ 1 | "Ask us when to book your child's first visit…" | Age they recommend for a first visit | Client |
| How it works, step 4 | "We'll suggest how often to come in…" | Usual check-up interval | Client |
| Cost & insurance | Replaced by the shared insurance band (same on Home, Services, Service detail) | If a service needs its own cost note, add it to the body copy | Content team |

## Contact (`contact.html`)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Holiday closures | "Hours may change around statutory holidays. Please call ahead." | Actual holiday dates (editable field) | Client |
| Parking | "Parking questions? Ask us when you book…" | Parking details | Client |
| Accessibility | "If you need help getting in or around the office…" | Entrance and washroom accessibility | Client |

## Site-wide

| Item | Status | From |
|---|---|---|
| Xact online booking URL | All "Book" buttons go to the contact form for now | Client |
| Privacy policy and accessibility pages | Footer links go to `#` | Content team |
| Photos | Stock and current-site photos are temporary. See `assets/stock/CREDITS.md`. The Wix stock photos must be replaced before launch | Client (photo shoot) |
| Permission to reuse current-site team photos | Dr. MacHardy, Dr. Kiddie, dental assistants | Client |

## Home page refresh (client feedback, 14-16 Nov 2026)

`index.html` now has our design updated with the client palette, Montserrat + Lato and a reference-style hero. `/home-v2` is the alternative built on the client's reference image. The previous home page is kept at `/home-backup`.

| Item | Status | From |
|---|---|---|
| Hero family photos (home and home-v2) | Unsplash images hotlinked for the draft. Swap for a real Mill Pond family photo (or download + credit the chosen stock) | Client / photo shoot |
| CEREC crowns and night guards (home-v2 icon row) | Taken from the client's reference image. Confirm the practice offers both | Client |
| Reception photo (home-v2 welcome section) | Wix stock, must be replaced before launch | Client (photo shoot) |
| Other pages | Still on Barlow and the old colours. Load `css/theme-client.css` on them once the client signs off on the home page | Remedo |

## Client + Dr. MacHardy feedback (16 Nov 2026): what is still open

| Item | Status | From |
|---|---|---|
| Team photos + bios | Initials placeholders for hygienists, assistants and office team; Dr. Al Rafea uses a stock stand-in | Client (gathering) |
| Google Reviews | Elfsight floating badge (always on screen) on both home designs; offered the client a full section / footer reviews as an option. In the Elfsight dashboard: badge is set to desktop only and appears after 50 px of scroll, so change to all devices + show immediately, and lift it above the mobile Book/Call bar. Add to the other pages once approved | Remedo |
| Links still pointing to `#` | Privacy policy and Accessibility (footer + form consent). "Read our Google reviews" now opens the Google listing. Client told this is a first draft; full pages after design approval | Content team |
| Links pointing to a stand-in page | Service links already use the preserved old URLs (`/teeth-whitening`, `/emergencies`…), served by temporary rewrites until each page is built; see URL-MAP.md. Two blog cards still go to `#blog` | Remedo (in development) |
| Dr. Kiddie (retired) | The client said she has retired, but on our request she is shown again as Founder: team cards on both home pages and the Team page, and named in the 1982 story and About timeline. Confirm with the client | Client |

## Online booking (18 Nov)

Online booking (myformsathome) is for **existing patients only**: emergencies, cleanings and check-ups. Every main CTA is now "Request an Appointment" (contact form) or the phone number; the booking link appears as "Existing patients: book online" in the top ribbon, under the home hero, in the contact-form card, the footer CTA and the mobile menu.

## Beta pages (22 Nov): copy the client should approve

| Page | Where the copy came from | Needs |
|---|---|---|
| Check-ups, Restorative, Prosthetics, Whitening, Emergencies, CDCP, Hours | Old mpdental.ca pages, rewritten and expanded in our template | Client read-through |
| `/dental-implants`, `/same-day-crowns` | New (no old page) | Confirm how implants are handled (placed in-house or with a specialist), CEREC appointment length, real CEREC photo |
| Bios: all seven team members | Client's 24 Nov bios, typos fixed only (e.g. "Suma Cum Lauda" → summa cum laude) | Photos still pending |
| Bio pages: Samantha Brown, Arwa Ali | New pages /samantha-brown and /arwa-ali (26 Nov) | Photos still pending |
| Blog: CDCP guide, child's first visit | New articles | Client approval; CDCP income limit and rules checked against Canada.ca before launch |
| Privacy policy, Accessibility | New drafts | Client (and their privacy officer) to approve; office access details |
| Contact form | Validates but does not send yet | Connect to reception@mpdental.ca (Webflow forms at launch, or a form service for the beta) |

## 23 Nov 2026 feedback pass
- Only Dental Implants is linked on the site for now. Home service icons/cards, nav, footer and the implants page no longer link to the other service pages (files kept, URLs unchanged). Re-link when each page is approved.
- Implants page copy is generic educational text (no old-site page existed). Confirm with the client whether implants are placed in-house or by a specialist before launch.
- Home doctor section: ask the client for a better, wider colour portrait of Dr. MacHardy.
- Implants page now mirrors the Fremont Star structure. Left out on purpose (need real data from the client): before/after photos, patient reviews, implant counts, technology claims (3D imaging), and a price table. Confirm timeline figures (3 to 6 months healing) with Dr. MacHardy.
