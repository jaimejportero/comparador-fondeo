// src/pages/Cookies.tsx
import React from "react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          Política de Cookies – FundedTools
        </h1>

        <p className="mb-4">
          Última actualización: <strong>9 de diciembre de 2025</strong>
        </p>

        <p className="mb-4">
          En <strong>FundedTools</strong> (https://fundedtools.vercel.app/) usamos cookies para mejorar la experiencia del usuario, analizar el tráfico y mostrar anuncios relevantes si habilitas Google AdSense.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">1. ¿Qué son las cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Permiten que la web recuerde tus preferencias y actividades.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Cookies que usamos</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico de la web.
          </li>
          <li>
            <strong>Cookies de analítica:</strong> para medir el uso de la web mediante Google Analytics.
          </li>
          <li>
            <strong>Cookies de publicidad:</strong> utilizadas por Google AdSense para mostrar anuncios relevantes según tus intereses.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Gestión y desactivación</h2>
        <p className="mb-4">
          Puedes aceptar, rechazar o eliminar cookies mediante la configuración de tu navegador. Ten en cuenta que desactivar cookies puede afectar la funcionalidad de algunas secciones de la web.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Enlaces de interés</h2>
        <p className="mb-4">
          Para más información sobre las cookies de Google y cómo gestionarlas, visita:{" "}
          <a className="text-teal-400 underline" href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">
            https://policies.google.com/technologies/cookies
          </a>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">5. Cambios en esta política</h2>
        <p>
          FundedTools se reserva el derecho de modificar esta política de cookies en cualquier momento. Los cambios se publicarán en esta página.
        </p>
      </div>
    </div>
  );
}
