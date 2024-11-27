export default function Contato() {
    return (
      <section
        id="contato"
        className="bg-gray-900 text-white py-16 px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-teal-400 text-center mb-8">
            Contato
          </h1>
          <p className="text-gray-300 text-center mb-12">
            Sinta-se à vontade para me enviar uma mensagem ou conectar-se através
            das redes abaixo:
          </p>
          <div className="flex flex-col items-center space-y-6">
            {/* Links para Redes Sociais */}
            <div className="flex space-x-8">
              <a
                href="https://www.linkedin.com/in/diego-alves-b2610830a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-500 transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.5-.71-1.5-1.5s.537-1.5 1.5-1.5c.966 0 1.5.71 1.5 1.5s-.537 1.5-1.5 1.5zm13.5 11.268h-3v-5.359c0-1.268-.025-2.9-1.769-2.9-1.768 0-2.039 1.382-2.039 2.807v5.452h-3v-10h2.881v1.368h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.598 2.001 3.598 4.599v5.592z" />
                </svg>
              </a>
              <a
                href="https://github.com/DiegoAlvees"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-500 transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.005-.404 1.022.006 2.048.138 3.006.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.653.241 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.37.815 1.096.815 2.21 0 1.596-.015 2.884-.015 3.274 0 .32.217.694.825.576 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://wa.me/19996213636"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-500 transition"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M12.002 0c-6.627 0-12 5.373-12 12 0 2.118.553 4.191 1.602 6.027l-1.595 5.82 5.968-1.564c1.754.943 3.748 1.449 5.923 1.449 6.627 0 12-5.373 12-12s-5.373-12-12-12zm5.995 17.173l-.273.757c-.276.764-.795 1.229-1.558 1.39-.73.154-1.791.272-3.217-.27-2.479-.945-4.827-3.294-5.773-5.773-.542-1.426-.425-2.487-.271-3.217.16-.764.625-1.283 1.389-1.558l.757-.273c.354-.128.754-.067 1.042.164l1.516 1.211c.285.229.4.601.276.943l-.51 1.454c-.11.314-.005.66.265.83l2.416 1.507c.28.175.637.154.903-.055l1.342-1.052c.253-.198.612-.232.912-.085l1.335.635c.412.194.674.63.613 1.082z" />
                </svg>
              </a>
              <a
                href="mailto:ediegoalves@gmail.com"
                className="text-teal-400 hover:text-teal-500 transition"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M12 12.713l11.985-7.713h-23.97l11.985 7.713zm12-9.713v14.83l-7.391-6.834 7.391-7.996zm-24 0l7.39 7.996-7.39 6.835v-14.831zm1.066 16.743l7.769-7.183 3.165 2.037 3.166-2.037 7.768 7.182h-21.868z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  