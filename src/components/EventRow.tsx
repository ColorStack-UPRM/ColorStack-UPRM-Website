import { useTranslation } from '../i18n/useTranslation'

// Display-ready values for one agenda row. Every string arrives already
// translated and formatted; this component only handles layout. Building
// these values from the events data (dates, timezone, past status, links)
// is the job of the events data issue.
export type EventRowItem = {
  id: string
  /** Machine-readable value for <time>, e.g. '2026-08-25'. */
  dateTime: string
  /** Short month shown above the day, e.g. 'Ago' / 'Aug'. Shown in capitals. */
  month: string
  /** Day of the month, e.g. '25'. */
  day: string
  /** Last day of a multi-day event, e.g. '16'. */
  endDay?: string
  /** End month, only when it differs from the start month. */
  endMonth?: string
  /** Optional full date for screen readers, e.g. '25 de agosto de 2026'. */
  dateLabel?: string
  /** Optional start time, e.g. '6:30 PM'. Only shown for upcoming events. */
  time?: string
  title: string
  location: string
  /** Registration action. Ignored when the event is past. */
  actionLabel?: string
  isPast?: boolean
}

type EventRowProps = {
  event: EventRowItem
}

export default function EventRow({ event }: EventRowProps) {
  const { t } = useTranslation()
  const {
    dateTime,
    month,
    day,
    endDay,
    endMonth,
    dateLabel,
    time,
    title,
    location,
    actionLabel,
    isPast,
  } = event
  const showTime = Boolean(time) && !isPast

  return (
    <li
      className="
        grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-2
        border-b border-line py-6
        sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-6
        lg:grid-cols-[9rem_minmax(0,1fr)_15rem_15rem]
        lg:items-center lg:gap-x-8 lg:py-8
      "
    >
      <time
        dateTime={dateTime}
        className={`
          col-start-1 row-span-3 row-start-1 flex flex-col
          lg:row-span-1 lg:pl-4
          ${isPast ? 'text-sage-800' : 'text-chapter-dark'}
        `}
      >
        {dateLabel && <span className="sr-only">{dateLabel}</span>}
        <span
          aria-hidden={dateLabel ? true : undefined}
          className="font-stackworks text-xs font-bold tracking-widest uppercase"
        >
          {month}
        </span>
        <span
          aria-hidden={dateLabel ? true : undefined}
          className="text-3xl leading-none tabular-nums sm:text-4xl lg:text-5xl"
        >
          {day}
        </span>
        {endDay && (
          <span
            aria-hidden={dateLabel ? true : undefined}
            className="mt-1 font-stackworks text-xs font-bold tracking-widest whitespace-nowrap uppercase"
          >
            – {endMonth && `${endMonth} `}
            {endDay}
          </span>
        )}
      </time>

      <h3
        className={`
          col-start-2 row-start-1 min-w-0
          text-lg leading-tight tracking-tight uppercase
          wrap-break-word
          lg:text-2xl
          ${isPast ? 'font-semibold text-sage-800' : 'font-bold text-chapter-dark'}
        `}
      >
        {title}
      </h3>

      <p
        className="
          col-start-2 row-start-2 min-w-0
          font-stackworks text-xs leading-relaxed tracking-widest uppercase
          wrap-break-word text-sage-800
          lg:col-start-3 lg:row-start-1 lg:text-sm
        "
      >
        {showTime && (
          <>
            <span className="font-bold text-chapter-dark">{time}</span>
            <span aria-hidden="true"> · </span>
          </>
        )}
        {location}
      </p>

      <div
        className="
          col-start-2 row-start-3 min-w-0 pt-1
          lg:col-start-4 lg:row-start-1 lg:justify-self-end lg:pt-0 lg:pr-4
          lg:text-right
        "
      >
        {isPast ? (
          <span
            className="
              inline-block rounded-full border border-sage-500/50 px-3 py-1
              font-stackworks text-xs tracking-widest uppercase text-sage-800
              lg:whitespace-nowrap
            "
          >
            {t('eventsPastLabel')}
          </span>
        ) : (
          actionLabel && (
            <span
              className="
                font-stackworks text-xs leading-relaxed font-bold
                tracking-widest text-balance uppercase text-chapter-dark
                lg:text-sm
              "
            >
              {actionLabel}
              <span aria-hidden="true" className="ml-2 text-accent">
                →
              </span>
            </span>
          )
        )}
      </div>
    </li>
  )
}