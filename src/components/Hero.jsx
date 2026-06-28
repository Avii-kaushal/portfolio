import { contact, heroTech, highlights, profile } from "../data/portfolio";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#08050b] text-white bg-img-/images/mine.jpeg">

      {/* Background */}
      <div className="absolute inset-0">
        {/* Noise / Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0812] via-[#08050b] to-black" />
        {/* Left Glow */}
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/30 blur-[130px]" />

        {/* Right Glow */}
        <div className="absolute -right-24 bottom-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-[150px]" />

        
      </div>

      <div className="relative mx-auto flex min-h-screen items-center justify-between px-12">
        {/* LEFT */}
        <div className="text-left absolute top-70 left-20">
          <p className="mb-4 text-3xl font-light text-violet-300">
            Hello! I'm
          </p>

          <h1 className="text-6xl font-semibold tracking-wide uppercase">
            {profile.name}
          </h1>
        </div>

        {/* RIGHT */}
        <div className="text-left absolute top-100 right-20 ">
          <p className="mb-2 text-4xl font-light text-violet-300">
            An
          </p>

          <h2 className="mb-2 text-5xl font-bold uppercase text-violet-400">
            SOFTWARE ENGINEER
          </h2>

          <h3 className="text-5xl font-bold uppercase text-white">
            FULL-STACK DEVELOPER
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
