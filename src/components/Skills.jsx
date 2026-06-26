import React from "react";

const Skills = () => {
  const techStack = [
    // Row 1 - 12 items (largest)
    [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", url: "https://redux.js.org" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
      { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", url: "https://mui.com" },
      // { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
    ],
    // Row 2 - 10 items
    [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", url: "https://djangoproject.com" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://tensorflow.org" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org" },
      // { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
      // // { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", url: "https://opencv.org" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    ],
    // Row 3 - 8 items
    [
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com" },
      // { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
      // { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com" },
    ],
    // Row 4 - 6 items
    [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
      // { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com" },
      // { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
    ],
    // Row 5 - 4 items
    [
      // { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org" },
      // { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
    ],
    // Row 6 - 2 items (tip of pyramid)
    // [
    //   { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co" },
    //   { name: "MS Office", icon: "https://img.icons8.com/color/48/microsoft-office-2019.png", url: "https://www.microsoft.com/microsoft-365" },
    // ],
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#080510]/70" />

        {/* Purple Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[750px] w-[750px] rounded-full bg-[#8c52ff]/20 blur-[180px]" />
        </div>

        {/* Top Fade */}
        <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-[#0b080c] to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#0b080c] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1700px] px-8">
        <h2 className="mb-18 text-center font-bold text-4xl uppercase tracking-wide text-transparent bg-gradient-to-b from-white to-[#8c52ff] bg-clip-text md:text-4xl lg:text-7xl">
          TECH STACK
        </h2>

        <div className="flex flex-col items-center gap-5">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
              {row.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-[80px] w-[80px] px-1 py-6 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-[#8c52ff] hover:bg-[#8c52ff]/10 hover:shadow-[0_0_35px_rgba(194,164,255,0.35)]"
                >
                  {/* FIXED: Changed from <Icon /> element to standard <img> tag */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="mb-3 h-[38px] w-[38px] object-contain opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                  />

                  <span className="text-[11px] text-gray-300 transition-colors group-hover:text-white">
                    {tech.name}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;