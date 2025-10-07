export default function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-900 text-gray-300 pt-14 pb-4 px-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm mb-8">
        {/* Columna 1 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">NeoBuilder</h3>
          <p className="text-gray-400 leading-relaxed">
            Tecnología peruana para crear soluciones digitales sin código.  
            Simplifica tus procesos y haz crecer tu negocio.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Productos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Plantillas</a></li>
            <li><a href="#" className="hover:text-white">Módulos</a></li>
            <li><a href="#" className="hover:text-white">Casos de Éxito</a></li>
            <li><a href="#" className="hover:text-white">Precios</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Recursos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Soporte</a></li>
            <li><a href="#" className="hover:text-white">Documentación</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* 🩶 Línea inferior minimalista */}
      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} NeoBuilder — Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <span className="flex items-center gap-1">
          <span>Español</span>
          </span>
          <span>|</span>
          <span> PEN (S/)</span>
          <span>|</span>
          <a href="#" className="hover:text-gray-300 transition">Privacidad</a>
          <a href="#" className="hover:text-gray-300 transition">Términos</a>
        </div>
      </div>
    </footer>
  );
}
