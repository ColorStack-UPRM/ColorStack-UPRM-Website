# Hero photo

The optimized photo files for #28 are in `public/images/hero/`.

There are four sizes so phones can load a smaller image while larger screens get
more detail. Each size comes in AVIF and WebP. The browser picks one image to
load, with WebP as the fallback when AVIF isn’t supported.

The photo is portrait, so check the crop on phone and desktop when adding it to
the hero in #29. Keep the dark overlay in CSS.

The export script is `scripts/export-hero-photo.py` if the images need updating.
