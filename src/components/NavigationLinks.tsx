import type { NavigationItem } from '../config/navigation'
import { useTranslation } from '../i18n/useTranslation'
import { Link, useLocation } from 'react-router-dom'

type NavigationLinksProps = {
  items: readonly NavigationItem[]
  onNavigate?: () => void
  className?: string
}

export default function NavigationLinks({
  items,
  onNavigate,
  className = '',
}: NavigationLinksProps) {
  const { t } = useTranslation()
  const { pathname, hash } = useLocation()

  return (
    <ul
      className={`flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-6 ${className}`}
    >
      {items.map(({ to, label }) => {
        const isActive = `${pathname}${hash}` === to

        return (
          <li key={to}>
            <Link
              to={to}
              aria-current={
                isActive ? (to.includes('#') ? 'location' : 'page') : undefined
              }
              onClick={onNavigate}
              className={`group relative flex min-h-12 items-center py-3 text-xs font-bold tracking-widest uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-green motion-reduce:transition-none ${isActive ? 'text-chapter-green' : 'text-ink-muted hover:text-chapter-green'}`}
            >
              {t(label)}
              <span
                aria-hidden="true"
                className={`absolute right-0 bottom-1 left-0 h-0.5 origin-left bg-chapter-green transition-transform motion-reduce:transition-none ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
