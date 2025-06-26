// src/screens/NotFound.tsx
export default function NotFound() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl font-bold text-teal-400 mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-300 text-lg mb-6">
        La ruta que estás buscando no existe o ha sido movida.
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
