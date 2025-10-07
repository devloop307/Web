import { useState, useEffect } from "react";
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
  const [statusPago, setStatusPago] = useState(null); // 🔹 estado del modal de pago

  // 🕵️ Detectar query param ?status=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    if (status) {
      setStatusPago(status);
      // eliminar el query param de la URL para evitar duplicados
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

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

        {/* 🪟 Modal de estado de pago */}
        {statusPago && (
          <ModalPago status={statusPago} onClose={() => setStatusPago(null)} />
        )}
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
            setSeccionesSeleccionadas(activas);
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
          onFinalizarCompra={() => setPaso(4)}
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
          industria={industriaSeleccionada}
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

      {/* 🪟 Modal global */}
      {statusPago && (
        <ModalPago status={statusPago} onClose={() => setStatusPago(null)} />
      )}
    </div>
  );
}

// 🧩 MODAL DE PAGO
const ModalPago = ({ status, onClose }) => {
  let titulo = "";
  let mensaje = "";
  let color = "";

  if (status === "success") {
    titulo = "✅ ¡Pago exitoso!";
    mensaje = "Tu transacción se completó correctamente.";
    color = "text-green-600";
  } else if (status === "pending") {
    titulo = "⏳ Pago pendiente";
    mensaje = "Tu pago está en revisión. Te notificaremos cuando se confirme.";
    color = "text-yellow-600";
  } else {
    titulo = "❌ Pago fallido";
    mensaje = "Ocurrió un problema con tu pago. Intenta nuevamente.";
    color = "text-red-600";
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center"
      >
        <h2 className={`text-3xl font-bold mb-4 ${color}`}>{titulo}</h2>
        <p className="text-gray-700 mb-6">{mensaje}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
};

export default App;
