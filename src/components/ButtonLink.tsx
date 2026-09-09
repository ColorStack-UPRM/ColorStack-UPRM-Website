import { Link, type LinkProps } from 'react-router-dom'

export default function ButtonLink({ className = '', ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={`inline-flex min-h-11 items-center justify-center rounded-full bg-chapter-green px-6 py-3 text-center text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-chapter-green/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-green motion-reduce:transition-none ${className}`}
    />
  )
}
