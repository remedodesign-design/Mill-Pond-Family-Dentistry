# Mill Pond Dental Care: Client-First setup for Webflow

How to move the local style system (`index.html`, `Pages/`, `css/`, `js/`) into Webflow. The local files are the source of truth: if a value changes, change it in `css/client-first.css` first, then in Webflow.

| Local file | What it holds | Webflow equivalent |
|---|---|---|
| `css/client-first.css` | Variables, global tag styles, Client-First utilities | Variables panel, Body (All Pages) and tag styles, utility classes |
| `css/components.css` | Custom `folder_element` classes | Classes on Components (navbar, footer, cards) |
| `css/styleguide.css` | `fs-styleguide_*` classes | Classes on the `/style-guide` page only |
| `style-guide.html` | Every class shown in use | The `/style-guide` page |

Preview locally: run `python -m http.server 5173` in the project folder and open `http://localhost:5173/` (home) or `http://localhost:5173/Pages/style-guide.html`. Links are root-relative (`/css/...`, `/Pages/...`), so serve the folder rather than opening files directly.

## 1. Start point

Use Finsweet's **Client-First cloneable** as the starting project. It already contains the utility classes, the `/style-guide` page and the `fs-styleguide_` classes. You then only change values to Mill Pond's, rather than build every class from scratch.

## 2. Fonts (Site settings, Fonts, Google Fonts)

- Barlow Semi Condensed: 500, 600, 700
- Barlow: 400, 400 italic, 500, 600

Remove any Work Sans or other fonts the clone adds.

## 3. Variables

Create these collections in this order. Names match the CSS custom properties without the `--` and with `/` for groups (Webflow writes `base-color-brand/pond` as `--base-color-brand--pond`).

**Base color**
| Variable | Value |
|---|---|
| base-color-brand/pond | #97C0E8 |
| base-color-brand/deep | #1F4E79 |
| base-color-brand/deep-dark | #163A5C |
| base-color-brand/mist | #E4EEF8 |
| base-color-neutral/white | #FFFFFF |
| base-color-neutral/cream | #F7F7F7 |
| base-color-neutral/border | #D9DEE4 |
| base-color-neutral/grey | #808080 |
| base-color-neutral/slate | #5B6168 |
| base-color-neutral/charcoal | #3B4046 |
| base-color-system/success, success-background | #2E6B3F, #E6F2EA |
| base-color-system/notice, notice-background | #6B4A0E, #FBEFD9 |
| base-color-system/error, error-background | #A13A2B, #F8E5E2 |

**Semantic colours.** Each one is linked to a base variable, never a hex.
| Variable | Linked to |
|---|---|
| text-color/text-primary | charcoal |
| text-color/text-secondary | slate |
| text-color/text-alternate | white |
| text-color/text-brand | deep |
| text-color/text-on-pond | deep-dark |
| background-color/background-primary | white |
| background-color/background-secondary | cream |
| background-color/background-tertiary | mist |
| background-color/background-alternate | deep |
| background-color/background-brand | pond |
| border-color/border-primary | border |
| border-color/border-input | #7B8590 |
| border-color/border-brand | pond |
| link-color/link-primary | deep |
| link-color/link-hover | deep-dark |
| link-color/link-underline | pond |

**Font**: font/heading = Barlow Semi Condensed, font/body = Barlow.
**Radius**: radius/small = 0.5rem, radius/medium = 0.75rem, radius/round = 100vw.

## 4. Global styles (All Pages, Body and tags)

- Body: font/body, 1.0625rem, line-height 1.6, colour text-primary, background background-primary. At 767px and below, 1rem.
- H1 to H6: font/heading, weight 600, margins 0. Sizes (desktop / tablet / mobile):
  - H1 3.5 / 3 / 2.5rem, lh 1.05
  - H2 2.625 / 2.25 / 2rem, lh 1.1
  - H3 1.875 / 1.625 / 1.5rem, lh 1.2
  - H4 1.375 / 1.375 / 1.25rem, lh 1.3
  - H5 1.125rem, H6 1rem, lh 1.4
- All Links: link-primary, underline 1px, offset 0.2em. Hover: link-hover.
- Paragraph margins 0. Blockquote: 0.25rem pond left border.
- Set `lang="en-CA"` (Site settings, Localization or custom code).

## 5. Classes to change in the clone

Change values only; keep the class names.

