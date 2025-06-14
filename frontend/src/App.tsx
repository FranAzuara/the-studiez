import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="box-content p-4">
        <div className="justify-center items-center w-full p-70">
          <h1>THE STUDIEZ</h1>
          <p>
            Descubre tu pasión por el baile. Clases profesionales para todos los
            niveles en un ambiente inspirador y lleno de energia.
          </p>
        </div>
        <div>
          <h2 className="text-6xl p-4">Sobre Nosotros</h2>
          <div className="flex grid grid-cols-2 gap-4 p-4">
            <div>
              <p className="flex justify-start text-4xl pb-4">Nuestra Misión</p>
              <p className="text-justify">
                En THE STUDIEZ, ofrecemos clases de baile para todos los
                niveles, desde principiantes hasta avanzados. Nuestro equipo de
                instructores profesionales está aquí para guiarte en tu viaje de
                baile.
              </p>
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
              <div>
                <strong>Excelencia</strong>
                <p>
                  Buscamos la excelencia en cada clase, con profesores
                  certificados y metodologías probadas.
                </p>
              </div>
              <div>
                <strong>Comunidad</strong>
                <p>
                  Fomentamos un ambiente inclusivo donde todos se sienten
                  bienvenidos y valorados.
                </p>
              </div>
              <div>
                <strong>Crecimiento</strong>
                <p>
                  Acompañamos el crecimiento personal y artístico de cada
                  estudiante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
