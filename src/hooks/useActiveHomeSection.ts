import { useEffect, useState, type RefObject } from 'react'
import { useLocation } from 'react-router-dom'
import { homeSections } from '../config/navigation'

export default function useActiveHomeSection(
  headerRef: RefObject<HTMLElement | null>,
  paused: boolean,
) {
  const { pathname, key } = useLocation()
  const [activeSection, setActiveSection] = useState('/')

  useEffect(() => {
    if (pathname !== '/') return

    const sections = homeSections
      .filter(({ available }) => available)
      .flatMap(({ id }) => {
        const anchor = document.getElementById(id)
        return anchor
          ? [{ id, element: anchor.closest('section') ?? anchor }]
          : []
      })
    let frame: number | undefined

    const update = () => {
      frame = undefined
      // Opening the mobile menu must not move the selection. Resume on desktop.
      if (paused && window.matchMedia('(width < 64rem)').matches) return
      const header = headerRef.current
      const position = header && getComputedStyle(header).position
      const headerHeight =
        header && (position === 'sticky' || position === 'fixed')
          ? header.getBoundingClientRect().height
          : 0
      // Match the clearance used by ScrollToAnchor, including fractional pixels.
      const boundary = headerHeight + 25
      let next = '/'
      let closestTop = -Infinity

      for (const { id, element } of sections) {
        const { top } = element.getBoundingClientRect()
        if (top <= boundary && top >= closestTop) {
          next = `/#${id}`
          closestTop = top
        }
      }
      setActiveSection(next)
    }

    const scheduleUpdate = () => {
      if (frame === undefined) frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(scheduleUpdate)
    if (headerRef.current) observer.observe(headerRef.current)
    const main = document.getElementById('main-content')
    if (main) observer.observe(main)
    for (const { element } of sections) observer.observe(element)

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    scheduleUpdate()

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [pathname, key, headerRef, paused])

  return pathname === '/' ? activeSection : pathname
}
