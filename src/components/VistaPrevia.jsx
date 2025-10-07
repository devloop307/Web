// src/components/VistaPrevia.jsx

// 🌆 Imágenes realistas (Unsplash)
const heroImg =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80";
const productosImg =
  "https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0";
const serviciosImg =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0";
const reservaImg =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80";
const acercaImg =
  "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1200&q=80";
const testimoniosImg =
  "https://images.unsplash.com/photo-1600880292089-90e9bb1a4b1c?w=1200&q=80";
const contactoImg =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80";
const galeriaImg =
  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=1200&q=80";
const equipoImg =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80";

export default function VistaPrevia({
  secciones,
  nombreEmpresa,
  colorNavbar,
  colorTitulo,
}) {
  return (
    <div className="h-full w-full overflow-y-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl scroll-smooth">
      {/* 🔹 Navbar */}
      <nav
        className="text-white px-8 py-4 flex justify-between items-center sticky top-0 z-20 shadow-md transition-all"
        style={{ backgroundColor: colorNavbar || "#2563eb" }}
      >
        <h1
          className="font-bold text-xl tracking-wide transition"
          style={{ color: colorTitulo || "white" }}
        >
          {nombreEmpresa || "Tu Empresa"}
        </h1>
        <button
          className="bg-white px-4 py-1 rounded-md font-medium shadow hover:bg-gray-100 transition"
          style={{ color: colorNavbar || "#2563eb" }}
        >
          Contactar
        </button>
      </nav>

      {/* 🔹 Introducción */}
      {secciones.includes("introduccion") && (
        <section
          className="relative h-80 flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 px-6">
            <h2
              className="text-4xl font-bold mb-3 drop-shadow-lg"
              style={{ color: colorTitulo || "white" }}
            >
              Bienvenido a {nombreEmpresa || "tu nuevo sitio"}
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto">
              Personaliza tu página agregando secciones según tus necesidades.
            </p>
          </div>
        </section>
      )}

      {/* 🔹 Productos */}
      {secciones.includes("productos") && (
        <section
          className="p-12 text-center relative border-t"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
          }}
        >
          <h3 className="text-3xl font-bold mb-10 text-gray-800">
            Nuestros Productos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <img
                  src={productosImg}
                  alt={`Producto ${i}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Producto {i}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3">
                    Descripción breve del producto {i}. Ideal para tu negocio.
                  </p>
                  <p className="text-blue-600 font-bold text-xl mb-4">
                    $ {20 + i * 5}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Stock disponible: {10 + i}
                    </span>
                    <div className="flex items-center gap-3">
                      <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-lg transition">
                        -
                      </button>
                      <span className="text-gray-800 font-semibold">1</span>
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Nuevo
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🔹 Servicios */}
      {secciones.includes("servicios") && (
        <section
          className="relative py-20 text-center text-white"
          style={{
            backgroundImage: `url(${serviciosImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 drop-shadow">
              Nuestros Servicios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Consultoría", "Desarrollo Web", "Soporte 24/7"].map((s) => (
                <div
                  key={s}
                  className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md hover:scale-105 transition"
                >
                  <h4 className="font-semibold text-xl mb-2">{s}</h4>
                  <p className="text-gray-200 text-sm">
                    Soluciones digitales personalizadas para tu negocio.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔹 Reservas */}
      {secciones.includes("reservas") && (
        <section
          className="relative h-96 flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${reservaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold mb-4 drop-shadow">
              Reserva una cita con nosotros
            </h3>
            <button
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-lg transition"
              style={{ backgroundColor: colorNavbar }}
            >
              Reservar ahora
            </button>
          </div>
        </section>
      )}

      {/* 🔹 Testimonios */}
      {secciones.includes("testimonios") && (
        <section
          className="relative py-16 text-center text-white"
          style={{
            backgroundImage: `url(${testimoniosImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-8 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 drop-shadow">
              Lo que dicen nuestros clientes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {["Excelente atención", "Resultados increíbles", "Muy recomendado"].map(
                (t, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md"
                  >
                    <p className="italic text-gray-100 mb-4">“{t}”</p>
                    <span className="font-semibold text-blue-300">
                      Cliente {i + 1}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* 🔹 Galería */}
      {secciones.includes("galeria") && (
        <section className="p-10 bg-white border-t text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Galería de Proyectos
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={galeriaImg}
                alt={`Imagen ${i}`}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      )}

      {/* 🔹 Equipo */}
      {secciones.includes("equipo") && (
        <section className="p-16 bg-gray-50 text-center">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800">
            Conoce a nuestro equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={equipoImg}
                  alt={`Miembro ${i}`}
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h4 className="font-semibold text-gray-800 text-lg">
                  Miembro {i}
                </h4>
                <p className="text-gray-500 text-sm">Rol Profesional</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🔹 Contacto */}
      {secciones.includes("contacto") && (
        <section
          className="relative py-16 text-center text-white"
          style={{
            backgroundImage: `url(${contactoImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-3 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full p-3 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Tu mensaje"
                className="w-full p-3 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                style={{ backgroundColor: colorNavbar }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      )}

      {/* 🔹 Acerca */}
      {secciones.includes("acerca") && (
        <section
          className="py-16 bg-white border-t border-gray-200 text-center"
          style={{
            backgroundImage: `url(${acercaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-10 max-w-2xl mx-auto rounded-xl shadow-md">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              Sobre nosotros
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Somos una empresa comprometida con la transformación digital.
            </p>
          </div>
        </section>
      )}

      {/* 🔹 Footer */}
      {secciones.includes("footer") && (
        <footer className="bg-gray-900 text-gray-300 py-12 text-center md:text-left">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Columna 1 */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-3">
                {nombreEmpresa || "NeoBuilder"}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Creamos soluciones digitales a medida que impulsan tu negocio.
                Tecnología, diseño y estrategia en un solo lugar.
              </p>
            </div>

            {/* Columna 2 */}
            <div>
              <h5 className="text-white text-lg font-semibold mb-3">
                Enlaces útiles
              </h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <h5 className="text-white text-lg font-semibold mb-3">
                Contáctanos
              </h5>
              <ul className="space-y-2 text-sm">
                <li>📍 Lima, Perú</li>
                <li>📞 +51 999 999 999</li>
                <li>✉️ contacto@neobuilder.com</li>
              </ul>
            </div>

            {/* Columna 4 */}
            <div>
              <h5 className="text-white text-lg font-semibold mb-3">
                Síguenos
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition block">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition block">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition block">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition block">
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea inferior */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
            © 2025 {nombreEmpresa || "NeoBuilder"} — Todos los derechos
            reservados.
          </div>
        </footer>
      )}
    </div>
  );
}
