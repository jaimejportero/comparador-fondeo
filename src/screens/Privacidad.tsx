export default function Privacidad() {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Política de Privacidad</h1>

        <p className="mb-4">
          En <strong>FundedTools</strong> valoramos tu privacidad. Este sitio no recopila datos personales salvo lo necesario para estadísticas de navegación y anuncios.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
        <p className="mb-4">
          Este sitio puede utilizar cookies para mejorar tu experiencia. Puedes gestionarlas desde tu navegador.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Publicidad de Google</h2>
        <p className="mb-4">
          Usamos Google AdSense, que puede usar cookies para personalizar anuncios. Puedes leer más en:
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
      </div>
    </div>
  );
}
