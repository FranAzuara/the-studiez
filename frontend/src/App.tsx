import EventCarousel from "./components/eventCarousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  const subject = encodeURIComponent("Evento");
  const body = encodeURIComponent("Hola, me gustaría organizar un evento...");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=the.studiez.bcn@gmail.com&su=${subject}&body=${body}`;

  return (
    <>
      <Navbar />
      <div className="box-content p-4">
        <div
          id="inicio"
          className="flex flex-col justify-center items-center w-full h-screen text-center"
        >
          <h1 className="p-4">THE STUDIEZ</h1>
          <p>Bienvenid@s a THE STUDIEZ, vuestro refugio creativo</p>
        </div>
        <div
          id="nosotros"
          className="bg-white rounded-lg shadow-lg pb-4 scroll-mt-20"
        >
          <h2 className="text-3xl md:text-6xl p-4 text-center">
            Sobre Nosotros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div>
              <p className="text-2xl md:text-4xl pb-4">Nuestro Espacio</p>
              <div className="text-justify text-base md:text-lg leading-relaxed">
                <p>
                  Nuestra sala de 100m² es el lienzo en blanco perfecto para dar
                  vida a cualquier proyecto.
                </p>
                <br />
                <p>
                  Paredes blancas, suelo de parquet, iluminación LED ajustable y
                  todo lo que necesitas para crear la atmósfera ideal.
                </p>
                <br />
                <p>
                  ¿Necesitas material extra? Contamos con focos de grabación y
                  máquina de humo para llevar tus sesiones al siguiente nivel.
                </p>
                <br />
                <p>
                  Bailar, grabar, ensayar, fotografiar... ¡las posibilidades son
                  infinitas, tú decides!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="Sala de baile"
                className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <p className="text-4xl">Nuestros Valores</p>
            <div className="flex grid grid-cols-3 gap-4 p-4">
              <div className="bg-white rounded-lg drop-shadow-lg p-4">
                <strong>Excelencia</strong>
                <p>
                  Buscamos la excelencia en cada clase, con profesores
                  certificados y metodologías probadas.
                </p>
              </div>
              <div className="bg-white rounded-lg drop-shadow-lg p-4">
                <strong>Comunidad</strong>
                <p>
                  Fomentamos un ambiente inclusivo donde todos se sienten
                  bienvenidos y valorados.
                </p>
              </div>
              <div className="bg-white rounded-lg drop-shadow-lg p-4">
                <strong>Crecimiento</strong>
                <p>
                  Acompañamos el crecimiento personal y artístico de cada
                  alumno.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="eventos" className="p-4 scroll-mt-20">
          <h2 className="text-6xl p-4">Eventos</h2>
        </div>
        <EventCarousel />
        <div id="contacto" className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-4xl p-4 scroll-mt-20">Contacto</h3>
          <div className="flex justify-center p-4">
            <div className="bg-white rounded-lg drop-shadow-lg p-4 w-1/2">
              <strong>¿Quieres organizar tu propio evento?</strong>
              <p>
                Nuestras instalaciones están disponibles para eventos privados,
                celebraciones y talleres especiales.
              </p>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">
                  Contáctanos
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 p-4">
            <span>📍</span>
            <a
              href="https://www.google.com/maps?q=Carrer+Pomar+11,+Sants,+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-blue-600 hover:underline"
            >
              Carrer Pomar, 11, Sants, Barcelona
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 p-2">
            <span>🕒</span>
            <p className="text-base">Lunes a Sábado: 10:00 – 21:00</p>
          </div>

          <div className="flex justify-center items-center gap-2 p-2">
            <svg
              className="w-5 h-5 text-pink-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <a
              href="https://www.instagram.com/the.studiez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-blue-600 hover:underline"
            >
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
