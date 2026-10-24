import type { TranslationKey } from '../i18n/es'
import { useTranslation } from '../i18n/useTranslation'

export type NumberedRowItem = {
  id: string
  title: TranslationKey
  description: TranslationKey
  icon: string
}

type NumberedRowsProps = {
  items: readonly NumberedRowItem[]
  className?: string
}

export default function NumberedRows({
  items,
  className = '',
}: NumberedRowsProps) {
  const { t } = useTranslation()

  return (
    <ol className={`flex list-none flex-col gap-4 p-0 ${className}`}>
      {items.map((item, index) => (
        <li
          key={item.id}
          className="
            grid grid-cols-[auto_minmax(0,1fr)_auto]
            items-center gap-x-4 gap-y-3
            rounded-3xl border border-chapter-dark
            bg-chapter-white p-5
            lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,2fr)_auto]
            lg:gap-x-5 lg:px-10 lg:py-8
          "
        >
          <span
            aria-hidden="true"
            className="
             col-start-1 row-start-1
             font-stackworks text-xs
             tracking-widest text-chapter-dark
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3
            className="
              col-start-2 row-start-1 min-w-0
              wrap-anywhere text-lg leading-tight font-bold
              tracking-tight uppercase text-chapter-dark
              lg:text-2xl
            "
          >
            {t(item.title)}
          </h3>

          <p
            className="
              col-span-3 col-start-1 row-start-2 min-w-0
              wrap-anywhere text-base leading-relaxed text-sage-900
              lg:col-span-1 lg:col-start-3 lg:row-start-1
              lg:text-lg
            "
          >
            {t(item.description)}
          </p>

          <span
            aria-hidden="true"
            className="
              col-start-3 row-start-1
              flex size-8 items-center justify-center
              rounded-full border border-chapter-dark
              text-sm leading-none text-chapter-dark
              lg:col-start-4
            "
          >
            {item.icon}
          </span>
        </li>
      ))}
    </ol>
  )
}
