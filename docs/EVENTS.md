# Updating the events agenda

The agenda on the homepage (`/#events`) is built from one file:
[`src/config/events.ts`](../src/config/events.ts). Edit that list to add,
change, or remove an event. You don't need to touch the page, the row
component, or the translations.

The page takes care of the rest:

- **Order:** newest start day first. Events on the same day keep the order
  they have in the file.
- **Past events:** after an event ends, its row shows **Evento pasado / Past
  event** and loses its time and action. This happens in the visitor's browser
  at the exact end time, so nobody has to edit the file or redeploy.
- **Timezone:** every date and time is Puerto Rico time (AST, UTC−4, no
  daylight saving time) and is shown in AST to every visitor, wherever they are.
- **Empty list:** with no events, the bilingual empty message and the
  Instagram callout are shown.

## Event fields

```ts
{
  id: '2026-11-05-open-source-workshop',
  start: '2026-11-05T17:00',
  end: '2026-11-05T19:00',
  location: 'S-229',
  title: {
    es: 'Taller de código abierto',
    en: 'Open Source Workshop',
  },
  action: 'eventsActionBringLaptop',
  link: 'https://forms.gle/example',
},
```

| Field      | Required | What to put                                                                                                 |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `id`       | Yes      | Unique, lowercase, hyphens only. Use `YYYY-MM-DD-short-name`. Never change it after the event is published. |
| `start`    | Yes      | Start in AST. See the date/time format below.                                                               |
| `end`      | No       | End in AST. Leave it out until the organizers confirm it.                                                   |
| `location` | Yes      | Room or place, e.g. `S-229`. Same in both languages.                                                        |
| `title`    | Yes      | `es` and `en` titles. Both are required.                                                                    |
| `action`   | No       | A translation key for a short call to action, e.g. `eventsActionBringLaptop` or `eventsActionComeEarly`.    |
| `link`     | No       | Registration or participation URL. Must start with `https://`, `http://` or `mailto:`.                      |

### Date/time format

Write dates and times as **Puerto Rico wall-clock time, 24-hour, with no
timezone suffix**:

| You mean                       | Write                |
| ------------------------------ | -------------------- |
| November 5, time not confirmed | `'2026-11-05'`       |
| November 5 at 5:00 PM          | `'2026-11-05T17:00'` |
| November 5 at 9:30 AM          | `'2026-11-05T09:30'` |

- Always use two digits for month, day, hour and minute (`09`, not `9`).
- Don't add `Z`, `-04:00` or seconds.
- With only a date, no time is shown on the row.

### When does an event become past?

| `end`                      | The event is past from…                   |
| -------------------------- | ----------------------------------------- |
| `'2026-11-05T19:00'`       | 7:00 PM AST on November 5                 |
| `'2026-10-16'` (date only) | midnight AST after October 16 (whole day) |
| left out                   | midnight AST after the start day          |

Use a date-only `end` for multi-day events, e.g. `start: '2026-10-08'`,
`end: '2026-10-16'` shows as **OCT 08 – 16**.

### Actions and links

- Only upcoming events show an action. Past events never do.
- With a valid `link`, the action becomes a link. If there's a `link` but no
  `action`, it reads **Reserva tu espacio / Save your spot**.
- Without a `link` (or with an invalid one), the action is plain text.
- Don't use placeholders like `'#'` or `'TBD'`. Leave `link` out until the real
  URL exists.
- To add a new action text, add the key to both `src/i18n/es.ts` and
  `src/i18n/en.ts` first (see [TRANSLATIONS.md](TRANSLATIONS.md)).

## Add an event

1. Open `src/config/events.ts`.
2. Copy an existing entry and fill in the fields above. Position in the file
   only matters for events on the same day.
3. Run `npm run dev` and check the new row at `/#events` in both languages.

## Update an event

Edit the fields in place. Keep the same `id`. If the date changes, the order
updates on its own; you can leave the old date in the `id`.

## Remove an event

Delete its entry. Past events normally stay in the list for the rest of the
semester, so only remove an event that was cancelled or entered by mistake.
At the start of a new semester, replace the list and update `eventsSemester` in
both translation files.

## If something is wrong

The file is type-checked, so `npm run build` fails on a badly shaped date like
`'11/05/2026'`. Other problems (an impossible date such as `'2026-11-31'`, a
duplicate `id`, an `end` before `start`) stop the page in `npm run dev` with a
message that names the event. In production, an invalid entry is skipped and
logged to the console instead of breaking the page.
