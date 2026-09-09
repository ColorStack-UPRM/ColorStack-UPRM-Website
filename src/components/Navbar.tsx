import { useRef, useState } from 'react'
import Brand from './Brand'
import ButtonLink from './ButtonLink'
import NavigationLinks from './NavigationLinks'
import { membershipLink, primaryNavigation } from '../config/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeNavigation = () => setOpen(false)

  return (
    <header
      className="border-b border-chapter-green/15 bg-chapter-white"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          closeNavigation()
          toggleRef.current?.focus()
        }
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <Brand onClick={closeNavigation} />
          <ButtonLink to={membershipLink.to} className="hidden lg:inline-flex">
            {membershipLink.label}
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-chapter-green/20 text-chapter-green hover:bg-chapter-green/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-green lg:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path
                d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${open ? 'block' : 'hidden'} border-t border-chapter-green/10 pb-4 lg:block lg:border-0 lg:pb-3`}
        >
          <NavigationLinks
            items={primaryNavigation}
            onNavigate={closeNavigation}
          />
          <ButtonLink
            to={membershipLink.to}
            onClick={closeNavigation}
            className="mt-4 w-full lg:hidden"
          >
            {membershipLink.label}
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
