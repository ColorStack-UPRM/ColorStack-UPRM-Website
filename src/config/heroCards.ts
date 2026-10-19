import type { HeroCardItem } from '../components/HeroCards'

export const heroCards = [
  {
    title: 'heroCardGetTitle',
    tag: 'heroCardGetTag',
    description: 'heroCardGetDescription',
    highlighted: true,
  },
  {
    title: 'heroCardConnectTitle',
    tag: 'heroCardConnectTag',
    description: 'heroCardConnectDescription',
  },
  {
    title: 'heroCardBuildTitle',
    tag: 'heroCardBuildTag',
    description: 'heroCardBuildDescription',
  },
  {
    title: 'heroCardLearnTitle',
    tag: 'heroCardLearnTag',
    description: 'heroCardLearnDescription',
  },
] satisfies HeroCardItem[]
