import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const linkClass = (path: string) => {
    const base = "px-4 py-2 rounded-xl text-sm font-semibold transition duration-200";
    const active = "bg-teal-500 text-white shadow";
    const inactive = "text-gray-300 hover:text-white hover:bg-gray-700";

    const soporteActive = "bg-indigo-500 text-white shadow";
    const soporteInactive = "text-indigo-300 hover:text-white hover:bg-indigo-600";

    if (path === "/soporte") {
      return `${base} ${pathname === path ? soporteActive : soporteInactive}`;
    }

    return `${base} ${pathname === path ? active : inactive}`;
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-md">
      <div className="max-w-9xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-400 hover:text-white transition leading-none">
          <span className="text-3xl">📊</span>
          FundedTools
        </Link>


        {/* Botón hamburguesa */}
        <button
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        {/* Menú en pantallas grandes */}
        <div className="hidden lg:flex gap-4 items-center">
          <NavLinks linkClass={linkClass} />
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="flex flex-col px-4 pb-4 gap-2 lg:hidden">
          <NavLinks linkClass={linkClass} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ linkClass }: { linkClass: (path: string) => string }) {
  return (
    <>
      <Link to="/" className={linkClass("/")}>Qué es FundedTools</Link>
      <Link to="/tipos_inversion" className={linkClass("/tipos_inversion")}>Tipos Inversion</Link>
      <Link to="/herramientas" className={linkClass("/herramientas")}>Herramientas</Link>
      <Link to="/faqs" className={linkClass("/faqs")}>Preguntas frecuentes</Link>
      <Link to="/glosario" className={linkClass("/glosario")}>Glosario</Link>
      <span className="border-l border-gray-600 h-5 mx-2"></span>
      <Link to="/comparador" className={linkClass("/comparador")}>Comparador cuentas fondeo</Link>
      <Link to="/calculadora-simulador-interes" className={linkClass("/calculadora-simulador-interes")}>Interés Compuesto</Link>
      <Link to="/calculadora-tamanoPosicion" className={linkClass("/calculadora-tamanoPosicion")}>Tamaño de posición</Link>
      <Link to="/calculadora-stop" className={linkClass("/calculadora-stop")}>Stops / TP</Link>
      <Link to="/simularCurva" className={linkClass("/simularCurva")}>Simulador Capital</Link>
      <span className="border-l border-gray-600 h-5 mx-2"></span>
      <Link to="/soporte" className={linkClass("/soporte")}>Soporte</Link>
    </>
  );
}
