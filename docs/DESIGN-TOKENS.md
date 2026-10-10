# Design Tokens

Tokens are the named colors and fonts defined once in the `@theme` block of
[`src/styles/index.css`](../src/styles/index.css). Tailwind turns each one into
classes: `--color-chapter-green` gives you `bg-chapter-green`,
`text-chapter-green`, `border-chapter-green`, and so on.

**Components use the class, never the hex code or a Tailwind default color**
(`gray-700`, `white`, etc.). When a color changes, we change one line in
`index.css` instead of searching through files.

For transparency, use Tailwind's opacity modifier on a token, like
`text-chapter-white/70`, instead of adding a new token.

---

## Colors

### Brand

These are the chapter's brand colors. Don't change them.

| Token           | Value     | Use it for                                                        |
| --------------- | --------- | ----------------------------------------------------------------- |
| `chapter-green` | `#008b08` | Brand accents, links, active nav state, primary buttons, outlines |
| `chapter-white` | `#ffffff` | Page background, and text or outlines on dark/green backgrounds   |
| `chapter-dark`  | `#06130e` | Footer background, dark sections                                  |

### Text on light backgrounds

| Token        | Value                        | Use it for                                      |
| ------------ | ---------------------------- | ----------------------------------------------- |
| `ink`        | `oklch(21% 0.034 264.665)`   | Default body text (set on the layout wrapper)   |
| `ink-muted`  | `oklch(37.3% 0.034 259.733)` | Secondary text, inactive nav links              |
| `ink-subtle` | `oklch(44.6% 0.03 256.802)`  | Small labels and captions (e.g. "UPRM CHAPTER") |

The `ink` values match Tailwind's `gray-900`, `gray-700` and `gray-600`, so
switching to tokens didn't change how anything looks. The current header and
layout use them. New sections built from the mockup should use the `sage`
text colors below instead.

### From the mockup

Taken from `ColorStack-UPRM-demo-completo.pdf`. The mockup's near-black
(`#08120c`) is visually identical to `chapter-dark`, and its white is
`chapter-white`, so those use the brand tokens.

**Accents**

| Token       | Value     | Use it for                                                                  |
| ----------- | --------- | --------------------------------------------------------------------------- |
| `accent`    | `#ff5a36` | Coral. Primary call-to-action buttons and step-number badges. See Contrast. |
| `highlight` | `#3fcb82` | Bright green text and bullets on dark backgrounds ("INDUSTRIA", prices)     |

**Greens**

| Token          | Value     | Use it for                                                      |
| -------------- | --------- | --------------------------------------------------------------- |
| `forest`       | `#12784a` | "Hazte miembro" section background, prices on light backgrounds |
| `forest-deep`  | `#0c3b2a` | "Quiénes somos" section, hero card, featured sponsor tier card  |
| `forest-muted` | `#144b37` | The large "COLOR … UPRM" footer wordmark only                   |

**Surfaces**

| Token         | Value     | Use it for                                                              |
| ------------- | --------- | ----------------------------------------------------------------------- |
| `surface`     | `#eef2e9` | Default page and header background, form card                           |
| `surface-alt` | `#e4eadd` | Alternating sections (Agenda, FAQ)                                      |
| `line`        | `#d3dcca` | Dividers, header bottom border, placeholder boxes, the Instagram notice |

**Text (`sage`)**

Lower numbers are lighter.

| Token      | Value     | Use it for                                                       |
| ---------- | --------- | ---------------------------------------------------------------- |
| `sage-900` | `#3e4e44` | Body text on light backgrounds                                   |
| `sage-800` | `#4a5a50` | Intro paragraphs under section headings                          |
| `sage-700` | `#5c6e61` | Small uppercase labels ("CAPÍTULO UPRM", event locations)        |
| `sage-500` | `#7a8b7f` | Fine print ("Solo usamos tu correo…", "NIVEL 02"). See Contrast. |
| `sage-400` | `#8b978f` | Form input placeholders. See Contrast.                           |
| `sage-300` | `#96a39a` | "TU LOGO AQUÍ" sponsor slots. See Contrast.                      |
| `sage-200` | `#a6bfac` | Muted text on `forest-deep` and `chapter-dark`                   |

## Fonts

| Token        | Font           | Use it for                      |
| ------------ | -------------- | ------------------------------- |
| `chapter`    | Montserrat     | Everything (default body font)  |
| `stackworks` | JetBrains Mono | Code-style / StackWorks accents |

---

## Contrast

WCAG AA needs **4.5:1** for normal text and **3:1** for large text (24px+, or
18.66px+ bold).

| Pair                               | Ratio  | Result                                       |
| ---------------------------------- | ------ | -------------------------------------------- |
| `ink` on `chapter-white`           | 17.7:1 | Pass                                         |
| `ink-muted` on `chapter-white`     | 10.3:1 | Pass                                         |
| `ink-subtle` on `chapter-white`    | 7.6:1  | Pass                                         |
| `chapter-white` on `chapter-dark`  | 19.0:1 | Pass                                         |
| `chapter-green` on `chapter-dark`  | 4.2:1  | Large text only (OK for the footer wordmark) |
| `chapter-white` on `chapter-green` | 4.47:1 | **Large text only.** Just under 4.5:1        |

Logos and wordmarks have no contrast requirement, so the footer wordmark is
fine in either color.

### Pairs from the mockup that need a decision

Everything not listed here passes. These are waiting on the Designer, so
don't ship them as-is:

| Pair                                        | Ratio     | Where                                  |
| ------------------------------------------- | --------- | -------------------------------------- |
| `chapter-white` on `accent`                 | 3.1:1     | Every coral button and step badge      |
| `accent` on `surface-alt` / `chapter-white` | 2.5–3.1:1 | Coral step numbers, "PASA POR LA MESA" |
| `accent` on `forest-deep`                   | 4.0:1     | "★ MÁS ESCOGIDO"                       |
| `chapter-white/80` on `forest`              | 4.0–4.3:1 | Form intro text in "Hazte miembro"     |
| `sage-700` on `surface-alt`                 | 4.44:1    | Event locations in the Agenda          |
| `sage-500` on `surface` / `chapter-white`   | 3.2–3.6:1 | Fine print                             |
| `sage-400` on `chapter-white`               | 3.0:1     | Input placeholders                     |
| `sage-300` on `line`                        | 1.9:1     | "TU LOGO AQUÍ" slots                   |

Options for the coral button:

- **Dark text on coral** (`text-chapter-dark` on `bg-accent`): 6.1:1, passes,
  and the coral stays the same.
- **Darker coral with white text**: the coral has to go to about `#e52900`
  (4.5:1). That reads red-orange, not coral.

Coral used as _text_ on light backgrounds fails in every case. It needs a
darker coral (about `#cb2400`) or a different color.

Check any new color pair before you use it for text.

---

## Adding a token

1. Add it to `@theme` in `src/styles/index.css`.
2. Name it for what it does, not for the brand. For example, `accent` for an
   accent color, not `chapter-coral`. Only the three brand colors use the
   `chapter-` prefix.
3. Add a row to this file explaining when to use it.
