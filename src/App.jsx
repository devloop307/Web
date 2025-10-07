import { useState } from "react";
import { motion } from "framer-motion";
import PasoIndustria from "./components/PasoIndustria";
import PasoModulos from "./components/PasoModulos";
import PasoResumen from "./components/PasoResumen";
import PriceDisplay from "./components/PriceDisplay";
import BlogSection from "./components/BlogSection";
import heroFondo from "./assets/oficina.jpg";
import Footer from "./components/Footer";
import CasosExito from "./components/CasosExito";
import Navbar from "./components/Navbar";
import PasoSecciones from "./components/PasoSecciones";
import PasoCuenta from "./components/PasoCuenta";
import TerminosServicio from "./components/TerminosServicio";
import PantallaGracias from "./components/PantallaGracias";

function App() {
  const [paso, setPaso] = useState(0);
  const [industriaSeleccionada, setIndustriaSeleccionada] = useState(null);
  const [precioInicial, setPrecioInicial] = useState(0);
  const [precioMensual, setPrecioMensual] = useState(0);
  const [seccionesSeleccionadas, setSeccionesSeleccionadas] = useState([]);

  const handleSeleccionIndustria = (industria) => {
    setIndustriaSeleccionada(industria);
    setPaso(2);
  };

  const handleActualizarPrecio = (inicial, mensual) => {
    setPrecioInicial(inicial);
    setPrecioMensual(mensual);
  };

  const handleReiniciar = () => {
    setPaso(0);
    setPrecioInicial(0);
    setPrecioMensual(0);
    setIndustriaSeleccionada(null);
  };

  // 🎨 VISTA PRINCIPAL (Landing + Blog + Footer)
  if (paso === 0) {
    return (
      <div
        className="min-h-screen flex flex-col bg-cover bg-center relative text-white"
        style={{
          backgroundImage: `url(${heroFondo})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* 🔳 Capa translúcida */}
        <div className="absolute inset-0 bg-neutral-900/50 backdrop-brightness-95"></div>

        {/* 🔝 Navbar */}
        <Navbar />

        {/* 🌟 Hero principal */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 mt-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl leading-tight">
              Construye tu solución digital a tu medida
            </h2>
            <p className="text-base md:text-lg mb-12 opacity-90 leading-relaxed">
              Elige tu industria, personaliza módulos y obtén una cotización
              instantánea. Sin necesidad de hablar con un vendedor.
            </p>

            <motion.button
              onClick={() => setPaso(1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Comenzar ahora
            </motion.button>
          </motion.div>
        </main>

        {/* 📰 Sección de Blog Corporativo */}
        <BlogSection />
        {/* 🏆 Casos de Éxito */}
        <CasosExito />
        {/* ⚫ Footer moderno */}
        <Footer />
      </div>
    );
  }

  // 🧭 FLUJO PRINCIPAL DE CONFIGURACIÓN
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {paso === 1 && <PasoIndustria onSeleccion={handleSeleccionIndustria} />}

      {paso === 2 && (
        <PasoSecciones
          onContinuar={(activas) => {
            console.log("Secciones elegidas:", activas);
            setSeccionesSeleccionadas(activas); // ✅ guardamos las secciones
            setPaso(3);
          }}
          onAtras={() => setPaso(1)}
          onActualizarPrecio={handleActualizarPrecio}
        />
      )}

      {paso === 3 && (
        <PasoResumen
          industria={industriaSeleccionada}
          precioInicial={precioInicial}
          precioMensual={precioMensual}
          onReiniciar={() => setPaso(2)}
          onFinalizarCompra={() => setPaso(4)} // ✅ pasa al PasoCuenta
        />
      )}

      {paso === 4 && (
        <PasoCuenta
          onVolver={() => setPaso(3)}
          onVerTerminos={() => setPaso(5)}
          onVerPantallaGracias={() => setPaso(6)}
          secciones={seccionesSeleccionadas}
          precioInicial={precioInicial}
          precioMensual={precioMensual}
          industria={industriaSeleccionada} // ✅ nuevo prop
        />
      )}

      {paso > 0 && paso < 3 && (
        <PriceDisplay
          precioInicial={precioInicial}
          precioMensual={precioMensual}
        />
      )}

      {paso === 5 && <TerminosServicio onVolver={() => setPaso(4)} />}
      {paso === 6 && <PantallaGracias onVolverInicio={() => setPaso(0)} />}

    </div>
  );
}

export default App;
