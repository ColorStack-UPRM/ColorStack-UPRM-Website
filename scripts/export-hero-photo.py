"""Export the approved source photo. Requires Pillow 12.2.0 (WebP + AVIF)."""

import argparse
from pathlib import Path

from PIL import Image, ImageOps

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
args = parser.parse_args()
output = Path(__file__).resolve().parents[1] / 'public/images/hero'
output.mkdir(parents=True, exist_ok=True)

with Image.open(args.source) as original:
    # Bake camera rotation into the pixels before removing source metadata.
    photo = ImageOps.exif_transpose(original).convert('RGB')
    for width in (640, 960, 1600, 2400):
        height = round(photo.height * width / photo.width)
        resized = photo.resize((width, height), Image.Resampling.LANCZOS)
        resized.info.clear()
        for extension, options in (
            ('webp', {'quality': 78, 'method': 6}),
            ('avif', {'quality': 55, 'speed': 6}),
        ):
            target = output / f'colorstack-uprm-team-{width}.{extension}'
            resized.save(target, **options)
            print(f'{target.name}: {width} x {height}, {target.stat().st_size:,} bytes')
