import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1))
      if (!target) {
        window.scrollTo({ top: 0, behavior: 'instant' })
        return
      }

      if (!target.hasAttribute('tabindex')) target.tabIndex = -1
      target.focus({ preventScroll: true })

      const header = document.querySelector('header')
      let offset = 24

      if (header) {
        const { position } = getComputedStyle(header)
        if (position === 'sticky' || position === 'fixed') {
          offset += header.getBoundingClientRect().height
        }
      }

      window.scrollTo({
        top: window.scrollY + target.getBoundingClientRect().top - offset,
        behavior: 'instant',
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
