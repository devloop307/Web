import { useState } from "react";
import { modulos } from "../data/modulosData";
import equipoFondo from "../assets/oficina2.jpg";

function PasoModulos({ onTerminar, onActualizarPrecio }) {
  const [modulosSeleccionados, setModulosSeleccionados] = useState([]);

  const handleSeleccionModulo = (modulo) => {
    let nuevosModulos;
    if (modulosSeleccionados.includes(modulo)) {
      nuevosModulos = modulosSeleccionados.filter((m) => m !== modulo);
    } else {
      nuevosModulos = [...modulosSeleccionados, modulo];
    }
    setModulosSeleccionados(nuevosModulos);

    // Calcular precios dinámicos
    const precioInicial = nuevosModulos.reduce(
      (acc, m) => acc + m.precioInicial,
      0
    );
    const precioMensual = nuevosModulos.reduce(
      (acc, m) => acc + m.precioMensual,
      0
    );
    onActualizarPrecio(precioInicial, precioMensual);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${equipoFondo})`,
      }}
    >
      {/* Capa de degradado morado translúcido */}
     <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 via-neutral-800/50 to-neutral-700/40"></div>

      <div className="relative z-10 text-center text-white max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Selecciona los módulos para tu solución
        </h2>
        <p className="text-lg mb-10 opacity-90">
          Añade funcionalidades a medida. El precio se actualiza automáticamente
          según tu selección.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modulos.map((modulo) => {
            const seleccionado = modulosSeleccionados.includes(modulo);
            return (
              <button
                key={modulo.id}
                onClick={() => handleSeleccionModulo(modulo)}
                className={`${
                  seleccionado
                    ? "bg-white/30 border-white/70"
                    : "bg-white/10 hover:bg-white/20 border-white/30"
                } border backdrop-blur-md text-white font-medium py-6 px-4 rounded-xl shadow-lg transition duration-300 hover:scale-105`}
              >
                <h3 className="text-xl font-semibold mb-2">{modulo.nombre}</h3>
                <p className="text-sm opacity-80 mb-1">
                  Inicial: ${modulo.precioInicial}
                </p>
                <p className="text-sm opacity-80">
                  Mensual: ${modulo.precioMensual}
                </p>
              </button>
            );
          })}
        </div>

        <button
          onClick={onTerminar}
          disabled={modulosSeleccionados.length === 0}
          className="mt-12 bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 transition disabled:opacity-50"
        >
          Continuar al resumen
        </button>
      </div>
    </div>
  );
}

export default PasoModulos;
