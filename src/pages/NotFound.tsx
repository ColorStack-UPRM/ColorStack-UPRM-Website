import { Link } from 'react-router-dom'

import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <Heading level={1}>{t('notFound')}</Heading>
      <Link
        to="/"
        className="mt-6 inline-block text-chapter-green underline underline-offset-4"
      >
        {t('returnHome')}
      </Link>
    </>
  )
}
