import { useTranslation } from '../i18n/useTranslation'

export default function WhatWeDo() {
  const { t } = useTranslation()
  return (
    <h1 className="text-3xl font-bold text-chapter-green">{t('whatWeDo')}</h1>
  )
}
