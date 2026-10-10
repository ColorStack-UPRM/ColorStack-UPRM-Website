import { useTranslation } from '../i18n/useTranslation'
import Button from '../components/Button'

export default function Home() {
  const { t } = useTranslation()
  const headline = t('goal')

  // This splits up the headline to highlight the last word
  const lastSpace = headline.lastIndexOf(' ')
  const firstPart = lastSpace >= 0 ? headline.slice(0, lastSpace) : ''
  const lastWord = lastSpace >= 0 ? headline.slice(lastSpace + 1) : headline

  return (
    <section className="flex min-h-[55vh] w-full items-center py-10 sm:py-14 lg:py-16">
      <div className="w-full max-w-2xl space-y-6 sm:space-y-8">
        <p className="flex items-center gap-3 font-stackworks text-[0.65rem] font-semibold tracking-[0.18em] text-sage-700 uppercase sm:text-xs">
          <span
            aria-hidden="true"
            className="h-px w-7 shrink-0 bg-chapter-green"
          />
          {t('campus')}
        </p>

        <h1 className="max-w-[11ch] text-[clamp(2.75rem,9vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.045em] wrap-break-word text-chapter-dark">
          {firstPart && `${firstPart} `}
          <span className="text-chapter-green">{lastWord}</span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-sage-800 sm:text-lg sm:leading-8">
          {t('whoWeAre')}
        </p>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
          <Button
            variant="coral"
            className="w-full gap-3 sm:w-auto"
            to="/become-a-member"
          >
            {t('membership')}
            <span aria-hidden="true">→</span>
          </Button>

          <Button variant="outline" className="w-full sm:w-auto" to="/sponsors">
            {t('heroSponsor')}
          </Button>
        </div>

        <ul className="grid max-w-xl list-disc grid-cols-1 gap-x-6 gap-y-3 pl-5 pt-2 marker:text-chapter-green sm:grid-cols-2">
          {[t('entry'), t('cost')].map((item) => (
            <li
              className="min-w-0 font-stackworks text-[0.65rem] font-medium tracking-widest text-sage-700 uppercase sm:text-xs"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
