import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

function Projects() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 dark:border-gray-800 dark:bg-gray-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects"
          label="Projects"
          title="Featured work"
          description="Production applications focused on performance, scalability, and measurable business impact."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, impact, stack, featured }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-accent-dark/40"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/80 to-accent/20 opacity-0 transition group-hover:opacity-100 dark:from-accent-dark/80 dark:to-accent-dark/20"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                {featured && (
                  <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-accent uppercase dark:bg-accent-dark/15 dark:text-accent-dark">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {description}
              </p>

              {impact && (
                <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-accent/8 px-2.5 py-1 text-xs font-semibold text-accent dark:bg-accent-dark/12 dark:text-accent-dark">
                  <span aria-hidden="true">↑</span>
                  {impact}
                </p>
              )}

              <ul className="mt-5 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
