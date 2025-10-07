import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-neutral-900/70 border-b border-white/10 shadow-lg"
          : "backdrop-blur-sm bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white">
          NeoBuilder
        </h1>

        {/* Botón de sesión */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
}
