import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkImage from "./WorkImage";
import { projects } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let translateX = 0;

    const setTranslateX = () => {
      const boxes = document.getElementsByClassName("work-box");

      if (!boxes.length) return;

      const containerLeft = document
        .querySelector(".work-container")
        .getBoundingClientRect().left;

      const rect = boxes[0].getBoundingClientRect();

      const parentWidth =
        boxes[0].parentElement.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

      translateX =
        rect.width * boxes.length -
        (containerLeft + parentWidth) +
        padding;
    };

    setTranslateX();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    tl.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <section
      id="work"
      className="reveal-section work-section h-auto overflow-hidden px-6 py-20 md:h-screen md:px-8 lg:px-10"
    >
      <div className="work-container mx-auto flex h-full flex-col px-5 lg:px-10">

        <h2 className="mt-14 text-4xl font-semibold tracking-tight text-gray-900 md:mt-20 md:text-5xl lg:mt-24 lg:text-7xl dark:text-white">
          My <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Work</span>
        </h2>

        <div
          className="
            work-flex
            relative
            flex
            flex-col
            md:flex-row
            h-auto
            md:h-full
            md:-ml-8
            lg:-ml-20
            md:pr-10
            lg:pr-28
            before:absolute
            before:left-1/2
            before:top-0
            before:h-px
            before:w-[5000vw]
            before:-translate-x-1/2
            before:bg-zinc-700
            after:absolute
            after:left-1/2
            after:bottom-0
            after:h-px
            after:w-[5000vw]
            after:-translate-x-1/2
            after:bg-zinc-700
          "
        >
          {projects.slice(0, 5).map((project, index) => (
            <div
              key={project.id}
              className="
                work-box
                flex
                w-full
                md:w-[350px]
                lg:w-[450px]
                xl:w-[600px]
                flex-shrink-0
                flex-col
                even:md:flex-col-reverse
                gap-6
                lg:gap-12
                border-b
                md:border-b-0
                md:border-r
                border-gray-200/80
                bg-white/70
                p-5
                shadow-[0_24px_65px_-25px_rgba(15,23,42,0.25)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_32px_80px_-24px_rgba(59,130,246,0.28)]
                md:p-8
                lg:p-12
                xl:p-20
                dark:border-gray-800/70 dark:bg-gray-900/70
              "
            >
              <div>
                <div className="flex justify-between mb-5">
                  <h3 className="text-3xl lg:text-5xl font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </h3>

                  <div className="text-right">
                    <h4 className="text-lg lg:text-2xl font-medium">
                      {project.title}
                    </h4>

                    <p className="text-gray-400 text-sm">
                      {project.category}
                    </p>
                  </div>
                </div>

                <h4 className="text-lg lg:text-xl font-medium mb-2">
                  Tools and Features
                </h4>

                <p className="leading-7 text-gray-500 dark:text-gray-400">
                  {project.technologies}
                </p>
              </div>

              <div className="flex justify-center">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          ))}

          <div
            className="
              work-box
              flex
              w-full
              md:w-[350px]
              lg:w-[450px]
              xl:w-[600px]
              flex-shrink-0
              items-center
              justify-center
              p-8
              border-none
            "
          >
            <div className="text-center flex flex-col items-center gap-4">
              <h3 className="text-3xl font-medium">
                Want to see more?
              </h3>

              <p className="text-gray-400 max-w-xs">
                Explore all of my projects and creations
              </p>

              <Link
                to="/myworks"
                data-cursor="disable"
                className="
                  mt-2
                  rounded-full
                  bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500
                  px-8
                  py-4
                  text-white
                  font-medium
                  transition
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;