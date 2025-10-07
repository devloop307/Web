// src/data/modulosData.js

// 🏭 Industrias
export const industrias = [
  { id: "clinica", nombre: "Clínica Dental" },
  { id: "tienda", nombre: "Tienda Online" },
  { id: "consultora", nombre: "Consultora" },
  { id: "restaurante", nombre: "Restaurante" },
  { id: "educacion", nombre: "Educación" },
  { id: "inmobiliaria", nombre: "Inmobiliaria" },
];

// ⚙️ Módulos disponibles
export const modulos = [
  {
    id: "pagos",
    nombre: "Módulo de Pagos por WhatsApp",
    precioInicial: 100,
    precioMensual: 20,
  },
  {
    id: "citas",
    nombre: "Módulo de Agendamiento de Citas",
    precioInicial: 150,
    precioMensual: 30,
  },
  {
    id: "analitica",
    nombre: "Módulo de Análisis de Sentimiento",
    precioInicial: 200,
    precioMensual: 40,
  },
];

// 💰 Precios por secciones del sitio (para PasoSecciones)
export const preciosSecciones = {
  introduccion: { inicial: 780, mensual: 10 },
  productos: { inicial: 860, mensual: 20 },
  servicios: { inicial: 750, mensual: 15 },
  reservas: { inicial: 800, mensual: 25 },
  testimonios: { inicial: 620, mensual: 10 },
  galeria: { inicial: 950, mensual: 20 },
  equipo: { inicial: 800, mensual: 15 },
  contacto: { inicial: 540, mensual: 10 },
  acerca: { inicial: 450, mensual: 8 },
  footer: { inicial: 585, mensual: 5 },
};

