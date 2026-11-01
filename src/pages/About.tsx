import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useTranslation } from '../i18n/useTranslation'
import type { TranslationKey } from '../i18n/es'

const missionRows = [
  { title: 'aboutEntryTitle', description: 'aboutEntryDescription' },
  { title: 'aboutRetentionTitle', description: 'aboutRetentionDescription' },
  { title: 'aboutSuccessTitle', description: 'aboutSuccessDescription' },
] satisfies { title: TranslationKey; description: TranslationKey }[]

type AboutProps = {
  boardLinkTo?: string
}

export default function About({ boardLinkTo }: AboutProps) {
  const { t } = useTranslation()

  return (
    <section
      aria-labelledby="about"
      className="rounded-t-3xl bg-chapter-dark py-16 text-chapter-white md:py-24 lg:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <p className="mb-4 flex items-center gap-3 font-stackworks text-xs tracking-[0.15em] uppercase text-chapter-white/75">
            <span
              aria-hidden="true"
              className="h-0.5 w-8 shrink-0 bg-chapter-green"
            />
            {t('aboutLabel')}
          </p>
          <h2
            id="about"
            tabIndex={-1}
            className="max-w-[12ch] text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95] font-extrabold tracking-tight uppercase"
          >
            {t('aboutHeadline')}{' '}
            <span className="text-chapter-green">
              {t('aboutHeadlineHighlight')}
            </span>
          </h2>
        </div>

        <div className="min-w-0">
          <div className="space-y-5 text-base leading-relaxed text-chapter-white/80 lg:text-lg">
            <p>{t('aboutNationalMission')}</p>
            <p>{t('aboutChapterMission')}</p>
          </div>
          <dl className="mt-8 divide-y divide-chapter-white/15">
            {missionRows.map(({ title, description }) => (
              <div
                key={title}
                className="grid gap-3 py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="font-stackworks text-xs font-medium tracking-[0.15em] uppercase text-chapter-green">
                  {t(title)}
                </dt>
                <dd className="text-sm leading-relaxed text-chapter-white/80">
                  {t(description)}
                </dd>
              </div>
            ))}
          </dl>
          {boardLinkTo && (
            <Link
              to={boardLinkTo}
              className="mt-6 inline-flex min-h-11 items-center gap-3 font-stackworks text-xs tracking-wider uppercase underline underline-offset-4 hover:text-chapter-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-white"
            >
              {t('aboutMeetBoard')}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </Container>
    </section>
  )
}
