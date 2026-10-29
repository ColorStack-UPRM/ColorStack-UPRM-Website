import { useEffect, useRef, useState, type TransitionEvent } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import Button from './Button'
import { membershipFaq } from '../config/membershipFAQ'

const COLORSTACK_NATIONAL_URL = 'https://app.colorstack.io/apply'
const COLORSTACK_UPRM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScdUMYJDIGzWhOP-3V3JzVuHLwzZKWNJVW8lkmHj1nTjFLHJg/viewform'

const faceClassName =
  'membership-card-face flex flex-col gap-6 rounded-4xl bg-surface p-8 sm:p-10'

const titleClassName =
  'text-center text-2xl font-extrabold tracking-tight text-chapter-dark uppercase focus:outline-none sm:text-3xl'

const textButtonClassName =
  'font-stackworks text-xs font-semibold tracking-widest text-sage-900 uppercase underline underline-offset-4 hover:text-chapter-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-dark'

export default function MembershipCard() {
  const { t } = useTranslation()
  const [isFlipped, setIsFlipped] = useState(false)
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set())

  const frontHeadingRef = useRef<HTMLHeadingElement>(null)
  const backHeadingRef = useRef<HTMLHeadingElement>(null)
  const hasFlipped = useRef(false)

  // After a flip, move focus to the heading of the side now showing so
  // keyboard and screen reader users land on the new content.
  useEffect(() => {
    if (!hasFlipped.current) return
    const heading = isFlipped ? backHeadingRef : frontHeadingRef
    heading.current?.focus({ preventScroll: true })
  }, [isFlipped])

  const closeAllQuestions = () => setOpenIds(new Set())

  const flip = () => {
    hasFlipped.current = true
    const goingToFront = isFlipped
    setIsFlipped(!isFlipped)

    // With reduced motion there is no transition, so transitionend never
    // fires. Close the questions right away instead.
    if (
      goingToFront &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      closeAllQuestions()
    }
  }

  // Once the card has turned back to the front, close every question so the
  // card shrinks back to its original size.
  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      event.target === event.currentTarget &&
      event.propertyName === 'transform' &&
      !isFlipped
    ) {
      closeAllQuestions()
    }
  }

  const toggleQuestion = (id: string) =>
    setOpenIds((previous) => {
      const next = new Set(previous)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })

  return (
    <div className={`membership-card w-full ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="membership-card-inner" onTransitionEnd={handleTransitionEnd}>
        {/* ---------- Front: apply ---------- */}
        <div className={`${faceClassName} justify-center`} inert={isFlipped}>
          <h2 ref={frontHeadingRef} tabIndex={-1} className={titleClassName}>
            {t('callToAction')}
          </h2>

          <div className="flex flex-col gap-3">
            <Button
              variant="coral"
              className="w-full"
              href={COLORSTACK_NATIONAL_URL}
              aria-describedby="membership-email-note"
            >
              {t('colorStackNationalLabel')}
            </Button>
            <Button
              variant="coral"
              className="w-full"
              href={COLORSTACK_UPRM_URL}
              aria-describedby="membership-email-note"
            >
              {t('colorStackUPRMLabel')}
            </Button>
            <p
              id="membership-email-note"
              className="text-center font-stackworks text-xs tracking-wide text-sage-700"
            >
              {t('correctEmail')}
            </p>
          </div>

          <div className="border-t border-line pt-5 text-center">
            <button type="button" onClick={flip} className={textButtonClassName}>
              {t('moreInfo')}
            </button>
          </div>
        </div>

        {/* ---------- Back: questions ---------- */}
        <div className={`${faceClassName} membership-card-back`} inert={!isFlipped}>
          <h2 ref={backHeadingRef} tabIndex={-1} className={titleClassName}>
            {t('faqTitle')}
          </h2>

          <ul className="border-t border-chapter-dark">
            {membershipFaq.map(({ id, question, answer }) => {
              const isOpen = openIds.has(id)
              const panelId = `membership-faq-${id}`

              return (
                <li key={id} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleQuestion(id)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-chapter-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chapter-dark sm:text-base"
                    >
                      <span className="min-w-0">{t(question)}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl leading-none text-chapter-dark"
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className="pb-4 text-sm leading-relaxed text-sage-900"
                  >
                    {t(answer)}
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="text-center">
            <button type="button" onClick={flip} className={textButtonClassName}>
              {t('faqBack')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}