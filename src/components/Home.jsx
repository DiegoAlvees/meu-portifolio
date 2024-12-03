import Link from "./Link";

export default function Home() {
  const links = [
    { text: "", target: "home" },
    { text: "Sobre mim", target: "sobre" },
    { text: "Skills", target: "skills" },
    { text: "Portifólio", target: "portifolio" },
    { text: "Contato", target: "contato" },
  ];

  return (
    <section id="home" className="h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <header className="flex-col-reverse md:flex-row fixed top-0 left-0 right-0 flex items-center justify-between bg-transparent text-white p-2 md:p-6 z-50 shadow-lg backdrop-blur-md">
        <div className="p-4">
          <a href="#home" title="Voltar ao início">
            <img
              className="w-48 sm:w-60 hover:opacity-80 transition-opacity"
              src="/diegologo.svg"
              alt="Logo Diego Alves"
            />
          </a>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end text-xs sm:text-sm md:text-lg gap-4 sm:gap-4">
          {links.map((link, index) => (
            <Link key={index} link={link} />
          ))}
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-4 pt-12 space-y-4 sm:p-8 sm:pt-28 md:pt-8">
        <div className="text-center space-y-4 sm:space-y-6 max-w-xs sm:max-w-3xl mx-auto px-4">
          <p className="text-teal-300 text-1xl sm:text-xl font-light animate__animated animate__fadeIn animate">
            Olá, meu nome é
          </p>
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-wide sm:tracking-wider animate__animated animate__fadeIn animate__delay-1s">
            Diego Alves<span className="text-teal-300">.</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl text-teal-100 font-semibold animate__animated animate__fadeIn animate__delay-2s">
            Desenvolvedor Front-End Júnior
          </h2>
          <p className="mt-4 text-1xl sm:text-lg text-teal-300 animate__animated animate__fadeIn animate__delay-2s">
            Meu objetivo é criar interfaces digitais que inspirem, conectem e
            proporcionem uma experiência única ao usuário.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-center text-teal-100 text-1xl sm:text-lg font-medium opacity-60">
            Role para baixo para saber mais
          </p>
          <div className="mt-2 sm:mt-4 text-center animate__animated animate__bounce animate__delay-3s">
            <span className="text-teal-300 text-4xl sm:text-4xl">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
