#!/usr/bin/env python3
"""Write the per-page <head> metadata, robots.txt and sitemap.xml.

    python3 scripts/build-meta.py

Each page gets its own title, description and Open Graph tags, injected between
the `meta:start` / `meta:end` markers in its <head> — rerun this after editing
PAGES and the blocks are rewritten in place.

Per-page copy matters: a shared link to /cv/ should preview the CV, and search
engines demote pages that all carry the same description.
"""

import os
import datetime

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SITE = "https://xzhan419.com"
START, END = "<!-- meta:start -->", "<!-- meta:end -->"

# file → (url path, title, description, og image)
PAGES = {
    "index.html": (
        "/",
        "Xupeng (Zack) Zhang",
        "M.S.E. student in Electrical and Computer Engineering at Johns Hopkins, "
        "building machine learning systems for medical imaging and healthcare.",
        "/og.jpg",
    ),
    "public/research/index.html": (
        "/research/",
        "Research — Xupeng Zhang",
        "ROI-centered MRI–MRA registration for trigeminal neuralgia and T2-only cerebral "
        "vessel segmentation, in the LDR Group at Johns Hopkins.",
        "/og.jpg",
    ),
    "public/cv/index.html": (
        "/cv/",
        "CV — Xupeng Zhang",
        "Education, research experience, publications, and technical skills. M.S.E. in ECE "
        "at Johns Hopkins; B.S. in Computer Science at UC Davis.",
        "/og.jpg",
    ),
    "public/contact/index.html": (
        "/contact/",
        "Contact — Xupeng Zhang",
        "Open to conversations about medical imaging, computer vision, and language models. "
        "Email and GitHub.",
        "/og.jpg",
    ),
    "public/about/index.html": (
        "/about/",
        "About — Xupeng Zhang",
        "The part that isn't research — singing, a Siamese cat, and how one high school "
        "teacher opened two doors.",
        "/og.jpg",
    ),
    # A link to the photography page should preview photographs, not a name card.
    "public/photos.html": (
        "/photos.html",
        "Photography — Xupeng Zhang",
        "A timeline of photographs from Davis, San Francisco, New York, Baltimore, "
        "Hangzhou, and Xinjiang.",
        "/og-photos.jpg",
    ),
    "public/projects/index.html": (
        "/projects/",
        "Projects — Xupeng Zhang",
        "ROI-centered MRI–MRA registration, pose-based human action prediction, LLM fine-tuning "
        "on a Traditional Chinese Medicine corpus, and a real-time WebGL shadow mapping engine.",
        "/og.jpg",
    ),
}


def block(path, title, desc, image):
    url = SITE + path
    return f"""{START}
    <title>{title}</title>
    <meta name="description" content="{desc}" />
    <link rel="canonical" href="{url}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Xupeng Zhang" />
    <meta property="og:url" content="{url}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{desc}" />
    <meta property="og:image" content="{SITE}{image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{desc}" />
    <meta name="twitter:image" content="{SITE}{image}" />

    <link rel="icon" href="/favicon-32.png" sizes="32x32" />
    <link rel="icon" href="/favicon-192.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    {END}"""


def inject(rel, meta):
    path = os.path.join(ROOT, rel)
    html = open(path).read()
    new = block(*meta)

    if START in html:
        head, _, rest = html.partition(START)
        _, _, tail = rest.partition(END)
        html = head + new + tail
    else:
        # First run: drop the old <title> and any stale icon link, then insert
        # the block where the title used to be.
        import re

        html = re.sub(r'\n\s*<link rel="icon"[^>]*>', "", html)
        html = re.sub(r"\n?\s*<title>.*?</title>", "\n    " + new, html, count=1, flags=re.S)
    open(path, "w").write(html)
    return rel


def main():
    for rel, meta in PAGES.items():
        print(f"  meta → {inject(rel, meta)}")

    robots = os.path.join(ROOT, "public", "robots.txt")
    open(robots, "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
    print("  wrote public/robots.txt")

    urls = []
    for rel, (path, *_rest) in PAGES.items():
        mtime = os.path.getmtime(os.path.join(ROOT, rel))
        day = datetime.date.fromtimestamp(mtime).isoformat()
        urls.append(f"  <url>\n    <loc>{SITE}{path}</loc>\n    <lastmod>{day}</lastmod>\n  </url>")

    sitemap = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )
    open(os.path.join(ROOT, "public", "sitemap.xml"), "w").write(sitemap)
    print(f"  wrote public/sitemap.xml ({len(urls)} urls)")


if __name__ == "__main__":
    main()
