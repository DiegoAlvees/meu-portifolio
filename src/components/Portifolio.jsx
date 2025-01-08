export default function Portifolio() {
  const projects = [
    {
      title: "Cronos Collection: Catálogo de Relógios",
      description: "Neste projeto, desenvolvi o front-end de uma loja virtual de relógios, utilizando React Router DOM para implementar a navegação entre páginas.",
      image: "/portifolio/cronos-collection.png",
      liveLink: "https://cronos-collection.vercel.app/",
      codeLink: "https://github.com/DiegoAlvees/Cronos-collection",
    },
    {
      title: "Buscador de Localização com CEP",
      description: "Neste projeto, foi integrada a API do Google Maps. Ao inserir um CEP, o mapa exibe a localização correspondente, acompanhada de informações adicionais, como logradouro, bairro, cidade e outros dados relevantes.",
      image: "/portifolio/buscador-cep.png",
      liveLink: "https://buscador-cep-gold.vercel.app/",
      codeLink: "https://github.com/DiegoAlvees/buscador-cep",
    },
    {
      title: "Formulário de contato",
      description: "Projeto de um formulário de contato desenvolvido com React e TailwindCSS",
      image: "/portifolio/formulario.png",
      liveLink: "https://formulario-de-contato-one.vercel.app/",
      codeLink: "https://github.com/DiegoAlvees/Formul-rio-de-contato",
    },
    {
      title: "Cartão interativo",
      description:
        "Este projeto foi desenvolvido como um desafio proposto pelo site Frontend Mentor. A solução foi implementada utilizando React e CSS puro. O objetivo foi reproduzir fielmente o design fornecido no desafio",
      image: "/portifolio/cartao-interativo.png",
      liveLink: "https://interactive-card-snowy.vercel.app/",
      codeLink: "https://github.com/DiegoAlvees/interactive-card",
    },
    {
      title: "Portifolio",
      description: "Este projeto é meu portfólio pessoal desenvolvido como uma Single Page Application (SPA) utilizando React e TailwindCSS.",
      image: "/portifolio/portifolio.png",
      liveLink: "https://meu-portifolio-pink.vercel.app/",
      codeLink: "https://github.com/DiegoAlvees/meu-portifolio",
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
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="relative w-full h-">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
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