- `padding-global`: 2.5 / 2 / 1.25rem left and right.
- `container-large` 75rem, `container-medium` 64rem, `container-small` 48rem.
- `padding-section-large` 7.5 / 5 / 4rem, `-medium` 5 / 4 / 3rem, `-small` 3 / 3 / 2rem.
- `heading-style-h1` to `h6`: same as the tags.
- `text-size-large` 1.25rem, `-medium` 1.125rem, `-regular` 1.0625rem, `-small` 0.875rem, `-tiny` 0.75rem.
- `button` and its combo classes: see `client-first.css` section 6 for every property.
- Spacing sizes: keep the clone's defaults. Responsive steps are in section 12 of the CSS.

## 6. Classes to add (not in the clone)

- `heading-style-display`, `text-style-tagline`, `text-style-measure`, `text-color-brand`
- `background-color-brand`, `button is-alternate`, `button-group`
- `radius-small`, `radius-medium`, `radius-round`, `image-cover`, `divider`
- `form_field-wrapper`, `form_field-label`, `form_help-text`
- Everything in `components.css`: `logo_*`, `navbar_*`, `section-header_component`, `service-card_*`, `badge_*`, `tag_component`, `info-list_*`, `trust-strip_*`, `mobile-cta_component`

## 7. Rich text (`text-rich-text`)

The clone has a basic `text-rich-text` class. Style it with nested selectors in the Style panel ("All H2 headings inside text-rich-text", and so on), using the values in `client-first.css` section 13:

- H2 2.25rem, 3rem above, 1rem below. H3 1.625rem, 2.5 / 0.75rem. H4 1.375rem, 2 / 0.5rem. H5 1.125rem. H6 0.875rem caps, brand colour.
- Paragraphs 1.0625rem, line-height 1.7, 1.25rem below.
- Links: weight 500, 2px pond underline.
- Lists: 1.75rem left padding, 0.5rem between items.
- Blockquote: mist background, 4px pond left border, 1.25rem by 1.5rem padding.
- Figures: 2.5rem above and below, 12px image radius, caption 0.875rem slate.

Webflow's nested-selector styling can't do three things in the CSS: the pond **dot bullets** (`li::before`), the deep **number colour** on ordered lists (`li::marker`), and **first/last-child margin resets**. Paste the rich text block from section 13 into a site-wide **HTML Embed in a global component** (or Site settings custom code, inside `<style>`), or keep default bullets if you'd rather avoid custom code.

Combo `is-small` goes on FAQ answers, sidebar cards and team bios.

Tables only appear through an HTML Embed placed inside the rich text, and they pick up the table styles automatically.

## 8. The `/style-guide` page

Rebuild `style-guide.html` section by section on the clone's style guide page. Keep that page in draft or set it to noindex, and exclude it from the sitemap.

## 9. Shared components (build these once, reuse on every page)

Pages: `home`, `about`, `team`, `services`, `service-detail` (CMS template), `contact`. Each page loads `client-first.css` + `components.css` + its own `<page>.css`, and `js/site.js`.

| Webflow Component | Local source | Classes |
|---|---|---|
| Navbar | `partials/header.html` | `navbar_*` (dropdowns, mobile drawer). Current state is `w--current`; set it on the dropdown toggle by hand for pages inside a dropdown |
| Footer | `partials/footer.html` | `footer_*` |
| Mobile CTA bar | `partials/footer.html` | `mobile-cta_component` |
| Breadcrumb | about, team, services, service-detail, contact | `breadcrumb_component`, `breadcrumb_list` (`is-center`), `breadcrumb_link` |
| Insurance & CDCP band | home, services, service-detail (`partials/insurance.html`) | `insurance_*`, `section_insurance` |
| Hours & location + live map | every page (`partials/location.html`) | `location_*`, `hours_*` |
| Contact form | every page (`partials/contact-form.html`) | `contact-form_*`, `form_*`, error states |
| Emergency strip | home, services, contact (`partials/emergency.html`) | `emergency-strip_*`: red panel, large call button, 911 line |
| CTA band | team (`is-mist`), contact | `cta-band_component`, `cta-band_content` |
| FAQ accordion | service-detail | `faq_*` |
| Cards | home, services, team | `service-card_*`, `team-card_*`, `blog-card_*` |
| Icon box | most pages | `icon-box_component` + `is-small` / `is-large` / `is-round` / `is-white` / `is-outline` |
| Placeholder tag | while content is unconfirmed | `placeholder_tag` (`is-dark`). Delete each one when the client confirms the fact |
| Image slot | all photo areas until the shoot | `image-slot_*` |

Locally, the header, footer, icon sprite, insurance band, location and contact form are kept identical with `python tools/sync-shared.py`: edit `partials/*.html`, then run it. `js/site.js` maps to site-wide custom code. Each block only runs when its elements are on the page.

## Open items before or during the build

- Vector logo (SVG). The local files use the 500px PNG icon.
- Real photography for `service-card_image-wrapper` and hero slots.
- Xact booking URL for every "Book" button.
