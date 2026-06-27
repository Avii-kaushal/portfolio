import SectionHeading from './SectionHeading'
import { highlights, summary } from '../data/portfolio'

const strengths = [
  'Designing polished, high-conversion interfaces with thoughtful UX.',
  'Building performant frontend architecture that scales cleanly.',
  'Bridging product, design, and engineering without losing speed.',
]

function About() {
  return (
    <section className="reveal-section border-t border-gray-200/70 px-6 py-20 dark:border-gray-800/70">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          label="About Me"
          title="Crafting thoughtful products with modern engineering"
          description={summary}
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-24px_rgba(59,130,246,0.3)] dark:border-gray-800/70 dark:bg-gray-900/70">
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              I blend product thinking, modern UI craftsmanship, and full-stack execution to turn ambitious ideas into reliable digital experiences.
            </p>
            <div className="mt-8 grid gap-3">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200/70 bg-gray-50/80 px-4 py-3 dark:border-gray-800/70 dark:bg-gray-950/40">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-sky-600/10 via-white/70 to-fuchsia-500/10 p-8 shadow-[0_20px_70px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-24px_rgba(192,132,252,0.3)] dark:border-gray-800/70 dark:from-sky-500/10 dark:via-gray-900/70 dark:to-fuchsia-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
              Impact at a glance
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm dark:border-gray-800/70 dark:bg-gray-950/60">
                  <p className="text-3xl font-black text-gray-900 dark:text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
