import Container from '../components/Container'
import NumberedRows from '../components/NumberedRows'
import { whatWeDoRows } from '../config/whatWeDo'
import { useTranslation } from '../i18n/useTranslation'

export default function WhatWeDo() {
  const { t } = useTranslation()

  return (
    <section
      aria-labelledby="what-we-do"
      className="bg-surface py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 flex items-center gap-3 font-stackworks text-xs tracking-[0.15em] uppercase text-chapter-dark">
              <span
                aria-hidden="true"
                className="h-0.5 w-8 shrink-0 bg-accent"
              />
              {t('whatWeDo')}
            </p>

            <h2
              id="what-we-do"
              tabIndex={-1}
              className="max-w-[14ch] text-4xl leading-[0.95] font-extrabold tracking-tight uppercase text-chapter-dark sm:text-5xl lg:text-6xl"
            >
              {t('whatWeDoHeadline')}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-sage-800 lg:text-lg">
            {t('whatWeDoIntro')}
          </p>
        </div>

        <NumberedRows items={whatWeDoRows} className="mt-12 lg:mt-16" />
      </Container>
    </section>
  )
}