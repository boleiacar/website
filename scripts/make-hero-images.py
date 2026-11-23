"""Generate responsive hero images from the Pexels originals.

Usage: python3 -I scripts/make-hero-images.py LANDSCAPE.jpg PORTRAIT.jpg src/assets/hero

Landscape: Pexels 15403008 (countryside road, Angola). Portrait: Pexels 37382237 (Luanda boulevard).
Both under the Pexels licence (https://www.pexels.com/license/).
"""
import sys
from pathlib import Path

from PIL import Image


def save(im: Image.Image, out: Path, stem: str, width: int) -> None:
    h = round(im.height * width / im.width)
    r = im.resize((width, h), Image.LANCZOS)
    r.save(out / f"{stem}-{width}.webp", "WEBP", quality=78, method=6)
    r.save(out / f"{stem}-{width}.jpg", "JPEG", quality=80, progressive=True, optimize=True)


def crop_ratio(im: Image.Image, ratio: float) -> Image.Image:
    """Centre-crop to width/height == ratio."""
    w, h = im.size
    if w / h > ratio:
        nw = round(h * ratio)
        return im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    nh = round(w / ratio)
    return im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))


def main() -> None:
    landscape, portrait, out = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
    out.mkdir(parents=True, exist_ok=True)
    road = Image.open(landscape).convert("RGB")
    for w in (640, 1024, 1600, 2560):
        save(road, out, "road", w)
    luanda = crop_ratio(Image.open(portrait).convert("RGB"), 3 / 4)
    for w in (640, 1024, 1600):
        save(luanda, out, "luanda", w)


if __name__ == "__main__":
    main()
