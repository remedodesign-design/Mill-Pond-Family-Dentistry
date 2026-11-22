# Mill Pond Dental Care: URL map (old mpdental.ca → new site)

Every page on the current Wix site (taken from its sitemap on 22 Nov 2026) keeps its exact URL on the new site, except the pages we are discarding, which get a permanent (301) redirect. When the site moves to Webflow, use these slugs for the pages and add the redirects under **Site settings → Publishing → 301 redirects**.

In the Vercel beta, `vercel.json` holds the redirects. Every kept URL is now a real page (built 22 Nov 2026 for the beta). `python tools/dev-server.py` follows the same rules locally.

## Kept (same URL on the new site)

| Old URL | New page | Status in this draft |
|---|---|---|
| `/` | Home | Built (`index.html`) |
| `/services` | Services | Built (`services.html`) |
| `/our-team` | Our Team | Built (`our-team.html`, was `/team`) |
| `/contact` | Contact | Built (`contact.html`) |
| `/family-dentistry` | Family Dentistry | Built (`family-dentistry.html`, was `/service-detail`; the service page template) |
| `/preventative-care-dental-check` | Check-ups & Preventive Care | Built |
| `/restorative-treatment` | Restorative Treatment (incl. CEREC crowns, implants) | Built |
| `/prosthetics-and-appliances` | Prosthetics & Appliances (incl. night guards) | Built |
| `/teeth-whitening` | Teeth Whitening | Built |
| `/emergencies` | Emergencies | Built |
| `/canadiandentalcareplan` | CDCP & Insurance | Built |
| `/hours` | Hours & Location | Built |
| `/blog` | Blog | Built |
| `/post/teeth-whitening-a-safe-and-effective-way-to-brighten-your-smile` | Blog post (keep the `/post/` prefix in the CMS collection URL) | Built (`post/…html`) |
| `/dr-steven-machardy` | Bio | Built |
| `/cynthia-lope` | Bio | Built |
| `/jessica-wilton` | Bio | Built |
| `/heather-brulotte` | Bio | Built |
| `/myranda-deml` | Bio | Built |

New pages with no old URL: `/about`, `/dental-implants`, `/same-day-crowns`, `/post/canadian-dental-care-plan-what-it-covers-and-how-to-apply`, `/post/your-childs-first-dental-visit`, `/privacy-policy`, `/accessibility`, plus `404.html`. Samantha Brown and Arwa Ali had no bio pages on the old site; if they get one, use `/samantha-brown` and `/arwa-ali` (same root-level pattern).

Not deployed (kept in the repo only, see `.vercelignore`): `home-v2`, `home-backup`, `style-guide`, `wireframes/`; their old draft URLs redirect to `/`. The whole beta sends `X-Robots-Tag: noindex` and `robots.txt` blocks crawlers; switch both at launch.

## Discarded (301 redirect)

| Old URL | Why | Redirects to |
|---|---|---|
| `/invisalign` | Not offered | `/services` |
| `/dr-aya-al-rafea` | No longer with the practice | `/our-team` |
| `/cali-vanbommel` | Not on the current staff list | `/our-team` |
| `/sophie-zegers` | Not on the current staff list | `/our-team` |
| `/james-stemp` | Not on the current staff list | `/our-team` |
| `/dr-lida-kiddie` | Retired founder, not listed as a provider | `/about` (founder story) |
| `/covid-19-announcement` | Out of date | `/` |
| `/instagram` | Wix feed page | `https://www.instagram.com/millponddentalcare` |

Draft-only URLs also redirect: `/team` → `/our-team`, `/service-detail` → `/family-dentistry`.
