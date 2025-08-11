import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { type EventType } from "../types/events";

interface Props {
  onAdd: () => void;
  onEdit: (evt: EventType) => void;
  onDelete: (id?: string) => void;
}

const EventCarousel: React.FC<Props> = ({ onAdd, onEdit, onDelete }) => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 1) Cargar eventos
    axios
      .get<EventType[]>("http://localhost:3001/api/event")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error al cargar eventos:", err));

    // 2) Detectar token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="py-4 w-full">
      <div className="grid grid-cols-3 items-center mb-4">
        {/* Columna izquierda vacía */}
        <div />

        {/* Columna central con título */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Eventos</h2>
        </div>

        {/* Columna derecha con botón añadir */}
        <div className="flex justify-end">
          {isLoggedIn && (
            <button
              onClick={onAdd}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            >
              <i className="fas fa-square-plus mr-2"></i>
              Añadir evento
            </button>
          )}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={20}
        loop
        speed={500}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event._id}>
            <div className="bg-white rounded-xl shadow-md p-4 relative border-1 border-black-300 rounded-lg shadow-lg">
              {/* Aquí puedes renderizar la imagen si tienes una url */}
              <div className="bg-green-500/20 p-4 rounded">
                <span className="text-green-600 text-sm font-semibold">
                  {event.date}
                </span>
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {event.start} • {event.end} • {event.location} •{" "}
                  {event.teacher} • {event.style}
                </p>
              </div>

              {isLoggedIn && (
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    onClick={() => onEdit(event)}
                    className="text-yellow-600 hover:text-yellow-800"
                    aria-label="Editar evento"
                  >
                    <i className="fas fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => onDelete(event._id)}
                    className="text-red-600 hover:text-red-800"
                    aria-label="Eliminar evento"
                  >
                    <i className="fas fa-trash-can"></i>
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
