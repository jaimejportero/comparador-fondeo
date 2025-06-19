// Filtros.tsx
import React from "react";

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

export const Filtros: React.FC<FiltrosProps> = ({ filtros, setFiltros }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;

    const name = target.name;
    const type = target instanceof HTMLInputElement ? target.type : undefined;
    const value = target.value;
    const checked = target instanceof HTMLInputElement ? target.checked : false;

    setFiltros(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
  };

  return (
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
          {[10000, 20000, 30000, 50000, 80000, 100000, 160000].map(c => (
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
          <option value="Sin límite">Sin límite</option>
          <option value="30 días">30 días</option>
          <option value="60 días">60 días</option>
          <option value="10 días">10 días</option>
        </select>
      </label>
      <label className="text-white text-sm">
        Número de fases
        <input
          type="number"
          name="numeroFases"
          className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
          value={filtros.numeroFases}
          onChange={handleChange}
        />
      </label>
      <label className="text-white text-sm">
        % mínimo Fase 1
        <input
          type="number"
          name="objetivoFase1Minimo"
          className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
          value={filtros.objetivoFase1Minimo}
          onChange={handleChange}
        />
      </label>
      <label className="text-white text-sm">
        % mínimo Fase 2
        <input
          type="number"
          name="objetivoFase2Minimo"
          className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full"
          value={filtros.objetivoFase2Minimo}
          onChange={handleChange}
        />
      </label>
      <br/>
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
  );
};
