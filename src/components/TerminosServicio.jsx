import { motion } from "framer-motion";
import fondoLegal from "../assets/oficina.jpg";

export default function TerminosServicio({ onVolver }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url(${fondoLegal})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mt-24 mb-16 p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg text-center">
          Términos de Servicio
        </h2>
        <p className="text-gray-200 text-sm mb-6 text-center">
          Última actualización: Octubre 2025
        </p>

        <div className="space-y-5 text-gray-100 text-sm leading-relaxed">
          <p>
            Al crear una cuenta y utilizar nuestra plataforma, aceptas los
            siguientes términos y condiciones. Estos regulan la relación entre
            el cliente y la empresa proveedora del servicio digital.
          </p>

          <h3 className="text-lg font-semibold text-blue-400 mt-4">
            1. Aceptación del Servicio
          </h3>
          <p>
            El uso de la plataforma implica la aceptación completa de estos
            términos. Si no estás de acuerdo con alguno de ellos, debes abstenerte
            de utilizar nuestros servicios.
          </p>

          <h3 className="text-lg font-semibold text-blue-400 mt-4">
            2. Responsabilidad del Cliente
          </h3>
          <p>
            El cliente es responsable de la veracidad de los datos ingresados,
            del uso correcto del sistema y del cumplimiento de los pagos
            asociados a los servicios contratados.
          </p>

          <h3 className="text-lg font-semibold text-blue-400 mt-4">
            3. Propiedad Intelectual
          </h3>
          <p>
            Todo el contenido, diseño, código y documentación de la plataforma
            son propiedad de la empresa desarrolladora y no pueden ser
            reproducidos sin autorización.
          </p>

          <h3 className="text-lg font-semibold text-blue-400 mt-4">
            4. Privacidad y Protección de Datos
          </h3>
          <p>
            Nos comprometemos a proteger la privacidad de tus datos personales.
            Los datos recolectados serán utilizados únicamente para la prestación
            del servicio, conforme a la legislación vigente en el Perú (Ley N°29733).
          </p>

          <h3 className="text-lg font-semibold text-blue-400 mt-4">
            5. Modificaciones
          </h3>
          <p>
            La empresa podrá actualizar estos términos cuando lo considere
            necesario. Los cambios serán publicados y notificados oportunamente.
          </p>

          <p className="mt-6 italic text-gray-300">
            Al continuar, reconoces haber leído y aceptado todos los términos y
            condiciones aquí descritos.
          </p>
        </div>

        {/* Botón para volver */}
        <div className="text-center mt-10">
          <button
            onClick={onVolver}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105"
          >
            Aceptar y Volver
          </button>
        </div>
      </motion.div>
    </div>
  );
}
