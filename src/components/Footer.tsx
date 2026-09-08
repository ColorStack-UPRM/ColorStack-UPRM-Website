const socialLinks: { label: string; href: string }[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/colorstackuprm?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} ColorStack UPRM
        </p>

        {socialLinks.length > 0 && (
          <nav aria-label="Social media">
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-block py-2 text-chapter-green underline underline-offset-4"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  )
}
