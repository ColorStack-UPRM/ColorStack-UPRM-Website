import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, type Language } from './LanguageContext'
import { es, type TranslationKey } from './es'
import { en } from './en'

const storageKey = 'colorstack-language'
const translations = { es, en }

function initialLanguage(): Language {
  try {
    return localStorage.getItem(storageKey) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const t = (key: TranslationKey) => translations[language][key]

  useEffect(() => {
    document.documentElement.lang = language
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translations[language].description)
    try {
      localStorage.setItem(storageKey, language)
    } catch {
      // Keep language switching available when browser storage is blocked.
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
