"""Write the shared partials into every site page (index.html + Pages/*.html).

    python tools/sync-shared.py

Edit partials/*.html (sprite, header, footer + mobile bar), then run this.
Each page gets the same markup between <!-- shared:NAME --> markers; the
only difference per page is the current-nav state, taken from the file name:

  data-nav="about"            -> class w--current + aria-current="page"
  data-nav-group="about team" -> class w--current (dropdown toggle / summary)

These blocks map 1:1 to Webflow Components (Navbar, Footer, Mobile CTA).
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ["home", "about", "team", "services", "service-detail", "contact"]
NAMES = ("sprite", "header", "footer", "insurance", "location", "contact-form", "emergency")
PARTS = {name: (ROOT / "partials" / f"{name}.html").read_text(encoding="utf-8").rstrip() for name in NAMES}

# Section partials every page must have. If a page has none yet, they are
# added at the end of <main>, in this order.
ON_EVERY_PAGE = ("location", "contact-form")
# Section partials used only where the page already has the block.
OPTIONAL = ("insurance", "emergency")

# First run: what each block looked like before markers existed.
SECTION = lambda classes: re.compile(r'[ \t]*<section class="section_(?:' + classes + r')[" ][^>]*>.*?</section>', re.S)
LEGACY = {
    "sprite": re.compile(r'<svg width="0" height="0" style="position:absolute" aria-hidden="true">.*?</svg>', re.S),
    "header": re.compile(r'[ \t]*<header class="navbar_component">.*?</header>', re.S),
    "footer": re.compile(r'[ \t]*<footer class="footer_component">.*?</footer>\s*(?:<!--[^>]*-->\s*)?<div class="mobile-cta_component">.*?</div>', re.S),
    "insurance": SECTION("home-insurance|services-insurance|service-detail-cost"),
    "location": SECTION("home-location|contact-location"),
    "contact-form": SECTION("home-contact|contact-form"),
    "emergency": re.compile(r'[ \t]*<div class="emergency-strip_component[^"]*">.*?<a href="tel:[^"]*" class="button[^"]*">.*?</a>\s*</div>', re.S),
}


def add_class(tag, cls):
    if re.search(r'class="[^"]*"', tag):
        return re.sub(r'class="([^"]*)"', lambda m: f'class="{m.group(1)} {cls}"', tag, count=1)
    return tag.replace(">", f' class="{cls}">', 1) if not tag.endswith("/>") else tag


def set_current(html, page):
    def nav(m):
        tag, value = m.group(0), m.group(1)
        tag = tag.replace(f' data-nav="{value}"', "")
        if value == page:
            tag = add_class(tag, "w--current").replace(">", ' aria-current="page">', 1)
        return tag

    def group(m):
        tag, values = m.group(0), m.group(1).split()
        tag = tag.replace(f' data-nav-group="{m.group(1)}"', "")
        return add_class(tag, "w--current") if page in values else tag

    html = re.sub(r'<[a-z]+[^>]*\sdata-nav="([^"]+)"[^>]*>', nav, html)
    return re.sub(r'<[a-z]+[^>]*\sdata-nav-group="([^"]+)"[^>]*>', group, html)


def sync(page):
    path = ROOT / "index.html" if page == "home" else ROOT / "Pages" / f"{page}.html"
    html = path.read_text(encoding="utf-8")
    for name, body in PARTS.items():
        block = f"<!-- shared:{name} (edit partials/{name}.html, then run tools/sync-shared.py) -->\n{set_current(body, page)}\n<!-- /shared:{name} -->"
        marked = re.compile(rf"<!-- shared:{name} .*?<!-- /shared:{name} -->", re.S)
        if marked.search(html):
            html = marked.sub(lambda _: block, html, count=1)
        elif LEGACY[name].search(html):
            html = LEGACY[name].sub(lambda _: block, html, count=1)
        elif name in ON_EVERY_PAGE:
            html = html.replace("  </main>", f"{block}\n\n  </main>", 1)
        elif name in OPTIONAL:
            continue
        else:
            raise SystemExit(f"{page}: could not find the {name} block")

    # One shared script; keep JSON-LD and any other typed scripts.
    html = re.sub(r"\n<script>\n\(\(\) => \{.*?\}\)\(\);\n</script>", "", html, flags=re.S)
    if 'src="/js/site.js"' not in html:
        html = html.replace("</body>", '<script src="/js/site.js" defer></script>\n</body>', 1)
    path.write_text(html, encoding="utf-8", newline="\n")
    print(f"synced {path.relative_to(ROOT)}")


if __name__ == "__main__":
    for p in PAGES:
        sync(p)
