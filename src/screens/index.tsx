import { useState } from "react";
import { cuentasData } from "../data/cuentas";
import { CuentaCard } from "../components/CuentaCard";
import { Filtros } from "../components/Filtros";

const tieneFiltrosAplicados = (filtros: any) => {
  return (
    filtros.capitalMinimo > 0 ||
    filtros.precioMaximo > 0 ||
    filtros.costeMaximo > 0 ||
    filtros.capitalSeleccionado > 0 ||
    filtros.numeroFases > 0 ||
    filtros.objetivoFase1Minimo > 0 ||
    filtros.objetivoFase2Minimo > 0 ||
    filtros.tiempoFase !== "" ||
    filtros.activo !== "" ||
    filtros.mantieneFinde ||
    filtros.faseUnica
  );
};

export const usoEstimado: Record<string, number> = {
  FTMO: 50,
  "The5ers": 30,
  "My Forex Funds": 10,
  "E8 Funding": 5,
  "Noctorial": 5,
  "The Funded Trader": 3,
  "FXIFY": 2,
  "BrightFunded": 1,
  "Apex Trader Funding": 1,
  "Trade The Pool": 1,
  "Axi Select": 1,
  "RebelsFunding (Copper)": 1,
  "True Forex Funds": 1,
  "DNA Funded": 1,
  fundedprime: 1,
  "Hola Prime": 1,
  Profitex: 1,
  PipFarm: 1,
  "OFP Funding": 1,
  Topstep: 1
};

export const reseñasPorPlataforma: Record<string, string[]> = {
  FTMO: [
    "Para nuevos traders es un buen lugar para comenzar… ayuda a manejar la gestión de riesgos.",
    "Super worth it… cambiaron mis finanzas muy rápido, pagos el mismo día.",
    "La evaluación es exigente (10 % objetivo)… pero ofrece coaching y oportunidades reales."
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
  "The Funded Trader": [
    "Permite bastantes activos y tiene buen soporte.",
    "Payouts altos pero requiere disciplina.",
    "La app web es algo lenta."
  ],
  FXIFY: [
    "Crecimiento rápido en la industria, prometedor.",
    "Buenas condiciones para traders agresivos.",
    "Algunas dudas en la comunidad sobre soporte."
  ],
  BrightFunded: [
    "Interfaz moderna, aceptan criptos.",
    "Ideal para diversificar activos.",
    "Aún nuevos, falta reputación."
  ],
  "Apex Trader Funding": [
    "Muy populares entre futuros, buen apalancamiento.",
    "Poco drawdown diario.",
    "Tienen bastantes promociones."
  ],
  "Trade The Pool": [
    "Ideal para acciones americanas.",
    "Requiere experiencia previa en bolsa.",
    "Plataforma muy centrada en datos."
  ],
  "Axi Select": [
    "Sin coste inicial, pero difícil de acceder.",
    "Requiere constancia para mantener el Edge score.",
    "Modelo distinto al resto."
  ],
  "RebelsFunding (Copper)": [
    "Accesible desde 25€.",
    "Tiene varias fases pero claras.",
    "Plataforma nueva pero creciente."
  ],
  "True Forex Funds": [
    "Muy buena ejecución y spreads bajos.",
    "Permite operar cripto y tiene reglas claras.",
    "En crecimiento, con buena reputación."
  ],
  "DNA Funded": [
    "Reto económico para empezar.",
    "Evaluación exigente pero rápida.",
    "Apoyo por Discord activo."
  ],
  fundedprime: [
    "Reto estándar con buena variedad de activos.",
    "Proceso de retirada claro y rápido.",
    "Soporte técnico excelente."
  ],
  "Hola Prime": [
    "Opciones baratas para comenzar.",
    "Buena interfaz y condiciones simples.",
    "Plataforma poco conocida aún."
  ],
  Profitex: [
    "Ideal para traders agresivos.",
    "Drawdown diario más amplio de lo habitual.",
    "Plataforma nueva en evaluación."
  ],
  PipFarm: [
    "Buen soporte y comunidad activa.",
    "Opciones rápidas para fondeo.",
    "Límites algo ajustados."
  ],
  "OFP Funding": [
    "Drawdown estricto, ideal para disciplina.",
    "Pagos rápidos y cuenta clara.",
    "Algo limitada en activos."
  ],
  Topstep: [
    "Famosos por futuros, de los más confiables.",
    "Sin forex, pero excelente ejecución.",
    "Proceso largo pero formativo."
  ]
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
  }
];

