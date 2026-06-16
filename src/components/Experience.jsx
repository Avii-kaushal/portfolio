import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

function Experience() {
  return (
    <section className="border-t border-gray-200 px-6 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          label="Experience"
          title="Where I've made impact"
          description="Roles where I shipped production software, optimized performance, and delivered measurable business outcomes."
        />

        <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[1.125rem] before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-accent/20 before:to-transparent md:before:left-6 dark:before:from-accent-dark/60 dark:before:via-accent-dark/20">
          {experience.map(({ role, company, period, summary, achievements, tech }) => (
            <article
              key={`${role}-${company}`}
              className="animate-fade-up relative pl-12 md:pl-16"
            >
              <span
                className="absolute top-2 left-3 size-3 rounded-full border-2 border-white bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] md:left-[1.375rem] dark:border-gray-950 dark:bg-accent-dark dark:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent-dark)_20%,transparent)]"
                aria-hidden="true"
              />

              <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-accent/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-accent-dark/30">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {role}
                    </h3>
                    <p className="mt-0.5 font-medium text-accent dark:text-accent-dark">
                      {company}
                    </p>
                  </div>
                  <time className="shrink-0 text-sm font-medium text-gray-500 dark:text-gray-500">
                    {period}
                  </time>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {achievements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
