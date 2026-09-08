import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/become-a-member', label: 'Become a Member' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/events', label: 'Events' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-bold text-chapter-green"
        >
          <img
            src="/1.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded object-contain"
          />
          ColorStack UPRM
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded border border-gray-300 text-2xl md:hidden"
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:flex-wrap">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded px-3 py-3 ${
                      isActive
                        ? 'bg-chapter-green font-semibold text-white underline underline-offset-4'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
