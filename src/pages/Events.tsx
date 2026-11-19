import { useMemo } from 'react'
import Container from '../components/Container'
import EventRow, { type EventRowItem } from '../components/EventRow'
import Heading from '../components/Heading'
import { events as configuredEvents } from '../config/events'
import useNow from '../hooks/useNow'
import { useTranslation } from '../i18n/useTranslation'
import {
  checkEvents,
  formatEventDate,
  isPastEvent,
  type EventEntry,
} from '../lib/events'

// Same in both languages, so it isn't a translation key.
const instagramHandle = '@colorstackuprm'

function reportProblems(errors: string[]) {
  if (errors.length === 0) return
  const message = `Check src/config/events.ts (see docs/EVENTS.md):\n- ${errors.join('\n- ')}`
  if (import.meta.env.DEV) throw new Error(message)
  console.error(message)
}

type EventsProps = {
  entries?: readonly EventEntry[]
}

export default function Events({ entries = configuredEvents }: EventsProps) {
  const { t, language } = useTranslation()

  const { events, errors } = useMemo(() => checkEvents(entries), [entries])
  reportProblems(errors)
  const endTimes = useMemo(() => events.map(({ endMs }) => endMs), [events])
  const now = useNow(endTimes)

  const rows = events.map((event): EventRowItem => {
    const isPast = isPastEvent(event, now)
    const actionKey =
      event.action ?? (event.href ? 'eventsActionReserve' : undefined)
    return {
      id: event.id,
      ...formatEventDate(event, language),
      title: event.title[language],
      location: event.location,
      actionLabel: actionKey && t(actionKey),
      actionHref: event.href,
      isPast,
    }
  })

  return (
    <section aria-labelledby="events" className="bg-surface-alt py-16 md:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 flex items-center gap-3 font-stackworks text-xs tracking-[0.15em] uppercase text-sage-700">
              <span
                aria-hidden="true"
                className="h-0.5 w-8 shrink-0 bg-accent"
              />
              {t('eventsLabel')}
            </p>

            <Heading
              level={2}
              variant="section"
              id="events"
              tabIndex={-1}
              className="min-w-0 wrap-break-word"
            >
              {t('eventsHeadline')}
            </Heading>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-sage-800 lg:justify-self-end lg:text-right lg:text-lg">
            {t('eventsSemester')}
          </p>
        </div>

        <div className="mt-12 border-t border-chapter-dark lg:mt-16">
          {rows.length > 0 ? (
            <ol className="list-none p-0">
              {rows.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </ol>
          ) : (
            <p className="border-b border-line py-10 text-base leading-relaxed text-sage-900 lg:px-4 lg:py-12 lg:text-lg">
              {t('eventsEmptyMessage')}
            </p>
          )}
        </div>

        {/* Not linked yet. When the link is approved, replace the handle span
            with <Button variant="outline" href=…>. */}
        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-dashed border-line bg-chapter-white/50 p-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 lg:mt-12 lg:p-10">
          <p className="min-w-0 flex-1 text-base leading-relaxed text-sage-800 sm:min-w-[18rem] lg:text-lg">
            <strong className="font-semibold text-sage-900">
              {t('eventsInstagramLead')}
            </strong>{' '}
            {t('eventsInstagramBody')}
          </p>

          <span className="inline-flex items-center justify-center rounded-full border border-chapter-dark px-6 py-3 font-stackworks text-sm font-bold tracking-widest text-chapter-dark uppercase">
            {instagramHandle}
          </span>
        </div>
      </Container>
    </section>
  )
}
