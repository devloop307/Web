import { motion } from "framer-motion";
import { industrias } from "../data/modulosData";
import Navbar from "./Navbar";

// 🖼️ Importa imágenes locales
import fondoIndustria from "../assets/oficina3.jpg";
import clinicaImg from "../assets/clinica.jpg";
import tiendaImg from "../assets/tienda.jpg";
import consultoraImg from "../assets/consulta.jpg";
import restauranteImg from "../assets/restaurante.jpg";
import educacionImg from "../assets/educacion.jpg";
import inmobiliariaImg from "../assets/inmobiliaria.jpg";

// 🌀 Importa Swiper y estilos
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Mapea imágenes
const imagenesIndustria = {
  clinica: clinicaImg,
  tienda: tiendaImg,
  consultora: consultoraImg,
  restaurante: restauranteImg,
  educacion: educacionImg,
  inmobiliaria: inmobiliariaImg,
};

function PasoIndustria({ onSeleccion }) {
  return (
    <div
      className="min-h-screen flex flex-col text-white relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${fondoIndustria})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🧭 Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* 🩶 Capa de suavizado */}
      <div className="absolute inset-0 bg-neutral-900/50 backdrop-brightness-95"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 py-32 w-full max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selecciona tu industria
        </motion.h2>

        <motion.p
          className="text-lg mb-14 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Personaliza tu solución según el tipo de negocio que tienes.
        </motion.p>

        {/* 🧩 Carrusel infinito */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.1}
          loop={true} // ✅ bucle infinito
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {industrias.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.button
                onClick={() => onSeleccion(item)}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Imagen */}
                <img
                  src={imagenesIndustria[item.id]}
                  alt={item.nombre}
                  className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Capa translúcida */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500"></div>

                {/* Texto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-2xl font-semibold mb-2">{item.nombre}</h3>
                  <p className="text-sm text-gray-300 opacity-80 max-w-xs">
                    Explora cómo esta industria puede automatizar sus procesos.
                  </p>
                </div>
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PasoIndustria;
