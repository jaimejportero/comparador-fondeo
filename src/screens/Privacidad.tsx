// src/pages/Privacidad.tsx
export default function Privacidad() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          Política de Privacidad – FundedTools
        </h1>

        <p className="mb-4">
          Última actualización: <strong>9 de diciembre de 2025</strong>
        </p>

        <p className="mb-4">
          En <strong>FundedTools</strong>, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad explica qué datos recopilamos, cómo los utilizamos y cuáles son tus derechos al respecto.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">1. Responsable del tratamiento</h2>
        <p className="mb-4">
          El responsable del tratamiento de los datos es:
          <br />
          <strong>FundedTools</strong>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Datos que recopilamos</h2>
        <p className="mb-2">
          En FundedTools <strong>no solicitamos datos personales</strong> directamente. Sin embargo, se pueden recopilar automáticamente los siguientes datos técnicos:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Tipo de navegador</li>
          <li>Sistema operativo</li>
          <li>Dirección IP (anonimizada si usas Analytics)</li>
          <li>Idioma del navegador</li>
          <li>Páginas visitadas dentro de la web</li>
        </ul>
        <p className="mb-4">
          Además, podemos usar cookies propias y de terceros (como Google AdSense o Analytics) para analítica y mostrar anuncios personalizados. Puedes gestionarlas desde tu navegador.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Finalidad del tratamiento</h2>
        <p className="mb-4">
          Usamos los datos recopilados para:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Mejorar el funcionamiento de la página</li>
          <li>Analizar el tráfico y uso de la web</li>
          <li>Mostrar anuncios relevantes (si habilitas AdSense)</li>
        </ul>
        <p className="mb-4">Nunca vendemos ni compartimos tus datos personales con terceros con fines comerciales.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Servicios de terceros</h2>
        <p className="mb-4">
          Esta web puede utilizar:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Google Analytics:</strong> Para medir tráfico, rendimiento y comportamiento de uso. Recopila datos anónimos y puede usar cookies.
          </li>
          <li>
            <strong>Google AdSense:</strong> Utiliza cookies para mostrar anuncios basados en intereses. Más info:{" "}
            <a className="text-teal-400 underline" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">
              https://policies.google.com/technologies/ads
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">5. Conservación de los datos</h2>
        <p className="mb-4">
          Los datos técnicos se conservan durante el tiempo necesario para los fines indicados:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Datos analíticos: 14 a 26 meses</li>
          <li>Cookies: según su configuración individual</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">6. Derechos del usuario</h2>
        <p className="mb-4">
          Tienes derecho a:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Acceder a tus datos</li>
          <li>Rectificarlos</li>
          <li>Solicitar la supresión</li>
          <li>Oponerte al tratamiento</li>
          <li>Solicitar limitación del tratamiento</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-2">7. Protección de datos</h2>
        <p className="mb-4">
          Aplicamos medidas razonables para proteger la web y sus sistemas frente a accesos no autorizados, alteraciones o divulgación indebida.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">8. Cambios en la Política de Privacidad</h2>
        <p>
          Podemos actualizar esta política en cualquier momento. La fecha de “Última actualización” se modificará para reflejar los cambios.
        </p>
      </div>
    </div>
  );
}
