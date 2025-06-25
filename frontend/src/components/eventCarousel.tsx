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
      .get<EventType[]>("http://localhost:3001/event")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error al cargar eventos:", err));

    // 2) Detectar token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="py-4 w-full">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-4xl font-bold">Eventos</h2>
        {isLoggedIn && (
          <button
            onClick={onAdd}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            + Añadir evento
          </button>
        )}
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
            <div className="bg-white rounded-xl shadow-md p-4 relative">
              {/* Aquí puedes renderizar la imagen si tienes una url */}
              <div className="mt-2">
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
                    ✎
                  </button>
                  <button
                    onClick={() => onDelete(event._id)}
                    className="text-red-600 hover:text-red-800"
                    aria-label="Eliminar evento"
                  >
                    🗑
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
