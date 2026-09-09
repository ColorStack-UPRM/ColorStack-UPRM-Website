import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-dvh flex-col bg-chapter-white text-gray-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-white focus:p-4"
      >
        Skip to content
      </a>

      <Navbar key={location.key} />

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-7xl flex-1 px-4 py-12"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
