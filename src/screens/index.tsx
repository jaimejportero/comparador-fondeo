import { useState } from "react";
import { cuentasData } from "../data/cuentas";
import { CuentaCard } from "../components/CuentaCard";
import { Filtros } from "../components/Filtros";
import { usePageMeta } from "../hooks/usePageMeta";

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

// src/data/reseñas.ts
// Reseñas actualizadas a marzo 2026 basadas en Trustpilot, PropFirmMatch y comunidades de trading

export const reseñasPorPlataforma: Record<string, string[]> = {
  FTMO: [
    "✅ 4.8/5 en Trustpilot con +40.000 reseñas. Pagos rápidos, reglas claras y soporte 24/7. El referente del sector desde 2015.",
    "⚠️ Algunos traders reportan spreads elevados en cuenta fondeada respecto a la demo del reto.",
    "❌ Casos aislados de cuentas bloqueadas por estrategias consideradas 'gambling' sin previo aviso claro en las reglas."
  ],
  "The5ers": [
    "✅ 4.9/5 en Trustpilot con +21.000 reseñas. Reglas transparentes, sin letra pequeña y plan de escalado hasta $4M.",
    "⚠️ En marzo 2026 varios traders reportan retrasos en pagos de hasta 7 días hábiles.",
    "❌ Proceso de verificación KYC estricto: cuentas rechazadas si detectan otra persona cerca durante la entrevista de verificación."
  ],
  "E8 Funding": [
    "✅ 4.7/5 en Trustpilot. Tiempo ilimitado en ambas fases, buena variedad de activos incluyendo cripto y acciones.",
    "⚠️ Soporte algo más lento que FTMO o The5ers según usuarios recientes.",
    "❌ Apalancamiento máximo de 1:50, inferior al de la competencia (FTMO o The5ers ofrecen 1:100)."
  ],
  "Noctorial": [
    "✅ Plataforma flexible con drawdown total del 8% y precios competitivos desde 59€. Permite finde.",
    "⚠️ Comunidad y track record menores que firmas veteranas. Menos reviews públicas verificadas.",
    "❌ Al ser una firma más reciente, hay menos testimonios de pagos verificados en plataformas independientes."
  ],
  "The Funded Trader": [
    "✅ Amplia variedad de activos y tiempo ilimitado en el reto. Buena reputación general en 2025.",
    "⚠️ Comunidad reporta que los spreads han subido respecto a años anteriores.",
    "❌ Algunos traders comparan su evolución negativa con la de FTMO: más restricciones y menos transparencia."
  ],
  "Axi Select": [
    "✅ Sin coste de entrada, modelo único en el sector. Permite escalar hasta $1M con buen historial.",
    "⚠️ Acceso muy restringido: el Edge Score es difícil de mantener y muchos traders no superan la fase inicial.",
    "❌ No apto para la mayoría de traders retail. Orientado a profesionales con track record demostrable."
  ],
  "RebelsFunding (Copper)": [
    "✅ Entrada desde 25€, la más accesible del mercado. Buena opción para probar el modelo de prop firm.",
    "⚠️ El proceso de 4 fases es más largo que el estándar de 2 fases del resto del mercado.",
    "❌ Firma relativamente nueva con menos reseñas verificadas. Historial de pagos aún limitado."
  ],
  "Apex Trader Funding": [
    "✅ Referente absoluto para trading de futuros en EE.UU. Promociones frecuentes de hasta 80% de descuento.",
    "⚠️ Solo disponible para futuros: no apto para traders de Forex, cripto o acciones.",
    "❌ Drawdown total del 30% puede generar una falsa sensación de seguridad que lleva a sobreoperar."
  ],
  "BrightFunded": [
    "✅ Interfaz moderna, acepta criptomonedas como activo y como método de pago.",
    "⚠️ Firma relativamente nueva (2022), con menos historial de pagos verificados que FTMO o The5ers.",
    "❌ Comunidad pequeña y pocas reseñas independientes verificadas a fecha de 2026."
  ],
  "Trade The Pool": [
    "✅ La única prop firm especializada en acciones y ETFs americanos. Ideal para traders de bolsa.",
    "⚠️ No permite Forex ni cripto, lo que limita mucho su público objetivo.",
    "❌ La estructura de fase única con objetivo del 6% parece fácil, pero las reglas de riesgo son estrictas."
  ],
  FXIFY: [
    "✅ 5 tipos de reto distintos, incluyendo Instant Funding. Profit split hasta 90% y payouts bi-semanales.",
    "⚠️ La variedad de opciones puede ser confusa para traders sin experiencia previa en prop firms.",
    "❌ No ofrece cuentas swap-free, lo que penaliza a traders que mantienen posiciones varios días."
  ],
  "True Forex Funds": [
    "✅ Spreads bajos, permite cripto e índices, y ofrece opción de reto express de una sola fase.",
    "⚠️ Firma de tamaño medio con menos visibilidad que FTMO o The5ers en comunidades de trading.",
    "❌ Historial de pagos más limitado que las firmas veteranas, aunque sin incidentes graves reportados."
  ],
  "DNA Funded": [
    "✅ Una de las opciones más económicas del mercado desde 45€. Comunidad activa en Discord.",
    "⚠️ No permite mantener posiciones el fin de semana, lo que limita estrategias swing.",
    "❌ Variedad de activos reducida (Forex y acciones). Sin materias primas ni cripto."
  ],
  fundedprime: [
    "✅ Proceso de retiro claro y rápido según usuarios. Buena variedad de activos para el precio.",
    "⚠️ Firma poco conocida fuera de comunidades específicas. Baja visibilidad en Trustpilot.",
    "❌ Escasa presencia en comparativas independientes, lo que dificulta verificar su historial de pagos."
  ],
  "Hola Prime": [
    "✅ Precios muy competitivos desde 55€ con condiciones sencillas y sin reglas complejas.",
    "⚠️ Firma relativamente nueva con comunidad pequeña y pocas reseñas verificadas en 2026.",
    "❌ Poca transparencia en cuanto a historial de pagos y datos públicos de traders financiados."
  ],
  Profitex: [
    "✅ Drawdown diario del 7%, el más amplio de esta lista. Útil para estrategias más agresivas.",
    "⚠️ Solo permite Forex y fase única, lo que limita tanto el tipo de trader como la variedad operativa.",
    "❌ Firma con muy poca presencia pública y escasas reseñas verificadas. Difícil evaluar su fiabilidad."
  ],
  PipFarm: [
    "✅ Precio de entrada desde 39€ y comunidad activa con buen soporte según usuarios recientes.",
    "⚠️ Drawdown diario del 3%, el más restrictivo de esta lista. Requiere mucha precisión operativa.",
    "❌ Solo Forex disponible. Sin acceso a índices, metales ni criptomonedas."
  ],
  "OFP Funding": [
    "✅ Modelo de fase única con pagos reportados como rápidos por la comunidad.",
    "⚠️ Drawdown total del 4% es extremadamente restrictivo. Un par de malos días puede eliminar la cuenta.",
    "❌ Solo Forex e Índices, y sin opción de mantener posiciones el fin de semana."
  ],
  Topstep: [
    "✅ El referente mundial para futuros. Primeros $10.000 de beneficio al 100% para el trader.",
    "⚠️ Solo futuros: no válido para traders de Forex, cripto o acciones.",
    "❌ El modelo de pago (100% primeros $10K, luego 90%) es atractivo pero diferente al estándar del mercado."
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
  usePageMeta({
    title: "Comparador de Cuentas Fondeadas 2026 | FundedTools",
    description:
      "Compara las mejores prop firms de 2026: FTMO, The5ers, Noctorial, FXIFY y más. Filtra por precio, capital, fases y activos. Gratis y sin registro.",
  });
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
      <title>Comparador de Cuentas Fondeadas 2026 | Mejores cuentas de trading fondeado</title>
      <meta name="description" content="Compara las mejores cuentas fondeadas para traders en 2026. Filtra por precio, capital, activos, fases y más. ¡Encuentra tu cuenta ideal!" />
      <meta name="keywords" content="cuentas fondeadas, trading fondeado, prop firms, evaluación trading, cuentas de trading 2026, FTMO, The5ers, FXIFY, mejores cuentas fondeo" />
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