export default function App() {
  const [filtros, setFiltros] = useState({
    capitalMinimo: 0,
    precioMaximo: 3000,
    costeMaximo: 0,
    mantieneFinde: false,
    faseUnica: false,
    numeroFases: 0,
    capitalSeleccionado: 0,
    objetivoFase1Minimo: 0,
    objetivoFase2Minimo: 0,
    tiempoFase: "",
    activo: ""
  });

  const cuentasFiltradas = cuentasData.filter((cuenta) => {
    const tieneCapitalMinimo = cuenta.capitales.some((c) => c >= filtros.capitalMinimo);
    const tienePrecioMaximo = filtros.precioMaximo === 0 || cuenta.precios.some((p) => p <= filtros.precioMaximo);
    const tieneCosteMaximo = filtros.costeMaximo === 0 || cuenta.precios.some((p) => p <= filtros.costeMaximo);
    const cumpleCapitalExacto = filtros.capitalSeleccionado === 0 || cuenta.capitales.some((c) => c === filtros.capitalSeleccionado);
    const cumpleObjetivoF1 = cuenta.objetivo_fase1 >= filtros.objetivoFase1Minimo;
    const cumpleObjetivoF2 = cuenta.objetivo_fase2 >= filtros.objetivoFase2Minimo;
    const cumpleMantieneFinde = !filtros.mantieneFinde || cuenta.mantiene_finde;
    const cumpleFaseUnica = !filtros.faseUnica || cuenta.fase_unica;
    const cumpleTiempoFase = filtros.tiempoFase === "" || cuenta.tiempoFaseTipo === filtros.tiempoFase;
    const cumpleNumeroFases = filtros.numeroFases === 0 || (cuenta.fase_unica ? 1 : 2) === filtros.numeroFases;
    const cumpleActivo = filtros.activo === "" || cuenta.activos.includes(filtros.activo);

    return (
      tieneCapitalMinimo &&
      tienePrecioMaximo &&
      tieneCosteMaximo &&
      cumpleCapitalExacto &&
      cumpleObjetivoF1 &&
      cumpleObjetivoF2 &&
      cumpleMantieneFinde &&
      cumpleFaseUnica &&
      cumpleTiempoFase &&
      cumpleNumeroFases &&
      cumpleActivo
    );
  });

  const plataformasSeleccionadas = cuentasFiltradas.map((c) => c.nombre);

  return (
    <>
    
        <title>Comparador de Cuentas Fondeadas 2025 | Mejores cuentas de trading fondeado</title>
        <meta name="description" content="Compara las mejores cuentas fondeadas para traders en 2025. Filtra por precio, capital, activos, fases y más. ¡Encuentra tu cuenta ideal!" />
        <meta name="keywords" content="cuentas fondeadas, trading fondeado, prop firms, evaluación trading, cuentas de trading 2025, FTMO, The5ers, FXIFY, mejores cuentas fondeo" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SaludVistosa" />
      <div className="min-h-screen bg-gray-950 text-white p-4">
        <Filtros filtros={filtros} setFiltros={setFiltros} />

      {tieneFiltrosAplicados(filtros) && (
        <>
          {cuentasFiltradas.length === 0 ? (
            <p className="text-center text-red-400 mt-8">No hay cuentas que cumplan esos criterios.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cuentasFiltradas.map((cuenta, idx) => (
                  <CuentaCard key={idx} cuenta={cuenta} />
                ))}
              </div>


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
            <details key={idx} className="bg-gray-800 p-4 rounded-md border border-gray-700">
              <summary className="cursor-pointer font-semibold text-white">{faq.pregunta}</summary>
              <p className="mt-2 text-gray-300">{faq.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}