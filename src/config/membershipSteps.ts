import type { TranslationKey } from '../i18n/es'

type MembershipStep = {
  id: string
  title: TranslationKey
  description: TranslationKey
}

export const membershipSteps = [
  {
    id: 'national',
    title: 'firstStepTitle',
    description: 'firstStepDescription',
  },
  {
    id: 'uprm',
    title: 'secondStepTitle',
    description: 'secondStepDescription',
  },
  {
    id: 'participate',
    title: 'thirdStepTitle',
    description: 'thirdStepDescription',
  },
] as const satisfies readonly MembershipStep[]
