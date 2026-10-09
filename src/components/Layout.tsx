import { useTranslation } from '../i18n/useTranslation'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { membershipLink, primaryNavigation } from '../config/navigation'

export default function Layout() {
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname.replace(/\/+$/, '').toLowerCase() || '/'
  const titleKey =
    [...primaryNavigation, membershipLink].find(({ to }) => to === pathname)
      ?.label ?? 'notFound'

  return (
    <div className="flex min-h-dvh flex-col bg-chapter-white text-ink">
      <title>{`${t(titleKey)} | ColorStack UPRM`}</title>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-chapter-white focus:p-4"
      >
        {t('skipContent')}
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
