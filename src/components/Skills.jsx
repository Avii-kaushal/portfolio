import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolio'

function Skills() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 dark:border-gray-800 dark:bg-gray-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills"
          label="Skills"
          title="Technical expertise"
          description="Technologies and practices I use to ship reliable, performant applications end to end."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map(({ title, skills }) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-accent/25 hover:shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:hover:border-accent-dark/25"
            >
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                <span
                  className="size-2 rounded-full bg-accent transition group-hover:scale-125 dark:bg-accent-dark"
                  aria-hidden="true"
                />
                {title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 transition hover:border-accent/30 hover:bg-accent/5 hover:text-accent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-accent-dark/30 dark:hover:bg-accent-dark/8 dark:hover:text-accent-dark"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
