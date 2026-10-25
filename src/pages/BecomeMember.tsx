import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Container from '../components/Container'

const COLORSTACK_NATIONAL_URL = 'https://app.colorstack.io/apply'
const COLORSTACK_UPRM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScdUMYJDIGzWhOP-3V3JzVuHLwzZKWNJVW8lkmHj1nTjFLHJg/viewform'

export default function BecomeMember() {
  const { t } = useTranslation()
  const steps = [
    {
      title: t('firstStepTitle'),
      description: t('firstStepDescription'),
    },
    {
      title: t('secondStepTitle'),
      description: t('secondStepDescription'),
    },
    {
      title: t('thirdStepTitle'),
      description: t('thirdStepDescription'),
    },
  ]
  return (
    <section className="flex flex-1 bg-forest text-chapter-white">
      <Container className="grid w-full min-h-[55vh] items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16 lg:py-24">
        <div className="w-full max-w-2xl space-y-6 sm:space-y-8">
          <p className="flex items-center gap-3 font-stackworks text-[0.65rem] font-semibold tracking-[0.18em] text-chapter-white/90 uppercase sm:text-xs">
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-accent" />
            {t('membership')}
          </p>

          <Heading
            level={1}
            className="max-w-[13ch] text-[clamp(2.75rem,9vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.045em] wrap-break-word text-chapter-white uppercase"
          >
            {t('membershipTitle')}{' '}
            <span className="text-chapter-white">
              {t('membershipTitleHighlight')}
            </span>
          </Heading>

          <p className="max-w-xl text-base leading-relaxed text-chapter-white/90 sm:text-lg sm:leading-8">
            {t('membershipDescription')}
          </p>

          <ol className="pt-2">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1
              return (
                <li
                  key={step.title}
                  className={`relative grid grid-cols-[2.25rem_1fr] gap-x-5 ${isLast ? '' : 'pb-7'}`}
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute top-9 bottom-0 left-4.5 w-px bg-chapter-white/35"
                    />
                  )}
                  <span className="grid size-9 place-items-center rounded-full bg-accent text-sm font-bold text-chapter-dark">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h2 className="text-sm font-semibold tracking-wide text-chapter-white uppercase sm:text-base">
                      {step.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-chapter-white/90 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="flex w-full flex-col gap-6 rounded-4xl bg-surface p-8 sm:p-10">
          {/* Header */}
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-chapter-dark uppercase sm:text-3xl">
              {t('callToAction')}
            </h2>
          </div>

          {/* Buttons + email note */}
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

          {/* Get more info */}
          <div className="border-t border-line pt-5 text-center">
            <button
              type="button"
              className="font-stackworks text-xs font-semibold tracking-widest text-sage-900 uppercase underline underline-offset-4 hover:text-chapter-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-dark"
            >
              {t('moreInfo')}
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
