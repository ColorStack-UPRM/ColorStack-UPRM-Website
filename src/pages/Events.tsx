import Container from '../components/Container'
import EventRow, { type EventRowItem } from '../components/EventRow'
import Heading from '../components/Heading'
import { useTranslation } from '../i18n/useTranslation'

// Same in both languages, so it isn't a translation key.
const instagramHandle = '@colorstackuprm'

type EventsProps = {
  /**
   * Agenda rows in display order: newest start date first, so upcoming events
   * sit at the top and past events follow. With none, the empty state is shown.
   */
  events?: readonly EventRowItem[]
}

export default function Events({ events = [] }: EventsProps) {
  const { t } = useTranslation()

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
          {events.length > 0 ? (
            <ol className="list-none p-0">
              {events.map((event) => (
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