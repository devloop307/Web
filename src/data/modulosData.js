// src/data/modulosData.js

// 🏭 Industrias disponibles
export const industrias = [
  { id: "clinica", nombre: "Clínica Dental" },
  { id: "tienda", nombre: "Tienda Online" },
  { id: "consultora", nombre: "Consultora" },
  { id: "restaurante", nombre: "Restaurante" },
  { id: "educacion", nombre: "Educación" },
  { id: "inmobiliaria", nombre: "Inmobiliaria" },
];

// ⚙️ Módulos oficiales (solo 5)
export const modulos = [
  {
    id: "dashboard",
    nombre: "Dashboard General",
    inicial: 1250,
    mensual: 20,
  },
  {
    id: "ventas",
    nombre: "Módulo de Ventas",
    inicial: 1800,
    mensual: 30,
  },
  {
    id: "inventario",
    nombre: "Módulo de Inventario",
    inicial: 2250,
    mensual: 25,
  },
  {
    id: "clientes",
    nombre: "Módulo de Clientes (CRM)",
    inicial: 1380,
    mensual: 25,
  },
  {
    id: "reportes",
    nombre: "Módulo de Reportes",
    inicial: 1620,
    mensual: 35,
  },
];

// ⛑ Compatibilidad con PasoCuenta.jsx
// Mantengo el nombre "preciosSecciones" EXACTAMENTE como lo usa tu código
// pero ahora apunta a los módulos (para que no rompa nada)
export const preciosSecciones = modulos.reduce((acc, item) => {
  acc[item.id] = {
    inicial: item.inicial,
    mensual: item.mensual,
  };
  return acc;
}, {});
