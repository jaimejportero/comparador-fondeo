export default function Privacidad() {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Política de Privacidad</h1>

        {/* Introducción editorial */}
        <p className="mb-6 text-gray-300 text-base leading-relaxed">
          En <strong>FundedTools</strong> nos tomamos muy en serio tu privacidad. Esta política explica qué datos recogemos, cómo los usamos y cuáles son tus derechos como usuario. Nos comprometemos a tratar toda la información personal con respeto y de forma transparente.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Datos que recopilamos</h2>
        <p className="mb-4">
          Este sitio no solicita ni almacena información personal identificable, como nombre, dirección o correo electrónico. Solo recopilamos datos de navegación de forma anónima mediante herramientas como Google Analytics y Google AdSense, con el objetivo de mejorar la experiencia del usuario y mostrar anuncios relevantes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso de cookies</h2>
        <p className="mb-4">
          Utilizamos cookies propias y de terceros para analizar el tráfico y personalizar la publicidad. Puedes gestionar o eliminar las cookies desde la configuración de tu navegador. Para más información, visita nuestra <a href="/cookies" className="text-teal-300 underline">Política de Cookies</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Publicidad de Google</h2>
        <p className="mb-4">
          Google AdSense puede utilizar cookies para mostrar anuncios personalizados según tu actividad de navegación. Puedes obtener más información y configurar tus preferencias en el siguiente enlace:
          <br />
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 underline"
          >
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Tus derechos</h2>
        <p className="mb-4">
          Tienes derecho a acceder, rectificar o eliminar tus datos personales si en algún momento se recogen. Para ejercer estos derechos, puedes escribirnos a:{" "}
          <span className="text-teal-300">comparadorfondeo@gmail.com</span>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cambios en esta política</h2>
        <p className="mb-4">
          Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página.
        </p>
      </div>
    </div>
  );
}
