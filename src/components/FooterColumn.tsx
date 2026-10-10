import type { ReactNode } from 'react'
import Heading from './Heading'

type FooterColumnProps = {
  title: string
  children: ReactNode
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <section>
      <Heading
        level={2}
        className="mb-5 text-xs font-semibold tracking-widest text-chapter-white/70 uppercase sm:text-xs"
      >
        {title}
      </Heading>
      {children}
    </section>
  )
}
