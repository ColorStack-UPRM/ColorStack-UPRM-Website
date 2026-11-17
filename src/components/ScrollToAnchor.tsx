import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation()

  useLayoutEffect(() => {
    const target = document.getElementById(hash.slice(1))
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'auto' })
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
      behavior: 'auto',
    })
  }, [pathname, hash, key])

  return null
}
