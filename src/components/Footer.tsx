import { Link } from 'react-router-dom'
import { membershipLink, primaryNavigation } from '../config/navigation'
import FooterColumn from './FooterColumn'

const communityLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/colorstackuprm/' },
]

const linkClassName =
  'inline-block py-1 text-sm text-white/70 hover:text-white hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

export default function Footer() {
  return (
    <footer className="bg-chapter-dark text-chapter-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p
          aria-label="ColorStack UPRM"
          className="mb-12 text-[clamp(2rem,8.5vw,7rem)] leading-[0.95] font-extrabold tracking-tighter sm:mb-16"
        >
          <span className="text-chapter-green">COLOR</span>STACK
          <br />
          <span className="text-chapter-green">UPRM</span>
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <FooterColumn title="The Chapter">
            <p className="max-w-xs text-sm leading-7 text-white/70">
              ColorStack student chapter at the University of Puerto Rico,
              Mayagüez. Built and maintained by StackWorks.
            </p>
          </FooterColumn>

          <FooterColumn title="Navigation">
            <nav aria-label="Footer">
              <ul className="space-y-2">
                {[...primaryNavigation, membershipLink].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className={linkClassName}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>

          <FooterColumn title="Community">
            <ul className="space-y-2">
              {communityLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={linkClassName}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Companies">
            <ul className="space-y-2">
              <li>
                <Link to="/sponsors" className={linkClassName}>
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <a href="mailto:colorstack@uprm.edu" className={linkClassName}>
                  colorstack@uprm.edu
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-[10px] font-medium tracking-widest text-white/60 uppercase sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ColorStack UPRM</p>
          <p>Mayagüez, Puerto Rico</p>
          <p>Built by StackWorks</p>
        </div>
      </div>
    </footer>
  )
}
