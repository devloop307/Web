import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Cómo las PYMEs están digitalizando sus servicios con NeoBuilder",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    excerpt:
      "Descubre cómo cientos de empresas han creado sus soluciones digitales sin programar una sola línea de código.",
  },
  {
    id: 2,
    title: "5 Módulos esenciales para automatizar tu negocio en 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    excerpt:
      "Desde reservas online hasta facturación automática: conoce los módulos más usados por nuestros clientes.",
  },
  {
    id: 3,
    title: "NeoBuilder: tecnología peruana para construir soluciones inteligentes",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    excerpt:
      "Nuestra misión es acercar la digitalización a emprendedores y profesionales independientes en Latinoamérica.",
  },
];

export default function BlogSection() {
  return (
    <section className="relative z-10 bg-white/5 backdrop-blur-md py-20 px-8 border-t border-white/10 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white-400">
          Blog NeoBuilder
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Historias, ideas y tendencias sobre automatización y soluciones sin código.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
              whileHover={{ y: -5 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-5">{post.excerpt}</p>
                <button className="text-blue-400 font-semibold hover:underline">
                  Leer más →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
