import SectionHeading from './SectionHeading'
import { highlights, summary } from '../data/portfolio'

function About() {
  return (
    <section className="border-t border-gray-200 px-6 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          label="About Me"
          // title="Building products that scale"
          description={summary}
        />
      </div>
    </section>
  )
}

export default About
