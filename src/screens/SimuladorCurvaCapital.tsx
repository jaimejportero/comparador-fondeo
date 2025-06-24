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

export default function SimuladorCurvaCapital() {
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
      </div>
    </div>
  );
}
