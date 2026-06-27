import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between p-8">
        <a href="#home" className="flex items-center gap-2.5 text-gray-900 no-underline dark:text-gray-100">
          <span className="text-lg font-semibold tracking-tight">Avishek Kumar</span> </a>

        <a href="mailto:kavishek1999@gmail.com" className="flex items-center gap-2.5 text-gray-900 no-underline dark:text-gray-100">
          <span className="text-lg font-semibold tracking-tight pl-28">kavishek1999@gmail.com</span> </a>

        <nav
          className={`fixed inset-x-0 top-[3.75rem] flex flex-col gap-6 border-b border-gray-200 bg-white p-6 transition-all duration-300 md:static md:inset-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 dark:border-gray-800 dark:bg-gray-950 md:dark:bg-transparent ${menuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'
            }`}
        >
          <ul className="flex list-none flex-col gap-4 p-0 md:flex-row md:items-center md:gap-24">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-md font-bold text-white hover:text-gray-900 md:py-0 md:text-[0.9375rem] dark:text-gray-100 dark:hover:text-gray-100"
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
          className="flex size-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-full rounded bg-gray-900 dark:bg-gray-100" />
          <span className="block h-0.5 w-full rounded bg-gray-900 dark:bg-gray-100" />
          <span className="block h-0.5 w-full rounded bg-gray-900 dark:bg-gray-100" />
        </button>
      </div>
    </header>
  )
}

export default Header
