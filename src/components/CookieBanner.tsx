// src/components/CookieBanner.tsx
import { useCookieConsent } from "../hooks/useCookieConsent";

export default function CookieBanner() {
  const { consent, setConsent } = useCookieConsent();

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-sm px-4 py-3 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span>
          Utilizamos cookies para mejorar tu experiencia y mostrar publicidad relevante.
          Al continuar navegando, aceptas nuestra{" "}
          <a href="/cookies" className="underline text-teal-300 hover:text-teal-400">
            Política de Cookies
          </a>.
        </span>
        <button
          onClick={() => setConsent(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
