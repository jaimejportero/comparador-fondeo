export default function Cookies() {
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Política de Cookies</h1>

        {/* Intro nueva */}
        <p className="mb-6">
          Esta página describe el uso de cookies en el sitio web <strong>FundedTools</strong>. Al navegar por nuestras páginas, aceptas el uso de cookies según se detalla en esta política. Nos comprometemos a proteger tu privacidad y ofrecer transparencia sobre cómo recopilamos y utilizamos tus datos.
        </p>

        <p className="mb-4">
          Este sitio utiliza cookies propias y de terceros para mejorar tu experiencia como usuario, personalizar contenido y mostrarte anuncios relevantes a través de plataformas como Google AdSense.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué son las cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas una página web. Permiten reconocer tu dispositivo, recordar tus preferencias y ofrecer una experiencia de navegación más fluida y adaptada.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tipos de cookies que utilizamos</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Cookies técnicas necesarias:</strong> esenciales para el funcionamiento correcto del sitio.</li>
          <li><strong>Cookies de análisis:</strong> utilizadas para recopilar datos estadísticos anónimos sobre el uso del sitio (por ejemplo, Google Analytics).</li>
          <li><strong>Cookies publicitarias:</strong> gestionadas por terceros como Google AdSense, que permiten mostrar anuncios relevantes según tu historial de navegación.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo puedes gestionar las cookies?</h2>
        <p className="mb-4">
          Puedes aceptar o rechazar el uso de cookies a través del banner de consentimiento al entrar en el sitio. Además, puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Ten en cuenta que, si las desactivas, algunas funciones pueden dejar de estar disponibles o comportarse de manera inesperada.
        </p>

        <p className="text-sm text-gray-400">
          Para obtener más información sobre cómo Google usa cookies en sus servicios publicitarios, puedes visitar{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline"
          >
            este enlace oficial
          </a>.
        </p>
      </div>
    </div>
  );
}
