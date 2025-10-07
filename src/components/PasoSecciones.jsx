import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import fondoPrincipal from "../assets/oficina3.jpg";
import { preciosSecciones } from "../data/modulosData";
import VistaPrevia from "./VistaPrevia";

export default function PasoSecciones({ onContinuar, onAtras, onActualizarPrecio }) {
  const [seccionesActivas, setSeccionesActivas] = useState(["introduccion"]);
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [colorNavbar, setColorNavbar] = useState("#2563eb");
  const [colorTitulo, setColorTitulo] = useState("#ffffff");

  const [totalInicial, setTotalInicial] = useState(0);
  const [totalMensual, setTotalMensual] = useState(0);

  const opciones = [
    { id: "introduccion", nombre: "Sección de introducción", recomendado: true },
    { id: "productos", nombre: "Sección de productos" },
    { id: "servicios", nombre: "Sección de servicios", recomendado: true },
    { id: "reservas", nombre: "Sección de reserva de citas" },
    { id: "testimonios", nombre: "Sección de testimonios", recomendado: true },
    { id: "galeria", nombre: "Sección de galería" },
    { id: "equipo", nombre: "Sección del equipo" },
    { id: "contacto", nombre: "Sección de contacto" },
    { id: "acerca", nombre: "Sección Acerca de" },
    { id: "footer", nombre: "Sección de pie de página", recomendado: true },
  ];

  const toggleSeccion = (id) => {
    setSeccionesActivas((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    let inicial = 0;
    let mensual = 0;
    seccionesActivas.forEach((sec) => {
      const precio = preciosSecciones[sec];
      if (precio) {
        inicial += precio.inicial;
        mensual += precio.mensual;
      }
    });
    setTotalInicial(inicial);
    setTotalMensual(mensual);

    // 🔄 Actualiza los precios en App.jsx
    if (typeof onActualizarPrecio === "function") {
      onActualizarPrecio(inicial, mensual);
    }
  }, [seccionesActivas]);

  return (
    <div
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[65%_35%] relative"
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Vista previa */}
      <motion.div
        className="relative z-10 flex items-stretch justify-center p-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-full max-w-5xl h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
          <VistaPrevia
            secciones={seccionesActivas}
            nombreEmpresa={nombreEmpresa}
            colorNavbar={colorNavbar}
            colorTitulo={colorTitulo}
          />
        </div>
      </motion.div>

      {/* Panel derecho */}
      <motion.div
        className="relative z-10 bg-white w-full h-screen flex flex-col justify-between p-10 shadow-2xl overflow-y-auto"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Personaliza tu página
          </h2>

          {/* Colores */}
          <div className="mb-10">
            <p className="font-semibold text-gray-700 mb-4">Colores principales</p>
            <div className="flex items-center gap-8">
              {/* Navbar */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full border shadow cursor-pointer"
                  style={{ backgroundColor: colorNavbar }}
                />
                <input
                  type="color"
                  value={colorNavbar}
                  onChange={(e) => setColorNavbar(e.target.value)}
                  className="mt-2 cursor-pointer"
                />
                <span className="text-xs text-gray-600 mt-1">Navbar</span>
              </div>
              {/* Título */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full border shadow cursor-pointer"
                  style={{ backgroundColor: colorTitulo }}
                />
                <input
                  type="color"
                  value={colorTitulo}
                  onChange={(e) => setColorTitulo(e.target.value)}
                  className="mt-2 cursor-pointer"
                />
                <span className="text-xs text-gray-600 mt-1">Título</span>
              </div>
            </div>
          </div>

          {/* Nombre empresa */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre de la empresa
            </label>
            <input
              type="text"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
              placeholder="Ej: NeoBuilder Studio"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            {opciones.map((item) => (
              <label
                key={item.id}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={seccionesActivas.includes(item.id)}
                  onChange={() => toggleSeccion(item.id)}
                  className="w-5 h-5 text-blue-600 accent-blue-600"
                />
                <span className="text-gray-800 font-medium group-hover:text-blue-600 transition">
                  {item.nombre}
                </span>
                {item.recomendado && (
                  <span className="text-blue-500 text-xs font-semibold ml-2">
                    Recomendado
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-between mt-10 mb-28">
          <button
            onClick={onAtras}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold text-gray-700 transition"
          >
            ← Volver
          </button>
          <button
            onClick={() => onContinuar(seccionesActivas)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Continuar →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
