import { contact, heroTech, highlights, profile } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 py-20 flex items-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Availability */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {profile.availability}
            </span>

            <span className="text-sm text-gray-500">
              📍 {profile.location}
            </span>
          </div>

          {/* Intro */}
          <p className="mb-3 text-lg font-medium text-blue-600">
            Hi, I'm
          </p>

          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-none tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {profile.name}
            </span>
          </h1>

          <h2 className="mt-4 text-[clamp(1.3rem,3vw,2rem)] font-semibold text-gray-700 dark:text-gray-300">
            {profile.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {profile.tagline}
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-500">
            <span>✓ 10+ Production Apps</span>
            <span>✓ 4000+ Users Served</span>
            <span>✓ React & Next.js Expert</span>
            <span>✓ Open To Opportunities</span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-gray-300 px-7 py-4 font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              Contact Me
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap gap-3">
            {heroTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-gray-400"></span>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-gray-400"></span>

            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden lg:flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

            {/* Profile Image */}
            <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-2 shadow-2xl dark:border-gray-800">
              <img
                src="/images/profile.jpg"
                alt={profile.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-10 top-12 rounded-2xl border border-white/20 bg-white/80 p-5 shadow-xl backdrop-blur-md dark:bg-gray-900/80">
              <h3 className="text-3xl font-bold">
                10+
              </h3>
              <p className="text-sm text-gray-500">
                Projects Delivered
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-8 bottom-20 rounded-2xl border border-white/20 bg-white/80 p-5 shadow-xl backdrop-blur-md dark:bg-gray-900/80">
              <h3 className="text-3xl font-bold">
                4000+
              </h3>
              <p className="text-sm text-gray-500">
                Active Users
              </p>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 rounded-2xl border border-white/20 bg-white/80 px-6 py-4 shadow-xl backdrop-blur-md dark:bg-gray-900/80">
              <p className="font-semibold">
                🚀 Building Scalable Products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 xl:block">
        <div className="flex items-center gap-10 rounded-2xl border border-white/10 bg-white/60 px-8 py-4 shadow-xl backdrop-blur-md dark:bg-gray-900/40">
          {highlights.map((item) => (
            <div key={item.label}>
              <h3 className="text-center text-2xl font-bold">
                {item.value}
              </h3>
              <p className="text-sm text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">
            Scroll Down
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-gray-400">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
