export default function Skills() {
    const skills = [
      { name: "HTML", img: "/skills/html.png" },
      { name: "CSS", img: "/skills/css.png" },
      { name: "JavaScript", img: "/skills/js.png" },
      { name: "TypeScript", img: "/skills/typescript.png" },
      { name: "Sass", img: "/skills/sass.svg" },
      { name: "Bootstrap", img: "/skills/bootstrap.png" },
      { name: "TailwindCSS", img: "/skills/tailwindcss.png" },
      { name: "React", img: "/skills/react.png" },
      { name: "Next.js", img: "/skills/nextjs.png" },
      { name: "Git", img: "/skills/git.png" },
      { name: "GitHub", img: "/skills/github.png" },
    ];
  
    return (
      <section id="skills" className="bg-gray-900 py-16 px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-teal-300 text-center mb-12">
            Minhas Skills
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-lg font-semibold text-teal-200">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  