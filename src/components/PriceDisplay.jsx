function PriceDisplay({ precioInicial = 0, precioMensual = 0 }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner py-4 flex justify-center items-center gap-8 border-t z-50">
      <div>
        <span className="text-gray-500">Pago Inicial:</span>
        <span className="text-blue-600 font-semibold ml-2">
          ${precioInicial}
        </span>
      </div>
      <div>
        <span className="text-gray-500">Mensual:</span>
        <span className="text-green-600 font-semibold ml-2">
          ${precioMensual}
        </span>
      </div>
    </div>
  );
}

export default PriceDisplay;
