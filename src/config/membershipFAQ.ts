import type { TranslationKey } from '../i18n/es'

type FaqItem = {
  id: string
  question: TranslationKey
  answer: TranslationKey
}

export const membershipFaq = [
  { id: 'major', question: 'faqMajorQuestion', answer: 'faqMajorAnswer' },
  { id: 'cost', question: 'faqCostQuestion', answer: 'faqCostAnswer' },
  {
    id: 'national',
    question: 'faqNationalQuestion',
    answer: 'faqNationalAnswer',
  },
  { id: 'time', question: 'faqTimeQuestion', answer: 'faqTimeAnswer' },
  { id: 'alumni', question: 'faqAlumniQuestion', answer: 'faqAlumniAnswer' },
] as const satisfies readonly FaqItem[]