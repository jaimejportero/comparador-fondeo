// Filtros.tsx
import React from "react";
import { cuentasData } from "../data/cuentas";
import fondoImg from "../data/fondo-cuentas.png";

interface FiltrosProps {
  filtros: {
    capitalMinimo: number;
    precioMaximo: number;
    mantieneFinde: boolean;
    faseUnica: boolean;
    numeroFases: number;
    capitalSeleccionado: number;
    costeMaximo: number;
    objetivoFase1Minimo: number;
    objetivoFase2Minimo: number;
    tiempoFase: string;
  };
  setFiltros: React.Dispatch<React.SetStateAction<FiltrosProps["filtros"]>>;
}

const capitalesUnicos = Array.from(new Set(cuentasData.flatMap(c => c.capitales))).sort((a, b) => a - b);

export const Filtros: React.FC<FiltrosProps> = ({ filtros, setFiltros }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    const type = target instanceof HTMLInputElement ? target.type : undefined;
    const value = target.value;
    const checked = target instanceof HTMLInputElement ? target.checked : false;
    setFiltros(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'capitalSeleccionado'
            ? Number(value)
            : type === 'number'
              ? Number(value)
              : value,
    }));

  };

  return (
    <div className="text-white">
      <div className="mb-8 max-w-4xl mx-auto text-center">

        <h1 className="text-4xl font-extrabold text-teal-400 mb-4">
          Comparador de Cuentas Fondeadas 2025
        </h1>
        <p className="mb-6 text-gray-300 text-lg max-w-2xl mx-auto">
          ¿Estás listo para convertirte en trader profesional sin arriesgar tu propio capital? Explora las mejores cuentas fondeadas del mercado con nuestro comparador actualizado.<br /> Encuentra el programa que se adapta a tu estilo, experiencia y objetivos financieros.
        </p>
        <img
          src={fondoImg}
          alt="Cuentas fondeadas"
          className="w-full max-h-96 object-cover rounded-xl shadow-xl mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-400">¿Qué es una cuenta fondeada?</h2>
            <p className="mb-4 text-gray-300">
              Una cuenta fondeada es una cuenta de trading proporcionada por una empresa de fondeo, que te permite operar con su capital en lugar del tuyo. A cambio, el trader se somete a una evaluación con ciertos objetivos y reglas. Si tiene éxito, comparte las ganancias obtenidas en el mercado real sin arriesgar su propio dinero.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-400">¿Por qué elegir una cuenta fondeada?</h2>
            <p className="mb-4 text-gray-300">
              Porque permite escalar como trader sin necesidad de grandes ahorros personales, acceder a capital desde 5.000€ hasta 250.000€, y contar con condiciones como fases únicas, operaciones en fin de semana o pruebas sin límite de tiempo.
            </p>
          </div>
        </div>
        <p className="italic text-lg text-teal-300">¿Cuál se adapta mejor a ti? Filtra y descúbrelo 👇</p>

      </div>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-900 p-6 rounded-xl border border-gray-700">
        <label className="text-white text-sm">
          Capital mínimo (€)
          <input
            type="number"
            name="capitalMinimo"
            className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
            value={filtros.capitalMinimo}
            onChange={handleChange}
          />
        </label>
        <label className="text-white text-sm">
          Precio máximo (€)
          <input
            type="number"
            name="precioMaximo"
            className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
            value={filtros.precioMaximo}
            onChange={handleChange}
          />
        </label>
        <label className="text-white text-sm">
          Capital exacto
          <select
            name="capitalSeleccionado"
            value={filtros.capitalSeleccionado}
            onChange={handleChange}
            className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
          >
            <option value={0}>Todos los capitales</option>
            {capitalesUnicos.map(c => (
              <option key={c} value={c}>{`€${c.toLocaleString()}`}</option>
            ))}
          </select>
        </label>
        <label className="text-white text-sm">
          Tiempo de fase
          <select
            name="tiempoFase"
            value={filtros.tiempoFase}
            onChange={handleChange}
            className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
          >
            <option value="">Cualquier tiempo de fase</option>
            <option value="ilimitado">Ilimitado</option>
            <option value="30-60">30d / 60d</option>
            <option value="otro">Otro</option>
          </select>

        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            name="mantieneFinde"
            checked={filtros.mantieneFinde}
            onChange={handleChange}
          />
          Mantiene fin de semana
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            name="faseUnica"
            checked={filtros.faseUnica}
            onChange={handleChange}
          />
          Fase única
        </label>
      </div>
    </div>
  );
};
