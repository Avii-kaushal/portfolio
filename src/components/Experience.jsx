import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../data/portfolio";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const getDisplayYear = (period) => {
  if (period.includes("Present")) return "NOW";
  if (period.includes(" - ")) {
    return period.split(" - ")[0]; // Show start year for ranges
  }
  return period; // Single year like "2021"
};

const Experience = () => {
  useEffect(() => {
    const careerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 50%",
        end: "bottom 30%",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    careerTimeline
      .fromTo(
        ".career-timeline",
        { maxHeight: "0%" },
        { maxHeight: "100%", duration: 1, ease: "none" },
        0
      )
      .fromTo(
        ".career-timeline",
        { opacity: 0 },
        { opacity: 1, duration: 0.2 },
        0
      )
      .fromTo(
        ".career-info-box",
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.5 },
        0
      );

    // Conditional animation mimicking the window.innerWidth check
    // Using GSAP's matchMedia is best practice, but maintaining your exact logic:
    if (window.innerWidth > 1024) {
      careerTimeline.fromTo(
        ".career-section",
        { y: 0 },
        { y: "20%", duration: 0.5, delay: 0.2 },
        0
      );
    } else {
      careerTimeline.fromTo(
        ".career-section",
        { y: 0 },
        { y: 0, duration: 0.5, delay: 0.2 },
        0
      );
    }

    return () => {
      // Cleanup timelines on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="career-section section-container relative mx-auto my-0 mb-[250px] flex flex-col items-center justify-center auto-rows-fr px-0 py-[120px] opacity-100 max-lg:mt-0 max-lg:mb-0 max-lg:py-[70px] max-lg:pt-[100px] max-md:items-start max-md:justify-start">
      <div className="career-container w-full max-md:w-[calc(100%-25px)]">
        <h2 className="mt-[50px] mb-[90px] text-center text-[70px] font-normal leading-[70px] text-transparent bg-gradient-to-t from-[#7f40ff] to-white bg-clip-text max-[1400px]:text-[50px] max-[1400px]:leading-[50px] max-lg:text-[48px] max-lg:leading-[48px] max-md:text-[42px] max-md:leading-[44px] max-sm:mt-0 max-sm:w-full max-sm:text-[45px] max-sm:leading-[45px]">
          My career <span className="font-sans font-light">&</span>
          <br /> experience
        </h2>

        <div className="career-info relative mx-auto my-0 flex flex-col max-sm:m-0">

          {/* Timeline Bar */}
          <div
            className="career-timeline absolute -top-[50px] left-1/2 w-[3px] h-full -translate-x-1/2 max-md:left-0"
            style={{
              backgroundImage: 'linear-gradient(to top, #aa42ff 20%, var(--accentColor, #7f40ff) 50%, transparent 95%)',
              maxHeight: '0%'
            }}
          >
            {/* Pulsing Dot */}
            <div
              className="career-dot absolute bottom-0 left-1/2 h-3.5 w-3.5 rounded-full bg-white animate-pulse-glow"
              style={{
                // Keeps a high-quality fallback shadow state before JS/CSS parses completely
                boxShadow: `
                  0 0 10px #ffffff,
                  0 0 25px #daadffff, 
                  0 0 50px #00d2ff, 
                  0 0 100px #0066ff, 
                  0 0 200px rgba(0, 210, 255, 0.6)
                `
              }}
            />
          </div>

          {/* Experience Cards Loop */}
          {experience.map((exp, index) => (
            <div key={index} className="career-info-box mb-[50px] flex justify-between max-md:mb-[70px] max-md:flex-col max-md:gap-[10px]">

              <div className="career-info-in flex w-[40%] justify-between gap-[50px] max-[1400px]:w-[45%] max-[1400px]:gap-[20px] max-md:w-full max-md:box-border max-md:pl-[10px] max-sm:gap-0 max-sm:pl-[5%]">
                <div className="career-role">
                  <h4 className="m-0 text-[33px] font-500 leading-[30px] tracking-[0.8px] max-[1400px]:w-[180px] max-[1400px]:text-[22px] max-[1400px]:leading-[24px] max-md:text-[20px]">
                    {exp.position}
                  </h4>
                  <h5 className="my-[10px] mx-0 text-[20px] font-400 capitalize tracking-[0.7px] text-[var(--accentColor,#7f40ff)] max-[1400px]:text-[17px]">
                    {exp.company}
                  </h5>
                </div>
                <h3 className="m-0 text-[48px] font-[500] leading-[45px] max-[1400px]:text-[40px] max-lg:text-[38px] max-md:text-[36px] max-sm:text-[33px]">
                  {getDisplayYear(exp.period)}
                </h3>
              </div>

              <p className="m-0 w-[40%] text-white text-[14px] leading-[20px] max-[1400px]:w-[45%] max-[1400px]:text-[14px] max-md:w-full max-md:box-border max-md:pl-[10px] max-sm:pl-[5%]">
                {exp.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;