import { motion } from "framer-motion";
import fondoGracias from "../assets/oficina3.jpg";

export default function PantallaGracias({ onVolverInicio }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative text-white text-center"
      style={{
        backgroundImage: `url(${fondoGracias})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-1 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-green-400 drop-shadow-lg">
          ¡Tu pago se está procesando!
        </h1>
        <p className="text-gray-200 text-lg max-w-md leading-relaxed mb-8">
          Hemos abierto la pasarela de pago en una nueva pestaña.
          <br />
          Una vez completado el proceso, recibirás la confirmación en tu correo electrónico.
        </p>

        <button
          onClick={onVolverInicio}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold shadow-lg transition hover:scale-105"
        >
          Volver al inicio
        </button>
      </motion.div>
    </div>
  );
}
