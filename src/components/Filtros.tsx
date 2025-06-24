// Filtros.tsx mejorado para SEO y estructura semántica
import React from "react";
import { cuentasData } from "../data/cuentas";
import fondoImg from "../data/fondo-cuentas.png";

interface FiltrosProps {
  filtros: {
    capitalMinimo: number;
    precioMaximo: number;
    costeMaximo: number;
    mantieneFinde: boolean;
    faseUnica: boolean;
    numeroFases: number;
    capitalSeleccionado: number;
    objetivoFase1Minimo: number;
    objetivoFase2Minimo: number;
    tiempoFase: string;
    activo: string;
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
    <section className="text-white">
      <header className="mb-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-teal-400 mb-4">
          Comparador de Cuentas Fondeadas para Traders en 2025
        </h1>
        <p className="mb-6 text-gray-300 text-lg max-w-2xl mx-auto">
          ¿Quieres ser trader profesional sin arriesgar tu dinero? Compara las mejores cuentas fondeadas con condiciones actualizadas: capital inicial, fases, duración, y activos como Forex, Cripto o Futuros.
        </p>
        <img
          src={fondoImg}
          alt="Comparador de cuentas fondeadas para trading 2025"
          className="w-full max-h-96 object-cover rounded-xl shadow-xl mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-400">¿Qué es una cuenta fondeada de trading?</h2>
            <p className="mb-4 text-gray-300">
              Es una cuenta que te da una empresa para operar con su capital. Si superas una evaluación con reglas claras y objetivos, accedes a operar en real compartiendo beneficios. Sin arriesgar tu dinero.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-400">Ventajas de usar cuentas fondeadas</h2>
            <p className="mb-4 text-gray-300">
              Puedes operar desde 5.000€ hasta 250.000€, incluso sin límite de tiempo o fines de semana. Accede al mercado con condiciones reales y sin grandes ahorros previos.
            </p>
          </div>
        </div>
        <p className="italic text-lg text-teal-300">Usa los filtros y encuentra la cuenta ideal para ti 👇</p>
      </header>

      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-900 p-6 rounded-xl border border-gray-700">

        <label className="text-white text-sm">
          Tipo de activo
          <select
            name="activo"
            value={filtros.activo}
            onChange={handleChange}
            className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
          >
            <option value="">Cualquier activo</option>
            <option value="Forex">Forex</option>
            <option value="Acciones">Acciones</option>
            <option value="CFD">CFD</option>
            <option value="Cripto">Cripto</option>
            <option value="ETFs">ETFs</option>
            <option value="Futuros">Futuros</option>
            <option value="Metales">Metales</option>
            <option value="Stocks">Stocks</option>
            <option value="Índices">Índices</option>
          </select>
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
            <option value="">Cualquier tiempo</option>
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
      </section>
    </section>
  );
};
