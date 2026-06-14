import SectionHeading from './SectionHeading'
import { contact } from '../data/portfolio'

const links = [
  { label: 'Email', href: `mailto:${contact.email}`, value: contact.email },
  { label: 'GitHub', href: contact.github, value: 'View profile' },
  { label: 'LinkedIn', href: contact.linkedin, value: 'Connect' },
]

function Contact() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 dark:border-gray-800 dark:bg-gray-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          label="Contact"
          title="Let's work together"
          description="Open to full-time roles, freelance projects, and collaborations. Reach out and I'll get back to you."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map(({ label, href, value }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="group rounded-xl border border-gray-200 bg-white p-6 no-underline transition hover:border-accent hover:shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:hover:border-accent-dark"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">{label}</p>
              <p className="mt-2 font-semibold text-gray-900 transition group-hover:text-accent dark:text-gray-100 dark:group-hover:text-accent-dark">
                {value}
              </p>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-[0.9375rem] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:opacity-90 dark:bg-accent-dark"
        >
          Send an email
        </a>
      </div>
    </section>
  )
}

export default Contact
