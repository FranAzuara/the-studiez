// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import "./styles.css";
import "../styles.css/prueba.css";

// import required modules
import { Parallax, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { FiCamera, FiMusic, FiZap } from "react-icons/fi";

interface Slide {
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "El Refugio",
    subtitle: "Nuestra Sala",
    text: "·100 m² de amplitud\n\n·Paredes blancas y suelo de parquet\n\n·Aire acondicionado\n\n·Equipo de sonido profesional con cuatro altavoces y un subwoofer\n\n·Dos baños, uno de ellos adaptado para personas con movilidad reducida",
    image: "/Superficie.jpeg",
  },
  {
    title: "El Refugio",
    subtitle: "Material",
    text: "A tu disposición también tienes focos de grabación, iluminación LED y una máquina de humo que añade magia a tus sesiones.",
    image: "/LED.jpeg",
  },
  {
    title: "El Refugio",
    subtitle: "Almacenamiento",
    text: "Contamos con una práctica zona de almacenaje junto a la entrada, pensada para que puedas dejar tus pertenencias de forma segura y ordenada durante tu clase. Así, podrás moverte con total comodidad y concentrarte solo en disfrutar de la actividad.",
    image: "Almacenamiento.jpeg",
  },
];

const Prueba: React.FC = () => {
  return (
    <>
      <Swiper
        speed={600}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, EffectFade]}
        id="nosotros"
        className="mySwiper1 mt-4 border-2 border-gray-300 rounded-lg drop-shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="parallax-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-23%"
            />
            <div className="content">
              <div className="title" data-swiper-parallax="-300">
                {slide.title}
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                {slide.subtitle}
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className="py-8 px-6 bg-white/90 rounded-lg shadow-lg p-4 mx-0 m-4 md:mx-auto scroll-mt-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <h3 className="text-4xl font-bold text-center mb-6">Qué nos define</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: FiCamera,
              title: "Calidad profesional",
              text: "Un espacio cuidado al detalle, equipado con materiales y tecnología de alto nivel.",
              video: "/video-studiez-2.mp4",
            },
            {
              icon: FiMusic,
              title: "Ambiente acogedor",
              text: "Un lugar pensado para que cualquiera que cruce la puerta se sienta inspirado.",
              video: "/video-studiez-3.mp4",
            },
            {
              icon: FiZap,
              title: "Impulso creativo",
              text: "Facilitamos que cada proyecto crezca, adaptándonos a tus necesidades.",
              video: "/video-studiez-1.mp4",
            },
          ].map(({ icon: Icon, title, text, video }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all"
            >
              <Icon className="w-12 h-12 text-green-600 mb-4" />
              <strong className="text-lg">{title}</strong>
              <p className="text-gray-600 mt-2">{text}</p>
              <video
                className="w-auto h-150 rounded-lg md:h-auto mt-4"
                src={video}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-lg md:text-xl text-gray-700 font-light">
          Nuestro Refugio – Un espacio para moverte, crear y brillar.
        </p>
      </motion.div>
    </>
  );
};

export default Prueba;
