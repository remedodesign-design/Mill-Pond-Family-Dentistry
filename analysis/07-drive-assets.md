# Drive assets from the website questionnaire (row 15)

Source: five Google Drive links in the "website questionaire" tab. Opened 2026-11-06 in the user's signed-in Chrome (the Drive connector could not see them). All five are logo PNGs. Local copies are in `assets/logo/`.

| # | Local file | Drive file name | Size (px) | Content |
|---|---|---|---|---|
| 1 | 01-tooth-icon-white-highlight.png | Blue tooth on Transparent white patch | 493 x 506 | Light-blue tooth icon with a white highlight, transparent background |
| 2 | 02-tooth-icon-cutout-highlight.png | Blue tooth on Transparent | 494 x 506 | Same icon, highlight cut out (shows the background) |
| 3 | 03-lockup-mpdc-wordmark.png | Original on Transparent | 5000 x 5000 | Tooth icon above grey lowercase "mpdc" |
| 4 | 04-lockup-mpdc-framed.png | Original | 7500 x 7500 | Same "mpdc" lockup inside a thin grey frame |
| 5 | 05-lockup-full-name.png | Mill Pond Dental Care Sign | 1920 x 1080 | Tooth icon above "Mill Pond Dental Care" in a thin geometric sans |

All five are RGBA PNGs. Drive file names end in "Mill Pond Dental Care | Dorchester Dentist" (looks like the live site's title tag).

## Findings
- Practice name confirmed from the artwork: **Mill Pond Dental Care** (the questionnaire's name field was blank).
- Tooth icon is the same light blue as the palette's #97C0E8; wordmark text is thin and grey.
- **No photos** were supplied (staff, office, equipment, before/after). The client answered "No" to having images and the links confirm it. Photos must be requested, or the live site's images or stock used.
- **No vector or source file** (SVG/AI/EPS). Row 16 still asks for the open logo file at am@remedo.io.
- Icon files (1, 2) are only about 500 px, so they are fine for a header and favicon but too small for large display. The large lockups (3, 4) are 5000 px and 7500 px, so they can be downscaled. The best source for a clean vector trace is the 7500 px lockup.
- The thin grey wordmark is low contrast, as is the #808080 text colour. Use a darker grey in the build.
- Files 1 and 2 differ only in the highlight (white vs transparent), so the choice depends on the background the icon sits on.
