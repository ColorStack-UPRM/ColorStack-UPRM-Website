import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'section'
}

export default function Container({
  as: Element = 'div',
  className = '',
  ...props
}: ContainerProps) {
  return (
    <Element
      {...props}
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    />
  )
}
