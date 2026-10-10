import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'

export default function Home() {
  const { t } = useTranslation()
  return <Heading level={1}>{t('home')}</Heading>
}
