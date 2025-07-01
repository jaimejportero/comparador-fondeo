export default function NotFound() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl font-bold text-teal-400 mb-4">404 - Página no encontrada</h1>

      <p className="text-gray-300 text-lg mb-4">
        Lo sentimos, no hemos podido encontrar la página que estás buscando. Puede que el enlace esté roto o que la dirección haya cambiado.
      </p>

      <p className="text-gray-400 mb-6 max-w-xl">
        Puedes regresar a la página principal para seguir explorando nuestras herramientas de trading fondeado, calculadoras y comparativas. También puedes usar el menú superior para ir a la sección que te interesa.
      </p>

      <a
        href="/"
        className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
