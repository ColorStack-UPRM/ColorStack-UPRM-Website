import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1 className="text-3xl font-bold text-chapter-green">
        404 — Page not found
      </h1>
      <Link
        to="/"
        className="mt-6 inline-block text-chapter-green underline underline-offset-4"
      >
        Return home
      </Link>
    </>
  )
}
