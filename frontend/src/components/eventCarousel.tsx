import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { type EventType } from "../types/events";

const EventCarousel: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    axios
      .get<EventType[]>("http://localhost:3001/event") // poner la URL correcta de tu API
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error al cargar eventos:", err));
  }, []);

  return (
    <div className="px-6 py-4">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        speed={500}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event._id}>
            <div className="bg-white rounded-xl shadow-md p-4">
              <img
                alt={event.title}
                className="h-40 w-full object-cover rounded-lg"
              />
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
