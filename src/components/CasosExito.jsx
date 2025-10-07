import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const casos = [
  {
    id: 1,
    title: "Clínica Sonrisas Digitales",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Una clínica dental que automatizó sus reservas y pagos online con NeoBuilder, reduciendo el tiempo de atención en un 35%.",
    sector: "Salud",
  },
  {
    id: 2,
    title: "Tienda EcoMarket",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80",
    description:
      "Negocio ecológico que integró módulos de e-commerce y facturación automática, logrando aumentar sus ventas un 50%.",
    sector: "Comercio",
  },
  {
    id: 3,
    title: "Agencia Creativa Flux",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    description:
      "Agencia de diseño que implementó paneles analíticos y automatizó reportes para sus clientes internacionales.",
    sector: "Marketing",
  },
];

export default function CasosExito() {
  return (
    <section
      className="relative z-10 bg-neutral-900/60 backdrop-blur-md py-24 px-6 sm:px-10 lg:px-20 border-t border-white/10 text-white"
      aria-labelledby="casos-heading"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* 🏆 Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            id="casos-heading"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Casos de Éxito
          </motion.h2>
          <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
            Empresas que confiaron en NeoBuilder para digitalizar sus procesos
            y alcanzar nuevos niveles de eficiencia.
          </p>
        </div>

        {/* 🧱 Tarjetas de casos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {casos.map((caso, index) => (
            <motion.div
              key={caso.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={caso.image}
                  alt={`Caso de éxito: ${caso.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-blue-600/90 text-xs font-semibold px-3 py-1 rounded-full">
                  {caso.sector}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-semibold mb-3 text-white leading-tight">
                  {caso.title}
                </h3>
                <p className="text-gray-300 text-sm mb-5 flex-grow">
                  {caso.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group/link"
                >
                  Ver historia completa
                  <ExternalLink
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-300 mb-4">
            ¿Quieres ser el próximo caso de éxito?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all hover:shadow-blue-500/50">
            Contáctanos
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
