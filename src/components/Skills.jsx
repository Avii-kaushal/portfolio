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
              className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
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
