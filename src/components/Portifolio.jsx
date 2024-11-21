export default function Portifolio() {
    const projects = [
      {
        title: "Projeto 1",
        description: "Descrição breve sobre o projeto 1.",
        image: "/portifolio/cronos-collection.png",
        liveLink: "https://cronos-collection.vercel.app/",
        codeLink: "https://github.com/DiegoAlvees/Cronos-collection",
      },
      {
        title: "Projeto 2",
        description: "Descrição breve sobre o projeto 2.",
        image: "/portifolio/buscador-cep.png",
        liveLink: "https://buscador-cep-gold.vercel.app/",
        codeLink: "https://github.com/DiegoAlvees/buscador-cep",
      },
      {
        title: "Projeto 3",
        description: "Descrição breve sobre o projeto 3.",
        image: "/portifolio/cartao-interativo.png",
        liveLink: "https://interactive-card-snowy.vercel.app/",
        codeLink: "https://github.com/DiegoAlvees/interactive-card",
      },
      
    ];
  
    return (
      <section id="portifolio" className="bg-gray-900 py-16 px-8 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-teal-400">
          Meu Portfólio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-teal-400 mb-4">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  