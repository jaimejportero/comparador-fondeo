import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm text-center py-6">
      <div className="max-w-5xl mx-auto px-4">
        <p className="mb-2">© 2025 Comparador de Fondeo</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link to="/privacidad" className="underline hover:text-white">
            Política de Privacidad
          </Link>
          <Link to="/aviso-legal" className="underline hover:text-white">
            Aviso Legal
          </Link>
          <Link to="/cookies" className="underline hover:text-white">
            Política de Cookies
          </Link>
          <Link to="/terminos-condiciones" className="underline hover:text-white">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>

  );
}
