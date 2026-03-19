import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CapitalData {
  operacion: number;
  capital: number;
}
import { usePageMeta } from "../hooks/usePageMeta";

export default function SimuladorCurvaCapital() {
  usePageMeta({
    title: "Simulador de Curva de Capital | FundedTools",
    description:
      "Simula la evolución de tu capital según tu winrate, ratio riesgo/beneficio y número de operaciones. Visualiza rachas y comprende el impacto del riesgo.",
  });

  const [capitalInicial, setCapitalInicial] = useState("10000");
  const [riesgoPct, setRiesgoPct] = useState("1");
  const [winrate, setWinrate] = useState("55");
  const [rrRatio, setRrRatio] = useState("2");
  const [operaciones, setOperaciones] = useState("100");
  const [curvaCapital, setCurvaCapital] = useState<CapitalData[]>([]);

  const simular = () => {
    const capital = parseFloat(capitalInicial);
    const riesgo = parseFloat(riesgoPct) / 100;
    const win = parseFloat(winrate) / 100;
    const rr = parseFloat(rrRatio);
    const numOps = parseInt(operaciones);

    if (isNaN(capital) || isNaN(riesgo) || isNaN(win) || isNaN(rr) || isNaN(numOps)) return;
    if (capital <= 0 || riesgo <= 0 || win <= 0 || rr <= 0 || numOps <= 0) {
      alert("Todos los valores deben ser mayores que 0");
      return;
    }
    let capitalActual = capital;
    const riesgoMonetario = capital * riesgo;
    const resultados: CapitalData[] = [{ operacion: 0, capital: capitalActual }];

    for (let i = 1; i <= numOps; i++) {
      const gano = Math.random() < win;
      capitalActual += gano ? riesgoMonetario * rr : -riesgoMonetario;
      resultados.push({ operacion: i, capital: parseFloat(capitalActual.toFixed(2)) });
    }

    setCurvaCapital(resultados);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700">

        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">📈 Simulador de Curva de Capital</h1>
        <div className="mb-6 text-gray-300 text-base leading-relaxed space-y-4">
          <p>
            Este simulador te permite ver la evolución de tu capital a lo largo de múltiples operaciones según tu estrategia de trading. Es una herramienta perfecta para evaluar el impacto de tus parámetros de riesgo antes de aplicarlos en real.
          </p>
          <p>
            Ajusta el porcentaje de riesgo por operación, el winrate (porcentaje de aciertos), el ratio riesgo/beneficio (RR) y el número total de operaciones. La simulación genera resultados aleatorios dentro de tus probabilidades, permitiéndote visualizar rachas ganadoras y perdedoras con un enfoque práctico y educativo.
          </p>
        </div>

        <div className="mb-8 text-gray-300 space-y-4 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">¿Qué es un simulador de curva de capital?</h2>
          <p>
            Permite visualizar cómo evoluciona tu capital a lo largo del tiempo en función de tus parámetros de trading:
            <strong> riesgo por operación</strong>, <strong>probabilidad de acierto (winrate)</strong>, y <strong>relación riesgo/beneficio (RR)</strong>.
          </p>
          <p>
            Es una herramienta ideal para entender la importancia de la gestión del riesgo, y cómo incluso con estrategias ganadoras, las rachas negativas son inevitables. Úsala para afinar tu sistema antes de arriesgar capital real.
          </p>
          <p>
            La simulación se basa en operaciones aleatorias según tu porcentaje de acierto, ofreciendo una representación realista y educativa del comportamiento del capital en el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-gray-300 mb-2">💼 Capital inicial (€)</label>
            <input
              type="number"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">🎯 % de riesgo por operación</label>
            <input
              type="number"
              value={riesgoPct}
              onChange={(e) => setRiesgoPct(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">✅ Probabilidad de acierto (winrate %)</label>
            <input
              type="number"
              value={winrate}
              onChange={(e) => setWinrate(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">📊 Ratio riesgo/beneficio (RR)</label>
            <input
              type="number"
              value={rrRatio}
              onChange={(e) => setRrRatio(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">🔢 Número de operaciones</label>
            <input
              type="number"
              value={operaciones}
              onChange={(e) => setOperaciones(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
        </div>

        <button
          onClick={simular}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-bold text-lg"
        >
          Simular curva
        </button>

        {curvaCapital.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl text-center font-bold text-teal-400 mb-4">📉 Evolución del capital</h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={curvaCapital}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="operacion" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="capital" stroke="#14b8a6" name="Capital" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="mt-12 text-gray-300 space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">❓ Preguntas frecuentes</h2>

          <div>
            <strong>¿Qué utilidad tiene este simulador?</strong>
            <p>Te permite entender cómo la gestión del riesgo, el winrate y el RR impactan en la evolución de tu capital a lo largo del tiempo.</p>
          </div>

          <div>
            <strong>¿Es realista esta simulación?</strong>
            <p>Representa una simplificación con operaciones aleatorias, pero es muy útil para visualizar rachas y comprender la psicología del riesgo.</p>
          </div>

          <div>
            <strong>¿Qué pasa si tengo un buen sistema pero pierdo muchas seguidas?</strong>
            <p>Es completamente normal. Incluso con una estrategia sólida, las rachas negativas ocurren. Por eso la gestión del riesgo es tan importante.</p>
          </div>

          <div>
            <strong>¿Cuántas operaciones se recomienda simular?</strong>
            <p>Cuantas más, mejor para obtener una visión más global. Se suelen usar entre 100 y 1000 para simular un año o varios meses de trading.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
