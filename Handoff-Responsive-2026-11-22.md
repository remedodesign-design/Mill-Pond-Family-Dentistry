# Responsive & layout audit: Mill Pond Dental Care (22 Nov 2026)

**Target:** local preview of branch `claude/team-page-redesign` (PR #3), served with `tools/dev-server.py` on `http://localhost:5199`. This is newer than the live site (it includes the new Our Team, New Patients and booking changes). The live site will match once PR #3 is merged.
**Mode:** audit, then fixes on request (same day). See section 4.
**Screenshots:** `C:\Users\reala\OneDrive\Desktop\remedo\Mill Pond Dental\.playwright-mcp\responsive-2026-11-22\` (full-page JPEGs named `<width>-<page>.jpg`, plus `menu-open-*.jpg` and `badge-*.jpg`).

## 1. Coverage

| Breakpoint | Pages | Checks |
|---|---|---|
| 320 | All 27 | Horizontal overflow, off-screen elements, clipped headings/buttons, overlapping grid/flex children, tap targets, smallest text, full-page screenshot |
| 375 | All 27 | Same as 320 + menu open/close, scroll lock, sticky bar vs. reviews badge |
| 390 | All 27 | Same automated checks (no screenshots) |
| 768 | All 27 | Same as 320 + menu open/close, scroll lock |
| 1024 | All 27 | Same automated checks (no screenshots); nav mode |

Pages: `/`, `/about`, `/our-team`, `/services`, `/family-dentistry`, `/contact`, 7 other service pages, `/canadiandentalcareplan`, `/hours`, `/new-patients`, `/blog`, 3 blog posts, 5 team bios, `/privacy-policy`, `/accessibility`.

**Not covered / gaps:** desktop widths (1280+) were outside this request. Real iOS/Android devices were not tested (Chromium emulation only). The Elfsight reviews badge is third-party and was only checked for presence and position. Screenshots were visually reviewed for home, Our Team, Family Dentistry, New Patients and Contact at 320 and 768, and for the menus; the other pages were checked by the automated measurements only.

## 2. Findings

| # | Page | Breakpoint | Issue | Severity | Element / class | Screenshot | Fix type |
|---|---|---|---|---|---|---|---|
| 1 | `/services` + all 8 service pages | 768–1024 | "Coverage made simple" band: the three small cards are squeezed into a narrow column, so "CDCP accepted" and "Electronic claims" overflow their 94px boxes and the body text runs 2–3 words per line | Medium | `.insurance_list` / `.insurance_item h3` (shared `partials/insurance.html`) | `768-family-dentistry.jpg` | Code (CSS) |
| 2 | `/our-team` | 320 | Dr. MacHardy's quick facts: "Komoka" is cut off at the right edge (three columns don't fit) | Medium | `.team-dentist_facts` | `320-our-team.jpg` | Code (CSS) |
| 3 | Service pages (`/family-dentistry` etc.) | 768 | Quick-facts row stays 3 columns, so "Coverage: CDCP accepted; claims sent electronically to most insurers" wraps into a tall, narrow card | Low | `.service-detail-facts_list` | `768-family-dentistry.jpg` | Code (CSS) |
| 4 | `/` and `/new-patients` | 320 | "Your first visit, step by step": the number node plus gap leaves the step cards very narrow; headings break ("Fill in / your forms") | Low | `.journey_step` / `.journey_card` | `320-new-patients.jpg` | Code (CSS) |
| 5 | `/our-team` | 320 | "Read Dr. MacHardy's bio" button wraps to two lines | Low | `.team-dentist_content .button` | `320-our-team.jpg` | Code (copy/CSS) |
| 6 | All pages | 320–1024 | Tap targets under 44px: top-bar links and social icons (32px), footer links, breadcrumbs, the contact-form checkbox, and inline "Book an Appointment" text links in the contact card | Low | `.ribbon_item`, `.ribbon_social-link`, `.footer_link`, `.breadcrumb_link`, `.form_checkbox-icon`, `.contact-form_link` | n/a | Code (CSS) |
| 7 | Mobile menu | 768 | The small "Existing patients: book…" text link in the drawer is 17px tall | Low | `.navbar_drawer-book` | `menu-open-768.jpg` | Code (CSS) |
| 8 | All pages | 320–390 | Google reviews badge does not appear on phones (none rendered at 375 after 4s); it shows at 768+. Dr. MacHardy asked for reviews to be prominent | Info | Elfsight widget settings (mobile visibility) | `badge-375.jpg`, `badge-768.jpg` | Manual (Elfsight dashboard) |
| 9 | `/about` | All | Service-area tags use 12px text | Info | `.tag_component` | n/a | Code (CSS) |

## 3. Passed

- **No horizontal scrolling** on any of the 27 pages at 320, 375, 390, 768 or 1024 (`scrollWidth = clientWidth` everywhere).
- **No overlapping blocks** found in grid/flex layouts at any width.
- **Headings** fit at all widths except finding 1.
- **Mobile menu** (375 and 768): opens below the header, locks page scroll while open, and releases it and resets `aria-expanded` on close. The hamburger is used up to 991px; full nav from 992px (1024 shows full nav).
- **Sticky mobile bar** ("Book online" / "Call"): one line at 320+, hidden at 768+.
- **Home hero** shows the photo first on phones and tablets.
- **About gallery** has no overlap at 320/375 after the earlier fix.
- **H1 sizes** scale cleanly: 32–40px on phones, 40–44px on tablet, 48–50px at 1024.

## 4. Fixes made (22 Nov, pushed to PR #3)

| # | Fix | Re-check |
|---|---|---|
| 1 | Coverage band cards stack in one column at 992–1279px (icon beside text) | 1024: no clipped headings on any page |
| 2 | Our Team quick facts: smaller figures and tighter padding under 480px | 320: all three facts fit |
| 3 | Service quick facts: one per row up to 991px | 768: full-width rows |
| 4 | First-visit steps: smaller number node under 480px | 320: card width 209px (was about 170px) |
| 5 | Bio button reads "Read full bio" | 320: one line (48px) |
| 6 | Tap targets: top-bar icons 40px (the bar's full height), breadcrumbs 45px, footer links 39px, form checkbox 24px, contact-card link 44px | Measured at 320 |
| 7 | Drawer "Existing patients" link 45px tall | 768 menu open |

Still open: finding 8 (reviews badge on phones, Manual) and finding 9 (12px tags, Info).

## 5. MANUAL

1. **Google reviews badge on phones:** Elfsight dashboard → the "Mill Pond Dental Care" Google Reviews widget → Settings / Layout → check device visibility ("Show on mobile") and enable it. If the badge sits bottom-left on phones it will collide with the sticky Book/Call bar, so set a bottom offset of about 90px for mobile, or use a different placement.

## 6. Open questions

- Should the reviews badge show on phones at all (it would compete with the sticky booking bar), or should phones get an inline reviews link instead?
