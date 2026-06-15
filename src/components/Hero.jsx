import { contact } from '../data/portfolio'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden px-6 py-16 md:px-6 md:py-20"
    >
      <div
        className="pointer-events-none absolute -top-[20%] -right-[10%] size-[min(600px,80vw)] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_25%,transparent)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent-dark)_25%,transparent)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl text-left">
        <p className="mb-3 text-lg font-medium text-accent dark:text-accent-dark">
          Hi, I'm
        </p>
        <h1 className="m-0 text-[clamp(2.75rem,8vw,4.5rem)] leading-[1.05] font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Avishek Kumar
        </h1>
        <p className="mt-3 text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-gray-600 dark:text-gray-400">
          Full-Stack Software Developer
        </p>
        <p className="mt-6 max-w-[40rem] text-[1.0625rem] leading-relaxed text-gray-600 dark:text-gray-400">
          3+ years building scalable web apps with React, Next.js, Node.js, and
          TypeScript — shipped 10+ production products for 4,000+ users.
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-[0.9375rem] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:opacity-90 sm:w-auto dark:bg-accent-dark"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg border-[1.5px] border-gray-200 bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-gray-900 no-underline transition hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:w-auto dark:border-gray-700 dark:text-gray-100 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 no-underline transition hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <span className="size-1 rounded-full bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 no-underline transition hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="size-1 rounded-full bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium text-gray-600 no-underline transition hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
