import { useState } from "react";
import { cuentasData } from "./data/cuentas";
import { CuentaCard } from "./components/CuentaCard";
import { Filtros } from "./components/Filtros";

const tieneFiltrosAplicados = (filtros: any) => {
  return (
    filtros.capitalMinimo > 0 ||
    filtros.precioMaximo > 0 ||
    filtros.capitalSeleccionado > 0 ||
    filtros.numeroFases > 0 ||
    filtros.objetivoFase1Minimo > 0 ||
    filtros.objetivoFase2Minimo > 0 ||
    filtros.tiempoFase !== "" ||
    filtros.mantieneFinde ||
    filtros.faseUnica
  );
};

const usoEstimado: Record<string, number> = {
  FTMO: 50,
  "The5ers": 30,
  "My Forex Funds": 10,
  "E8 Funding": 5,
  "Noctorial": 5,
};

const reseñasPorPlataforma: Record<string, string[]> = {
  FTMO: [
    "Para nuevos traders es un buen lugar para comenzar… ayuda a manejar la gestión de riesgos.",
    "Super worth it… cambiaron mis finanzas muy rápido, pagos el mismo día.",
    "La evaluación es exigente (10% objetivo)… pero ofrece coaching y oportunidades reales."
  ],
  "The5ers": [
    "Son una de las firmas más reputadas, spreads ajustados y legit.",
    "Gran experiencia como scalper, ¡ya hice dos retiros!",
    "Cobran comisiones altas para swing trading (swap elevado)."
  ],
  "My Forex Funds": [
    "Trustpilot: puntuación de 1.7/5; varios traders reportan estafa.",
    "Algunos opinan que es una estafa—pagas y no entregan la cuenta.",
    "Sin respuestas a las reseñas negativas."
  ],
  "E8 Funding": [
    "No hay datos notorios, podrían ser poco conocidos pero sinceros."
  ],
  "Noctorial": [
    "Muy flexible con tiempo, buena plataforma emergente."
  ],
};

const preguntasFrecuentes = [
  {
    pregunta: "¿Cuál es la mejor cuenta fondeada para principiantes?",
    respuesta: "Depende de tu estilo de trading, pero muchas plataformas ofrecen cuentas con condiciones flexibles para empezar."
  },
  {
    pregunta: "¿Qué pasa si no paso la evaluación?",
    respuesta: "Generalmente puedes volver a intentarlo, algunas plataformas incluso ofrecen repeticiones gratuitas si no pierdes capital."
  },
  {
    pregunta: "¿Se puede operar fines de semana?",
    respuesta: "Solo algunas plataformas lo permiten. Usa los filtros para encontrar cuáles."
  },
  {
    pregunta: "¿Qué diferencia hay entre fase única y cuentas con dos fases?",
    respuesta: "La fase única permite acceder más rápido a una cuenta real, pero suele tener reglas más estrictas desde el inicio."
  },
  {
    pregunta: "¿Qué pasa si alcanzo el objetivo antes del tiempo mínimo?",
    respuesta: "Muchas plataformas exigen operar un mínimo de días por fase, incluso si llegas antes al objetivo."
  },
  {
    pregunta: "¿Me devuelven el dinero si fallo la evaluación?",
    respuesta: "No, salvo promociones específicas. El coste suele ser por participar, no es reembolsable."
  },
  {
    pregunta: "¿Puedo utilizar robots de trading o EA?",
    respuesta: "Depende de la plataforma. Algunas los permiten si son de tu autoría, otras los prohíben totalmente."
  },
  {
    pregunta: "¿Cómo y cuándo se paga?",
    respuesta: "Normalmente se paga antes de comenzar la evaluación, y algunos brokers ofrecen múltiples métodos de pago (tarjeta, crypto, PayPal)."
  },
];
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
    const tienePrecioMaximo = filtros.precioMaximo === 0 || cuenta.precios.some((p) => p <= filtros.precioMaximo);
    const cumpleCapitalExacto =
      filtros.capitalSeleccionado === 0 || cuenta.capitales.some((c) => c === filtros.capitalSeleccionado);
    const cumpleObjetivoF1 = cuenta.objetivo_fase1 >= filtros.objetivoFase1Minimo;
    const cumpleObjetivoF2 = cuenta.objetivo_fase2 >= filtros.objetivoFase2Minimo;
    const cumpleMantieneFinde = !filtros.mantieneFinde || cuenta.mantiene_finde;
    const cumpleFaseUnica = !filtros.faseUnica || cuenta.fase_unica;
    const cumpleTiempoFase =
      filtros.tiempoFase === "" || cuenta.tiempoFase.toLowerCase().includes(filtros.tiempoFase.toLowerCase());
    const cumpleNumeroFases =
      filtros.numeroFases === 0 || (cuenta.fase_unica ? 1 : 2) === filtros.numeroFases;

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

  const plataformasSeleccionadas = cuentasFiltradas.map((c) => c.nombre);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <Filtros filtros={filtros} setFiltros={setFiltros} />

      {tieneFiltrosAplicados(filtros) && (
        <>
          {cuentasFiltradas.length === 0 ? (
            <p className="text-center text-red-400 mt-8">No hay cuentas que cumplan esos criterios.</p>
          ) : (
            <>
              {cuentasFiltradas.map((cuenta, idx) => (
                <CuentaCard key={idx} cuenta={cuenta} />
              ))}

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-teal-400 mb-4">Estadísticas del mercado</h2>
                <p className="text-gray-300 mb-4">Estas plataformas son las más populares entre traders fondeados:</p>
                <ul className="list-disc pl-6 text-gray-300">
                  {plataformasSeleccionadas.map((nombre, idx) => (
                    <li key={idx}>{nombre} — Uso estimado: {usoEstimado[nombre] ?? 0}%</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-teal-400 mb-4">Opiniones reales de traders</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {plataformasSeleccionadas.map((plataforma, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-600">
                      <h3 className="text-lg font-semibold text-white mb-2">{plataforma}</h3>
                      {reseñasPorPlataforma[plataforma]?.map((texto, i) => (
                        <p key={i} className={
                          i === 0 ? "text-green-400 text-sm mb-2" :
                            i === 1 ? "text-yellow-400 text-sm mb-2" :
                              "text-red-400 text-sm"
                        }>
                          “{texto}”
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">Preguntas Frecuentes</h2>
        <div className="grid gap-4 text-gray-300 max-w-4xl mx-auto">
          {preguntasFrecuentes.map((faq, idx) => (
            <details key={idx} className="p-4 rounded-md border border-gray-700">
              <summary className="cursor-pointer font-semibold text-white">{faq.pregunta}</summary>
              <p className="mt-2 text-gray-300">{faq.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </div >
  );
}
