import React from "react";
import type { CuentaFondeada } from "../data/cuentas";

interface Props {
  cuenta: CuentaFondeada;
}

export const CuentaCard: React.FC<Props> = ({ cuenta }) => {
  return (
    <div className="border border-gray-700 bg-gray-850 p-6 rounded-2xl shadow-lg mb-6 bg-gray-800 transition hover:shadow-xl">
      <h2 className="text-2xl font-bold text-teal-400 mb-5">{cuenta.nombre}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-200">
        {/* Capitales */}
        <div>
          <p className="font-semibold text-gray-400 mb-1">💰 Capitales</p>
          <ul className="space-y-1">
            {cuenta.capitales.map((c, i) => (
              <li key={i} className="flex justify-between">
                <span>€{c.toLocaleString()}</span>
                <span className="text-gray-400">→ {cuenta.precios[i]} €</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Objetivos */}
        <div>
          <p className="font-semibold text-gray-400 mb-1">🎯 Objetivos</p>
          <p>Fase 1: <span className="text-teal-300">{cuenta.objetivo_fase1}%</span></p>
          <p>Fase 2: <span className="text-teal-300">{cuenta.objetivo_fase2}%</span></p>
          <p className="mt-2">Días mínimos F1/F2: {cuenta.dias_min_fase1 ?? '-'} / {cuenta.dias_min_fase2 ?? '-'}</p>
        </div>

        {/* Reglas */}
        <div>
          <p className="font-semibold text-gray-400 mb-1">📋 Reglas</p>
          <p>⏳ Tiempo de fase: {cuenta.tiempoFase}</p>
          <p>🔁 Fase única: {cuenta.fase_unica ? 'Sí' : 'No'}</p>
          <p>🕒 Opera finde: {cuenta.mantiene_finde ? 'Sí' : 'No'}</p>
          <p>📉 Pérdida diaria máx: {cuenta.perdidas_max_diaria ?? '-'}%</p>
          <p>📉 Pérdida total máx: {cuenta.perdidas_max_total ?? '-'}%</p>
        </div>
      </div>

      {/* Activos */}
      <div className="mt-4 pt-4 border-t border-gray-700 text-sm">
        <p className="font-semibold text-gray-400 mb-1">📊 Activos disponibles</p>
        <p className="text-gray-300">{cuenta.activos.join(', ')}</p>
      </div>
    </div>
  );
};
