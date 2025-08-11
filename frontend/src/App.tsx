// src/App.tsx

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import EventCarousel from "./components/eventCarousel";
import EditEventModal from "./components/editEventModal";
import Footer from "./components/footer";
import { type EventType } from "./types/events";
import GaleryCarousel from "./components/galerycarousel";
import WeekCalendar from "./components/weekCalendar";
import LoginModal from "./components/loginModal";
import { motion } from "framer-motion";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<EventType | undefined>(
    undefined
  );
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

  // Abrir modal para crear nuevo evento
  const handleAdd = () => {
    setCurrentEvent(undefined);
    setModalOpen(true);
  };

  // Abrir modal para editar un evento existente
  const handleEdit = (evt: EventType) => {
    setCurrentEvent(evt);
    setModalOpen(true);
  };

  // Eliminar evento
  const handleDelete = async (id?: string) => {
    if (!id) return;
    const token = localStorage.getItem("token");
    try {
      await fetch(`http://localhost:3001/event/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error("Error al eliminar evento:", err);
    }
  };

  // Guardar (crear o actualizar)
  const handleSave = async (evt: EventType) => {
    const token = localStorage.getItem("token");
    try {
      if (evt._id) {
        // Actualizar
        await fetch(`http://localhost:3001/api/event/${evt._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(evt),
        });
      } else {
        // Crear nuevo
        await fetch("http://localhost:3001/api/event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(evt),
        });
      }
      window.location.reload();
    } catch (err) {
      console.error("Error al guardar evento:", err);
    }
  };

  // Para la sección contacto
  const subject = encodeURIComponent("Reserva de espacio THE STUDIEZ");
  const body = encodeURIComponent(
    "Hola nuenos dias, me gustaría reservar su refugio el [DIA] de [HORARIO]..."
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=the.studiez.bcn@gmail.com&su=${subject}&body=${body}`;

  return (
    <>
      <Navbar />

      <div className="box-content p-4">
        {/* Inicio */}
        <section
          id="inicio"
          className="flex flex-col justify-center items-center w-full h-screen text-center"
        >
          <h1 className="text-6xl font-bold mb-4">THE STUDIEZ</h1>
          <p className="text-xl">
            Bienvenid@s a THE STUDIEZ, vuestro refugio creativo
          </p>
        </section>

        {/* Sobre Nosotros */}
        <motion.section
          id="nosotros"
          className="bg-white rounded-lg shadow-lg pb-4 scroll-mt-20 mx-4 md:mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            id="nosotros"
            className="text-3xl md:text-6xl p-4 text-center font-bold"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Sobre Nosotros</h2>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {/* Nuestro Espacio */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-2xl md:text-4xl pb-4">Nuestro Espacio</p>
              <div className="text-justify text-base md:text-lg leading-relaxed">
                <p>
                  Nuestra sala de 100m² es el lienzo en blanco perfecto para dar
                  vida a cualquier proyecto.
                </p>
                <p>
                  Paredes blancas, suelo de parquet, iluminación LED ajustable y
                  todo lo que necesitas para crear la atmósfera ideal.
                </p>
                <p>
                  ¿Necesitas material extra? Contamos con focos de grabación y
                  máquina de humo para llevar tus sesiones al siguiente nivel.
                </p>
                <p>
                  Bailar, grabar, ensayar, fotografiar... ¡las posibilidades son
                  infinitas, tú decides!
                </p>
              </div>
            </motion.div>

            {/* GaleryCarousel */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <GaleryCarousel />
            </motion.div>
          </div>

          {/* Nuestros Valores */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-4xl text-center">Nuestros Valores</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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
          </motion.div>
        </motion.section>

        {/* Eventos */}
        <section id="eventos" className="p-4 scroll-mt-20">
          <EventCarousel
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>

        {/* Disponibilidad Semanal */}
        <section id="Calendario" className="p-4 mx-4 md:mx-auto scroll-mt-20">
          <h2 className="text-4xl p-4 text-center font-bold">
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
          className="bg-white rounded-lg shadow-lg p-4 mx-4 md:mx-auto scroll-mt-20"
        >
          <h3 className="text-4xl p-4 text-center font-bold">Contacto</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-lg drop-shadow-lg p-4 w-1/2 text-center">
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
                className="w-5 h-5 text-pink-600"
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

      {/* Modal de edición/creación */}
      <EditEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        event={currentEvent}
        onSave={handleSave}
      />

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
