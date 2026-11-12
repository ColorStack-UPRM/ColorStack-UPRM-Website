import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import Button from './Button'
import { membershipFaq } from '../config/membershipFAQ'

const COLORSTACK_NATIONAL_URL = 'https://app.colorstack.io/apply'
const COLORSTACK_UPRM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScdUMYJDIGzWhOP-3V3JzVuHLwzZKWNJVW8lkmHj1nTjFLHJg/viewform'

// Must match the duration-500 class on the answer panels below.
const ACCORDION_DURATION_MS = 500

const faceClassName =
  'membership-card-face flex flex-col gap-6 rounded-4xl bg-surface p-8 shadow-2xl shadow-chapter-dark/40 sm:p-10'

const titleClassName =
  'text-center text-2xl font-extrabold tracking-tight text-chapter-dark uppercase focus:outline-none sm:text-3xl'

const textButtonClassName =
  'font-stackworks text-xs font-semibold tracking-widest text-sage-900 uppercase underline underline-offset-4 hover:text-chapter-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-dark'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function MembershipCard() {
  const { t } = useTranslation()
  const [isFlipped, setIsFlipped] = useState(false)
  // Only one question can be open at a time.
  const [openId, setOpenId] = useState<string | null>(null)
  // True while an open question is collapsing before the card flips back.
  const [isClosingToFlip, setIsClosingToFlip] = useState(false)

  const moreInfoRef = useRef<HTMLButtonElement>(null)
  const backHeadingRef = useRef<HTMLHeadingElement>(null)
  const hasFlipped = useRef(false)
  const flipTimeout = useRef<number | undefined>(undefined)

  // Focus the FAQ heading on entry and restore the trigger on return.
  useEffect(() => {
    if (!hasFlipped.current) return
    const target = isFlipped ? backHeadingRef.current : moreInfoRef.current
    target?.focus({ preventScroll: true })
  }, [isFlipped])

  // Don't leave a pending flip running if the page changes mid-collapse.
  useEffect(() => () => window.clearTimeout(flipTimeout.current), [])

  const flip = () => {
    hasFlipped.current = true
    setIsFlipped((value) => !value)
  }

  // Back button: if a question is open, collapse it first, then flip once
  // the card has finished shrinking.
  const flipToFront = () => {
    if (isClosingToFlip) return

    if (openId === null || prefersReducedMotion()) {
      setOpenId(null)
      flip()
      return
    }

    setOpenId(null)
    setIsClosingToFlip(true)
    flipTimeout.current = window.setTimeout(() => {
      setIsClosingToFlip(false)
      flip()
    }, ACCORDION_DURATION_MS)
  }

  const toggleQuestion = (id: string) => {
    if (isClosingToFlip) return
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className={`membership-card w-full ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="membership-card-inner">
        {/* ---------- Front: apply ---------- */}
        <div className={`${faceClassName} justify-center`} inert={isFlipped}>
          <h2 className={titleClassName}>
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
            <button
              ref={moreInfoRef}
              type="button"
              onClick={flip}
              className={textButtonClassName}
            >
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
              const isOpen = openId === id
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

                  {/* Animates height by moving the grid row between 0fr and 1fr. */}
                  <div
                    id={panelId}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-4 text-sm leading-relaxed text-sage-900">
                        {t(answer)}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="text-center">
            <button
              type="button"
              onClick={flipToFront}
              className={textButtonClassName}
            >
              {t('faqBack')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}