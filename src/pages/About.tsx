import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'

export default function About() {
  const { t } = useTranslation()
  return <Heading level={1}>{t('about')}</Heading>
}
