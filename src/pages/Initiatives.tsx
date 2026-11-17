import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Container from '../components/Container'
import NumberedRows from '../components/NumberedRows'
import { initiativeRows } from '../config/initiatives'
import { membershipLink } from '../config/navigation'

export default function Initiatives() {
  const { t } = useTranslation()
  return (
    <section aria-labelledby="initiatives" className="bg-surface py-16 md:py-24">
      <Container>
        <p className="mb-3 flex items-center gap-3 font-stackworks text-xs tracking-[0.15em] text-sage-700 uppercase">
          <span aria-hidden="true" className="h-0.5 w-8 shrink-0 bg-accent" />
          {t('initiatives')}
        </p>
        <Heading
          level={2}
          variant="section"
          id="initiatives"
          tabIndex={-1}
          className="max-w-[16ch] min-w-0 wrap-break-word"
        >
          {t('initiativesHeadline')}
        </Heading>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sage-800 lg:text-lg">
          {t('initiativesIntro')}
        </p>
        <NumberedRows items={initiativeRows} className="mt-12 lg:mt-16" />
        <div className="mt-8 text-chapter-dark">
          <Button variant="outline" to={membershipLink.to}>
            {t('initiativesParticipate')}
          </Button>
        </div>
      </Container>
    </section>
  )
}
