#!/usr/bin/env python3
"""Render the 1200x630 card that link previews show for this site.

    python3 scripts/make-og-image.py

Uses the site's own typeface and cream background so a shared link looks like
the page it opens. Writes public/og.jpg.
"""

import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
FONT = os.path.join(ROOT, "public", "fonts", "StackSansNotch-VariableFont_wght.ttf")
OUT = os.path.join(ROOT, "public", "og.jpg")

W, H = 1200, 630
BG = "#f5f3ed"
INK = "#1f1c18"
SOFT = "#5e5951"
MUTED = "#9a948c"
ACCENT = "#9333ea"          # the purple bar in the <X_Z> logo
MARGIN = 92


def font(size, weight=400):
    f = ImageFont.truetype(FONT, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass                # static fallback: the default instance is fine
    return f


def tracked(draw, xy, text, fnt, fill, tracking=0):
    """Draw text with extra letter-spacing, which PIL has no option for."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x


def main():
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)

    # <X_Z> mark, with the accent drawn as a bar the way the navbar does it.
    mark = font(40, 600)
    x = tracked(d, (MARGIN, 74), "<X", mark, INK, 1)
    d.rectangle([x + 7, 74 + 22, x + 27, 74 + 26], fill=ACCENT)
    tracked(d, (x + 34, 74), "Z>", mark, INK, 1)

    tracked(d, (MARGIN, 232), "JOHNS HOPKINS UNIVERSITY", font(23, 500), MUTED, 3.4)
    d.text((MARGIN, 276), "Xupeng (Zack) Zhang", font=font(88, 700), fill=INK)
    d.text((MARGIN, 396), "Machine learning for medical imaging", font=font(38, 400), fill=SOFT)
    tracked(d, (MARGIN, 468), "MEDICAL IMAGING  ·  COMPUTER VISION  ·  LLM", font(21, 500), MUTED, 2.6)

    d.line([MARGIN, 536, W - MARGIN, 536], fill="#ddd8cd", width=1)
    tracked(d, (MARGIN, 560), "XZHAN419.COM", font(21, 500), SOFT, 2.6)

    im.save(OUT, quality=92, optimize=True)
    print(f"  {OUT}  {W}x{H}  {os.path.getsize(OUT) / 1024:.0f}KB")


if __name__ == "__main__":
    main()
