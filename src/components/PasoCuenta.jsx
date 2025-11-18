import { useState } from "react";
import { motion } from "framer-motion";
import fondoCuenta from "../assets/oficina2.jpg";
import { preciosSecciones } from "../data/modulosData";

function PasoCuenta({
  onVolver,
  onVerTerminos,
  onVerPantallaGracias,
  secciones,
  precioInicial,
  precioMensual,
  nombreEmpresa
}) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("Creando cuenta...");

    try {
      // 1️⃣ Crear cuenta
      const response = await fetch("https://n8n.flown8n.bid/webhook/register_client", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          password,
          dni,
          telefono,
        }),
      });

      const data = await response.json();

      if (response.ok && data?.success === true) {
        setMensaje("✅ Cuenta creada correctamente. Procesando pago...");

        // 2️⃣ Preparar datos de venta
        const items = secciones.map((seccionId) => {
          const precio = preciosSecciones[seccionId];
          return {
            modulo: seccionId,
            precioInicial: precio?.inicial || 0,
            precioMensual: precio?.mensual || 0,
          };
        });

        const venta = await fetch("https://n8n.flown8n.bid/webhook/sale-data", {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre,
            apellido,
            email,
            dni,
            telefono,
            empresa: nombreEmpresa,
            items,
            precioInicialTotal: precioInicial,
            precioMensualTotal: precioMensual,
          }),
        });

        const dataVenta = await venta.json();
        const linkPago =
          dataVenta.linkPago || dataVenta.payment_url || dataVenta.sandbox_init_point;

        if (venta.ok && linkPago) {
          // 🔹 Abrir la pasarela de pago
          window.open(linkPago);
        } else {
          setMensaje("⚠️ No se encontró el link de pago.");
        }
      } else {
        setMensaje("❌ Error al crear la cuenta. Cuenta ya registrada.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("⚠️ No se pudo conectar con el servidor.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url(${fondoCuenta})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔲 Capa oscura */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🧾 Contenido principal */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-auto mt-24 mb-12 px-8 py-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
          Creación de Cuenta
        </h2>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          Completa los siguientes campos para crear tu cuenta y continuar con el pago.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Gabriel"
              className="w-full rounded-lg px-4 py-2 border border-gray-400/30 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Ej: Leyva Valqui"
              className="w-full rounded-lg px-4 py-2 border border-gray-400/30 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              className="w-full rounded-lg px-4 py-2 border border-gray-400/30 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">DNI</label>
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="Ej: 74215896"
              className="w-full rounded-lg px-4 py-2 border border-gray-400/30 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Teléfono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej: +51 953 889 070"
              className="w-full rounded-lg px-4 py-2 border border-gray-400/30 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-lg px-4 py-2 border border-gray-400/30 text-gray-800"
              required
            />
          </div>

          {/* ✅ Checkbox de aceptación */}
          <div className="flex items-start gap-2 mt-4">
            <input type="checkbox" id="terminos" required className="w-5 h-5 accent-blue-600" />
            <label htmlFor="terminos" className="text-gray-300 text-sm leading-snug">
              Acepto los{" "}
              <button
                type="button"
                onClick={onVerTerminos}
                className="text-blue-400 underline hover:text-blue-300"
              >
                Términos de Servicio
              </button>{" "}
              y el{" "}
              <a href="#" className="text-blue-400 underline hover:text-blue-300">
                Contrato de Prestación de Servicios
              </a>.
            </label>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition hover:scale-105"
          >
            Crear Cuenta
          </button>

          {mensaje && <p className="mt-4 text-sm text-gray-200 text-center">{mensaje}</p>}
        </form>

        <button
          onClick={onVolver}
          className="mt-8 text-gray-300 hover:text-white underline text-sm transition"
        >
          ← Volver al resumen
        </button>
      </motion.div>
    </div>
  );
}

export default PasoCuenta;
