import { useCookieConsent } from "../hooks/useCookieConsent";

export default function CookieBanner() {
  const { consent, setConsent } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 text-white text-sm px-4 py-4 z-50 shadow-2xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-300 leading-relaxed">
          Utilizamos cookies propias y de terceros (Google Analytics y Google AdSense)
          para analizar el tráfico y mostrar publicidad relevante. Puedes aceptar todas
          las cookies o rechazar las no esenciales. Consulta nuestra{" "}
          <a href="/cookies" className="underline text-teal-400 hover:text-teal-300">
            Política de Cookies
          </a>{" "}
          para más información.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setConsent("rejected")}
            className="border border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm transition"
          >
            Rechazar
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm transition font-semibold"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}