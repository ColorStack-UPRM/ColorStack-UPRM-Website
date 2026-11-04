import Container from '../components/Container'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { boardMembers } from '../config/board'
import { useTranslation } from '../i18n/useTranslation'
import BoardMemberCard from '../components/BoardMemberCard'

export default function Directiva() {
  const { t } = useTranslation()

  return (
    <div className="bg-surface">
      <section
        aria-labelledby="board-title"
        className="bg-chapter-dark text-chapter-white"
      >
        <Container className="grid gap-8 py-16 md:py-24 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 font-stackworks text-xs tracking-[0.12em] text-chapter-white/75 uppercase">
              <span
                aria-hidden="true"
                className="h-0.5 w-8 shrink-0 bg-accent"
              />
              {t('boardLabel')}
            </p>
            <Heading
              level={1}
              variant="section"
              id="board-title"
              className="mt-6 max-w-[13ch] text-[clamp(40px,5.5vw,76px)]! tracking-[-0.035em] text-chapter-white! wrap-anywhere"
            >
              {t('boardTitleLead')} <br />
              <span className="text-highlight">{t('boardTitleAccent')}</span>
            </Heading>
          </div>
          <p className="max-w-[55ch] text-base leading-[1.75] text-chapter-white/80 lg:text-lg">
            {t('boardIntro')}
          </p>
        </Container>
      </section>
      <Container
        as="section"
        aria-labelledby="board-team"
        className="pt-12 pb-16 md:pt-16 md:pb-24"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-6">
          <Heading
            level={2}
            id="board-team"
            className="font-extrabold tracking-tight uppercase"
          >
            {t('boardTeam')}
          </Heading>
          <p className="font-stackworks text-[11px] tracking-[0.12em] text-sage-700 uppercase">
            {boardMembers.length} {t('boardPeople')} · F26
          </p>
        </div>
        <ul className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8 min-[1200px]:grid-cols-4 min-[1200px]:gap-6">
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={member.id} member={member} index={index} />
          ))}
        </ul>
        <Button to="/#about" className="mt-10">
          {t('boardBack')}
        </Button>
      </Container>
    </div>
  )
}
