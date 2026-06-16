import { contact, heroTech, highlights, profile } from '../data/portfolio'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden px-6 py-16 md:px-6 md:py-20"
    >
      <div
        className="pointer-events-none absolute -top-[20%] -right-[10%] size-[min(600px,80vw)] animate-pulse-slow rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_25%,transparent)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent-dark)_25%,transparent)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[30%] -left-[15%] size-[min(400px,60vw)] animate-pulse-slow rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_12%,transparent)_0%,transparent_70%)] [animation-delay:2s] dark:bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent-dark)_12%,transparent)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-accent)_4%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-accent)_4%,transparent)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl text-left">
        <div className="animate-fade-up mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1.5 text-sm font-medium text-accent dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 dark:bg-accent-dark" />
              <span className="relative inline-flex size-2 rounded-full bg-accent dark:bg-accent-dark" />
            </span>
            {profile.availability}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-500">{profile.location}</span>
        </div>

        <p className="animate-fade-up animation-delay-100 mb-3 text-lg font-medium text-accent dark:text-accent-dark">
          Hi, I'm
        </p>
        <h1 className="animate-fade-up animation-delay-200 m-0 text-[clamp(2.75rem,8vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
          <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-accent-dark">
            {profile.name}
          </span>
        </h1>
        <p className="animate-fade-up animation-delay-300 mt-3 text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-gray-600 dark:text-gray-400">
          {profile.title}
        </p>
        <p className="animate-fade-up animation-delay-400 mt-6 max-w-[40rem] text-[1.0625rem] leading-relaxed text-gray-600 dark:text-gray-400">
          {profile.tagline} Shipped{' '}
          <span className="font-semibold text-gray-900 dark:text-gray-100">10+ production apps</span>{' '}
          for{' '}
          <span className="font-semibold text-gray-900 dark:text-gray-100">4,000+ users</span> with
          React, Next.js, Node.js, and TypeScript.
        </p>

        <ul className="animate-fade-up animation-delay-500 mt-6 flex flex-wrap gap-2">
          {heroTech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm font-medium text-gray-700 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="animate-fade-up animation-delay-600 mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-[0.9375rem] font-medium text-white no-underline shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:opacity-90 sm:w-auto dark:bg-accent-dark dark:shadow-accent-dark/20"
          >
            View Projects
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg border-[1.5px] border-gray-200 bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-gray-900 no-underline transition hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:w-auto dark:border-gray-700 dark:text-gray-100 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            Contact Me
          </a>
        </div>

        <dl className="animate-fade-up animation-delay-700 mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map(({ value, label }) => (
            <div key={label}>
              <dt className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {value}
              </dt>
              <dd className="mt-0.5 text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-500">
                {label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="animate-fade-up animation-delay-800 mt-10 flex flex-wrap items-center gap-3">
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
