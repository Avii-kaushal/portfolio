import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-950/70 sm:px-6">
        <a href="#home" className="flex items-center gap-3 text-gray-900 no-underline transition hover:opacity-90 dark:text-gray-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 text-sm font-semibold text-white shadow-lg">
            AK
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-gray-700 uppercase dark:text-gray-200">Avishek</span>
        </a>

        <a href="mailto:kavishek1999@gmail.com" className="hidden items-center rounded-full border border-sky-200/80 bg-sky-50/80 px-4 py-2 text-sm font-medium text-sky-700 transition hover:border-fuchsia-300 hover:text-fuchsia-700 sm:inline-flex dark:border-sky-900/60 dark:bg-sky-950/30 dark:text-sky-300">
          kavishek1999@gmail.com
        </a>

        <nav
          className={`fixed inset-x-4 top-[4.8rem] flex flex-col gap-6 rounded-3xl border border-white/70 bg-white/95 p-6 shadow-2xl transition-all duration-300 md:static md:inset-auto md:flex-row md:items-center md:gap-8 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:border-gray-800/70 dark:bg-gray-950/95 md:dark:bg-transparent ${menuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'
            }`}
        >
          <ul className="flex list-none flex-col gap-2 p-0 md:flex-row md:items-center md:gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-sky-50 hover:text-sky-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-sky-200/80 bg-white/80 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-100" />
          <span className="block h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-100" />
          <span className="block h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-100" />
        </button>
      </div>
    </header>
  )
}

export default Header
