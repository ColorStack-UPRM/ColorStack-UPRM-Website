# Events content (Fall 2026)

Confirmed event details for the agenda. Entering this into the events data,
and working out past and upcoming status automatically, is the job of the events data
issue. This file is the source content only.

All dates are from this fall semester (2026) and all times are AST. Rows are listed in
display order (see Display notes).

| Date      | Time     | Title (ES)                                                                    | Title (EN)                                              | Location | Action key                | Status   |
| --------- | -------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- | -------- | ------------------------- | -------- |
| Nov 5     | 5:00 PM  | Taller de código abierto                                                      | Open Source Workshop                                    | S-229    | `eventsActionBringLaptop` | Upcoming |
| Nov 4     | 6:00 PM  | Sesión de estudio: examen de Estructuras de Datos                             | Study Session: Data Structures Exam                     | S-227    | `eventsActionBringLaptop` | Upcoming |
| Nov 3     | 6:30 PM  | LeetStack: árboles, backtracking y grafos                                     | LeetStack: Trees, Backtracking and Graphs               | S-227    | `eventsActionBringLaptop` | Upcoming |
| Oct 27    | —        | LeetStack: listas enlazadas y pilas                                           | LeetStack: Linked Lists and Stacks                      | S-204    | —                         | Past     |
| Oct 27    | —        | Sesión de estudio: examen de Programación Avanzada                            | Study Session: Advanced Programming Exam                | S-205    | —                         | Past     |
| Oct 15    | —        | Guía de manejo de proyectos                                                   | Project Management Guide                                | S-227    | —                         | Past     |
| Oct 8–16  | —        | Ultimate Game 2.0                                                             | Ultimate Game 2.0                                       | S-105A   | —                         | Past     |
| Oct 8     | —        | Noche de juegos                                                               | Game Night                                              | S-227        | —                     | Past     |
| Oct 7     | —        | Sesión de estudio: examen de Programación Avanzada                            | Study Session: Advanced Programming Exam                | S-227    | —                         | Past     |
| Oct 6     | —        | Sesión de estudio: examen de Estructuras de Datos                             | Study Session: Data Structures Exam                     | S-227    | —                         | Past     |
| Sep 29    | —        | LeetStack: dos punteros y ventana deslizante                                  | LeetStack: Two Pointer and Sliding Window               | S-105A   | —                         | Past     |
| Sep 28    | —        | Taller de introducción al desarrollo de videojuegos                           | Intro to Game Dev Workshop                              | S-105C   | —                         | Past     |
| Sep 24    | —        | Taller de elevator pitch                                                      | Elevator Pitch Workshop                                 | S-105A   | —                         | Past     |
| Sep 21    | —        | Taller de preparación para la feria de empleo                                 | Job Fair Prep Workshop                                  | AE-203   | —                         | Past     |
| Sep 17    | —        | Taller de Git y GitHub                                                        | Git & GitHub Workshop                                   | S-105A   | —                         | Past     |
| Sep 10    | —        | Sesión de estudio: examen de Estructuras de Datos                             | Study Session: Data Structures Exam                     | CE-412   | —                         | Past     |
| Sep 8     | —        | De jugadores a creadores: explorando STEM a través del diseño de videojuegos  | Players to Creators: Exploring STEM Through Game Design | S-229    | —                         | Past     |
| Sep 1     | —        | Taller de introducción a Linux                                                | Intro to Linux Workshop                                 | S-113    | —                         | Past     |


## Action labels

The labels already live in `src/i18n/es.ts` and `src/i18n/en.ts`:

| Key                       | ES                                      | EN                          |
| ------------------------- | --------------------------------------- | --------------------------- |
| `eventsActionBringLaptop` | Trae tu laptop                          | Bring your laptop           |
| `eventsActionComeEarly`   | Llega temprano para asegurar tu espacio | Come early to secure a spot |

Past events never show an action, so the past events above don't need one.

## Display notes

- **Order:** newest start date first. Upcoming events sit at the top and
  past events follow, most recent first. Events on the same day keep the order
  they're listed in.
- **Time:** shown before the location ("6:30 PM · S-227"), only for upcoming
  events.
- **Multi-day events:** the start day is shown large and the end day below it
  ("OCT 08 / – 16"). Pass `endMonth` too when the event crosses into another
  month.
- **Past events:** keep the date, title and location, and show the
  "Evento pasado / Past event" label in place of the action.

## Still to confirm

- Deside if we should add participation links/QR code implementation since most events come with one.