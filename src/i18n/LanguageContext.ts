import { createContext } from 'react'
import type { TranslationKey } from './es'

export type Language = 'es' | 'en'

export const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
} | null>(null)
