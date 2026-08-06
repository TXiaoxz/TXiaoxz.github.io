#!/usr/bin/env python3
"""Build the photography page from a folder of camera originals.

    python3 scripts/optimize-photos.py ~/Dropbox/photos-for-site   # add photos
    python3 scripts/optimize-photos.py                             # rebuild only

The originals (20-24MP, 9-17MB each) stay out of the repo. For each new JPEG
this writes two derivatives and records the shot in photo-manifest.json:

    public/photos/thumb/<name>.webp    800px — the timeline
    public/photos/web/<name>.webp     2560px — the lightbox

then regenerates the timeline in public/photos.html between the
`timeline:start` / `timeline:end` markers, grouped by capture date, oldest
first. Photos already in the manifest are skipped, so re-running is cheap.

Place names live under "locations" in the manifest, keyed by date — the one
part written by hand. A date with no entry renders with the date alone and is
reported at the end.

EXIF is never copied into the derivatives: several originals carry GPS.
"""

import json
import os
import sys
import glob
import datetime
from collections import OrderedDict
from PIL import Image, ExifTags

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
DEST = os.path.join(ROOT, "public", "photos")
PAGE = os.path.join(ROOT, "public", "photos.html")
MANIFEST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "photo-manifest.json")

SIZES = {"thumb": 800, "web": 2560}
QUALITY = 82
START, END = "<!-- timeline:start -->", "<!-- timeline:end -->"

_TAG = {v: k for k, v in ExifTags.TAGS.items()}


def capture_date(im):
    exif = im.getexif()
    try:
        original = exif.get_ifd(0x8769).get(_TAG["DateTimeOriginal"])
        if original:
            return original
    except Exception:
        pass
    return exif.get(_TAG["DateTime"], "")


def ingest(src_dir, photos):
    """Generate derivatives for any JPEG not already in the manifest."""
    sources = sorted(
        f
        for pattern in ("*.jpg", "*.jpeg", "*.JPG", "*.JPEG")
        for f in glob.glob(os.path.join(src_dir, pattern))
    )
    if not sources:
        sys.exit(f"No JPEGs in {src_dir}")

    for name in SIZES:
        os.makedirs(os.path.join(DEST, name), exist_ok=True)

    added = 0
    for path in sources:
        stem = os.path.splitext(os.path.basename(path))[0]
        if stem in photos:
            continue

        im = Image.open(path)
        shot = capture_date(im)
        if not shot:
            print(f"  !! {stem}: no EXIF date — skipped (the timeline needs one)")
            continue

        thumb_size = None
        for name, width in SIZES.items():
            resized = im
            if im.width > width:
                resized = im.resize(
                    (width, round(im.height * width / im.width)), Image.LANCZOS
                )
            # Pillow drops EXIF unless it is passed explicitly. Keep it that way.
            resized.convert("RGB").save(
                os.path.join(DEST, name, f"{stem}.webp"), quality=QUALITY, method=6
            )
            if name == "thumb":
                thumb_size = (resized.width, resized.height)

        photos[stem] = {
            "date": datetime.datetime.strptime(shot, "%Y:%m:%d %H:%M:%S").strftime(
                "%Y-%m-%d %H:%M:%S"
            ),
            "w": thumb_size[0],
            "h": thumb_size[1],
        }
        added += 1
        print(f"  + {stem:20} {photos[stem]['date']}")

    return added


def render(photos, locations):
    """Group by capture date and emit the timeline markup."""
    shots = sorted(photos.items(), key=lambda kv: kv[1]["date"])
    sessions = OrderedDict()
    for stem, meta in shots:
        day = meta["date"][:10]
        sessions.setdefault(day, []).append((stem, meta))

    lines, year, missing = [], None, []
    for day, items in sessions.items():
        date = datetime.date.fromisoformat(day)
        if date.year != year:
            year = date.year
            lines.append(f'          <p class="tl-year">{year}</p>')

        label = date.strftime("%b %-d").upper()
        place = locations.get(day)
        if place:
            label += f" <span>&middot; {place}</span>"
        else:
            missing.append(day)

        lines.append(f'          <section class="tl-session" data-count="{len(items)}">')
        lines.append(f'            <p class="tl-date">{label}</p>')
        lines.append('            <div class="tl-shots">')
        for stem, meta in items:
            alt = f"Photograph taken {date.strftime('%B %-d, %Y')}"
            if place:
                alt += f" in {place}"
            lines.append(
                f'              <button type="button" data-full="/photos/web/{stem}.webp">\n'
                f'                <img src="/photos/thumb/{stem}.webp" alt="{alt}"'
                f' width="{meta["w"]}" height="{meta["h"]}" loading="lazy" />\n'
                f"              </button>"
            )
        lines.append("            </div>")
        lines.append("          </section>")

    return "\n".join(lines), len(sessions), missing


def main():
    with open(MANIFEST) as f:
        manifest = json.load(f)
    photos = manifest.setdefault("photos", {})
    locations = manifest.setdefault("locations", {})

    if len(sys.argv) > 1:
        added = ingest(sys.argv[1], photos)
        print(f"\n  {added} new photo(s) added\n")

    body, sessions, missing = render(photos, locations)

    page = open(PAGE).read()
    head, _, rest = page.partition(START)
    _, _, tail = rest.partition(END)
    if not tail:
        sys.exit(f"Markers {START} / {END} not found in {PAGE}")
    open(PAGE, "w").write(f"{head}{START}\n{body}\n          {END}{tail}")

    with open(MANIFEST, "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print(f"  {len(photos)} photos across {sessions} sessions written to photos.html")
    if missing:
        print(f"  !! no location set for: {', '.join(missing)}")
        print("     add them under \"locations\" in scripts/photo-manifest.json")


if __name__ == "__main__":
    main()
