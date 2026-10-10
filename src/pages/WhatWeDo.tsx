import { useTranslation } from '../i18n/useTranslation'
import Heading from '../components/Heading'

export default function WhatWeDo() {
  const { t } = useTranslation()
  return (
    <Heading level={1}>{t('whatWeDo')}</Heading>
  )
}
