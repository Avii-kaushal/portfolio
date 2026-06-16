import SectionHeading from './SectionHeading'
import { highlights, summary } from '../data/portfolio'

function About() {
  return (
    <section className="border-t border-gray-200 px-6 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          label="About"
          title="Building products that scale"
          description={summary}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ value, label }) => (
            <div
              key={label}
              className="group rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-accent-dark/30"
            >
              <p className="text-3xl font-bold tracking-tight text-accent transition group-hover:scale-105 dark:text-accent-dark">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
