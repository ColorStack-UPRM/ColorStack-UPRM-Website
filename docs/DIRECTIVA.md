# Directiva design and content handoff

Issue: [#66](https://github.com/ColorStack-UPRM/ColorStack-UPRM-Website/issues/66).
Implementation follows in #67. The repository owner approved this design and
content handoff on November 3, 2026. The preview includes all 12 directory members
in source order; it does not introduce a production route.

## Deliverables

- [Responsive bilingual layout preview](design/directiva.html): open the file in a
  browser and resize from 320px to desktop. Choose EN or ES to review both.
  Cards use the 12 directory names, supplied portraits, and proposed bilingual roles.
- [Roster data](content/directiva-roster.csv): 12 unique people in source directory
  order. All photo paths are populated; crop approval fields remain blank.
- [Source transcription](content/directiva-source.md): names, verbatim roles,
  source grouping, term evidence, and source file fingerprint from the PDF supplied
  by the repository owner. Personal contact columns are omitted.
- [Design tokens](DESIGN-TOKENS.md): production implementation must reuse the
  existing tokens, Container, Heading, navigation, footer, and language provider.

## Layout specification

The dedicated page is proposed at `/directiva`. Use the existing site header and
footer; the preview shows only the page content. Provide one h1, a chapter label,
intro, and an unordered list of member cards. Return to Home's
About section through `/#about`; wire the existing `About.boardLinkTo` to
`/directiva` in #67 once the page and content are ready.

Use a `chapter-dark` introduction with white text, a coral label rule, and a
`highlight` green headline accent, following the existing About and hero sections.
The team grid sits on `surface`. Member cards use `forest` green portrait frames, `highlight` green content
panels, dark names and roles, and small coral numbered badges. A dark 5px base
shadow echoes the stacked homepage cards. Cards have 28px outer corners, 18px
portrait corners, and 12px framing; content has 20px padding and a subtle rule
above each role. Hover lifts cards 4px only when reduced motion is not requested.

Montserrat is used for uppercase, extra-bold titles and member names; JetBrains
Mono is used for labels and sequential card numbers. The return
link uses the existing coral pill-button treatment.

| Viewport   | Container padding        | Introduction                              | Member grid         |
| ---------- | ------------------------ | ----------------------------------------- | ------------------- |
| 320–639px  | 16px                     | Stacked; heading starts at 40px           | 1 column; 24px gap  |
| 640–1023px | 24px                     | Stacked; fluid heading                    | 2 columns; 24px gap |
| 1024px+    | 32px; content max 1216px | 3:2 columns; 64px gap; heading up to 76px | 3 columns; 32px gap |

Introduction vertical padding is 64px, increasing to 96px at 768px. The team
section uses 48px top / 64px bottom padding, increasing to 64px / 96px at 768px.
Its bilingual title and member count precede the grid by 32px (40px desktop).
Cards retain 4:5 portraits, with 20px content padding and fully wrapping names
and roles. All 12 people retain their directory order and equal card treatment.
The preview uses the actual long names and dual-role titles for review.

## Proposed bilingual copy

Move approved copy into `src/i18n/en.ts` and `es.ts` in #67; no page copy should
be hardcoded in the production component.

| Proposed translation key | EN                                                                                                        | ES                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| boardLabel               | UPRM chapter                                                                                              | Capítulo UPRM                                                                                                              |
| boardTitle               | Meet the board                                                                                            | Conoce la directiva                                                                                                        |
| boardIntro               | Meet the students who organize our chapter, connect our community, and help create opportunities at UPRM. | Conoce a los estudiantes que organizan nuestro capítulo, conectan a la comunidad y ayudan a crear oportunidades en el RUM. |
| boardBack                | Back to about us                                                                                          | Volver a nosotros                                                                                                          |

Role translations are populated per person in the roster CSV and preview.
They cover President, Vice President / Representative Lead, Secretary,
Treasurer & Fundraising Committee Lead, StackWorks Lead, Event Coordinator,
Fundraiser, and Representative. The source mixes EN/ES titles; confirm the
proposed translations and preferred Spanish titles with the chapter.

## Roster and photo contract

The CSV fields are `display_order`, `name`, `role_en`, `role_es`, `term`,
`photo_path`, `photo_position`, `approved_by`, `approved_on`, and `source_url`.
Use consecutive display positions starting at 1. Names and order currently
follow the source directory and the approved mockup.
The `term` value is F26 verbatim from the PDF; no start/end dates are supplied.
Keep names verbatim in both languages. Record photo/crop approval dates as
YYYY-MM-DD; `approved_by` and `approved_on` stay blank until that approval exists.
The `source_url` field currently holds the repository-relative source transcription
path. It is provenance for names/roles, not evidence of photo approval.

Asset directory: `public/images/board/` (12 supplied portraits).
Use stable lowercase filenames such as `<member-slug>.webp`, without private
contact details. Store approved portraits in the repo so implementation does
not depend on expiring social-media URLs.

The owner supplied portraits on November 3, 2026, matched by first-name filenames,
and explicitly confirmed `1788737984027.png` as Normarie Martinez Flores.
Files are copied unchanged with stable member filenames. All are 800×800px
except Jovalier's 560×560px image. Preserve these available originals; do not
upscale them to satisfy the preferred future export size.

Use 4:5 portrait frames across all widths, `object-fit: cover`, and per-member
`object-position` (default `50% 35%`, adjust after review). Request originals at
least 800×1000px; export WebP at 800×1000 with an optional 400×500 derivative.
Preserve faces and hair, use similar headroom and eye lines, and never stretch
or synthesize missing portraits. Obtain approval for the selected photo and
crop. Strip location metadata when preparing exports. Since each portrait is
adjacent to its member's name, use `alt=""` to avoid repeating that name, and
set intrinsic width/height to the actual file dimensions. CSS sets the 4:5 frame.

## Implementation verification (#67)

The owner reviewed and approved the local design preview. Production browser
checks remain part of #67: verify both languages at 320, 375, 640, 1024, and
1440px, 200% zoom, and keyboard focus. Confirm no clipping of names, roles,
or portraits, and validate navigation using the real site header and footer.
The CSV's per-photo approval fields remain blank; do not treat design sign-off
as a separate recorded approval for each future optimized crop.

## Compact grid refinement

At 1200px and above, show four cards per row with 24px gaps. Keep three
columns from 1024–1199px, two from 640px, and one below 640px. Card content
uses 20px padding, 22px names (20px at 1200px), and 13px roles. The content
panel has a 164px minimum height and grows freely for longer text.

The visible mockup omits the proposal notice and board-term label; the language
toggle remains available. Term provenance stays in the roster data.
