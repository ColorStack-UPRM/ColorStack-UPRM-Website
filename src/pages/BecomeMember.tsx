import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'

export default function BecomeMember() {
  const { t } = useTranslation()
  return (
    <Heading level={1}>{t('membership')}</Heading>
  )
}
