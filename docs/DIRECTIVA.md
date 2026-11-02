# Directiva design and content handoff

Issue: [#66](https://github.com/ColorStack-UPRM/ColorStack-UPRM-Website/issues/66).
Implementation follows in #67. Status: proposed design; chapter content and approval pending.

## Deliverables

- [Responsive bilingual layout preview](design/directiva.html): open the file in a
  browser and resize from 320px to desktop. Choose EN or ES to review both.
  Cards contain explicit layout specimens, not real members or approved content.
- [Roster intake](content/directiva-roster.csv): header-only until the chapter
  supplies its confirmed roster. One row per member, in approved display order.
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
long names to wrap. The preview includes deliberately long specimen text.

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

Suggested role translations below are a vocabulary for review, **not a claim
about which positions exist**. Confirm each actual title with the chapter;
preserve each member's preferred Spanish title and accents.

| EN                      | ES (confirm preferred form)            |
| ----------------------- | -------------------------------------- |
| President               | Presidente / Presidenta                |
| Vice President          | Vicepresidente / Vicepresidenta        |
| Secretary               | Secretario / Secretaria                |
| Treasurer               | Tesorero / Tesorera                    |
| Communications Director | Director / Directora de Comunicaciones |
| Technical Director      | Director Técnico / Directora Técnica   |

## Roster and photo contract

The CSV fields are `display_order`, `name`, `role_en`, `role_es`, `term`,
`photo_path`, `photo_position`, `approved_by`, `approved_on`, and `source_url`.
Use consecutive display positions starting at 1. Keep names verbatim in both
languages. Record approval dates as YYYY-MM-DD and a traceable chapter source
for the roster/photo approvals. Do not infer the term from today's date or
sort members alphabetically unless the chapter approves that order.

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

- Chapter confirms the complete roster, exact names, bilingual role titles,
  board term, display order, and photo/crop approval in a linked source.
- Populate every CSV field and link all portrait files; no specimens in final
  content. Verify every image opens and meets the portrait specification.
- Review the proposed design at 320, 375, 640, 1024, and 1440px in EN/ES,
  including the longest actual names and roles, 200% zoom, and keyboard focus.
- Confirm no overflow, clipping, face cropping problems, or unexpected order
  changes. Review with the chapter before treating this as final for #67.

No roster or approval source was present in the repository or issue when this
handoff was prepared. These outstanding items prevent closing #66; the draft
PR should reference it without an automatic closing keyword.
