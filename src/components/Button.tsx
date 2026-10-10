import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'coral' | 'outline' | 'header'

type SharedProps = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type InternalLinkProps = SharedProps &
  Omit<LinkProps, 'className' | 'children'> & { to: string; href?: never }
type ExternalLinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string
    to?: never
  }
type ActionButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: never
    href?: never
  }

export type ButtonProps =
  | InternalLinkProps
  | ExternalLinkProps
  | ActionButtonProps

const variantStyles: Record<ButtonVariant, string> = {
  coral:
    'bg-accent text-chapter-dark hover:bg-accent/90 focus-visible:outline-current',
  outline:
    'border border-current bg-transparent text-current hover:bg-current/10 focus-visible:outline-current',
  header:
    'bg-chapter-green text-chapter-white hover:bg-chapter-green/90 focus-visible:outline-chapter-green',
}

const baseStyles =
  'inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-center text-xs font-bold tracking-wider uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none'

export default function Button(props: ButtonProps) {
  const { variant = 'coral', className = '', children } = props
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if ('to' in props && props.to !== undefined) {
    const { to, ...linkProps } = props
    return (
      <Link {...linkProps} to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props
    return (
      <a {...anchorProps} href={href} className={classes}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props
  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  )
}
