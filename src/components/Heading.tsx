import type { HTMLAttributes, ReactNode } from 'react'

type HeadingLevel = 1 | 2 | 3

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel
  variant?: 'default' | 'section'
  children: ReactNode
}

const headingStyles: Record<HeadingLevel, string> = {
  1: 'text-3xl font-bold text-chapter-green sm:text-4xl',
  2: 'text-2xl font-bold text-chapter-dark sm:text-3xl',
  3: 'text-xl font-semibold text-chapter-dark sm:text-2xl',
}

export default function Heading({
  level,
  variant = 'default',
  className = '',
  children,
  ...props
}: HeadingProps) {
  const Element = `h${level}` as const

  return (
    <Element
      {...props}
      className={`${variant === 'section' ? 'text-4xl leading-[0.95] font-extrabold tracking-tight uppercase text-chapter-dark sm:text-5xl lg:text-6xl' : headingStyles[level]} ${className}`}
    >
      {children}
    </Element>
  )
}
