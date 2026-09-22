import { Link } from 'react-router-dom'

import { useTranslation } from '../i18n/useTranslation'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <h1 className="text-3xl font-bold text-chapter-green">{t('notFound')}</h1>
      <Link
        to="/"
        className="mt-6 inline-block text-chapter-green underline underline-offset-4"
      >
        {t('returnHome')}
      </Link>
    </>
  )
}
