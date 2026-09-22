import { useTranslation } from '../i18n/useTranslation'

export default function Home() {
  const { t } = useTranslation()
  return <h1 className="text-3xl font-bold text-chapter-green">{t('home')}</h1>
}
