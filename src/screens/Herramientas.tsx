import { Link } from "react-router-dom";
import posicionImg from "../imagenes/tamano.png";
import stopImg from "../imagenes/stops.png";
import interesCompuestoImg from "../imagenes/interes.png";

export default function Herramientas() {
  const herramientas = [
    {
      id: 1,
      titulo: "Calculadora de Tamaño de Posición",
      descripcion:
        "Calcula cuántas unidades abrir según tu capital, riesgo y stop loss. Ideal para cuentas fondeadas.",
      imagen: posicionImg,
      ruta: "/calculadora-tamanoPosicion",
    },
    {
      id: 2,
      titulo: "Calculadora Stop Loss / Take Profit",
      descripcion:
        "Determina automáticamente tus niveles de stop y take profit según tu estrategia y riesgo.",
      imagen: stopImg,
      ruta: "/calculadora-stop",
    },
    {
      id: 3,
      titulo: "Simulador Interés Compuesto",
      descripcion:
        "Visualiza cómo crece tu capital con el tiempo aplicando interés compuesto y reinversión de ganancias.",
      imagen: interesCompuestoImg,
      ruta: "/calculadora-simulador-interes",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen w-full text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-teal-400 text-center">
          🛠 Herramientas para Traders
        </h1>
        <p className="mb-12 text-gray-300 text-center text-base max-w-3xl mx-auto">
          Encuentra todas nuestras calculadoras y simuladores en un solo lugar. Diseñadas
          para ayudarte a gestionar el riesgo, planificar tus operaciones y mejorar tu estrategia.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {herramientas.map((herr) => (
            <div
              key={herr.id}
              className="bg-gray-800 rounded-2xl p-8 flex flex-col justify-between h-full shadow-xl border border-gray-700 hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6 flex items-center justify-center bg-gray-700 rounded-lg">
                  <img
                    src={herr.imagen}
                    alt={herr.titulo}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-teal-400 text-center">
                  {herr.titulo}
                </h2>
                <p className="text-gray-300 text-center mb-6">{herr.descripcion}</p>
              </div>
              <Link
                to={herr.ruta}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-2xl font-semibold text-lg mt-auto"
              >
                Usar herramienta
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
