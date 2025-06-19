// CuentaCard.tsx
import React from "react";
import type { CuentaFondeada } from "../data/cuentas";

interface Props {
  cuenta: CuentaFondeada;
}

export const CuentaCard: React.FC<Props> = ({ cuenta }) => (
  <div className="border border-gray-700 p-6 rounded-2xl shadow-md mb-6 bg-gray-800 hover:shadow-lg transition duration-300">
    <h2 className="text-2xl font-bold mb-3 text-teal-400 border-b pb-2 border-gray-600">{cuenta.nombre}</h2>
    <ul className="space-y-2 text-sm text-gray-300">
      <li><span className="font-semibold text-gray-400">💰 Capitales:</span> {cuenta.capitales.map((c, i) => `€${c.toLocaleString()} (${cuenta.precios[i]} €)`).join(', ')}</li>
      <li><span className="font-semibold text-gray-400">⏳ Tiempo de fase:</span> {cuenta.tiempoFase}</li>
      <li><span className="font-semibold text-gray-400">🎯 Objetivo Fase 1:</span> {cuenta.objetivo_fase1}%</li>
      <li><span className="font-semibold text-gray-400">🎯 Objetivo Fase 2:</span> {cuenta.objetivo_fase2}%</li>
      <li><span className="font-semibold text-gray-400">🔁 Fase única:</span> {cuenta.fase_unica ? 'Sí' : 'No'}</li>
      <li><span className="font-semibold text-gray-400">🕒 Opera fines de semana:</span> {cuenta.mantiene_finde ? 'Sí' : 'No'}</li>
    </ul>
  </div>
);
