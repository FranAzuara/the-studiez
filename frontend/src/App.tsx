// src/App.tsx

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WeekCalendar from "./components/weekCalendar";
import LoginModal from "./components/loginModal";
import { motion } from "framer-motion";
import Prueba from "./components/prueba";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  // Para la sección contacto
  // Detecta si es móvil
  const isMobile = () => {
    if (typeof navigator === "undefined") return false; // SSR safe
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const subject = encodeURIComponent("Reserva de espacio THE STUDIEZ");
  const body = encodeURIComponent(
    "Hola buenos días, me gustaría reservar su refugio el [DIA] de [HORA COMIENZO] a [HORA FINAL]..."
  );

  const desktopUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=the.studiez.bcn@gmail.com&su=${subject}&body=${body}`;
  const mobileUrl = `mailto:the.studiez.bcn@gmail.com?subject=${subject}&body=${body}`;

  const gmailUrl = isMobile() ? mobileUrl : desktopUrl;

  return (
    <>
      <Navbar />

      <div className="box-content p-2 max-w-screen overflow-x-hidden">
        {/* Inicio */}
        <section id="inicio" className="relative w-full overflow-hidden">
          {/* Grid de videos */}
          <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full">
            {/* Video 1 */}
            <div className="w-full h-180 lg:h-200">
              <video
                className="w-full h-full object-cover object-bottom"
                src="/video-studiez-1.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>

            {/* Video 2 */}
            <div className="w-full h-180 lg:h-200">
              <video
                className="w-full h-full object-cover object-bottom"
                src="/video-studiez-2.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>

            {/* Video 3 */}
            <div className="w-full h-180 lg:h-200 md:col-span-2 md:w-2/3 md:mx-auto lg:col-span-1 lg:w-full lg:mx-0">
              <video
                className="w-full h-full object-cover object-bottom"
                src="/video-studiez-3.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>

          {/* Contenido arriba a la derecha, separado del Navbar */}
          <div className="absolute top-12 right-10 text-right z-10">
            <h1 className="text-6xl font-bold mb-4">
              <img
                src="/h1studiez.png"
                alt="THE STUDIEZ"
                className="h-28 object-contain max-w-full"
              />
            </h1>
          </div>
        </section>

        <Prueba />

        {/* Disponibilidad Semanal */}
        <section
          id="disponibilidad"
          className="p-4 mx-4 md:mx-auto scroll-mt-20"
        >
          <h2 className="text-4xl text-white bg-black/70 w-fit mx-auto p-4 text-center rounded-lg font-bold">
            Disponibilidad Semanal
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <WeekCalendar isLoggedIn={isLoggedIn} />
          </motion.div>
        </section>

        {/* Contacto */}
        <section
          id="contacto"
          className="bg-white/90 rounded-lg shadow-lg p-4 mx-0 md:mx-auto scroll-mt-20"
        >
          <h3 className="text-4xl p-4 text-center font-bold">
            Reserva tu momento en la pista
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-lg drop-shadow-lg p-4 w-full md:w-2/3 text-center">
              <strong>
                ¿Buscas el lugar perfecto para dar tus clases de baile, pilates,
                yoga o preparar un evento?
              </strong>
              <p className="mt-2">
                Nuestra sala está lista para recibirte con todo lo que
                necesitas: amplitud, luz y la energía perfecta para moverte.
              </p>
              <p>Elige la fecha, reserva tu hora y empieza a hacerla tuya. </p>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 shadow-md"
                >
                  Contáctanos
                </motion.button>
              </a>
            </div>
          </div>
          <div className="flex justify-around items-center mt-4 max-w-4xl mx-auto w-full px-4 gap-3">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <a
                href="https://www.google.com/maps?q=Carrer+Pomar+11,+Sants,+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Carrer Pomar, 11, Sants, Barcelona
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <p>Lunes a Domingo: 8:00h – 22:00h</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-7 h-7 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5Zm0 1.5a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5Zm5.25-.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z" />
              </svg>
              <a
                href="https://www.instagram.com/the.studiez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Síguenos en Instagram
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setModalOpen(true)}
        onLogout={handleLogout}
      />
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default App;
