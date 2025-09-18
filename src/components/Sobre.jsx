export default function Sobre() {
    return (
      <section id="sobre" className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-5xl font-extrabold text-teal-300">Sobre Mim</h2>
            <p className="text-lg leading-relaxed">
              Prazer, sou{" "}
              <span className="font-bold text-teal-400">Diego Alves de Souza</span>
              , um
              <span className="font-semibold text-teal-400"> desenvolvedor Front-End</span> com paixão por tecnologia e design. {" "}
              Busco constantemente aplicar meus conhecimentos em soluções que valorizem a experiência do usuário.
              
            </p>
            <p className="text-lg leading-relaxed">
              Tenho domínio de tecnologias como{" "}
              <span className="text-teal-400">React</span>, <span className="text-teal-400">JavaScript</span>, e{" "}
              <span className="text-teal-400">TailwindCSS</span>, entre outras. Sou motivado por desafios que impulsionam meu crescimento profissional e agregam valor à equipe.
            </p>
            <p className="text-lg leading-relaxed">
              Confira meus{" "}
              <a
                href="#portifolio"
                className="text-teal-400 underline hover:text-teal-300 transition-colors"
              >
                projetos
              </a>{" "}
              ou entre em contato para conversarmos sobre como posso contribuir para sua equipe.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-3 bg-teal-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-teal-300 transition-all"
            >
              Entre em Contato
            </a>
          </div>
  
          <div className="w-full md:w-1/2 flex justify-center pb-8">
            <img
              className="w-72  rounded-full border-2 border-teal-400 shadow-lg transform transition-transform hover:scale-105"
              src="/minha-foto.png"
              alt="Minha Foto"
            />
          </div>
        </div>
      </section>
    );
  }
  