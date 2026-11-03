# Directiva design and content handoff

Issue: [#66](https://github.com/ColorStack-UPRM/ColorStack-UPRM-Website/issues/66).
Implementation follows in #67. Status: F26 directory transcribed; page scope,
display order, translated roles, portraits, and design approval pending.

## Deliverables

- [Responsive bilingual layout preview](design/directiva.html): open the file in a
  browser and resize from 320px to desktop. Choose EN or ES to review both.
  Cards use the 12 directory names with proposed bilingual roles and photo placeholders.
- [Roster data](content/directiva-roster.csv): 12 unique people in source directory
  order. Photo and approval fields remain blank pending approved assets.
- [Source transcription](content/directiva-source.md): names, verbatim roles,
  source grouping, term evidence, and source file fingerprint from the PDF supplied
  by the repository owner. Personal contact columns are omitted.
- [Design tokens](DESIGN-TOKENS.md): production implementation must reuse the
  existing tokens, Container, Heading, navigation, footer, and language provider.

## Layout specification

The dedicated page is proposed at `/directiva`. Use the existing site header and
footer; the preview shows only the page content. Provide one h1, a chapter label,
intro, confirmed term, and an unordered list of member cards. Return to Home's
About section through `/#about`; wire the existing `About.boardLinkTo` to
`/directiva` in #67 once the page and content are ready.

Use `surface` for the page, `chapter-dark` for headings, `sage-800` for the intro,
`sage-700` for metadata, and `line` for card borders. Names use Montserrat; the
chapter label and term use JetBrains Mono. Use dark text on light backgrounds.

| Viewport   | Container padding      | Header                            | Member grid               |
| ---------- | ---------------------- | --------------------------------- | ------------------------- |
| 320–639px  | 16px                   | Stacked; 40px h1; 24px gap        | 1 column; 24px gap        |
| 640–1023px | 24px                   | Stacked; 56px h1                  | 2 equal columns; 24px gap |
| 1024px+    | 32px; max width 1280px | 3:2 heading/intro; bottom aligned | 3 equal columns; 32px gap |

Page vertical padding: 64px on mobile, 96px from 768px. Header-to-grid gap:
48px mobile, 64px desktop. Card content padding: 24px. Names are 24px bold;
roles are 16px with 1.5 line height. Allow both to wrap fully without truncation
or fixed text heights. Keep the same order across widths and languages; do not
give officers a different card size. Columns must use `minmax(0, 1fr)` to allow
long names to wrap. The preview includes all directory names and roles, including
the long dual-role titles for Normarie Martinez Flores and Josue C. Lopez Irizarry.

## Proposed bilingual copy

Move approved copy into `src/i18n/en.ts` and `es.ts` in #67; no page copy should
be hardcoded in the production component.

| Proposed translation key | EN                                                                                                        | ES                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| boardLabel               | UPRM chapter                                                                                              | Capítulo UPRM                                                                                                              |
| boardTitle               | Meet the board                                                                                            | Conoce la directiva                                                                                                        |
| boardIntro               | Meet the students who organize our chapter, connect our community, and help create opportunities at UPRM. | Conoce a los estudiantes que organizan nuestro capítulo, conectan a la comunidad y ayudan a crear oportunidades en el RUM. |
| boardTerm                | Board term: {term}                                                                                        | Periodo de la directiva: {term}                                                                                            |
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
follow the source directory; that order still needs public display approval.
The `term` value is F26 verbatim from the PDF; no start/end dates are supplied.
Keep names verbatim in both languages. Record photo/crop approval dates as
YYYY-MM-DD; `approved_by` and `approved_on` stay blank until that approval exists.
The `source_url` field currently holds the repository-relative source transcription
path. It is provenance for names/roles, not evidence of photo approval.

Proposed final asset directory: `public/images/board/` (not populated yet).
Use stable lowercase filenames such as `<member-slug>.webp`, without private
contact details. Store approved portraits in the repo so implementation does
not depend on expiring social-media URLs.

Use 4:5 portrait frames across all widths, `object-fit: cover`, and per-member
`object-position` (default `50% 35%`, adjust after review). Request originals at
least 800×1000px; export WebP at 800×1000 with an optional 400×500 derivative.
Preserve faces and hair, use similar headroom and eye lines, and never stretch
or synthesize missing portraits. Obtain approval for the selected photo and
crop. Strip location metadata when preparing exports. Since each portrait is
adjacent to its member's name, use `alt=""` to avoid repeating that name, and
set intrinsic width/height to 800/1000 to reserve space.

## Approval and verification still required

- Chapter confirms page scope: the source lists four executive board members
  and eight additional leaders/team members (12 unique people total). The draft
  includes all 12; dual-role leaders appear once. Confirm public display order,
  translated role titles, and whether F26 alone is the desired term label.
- Supply approved portraits and populate photo/approval fields. Verify every
  image opens and meets the portrait specification. The PDF has no photos.
  The repository owner requested placeholders for now because portraits are not
  ready; keep the review preview's placeholders until the assets are supplied.
- Review the proposed design at 320, 375, 640, 1024, and 1440px in EN/ES,
  including the longest actual names and roles, 200% zoom, and keyboard focus.
- Confirm no overflow, clipping, face cropping problems, or unexpected order
  changes. Review with the chapter before treating this as final for #67.

The repository owner supplied `ColorStack F26 - Directiva Directorio.pdf` from
their Desktop after the initial draft. All three pages were inspected; the
accessible transcription above records the relevant content. Outstanding scope,
asset, and approval items prevent closing #66; the draft PR should reference it
without an automatic closing keyword.
