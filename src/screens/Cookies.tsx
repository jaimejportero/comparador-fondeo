export default function Cookies() {
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Política de Cookies</h1>

        <p className="mb-4">
          Este sitio web utiliza cookies propias y de terceros para mejorar tu experiencia como usuario y mostrarte anuncios relevantes a través de Google AdSense.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué son las cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos que se guardan en tu navegador al visitar un sitio web. Sirven para recordar preferencias, recopilar estadísticas o mostrar publicidad personalizada.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tipos de cookies que utilizamos</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookies técnicas necesarias</li>
          <li>Cookies de análisis (Google Analytics, si se usa)</li>
          <li>Cookies publicitarias (como las de Google AdSense)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo puedes gestionar las cookies?</h2>
        <p className="mb-4">
          Puedes eliminar o bloquear las cookies desde las opciones de configuración de tu navegador. Si lo haces, es posible que algunas funcionalidades del sitio no estén disponibles.
        </p>
      </div>
    </div>
  );
}
