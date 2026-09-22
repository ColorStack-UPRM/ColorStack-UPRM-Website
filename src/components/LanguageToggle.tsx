import { useTranslation } from '../i18n/useTranslation'

export default function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation()
  return (
    <div
      role="group"
      aria-label={t('language')}
      className="relative isolate inline-grid shrink-0 grid-cols-2 overflow-hidden rounded-full bg-chapter-green/5 ring-1 ring-inset ring-chapter-green/20"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 rounded-full bg-chapter-green transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          language === 'en' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {(['es', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-label={t(option === 'es' ? 'spanish' : 'english')}
          aria-pressed={language === option}
          className={`relative z-10 inline-flex h-10 w-14 cursor-pointer items-center justify-center rounded-full text-xs font-semibold tracking-wide transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-chapter-dark motion-reduce:transition-none ${
            language === option
              ? 'text-chapter-white'
              : 'text-chapter-dark/60 hover:text-chapter-dark'
          }`}
        >
          {option === 'es' ? 'ESP' : 'EN'}
        </button>
      ))}
    </div>
  )
}
