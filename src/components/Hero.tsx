import type { ReactNode } from 'react'
import Container from './Container'

type HeroProps = { children: ReactNode }

// Children stay in normal flow so loading the decorative photo never moves content.
export default function Hero({ children }: HeroProps) {
  const sources = (format: string) =>
    [640, 960, 1600, 2400]
      .map(
        (width) =>
          `/images/hero/colorstack-uprm-team-${width}.${format} ${width}w`,
      )
      .join(', ')

  return (
    <section className="relative isolate overflow-hidden bg-chapter-dark text-chapter-white">
      <picture
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <source type="image/avif" srcSet={sources('avif')} sizes="100vw" />
        <img
          src="/images/hero/colorstack-uprm-team-1600.webp"
          srcSet={sources('webp')}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-chapter-dark/80"
      />
      <Container className="grid min-h-[55vh] items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16 lg:py-24">
        {children}
      </Container>
    </section>
  )
}
