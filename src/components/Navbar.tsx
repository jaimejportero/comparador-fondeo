import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) => {
    if (path === "/soporte") {
      return `px-4 py-2 rounded-xl text-sm font-semibold transition duration-200 ${
        pathname === path
          ? "bg-indigo-500 text-white shadow"
          : "text-indigo-300 hover:text-white hover:bg-indigo-600"
      }`;
    }

    return `px-4 py-2 rounded-xl text-sm font-semibold transition duration-200 ${
      pathname === path
        ? "bg-teal-500 text-white shadow"
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-400 hover:text-white transition">
          📊 FundedTools
        </Link>
        <div className="flex gap-4">
          {/* <Link to="/noticias" className={linkClass("/noticias")}>
            Noticias
          </Link> */}
          <Link to="/" className={linkClass("/")}>
            Ranking
          </Link>
          <Link to="/interes-compuesto" className={linkClass("/interes-compuesto")}>
            Interés Compuesto
          </Link>
          <Link to="/tamanoPosicion" className={linkClass("/tamanoPosicion")}>
            Calculo tamaño posicion
          </Link>
          <Link to="/stops" className={linkClass("/stops")}>
            Stops / TP
          </Link>
          <Link to="/simularCurva" className={linkClass("/simularCurva")}>
            Simulador de capital
          </Link>
          <Link to="/soporte" className={linkClass("/soporte")}>
            Soporte
          </Link>
        </div>
      </div>
    </nav>
  );
}
