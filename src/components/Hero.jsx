import { contact, heroTech, highlights, profile } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[-4%] h-72 w-72 rounded-full bg-sky-500/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-6%] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(192,132,252,0.12)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 shadow-sm backdrop-blur transition duration-300 hover:scale-[1.02] dark:text-emerald-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            {profile.availability}
          </div>

          <p className="mb-3 text-lg font-semibold tracking-[0.22em] text-blue-600 uppercase dark:text-sky-400">
            Hi, I&apos;m
          </p>

          <h1 className="text-[clamp(3rem,7vw,5.6rem)] font-black leading-[0.95] tracking-tight text-gray-950 dark:text-white">
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {profile.name}
            </span>
          </h1>

          <h2 className="mt-4 text-[clamp(1.2rem,2.3vw,1.8rem)] font-semibold text-gray-700 dark:text-gray-300">
            {profile.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            <span className="rounded-full border border-gray-200/80 bg-white/70 px-4 py-2 backdrop-blur dark:border-gray-800/70 dark:bg-gray-900/60">
              ✓ 10+ production apps
            </span>
            <span className="rounded-full border border-gray-200/80 bg-white/70 px-4 py-2 backdrop-blur dark:border-gray-800/70 dark:bg-gray-900/60">
              ✓ 4,000+ users served
            </span>
            <span className="rounded-full border border-gray-200/80 bg-white/70 px-4 py-2 backdrop-blur dark:border-gray-800/70 dark:bg-gray-900/60">
              ✓ React & Next.js focused
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 px-7 py-4 font-semibold text-white shadow-[0_16px_40px_-12px_rgba(59,130,246,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(147,51,234,0.4)]"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-gray-300/80 bg-white/70 px-7 py-4 font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-600 dark:border-gray-700/70 dark:bg-gray-900/60 dark:text-gray-200"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/60 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
              GitHub
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
              LinkedIn
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
            <a href={`mailto:${contact.email}`} className="transition hover:text-blue-600">
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[430px] justify-center lg:justify-end">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600/30 via-fuchsia-500/20 to-cyan-500/30 blur-3xl" />
          <div className="animate-float relative w-full rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-gray-800/70 dark:bg-gray-900/70">
            <div className="overflow-hidden rounded-[1.5rem] border border-gray-200/70 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 p-3 dark:border-gray-700/70">
              <img
                src="/images/profile-avatar.svg"
                alt={profile.name}
                className="h-full w-full rounded-[1.2rem] object-cover"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="animate-float-delay rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-cyan-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 dark:border-sky-950/50 dark:from-sky-950/20 dark:to-cyan-950/20">
                <p className="text-3xl font-black text-gray-900 dark:text-white">3+</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Years building products</p>
              </div>
              <div className="rounded-2xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 to-purple-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 dark:border-fuchsia-950/50 dark:from-fuchsia-950/20 dark:to-purple-950/20">
                <p className="text-3xl font-black text-gray-900 dark:text-white">40%</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Typical perf uplift</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-4 rounded-[2rem] border border-white/70 bg-white/70 px-5 py-5 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.28)] backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-900/70">
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={`min-w-[140px] flex-1 rounded-2xl px-4 py-4 text-center ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-600/10 to-cyan-500/10' : 'bg-gradient-to-br from-fuchsia-600/10 to-purple-500/10'}`}
          >
            <p className="text-2xl font-black text-gray-900 dark:text-white">{item.value}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
