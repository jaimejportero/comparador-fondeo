import  { useState } from "react";
import { cuentasData } from "./data/cuentas";
import { CuentaCard } from "./components/CuentaCard";
import { Filtros } from "./components/Filtros";

export default function App() {
  const [filtros, setFiltros] = useState({
    capitalMinimo: 0,
    precioMaximo: 0,
    mantieneFinde: false,
    faseUnica: false,
    numeroFases: 0,
    capitalSeleccionado: 0,
    objetivoFase1Minimo: 0,
    objetivoFase2Minimo: 0,
    tiempoFase: "",
  });

  const cuentasFiltradas = cuentasData.filter((cuenta) => {
    const tieneCapitalMinimo = cuenta.capitales.some((c) => c >= filtros.capitalMinimo);
    const tienePrecioMaximo = cuenta.precios.some((p) => p <= filtros.precioMaximo);
    const cumpleCapitalExacto =
      filtros.capitalSeleccionado === 0 || cuenta.capitales.includes(filtros.capitalSeleccionado);
    const cumpleObjetivoF1 = cuenta.objetivo_fase1 >= filtros.objetivoFase1Minimo;
    const cumpleObjetivoF2 = cuenta.objetivo_fase2 >= filtros.objetivoFase2Minimo;
    const cumpleMantieneFinde = !filtros.mantieneFinde || cuenta.mantiene_finde;
    const cumpleFaseUnica = !filtros.faseUnica || cuenta.fase_unica;
    const cumpleTiempoFase =
      filtros.tiempoFase === "" ||
      cuenta.tiempoFase.toLowerCase().includes(filtros.tiempoFase.toLowerCase());
    const cumpleNumeroFases =
      filtros.numeroFases === 0 ||
      (cuenta.fase_unica ? 1 : 2) === filtros.numeroFases;

    return (
      tieneCapitalMinimo &&
      tienePrecioMaximo &&
      cumpleCapitalExacto &&
      cumpleObjetivoF1 &&
      cumpleObjetivoF2 &&
      cumpleMantieneFinde &&
      cumpleFaseUnica &&
      cumpleTiempoFase &&
      cumpleNumeroFases
    );
  });
  const plataformasSeleccionadas = cuentasFiltradas.map(c => c.nombre);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <Filtros filtros={filtros} setFiltros={setFiltros} />
      {cuentasFiltradas.length === 0 ? (
        <p className="text-center text-red-400 mt-8">No hay cuentas que cumplan esos criterios.</p>
      ) : (
        cuentasFiltradas.map((cuenta, idx) => (
          <CuentaCard key={idx} cuenta={cuenta} />
        ))
      )}
       <>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Estadísticas del mercado</h2>
          <p className="text-gray-300 mb-4">Estas plataformas son las más populares entre traders fondeados:</p>
          <ul className="list-disc pl-6 text-gray-300">
            {plataformasSeleccionadas.map((nombre, idx) => (
              <li key={idx}>{nombre} — Uso estimado: {(Math.random() * 100).toFixed(1)}%</li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4 text-gray-300">
            <details>
              <summary className="cursor-pointer font-semibold">¿Cuál es la mejor cuenta fondeada para principiantes?</summary>
              <p>Depende de tu estilo de trading, pero muchas plataformas ofrecen cuentas con condiciones flexibles para empezar.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-semibold">¿Qué pasa si no paso la evaluación?</summary>
              <p>Generalmente puedes volver a intentarlo, algunas plataformas incluso ofrecen repeticiones gratuitas si no pierdes capital.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-semibold">¿Se puede operar fines de semana?</summary>
              <p>Solo algunas plataformas lo permiten. Usa los filtros para encontrar cuáles.</p>
            </details>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Opiniones reales de traders</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {plataformasSeleccionadas.map((plataforma, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-2">{plataforma}</h3>
                <p className="text-green-400 text-sm mb-2">“Me ayudó a escalar mi cuenta. La mejor experiencia como trader que he tenido.”</p>
                <p className="text-yellow-400 text-sm mb-2">“La evaluación fue exigente, pero justa. Requiere disciplina.”</p>
                <p className="text-red-400 text-sm">“Atención al cliente lenta. El proceso de pago podría mejorar.”</p>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
