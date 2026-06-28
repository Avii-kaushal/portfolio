import SectionHeading from "./SectionHeading";
import { summary } from "../data/portfolio";

function About() {
  return (
    <section className="reveal-section border-t border-gray-200/70 px-6 py-24 dark:border-gray-800/70">
      {/* <section
  className="min-h-[80vh] reveal-section border-t border-gray-200/70 px-6 py-20 dark:border-gray-800/70 "
  style={{
    backgroundImage: "url('/images/mine.png')",
  }}></section> */}
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/images/mine.png"
              alt="Profile"
              className="h-[700px] w-full max-w-lg object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            <SectionHeading title="About Me" />

            <p className="mt-8 text-xl leading-10 text-gray-300 lg:text-2xl">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;