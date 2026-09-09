import type { ReactNode } from 'react'

type FooterColumnProps = {
  title: string
  children: ReactNode
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <section>
      <h2 className="mb-5 text-xs font-semibold tracking-widest text-white/70 uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}
