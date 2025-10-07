import { motion } from "framer-motion";
import fondoResumen from "../assets/oficina3.jpg";
import Navbar from "./Navbar";

function PasoResumen({
  industria,
  precioInicial,
  precioMensual,
  onReiniciar,
  onFinalizarCompra,
}) {
  const umbralAltoValor = 5000;
  const esAltoValor = precioInicial > umbralAltoValor;

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url(${fondoResumen})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🩶 Capa translúcida */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* 🔝 Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* 🧾 Contenedor principal */}
      <motion.div
        className="relative z-10 w-full max-w-xl mx-auto mt-24 mb-8 px-8 py-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-3 drop-shadow-lg text-white">
          Resumen de tu configuración
        </h2>
        <p className="text-gray-300 mb-5 text-sm md:text-base">
          Aquí tienes el detalle de tu solución digital personalizada.
        </p>

        {/* 📋 Tarjetas compactas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
          <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
            <h3 className="text-xs uppercase text-gray-300 mb-1 tracking-wide">
              Industria seleccionada
            </h3>
            <p className="text-base font-semibold text-white">
              {industria ? industria.nombre : "No especificada"}
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
            <h3 className="text-xs uppercase text-gray-300 mb-1 tracking-wide">
              Pago inicial estimado
            </h3>
            <p className="text-lg font-bold text-blue-400">
              ${precioInicial.toLocaleString()}
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
            <h3 className="text-xs uppercase text-gray-300 mb-1 tracking-wide">
              Mensualidad
            </h3>
            <p className="text-lg font-bold text-green-400">
              ${precioMensual.toLocaleString()}
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
            <h3 className="text-xs uppercase text-gray-300 mb-1 tracking-wide">
              Estado de evaluación
            </h3>
            <p
              className={`text-sm font-semibold ${
                esAltoValor ? "text-yellow-400" : "text-blue-300"
              }`}
            >
              {esAltoValor
                ? "Cualificación de Alto Valor"
                : "Proyecto Estándar"}
            </p>
          </div>
        </div>

        {/* 💬 Sección condicional */}
        {!esAltoValor ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-200 mb-5 text-sm md:text-base leading-relaxed">
              Tu configuración está lista. Puedes continuar con el proceso de
              compra y activar tu solución digital personalizada.
            </p>
            <button
              onClick={onFinalizarCompra}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              Finalizar compra
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-yellow-50/10 border border-yellow-300/20 rounded-2xl p-5 mt-3 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">
              Subproceso: Cualificación de Alto Valor
            </h3>
            <p className="text-gray-100 mb-3 text-sm leading-relaxed">
              Parece que estás construyendo una <strong>solución potente</strong>{" "}
              (más de ${umbralAltoValor}). Te ofrecemos dos opciones:
            </p>

            <ul className="text-gray-200 text-left list-disc list-inside text-sm mb-4 space-y-1.5">
              <li>
                <strong>Finalizar compra ahora:</strong> activa tu solución de
                forma inmediata.
              </li>
              <li>
                <strong>Agendar una llamada de 15 minutos</strong> con nuestro{" "}
                <em>Arquitecto Principal</em> para validar y ajustar la
                configuración antes de la implementación.
              </li>
            </ul>

            {/* 👇 Nueva sección de contacto profesional */}
            <div className="bg-black/30 border border-yellow-300/20 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-200">
                📞 <span className="font-semibold text-yellow-300">
                  +51 953 889 070
                </span>{" "}
                — <em>Arquitecto Principal</em>
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-3 mt-3">
              <button
                onClick={onFinalizarCompra}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105"
              >
                Finalizar compra
              </button>

              <button
                onClick={() => window.open('https://wa.me/51953889070', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition hover:scale-105"
              >
                Agendar llamada
              </button>
            </div>
          </motion.div>
        )}

        {/* 🔁 Reiniciar configuración */}
        <button
          onClick={onReiniciar}
          className="mt-8 text-gray-300 hover:text-white underline transition text-sm"
        >
          ← Reiniciar configuración
        </button>
      </motion.div>
    </div>
  );
}

export default PasoResumen;
