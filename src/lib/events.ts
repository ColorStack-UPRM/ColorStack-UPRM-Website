import type { TranslationKey } from '../i18n/es'
import type { Language } from '../i18n/LanguageContext'

export const EVENT_TIME_ZONE = 'America/Puerto_Rico'

const AST_UTC_OFFSET = '-04:00'
const AST_OFFSET_MS = 4 * 60 * 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

export type EventDate = `${number}-${number}-${number}`
export type EventDateTime = EventDate | `${EventDate}T${number}:${number}`

export type EventEntry = {
  id: string
  start: EventDateTime
  end?: EventDateTime
  location: string
  title: Record<Language, string>
  action?: TranslationKey
  link?: string
}

export type ParsedEvent = EventEntry & {
  startMs: number
  endMs: number
  hasStartTime: boolean
  lastDay: string
  href?: string
}

const dateTimePattern = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/
const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

type ParsedDateTime = { ms: number; hasTime: boolean; day: string }

export function parseEventDateTime(value: string): ParsedDateTime | undefined {
  const match = dateTimePattern.exec(value)
  if (!match) return undefined

  const [, y, mo, d, h, mi] = match
  const year = Number(y)
  const month = Number(mo)
  const day = Number(d)
  const hour = h === undefined ? 0 : Number(h)
  const minute = mi === undefined ? 0 : Number(mi)
  if (hour > 23 || minute > 59) return undefined

  const wallClock = Date.UTC(year, month - 1, day, hour, minute)
  const check = new Date(wallClock)
  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    return undefined
  }

  return {
    ms: wallClock + AST_OFFSET_MS,
    hasTime: h !== undefined,
    day: `${y}-${mo}-${d}`,
  }
}

export function validEventLink(link: string | undefined): string | undefined {
  const value = link?.trim()
  if (!value) return undefined
  try {
    const url = new URL(value)
    if (url.protocol === 'mailto:') return url.pathname ? value : undefined
    if (url.protocol === 'https:' || url.protocol === 'http:') {
      return url.hostname.includes('.') ? value : undefined
    }
  } catch {
    return undefined
  }
  return undefined
}

export type EventCheck = {
  events: ParsedEvent[]
  errors: string[]
}

export function checkEvents(entries: readonly EventEntry[]): EventCheck {
  const errors: string[] = []
  const seen = new Set<string>()
  const events: ParsedEvent[] = []

  entries.forEach((entry, index) => {
    const label = `Event ${entry.id ? `"${entry.id}"` : `#${index + 1}`}`
    const problems: string[] = []

    if (!idPattern.test(entry.id)) {
      problems.push('id must be lowercase letters, numbers and hyphens')
    } else if (seen.has(entry.id)) {
      problems.push('id is already used by another event')
    }
    seen.add(entry.id)

    if (!entry.title?.es?.trim() || !entry.title?.en?.trim()) {
      problems.push('title needs both es and en')
    }
    if (!entry.location?.trim()) problems.push('location is required')

    const start = parseEventDateTime(entry.start)
    if (!start) {
      problems.push(
        `start "${entry.start}" must be a real date written YYYY-MM-DD or YYYY-MM-DDTHH:mm (24-hour)`,
      )
    }

    let endMs: number | undefined
    let lastDay: string | undefined
    if (entry.end !== undefined) {
      const end = parseEventDateTime(entry.end)
      if (!end) {
        problems.push(
          `end "${entry.end}" must be a real date written YYYY-MM-DD or YYYY-MM-DDTHH:mm (24-hour)`,
        )
      } else {
        endMs = end.hasTime ? end.ms : end.ms + DAY_MS
        lastDay = end.day
      }
    } else if (start) {
      endMs = parseEventDateTime(start.day)!.ms + DAY_MS
      lastDay = start.day
    }

    if (start && endMs !== undefined && endMs <= start.ms) {
      problems.push('end must be after start')
    }

    if (entry.link !== undefined && !validEventLink(entry.link)) {
      errors.push(
        `${label}: link "${entry.link}" isn't a valid URL, so it won't be shown`,
      )
    }

    if (problems.length > 0 || !start || endMs === undefined || !lastDay) {
      errors.push(`${label} was skipped: ${problems.join('; ')}`)
      return
    }

    events.push({
      ...entry,
      startMs: start.ms,
      endMs,
      hasStartTime: start.hasTime,
      lastDay,
      href: validEventLink(entry.link),
    })
  })

  const startDay = (event: ParsedEvent) => event.start.slice(0, 10)
  const sorted = events.toSorted((a, b) =>
    startDay(b).localeCompare(startDay(a)),
  )

  return { events: sorted, errors }
}

export function isPastEvent(event: ParsedEvent, now: number) {
  return now >= event.endMs
}

const locales: Record<Language, string> = { es: 'es-PR', en: 'en-US' }
const formatterCache = new Map<string, Intl.DateTimeFormat>()

function formatter(language: Language, options: Intl.DateTimeFormatOptions) {
  const key = `${language}:${JSON.stringify(options)}`
  let cached = formatterCache.get(key)
  if (!cached) {
    cached = new Intl.DateTimeFormat(locales[language], {
      ...options,
      timeZone: EVENT_TIME_ZONE,
    })
    formatterCache.set(key, cached)
  }
  return cached
}

function shortMonth(ms: number, language: Language) {
  return formatter(language, { month: 'short' }).format(ms).replace('.', '')
}

function twoDigitDay(ms: number, language: Language) {
  return formatter(language, { day: '2-digit' }).format(ms)
}

export type EventDateDisplay = {
  dateTime: string
  month: string
  day: string
  endMonth?: string
  endDay?: string
  dateLabel: string
  time?: string
}

export function formatEventDate(
  event: ParsedEvent,
  language: Language,
): EventDateDisplay {
  const start = event.startMs
  const lastDayMs = parseEventDateTime(event.lastDay)!.ms
  const multiDay = event.lastDay !== event.start.slice(0, 10)
  const longDate = formatter(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const time = event.hasStartTime
    ? formatter(language, { hour: 'numeric', minute: '2-digit' }).format(start)
    : undefined

  const month = shortMonth(start, language)
  const endMonth = multiDay ? shortMonth(lastDayMs, language) : undefined

  return {
    dateTime: event.hasStartTime
      ? `${event.start}${AST_UTC_OFFSET}`
      : event.start,
    month,
    day: twoDigitDay(start, language),
    endDay: multiDay ? twoDigitDay(lastDayMs, language) : undefined,
    endMonth: endMonth !== month ? endMonth : undefined,
    dateLabel: multiDay
      ? longDate.formatRange(start, lastDayMs)
      : longDate.format(start),
    time,
  }
}
