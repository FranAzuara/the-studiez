import EventCarousel from "./components/eventCarousel";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="box-content p-4">
        <div className="justify-center items-center w-full p-70">
          <h1 className="p-4">THE STUDIEZ</h1>
          <p>Bienvenid@s a THE STUDIEZ, vuestro refugio creativo</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-6xl p-4">Sobre Nosotros</h2>
          <div className="flex grid grid-cols-2 gap-10 p-4">
            <div>
              <p className="flex justify-start text-4xl pb-4">
                Nuestro Espacio
              </p>
              <div className="text-justify">
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
                  maquina de humo para llevar tus sesiones al siguiente nivel.
                </p>
                <br />
                <p>
                  Bailar, grabar, ensayar, fotografiar... ¡las posibilidades son
                  infinitas, tu decides!
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="Sala de baile"
                className="w-full h-100 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <p className="text-4xl">Nuestros Valores</p>
            <div className="flex grid grid-cols-3 gap-4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <strong>Excelencia</strong>
                <p>
                  Buscamos la excelencia en cada clase, con profesores
                  certificados y metodologías probadas.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <strong>Comunidad</strong>
                <p>
                  Fomentamos un ambiente inclusivo donde todos se sienten
                  bienvenidos y valorados.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <strong>Crecimiento</strong>
                <p>
                  Acompañamos el crecimiento personal y artístico de cada
                  alumno.
                </p>
              </div>
            </div>
          </div>
        </div>
        <EventCarousel />
      </div>
    </>
  );
}

export default App;
