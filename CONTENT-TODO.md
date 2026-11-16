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

## Team (`team.html`, `home.html`)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Dr. MacHardy focus tags | Removed from the card (were Implants · Invisalign · Family dentistry) | Confirm focus areas for his bio page. Only list sedation if his credentials allow it | Client |
| Dr. Al Rafea credentials | "Dentist" | Degree, school, year; bio; whether she is shown while on leave | Client |
| Dr. Al Rafea portrait | Placeholder slot (no stock faces on team cards) | A real portrait | Client |
| Dr. Kiddie founder section | Kept | Confirm she should still appear | Client |
| Team bio pages | Cards are plain blocks, not clickable. The old "Read bio" dropdown copy (dentists' quotes) is in git history before this change and on mpdental.ca | Write one bio page per person (`/team/NAME`), then change each card's `<div class="team-card_link">` to `<a class="team-card_link" href="/team/NAME">`; the whole card becomes the link and "Read bio" appears | Content team |

## Services (`services.html`)

| Where | Generic copy now | Needs | From |
|---|---|---|---|
| Gum Care | "Cleanings, checks and treatment to keep your gums healthy…" | Client asked for "gum specialist". "Specialist" is a regulated title in Ontario, so we need the provider's credentials before using it | Client |
| Root Canal | "Treats an infected or damaged tooth so you can keep it." | Final description | Content team |
| Facial Rejuvenation | "Ask us about cosmetic treatments to refresh your appearance…" | Which treatments, and who provides them | Client |
| Insurance band: Direct billing | "Direct billing" (shared band on Home, Services, Service detail) | Confirm they direct bill | Client |

## Service detail (`service-detail.html`, Family Dentistry example)

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
| Google Reviews | Elfsight floating widget is on both home designs. Add it to the other pages too once the client is happy with it | Remedo |
| Links still pointing to `#` | Privacy policy and Accessibility (footer + form consent), "Read our Google reviews" in the trust strip | Content team / Google listing URL |
| Links pointing to a stand-in page | Each featured service and the service dropdown go to `/services.html` or the one sample `/service-detail.html`; blog cards and "All articles" go to `#blog`. Real pages come with the Webflow build (Services and Blog CMS) | Remedo (in development) |
| Dr. Kiddie (retired) | The client said she has retired, but on our request she is shown again as Founder: team cards on both home pages and the Team page, and named in the 1982 story and About timeline. Confirm with the client | Client |
