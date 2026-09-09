import { NavLink } from 'react-router-dom'

export type NavigationItem = {
  to: string
  label: string
}

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
  return (
    <ul
      className={`flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-6 ${className}`}
    >
      {items.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            end
            onClick={onNavigate}
            className={({ isActive }) =>
              `group relative flex min-h-12 items-center py-3 text-xs font-bold tracking-widest uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-green motion-reduce:transition-none ${isActive ? 'text-chapter-green' : 'text-gray-700 hover:text-chapter-green'}`
            }
          >
            {({ isActive }) => (
              <>
                {label}
                <span
                  aria-hidden="true"
                  className={`absolute right-0 bottom-1 left-0 h-0.5 origin-left bg-chapter-green transition-transform motion-reduce:transition-none ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
