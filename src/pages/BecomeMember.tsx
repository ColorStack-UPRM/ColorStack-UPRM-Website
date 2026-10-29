import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'
import Container from '../components/Container'
import MembershipCard from '../components/MembershipCard'
import { membershipSteps } from '../config/membershipSteps'

export default function BecomeMember() {
  const { t } = useTranslation()
  return (
    <section className="flex flex-1 bg-forest text-chapter-white">
      <Container className="grid w-full items-start gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="w-full max-w-2xl space-y-6 sm:space-y-8">
          <p className="flex items-center gap-3 font-stackworks text-[0.65rem] font-semibold tracking-[0.18em] text-chapter-white/90 uppercase sm:text-xs">
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-accent" />
            {t('membership')}
          </p>

          <Heading
            level={1}
            className="max-w-[13ch] text-[clamp(2.5rem,8vw,4rem)] sm:text-[clamp(2.5rem,8vw,4rem)] leading-[0.9] font-extrabold tracking-[-0.045em] wrap-break-word text-chapter-white uppercase"
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
            {membershipSteps.map((step, i) => {
              const isLast = i === membershipSteps.length - 1
              return (
                <li
                  key={step.id}
                  className={`relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-5 ${isLast ? '' : 'pb-7'}`}
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute top-6 bottom-0 left-3 w-px bg-chapter-white/35"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="grid size-6 place-items-center rounded-full bg-accent text-xs font-bold text-chapter-dark"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 wrap-anywhere pt-0.5">
                    <h2 className="text-sm font-semibold tracking-wide text-chapter-white uppercase sm:text-base">
                      {t(step.title)}
                    </h2>
                    <p className="mt-1.5 text-sm text-chapter-white/90 sm:text-base">
                      {t(step.description)}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <MembershipCard />
      </Container>
    </section>
  )
}