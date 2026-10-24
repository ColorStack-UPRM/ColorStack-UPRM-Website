import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { TranslationKey } from '../i18n/es'
import { useTranslation } from '../i18n/useTranslation'

export type HeroCardItem = {
  title: TranslationKey
  tag: TranslationKey
  description: TranslationKey
  highlighted?: boolean
}

type HeroCardsProps = {
  items: readonly HeroCardItem[]
  className?: string
}

export default function HeroCards({ items, className = '' }: HeroCardsProps) {
  const { t } = useTranslation()
  const [hasOpened, setHasOpened] = useState(false)

  return (
    <ul
      className={`hero-card-stack flex flex-col gap-3 ${hasOpened ? 'is-open' : ''} ${className}`}
      onPointerEnter={(event) => {
        if (!hasOpened && event.pointerType === 'mouse') {
          setHasOpened(true)
        }
      }}
    >
      {items.map(({ title, tag, description, highlighted }, index) => (
        <li
          key={title}
          style={
            {
              '--stack-offset': `${index * -9}rem`,
              zIndex: items.length - index,
            } as CSSProperties
          }
          className={`rounded-2xl border p-6 ${highlighted ? 'border-forest-deep bg-forest-deep' : 'border-chapter-dark bg-chapter-white'}`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2
              className={`text-2xl leading-none font-extrabold tracking-tight uppercase ${highlighted ? 'text-highlight' : 'text-chapter-dark'}`}
            >
              {t(title)}
            </h2>
            <span
              className={`shrink-0 font-stackworks text-[0.65rem] font-medium tracking-[0.18em] uppercase ${highlighted ? 'text-sage-200' : 'text-sage-700'}`}
            >
              {t(tag)}
            </span>
          </div>
          <p
            className={`mt-4 text-sm leading-relaxed ${highlighted ? 'text-sage-200' : 'text-sage-900'}`}
          >
            {t(description)}
          </p>
        </li>
      ))}
    </ul>
  )
}
