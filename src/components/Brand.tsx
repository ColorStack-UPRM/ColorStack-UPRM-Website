import { Link } from 'react-router-dom'

type BrandProps = {
  onClick?: () => void
  className?: string
}

export default function Brand({ onClick, className = '' }: BrandProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="ColorStack UPRM home"
      className={`inline-flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chapter-green ${className}`}
    >
      <img
        src="/colorstack-uprm-logo-green-background.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 rounded-sm object-contain sm:h-12 sm:w-12"
      />
      <span className="flex flex-col gap-0.5">
        <span className="text-lg leading-none font-extrabold tracking-tight text-chapter-green sm:text-2xl">
          COLORSTACK
        </span>
        <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-600">
          UPRM CHAPTER
        </span>
      </span>
    </Link>
  )
}
