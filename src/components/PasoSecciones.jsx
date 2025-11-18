import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import fondoPrincipal from "../assets/oficina3.jpg";
import { modulos, preciosSecciones } from "../data/modulosData";

export default function PasoSecciones({ onContinuar, onAtras, onActualizarPrecio }) {
  // Seleccionar todos los módulos por defecto
  const [seccionesActivas, setSeccionesActivas] = useState(
    modulos.map((m) => m.id)
  );

  const [nombreEmpresa, setNombreEmpresa] = useState("");

  const toggleSeccion = (id) => {
    setSeccionesActivas((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  // Calcula precios cuando cambian módulos
  useEffect(() => {
    let inicial = 0;
    let mensual = 0;

    seccionesActivas.forEach((id) => {
      const precio = preciosSecciones[id];
      if (precio) {
        inicial += precio.inicial;
        mensual += precio.mensual;
      }
    });

    if (typeof onActualizarPrecio === "function") {
      onActualizarPrecio(inicial, mensual);
    }
  }, [seccionesActivas]);

  // condición para habilitar el botón
  const puedeContinuar = nombreEmpresa.trim() !== "" && seccionesActivas.length >= 2;

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6 relative"
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-10 border border-gray-200 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Selecciona los módulos de tu sistema
        </h2>

        {/* Nombre empresa */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de tu empresa
          </label>
          <input
            type="text"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
            placeholder="Ej: NeoBuilder Studio"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Lista de módulos */}
        <div className="space-y-4 mb-10">
          {modulos.map((mod) => (
            <label
              key={mod.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={seccionesActivas.includes(mod.id)}
                onChange={() => toggleSeccion(mod.id)}
                className="w-5 h-5 accent-blue-600"
              />

              <span className="text-gray-900 font-medium">
                {mod.nombre}
              </span>

              <span className="text-gray-500 text-xs ml-2">
                S/. {mod.inicial} inicial — S/. {mod.mensual}/mes
              </span>
            </label>
          ))}
        </div>

        {/* Botones */}
        <div className="flex justify-between items-start">
          <button
            onClick={onAtras}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold text-gray-700 transition"
          >
            ← Volver
          </button>

          <div className="flex flex-col items-end">
            <button
              onClick={() => {
                if (!puedeContinuar) return;
                // <-- Aquí enviamos LOS DOS valores a la función padre
                onContinuar(seccionesActivas, nombreEmpresa);
              }}
              disabled={!puedeContinuar}
              className={`px-6 py-3 rounded-lg font-semibold transition text-white
                ${!puedeContinuar ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              Continuar →
            </button>

            {/* MENSAJE DE VALIDACIÓN */}
            {!puedeContinuar && (
              <p className="text-red-500 text-sm mt-2 text-right">
                {nombreEmpresa.trim() === ""
                  ? "Ingresa el nombre de tu empresa."
                  : "Selecciona al menos 2 módulos."}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
