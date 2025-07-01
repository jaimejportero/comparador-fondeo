import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface MesData {
  mes: number;
  capitalAcumulado: number;
  aportado: number;
  generado: number;
}

interface AñoData {
  año: number;
  capitalAcumulado: number;
  aportado: number;
  generado: number;
}

export default function CalculadoraInteres() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [mensual, setMensual] = useState("");
  const [interes, setInteres] = useState("");
  const [años, setAños] = useState("");
  const [datosAnuales, setDatosAnuales] = useState<AñoData[]>([]);

  const calcular = () => {
    const P = parseFloat(capitalInicial);
    const A = parseFloat(mensual);
    const r = parseFloat(interes) / 100 / 12;
    const n = parseFloat(años) * 12;

    if (isNaN(P) || isNaN(A) || isNaN(r) || isNaN(n)) return;

    const resultadoMensual: MesData[] = [];
    let capitalTotal = P;

    for (let mes = 1; mes <= n; mes++) {
      capitalTotal = capitalTotal * (1 + r) + A;
      const aportado = P + A * mes;
      const generado = capitalTotal - aportado;

      resultadoMensual.push({
        mes,
        capitalAcumulado: parseFloat(capitalTotal.toFixed(2)),
        aportado: parseFloat(aportado.toFixed(2)),
        generado: parseFloat(generado.toFixed(2)),
      });
    }

    const resultadoAnual: AñoData[] = Array.from(
      { length: Math.ceil(resultadoMensual.length / 12) },
      (_, i) => {
        const index = Math.min((i + 1) * 12 - 1, resultadoMensual.length - 1);
        const fila = resultadoMensual[index];
        return {
          año: i + 1,
          capitalAcumulado: fila.capitalAcumulado,
          aportado: fila.aportado,
          generado: fila.generado,
        };
      }
    );

    setDatosAnuales(resultadoAnual);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          📈 Calculadora de Interés Compuesto
        </h1>
        <div className="mb-8 text-gray-300 text-base leading-relaxed space-y-4">
          <p>
            Esta calculadora está diseñada para ayudarte a visualizar cómo crecería tu capital si aplicas el interés compuesto a lo largo del tiempo. Puedes ajustar la inversión inicial, la aportación mensual, el porcentaje de interés y la duración en años para simular diferentes escenarios financieros.
          </p>
          <p>
            Es una herramienta ideal para quienes desean planificar su futuro financiero, ya sea para alcanzar la libertad económica, ahorrar para una gran compra o simplemente comprender cómo afecta el tiempo a una inversión bien gestionada.
          </p>
        </div>
        {/* Explicación educativa */}
        <div className="mb-10 text-gray-300 space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">¿Qué es el interés compuesto?</h2>
          <p>
            El interés compuesto es una estrategia de acumulación de capital en la que los intereses generados por una inversión se reinvierten para generar nuevos intereses. Esto crea un efecto "bola de nieve" que puede multiplicar significativamente tu dinero con el paso del tiempo.
          </p>

          <h2 className="text-xl font-bold text-white">¿Cómo funciona?</h2>
          <p>
            Imagina que inviertes 1.000 €. Si esa inversión genera un 10% anual, al final del primer año tendrás 1.100 €. El segundo año, el 10% se aplica sobre 1.100 €, y así sucesivamente. Cuanto más tiempo dejes tu dinero crecer, mayor será el impacto del interés compuesto.
          </p>

          <h2 className="text-xl font-bold text-white">¿Por qué deberías aprovecharlo?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🔁 Genera intereses sobre intereses.</li>
            <li>⏳ Cuanto antes empieces, mayor será tu rentabilidad.</li>
            <li>📈 Ideal para planificar metas financieras a largo plazo como jubilación, compra de vivienda o libertad financiera.</li>
          </ul>

          <h2 className="text-xl font-bold text-white">Usa la calculadora y visualiza tu futuro</h2>
          <p>
            Esta herramienta te permite proyectar cuánto capital podrías acumular con una aportación mensual constante, un interés estimado y el paso del tiempo. Ideal para tomar decisiones inteligentes en tus finanzas personales.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 text-gray-300">Capital inicial (€)</label>
            <input
              type="number"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Aportación mensual (€)</label>
            <input
              type="number"
              value={mensual}
              onChange={(e) => setMensual(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Interés anual (%)</label>
            <input
              type="number"
              value={interes}
              onChange={(e) => setInteres(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Duración (años)</label>
            <input
              type="number"
              value={años}
              onChange={(e) => setAños(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>
        </div>

        <button
          onClick={calcular}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full font-semibold"
        >
          Calcular
        </button>

        {/* Resultado */}
        {datosAnuales.length > 0 && (
          <>
            <div className="mt-10">
              <h2 className="text-xl font-bold text-teal-400 mb-4">
                📊 Evolución del capital (anual)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={datosAnuales}>
                  <CartesianGrid stroke="#444" />
                  <XAxis dataKey="año" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="capitalAcumulado"
                    stroke="#14b8a6"
                    name="Capital acumulado"
                  />
                  <Line
                    type="monotone"
                    dataKey="aportado"
                    stroke="#facc15"
                    name="Aportado"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-10 overflow-auto">
              <h2 className="text-xl font-bold text-teal-400 mb-4">📋 Detalle anual</h2>
              <table className="w-full text-sm text-left border border-gray-700 text-gray-300">
                <thead className="bg-gray-800 text-gray-200">
                  <tr>
                    <th className="px-3 py-2">Año</th>
                    <th className="px-3 py-2">Capital acumulado (€)</th>
                    <th className="px-3 py-2">Aportado (€)</th>
                    <th className="px-3 py-2">Generado (€)</th>
                  </tr>
                </thead>
                <tbody>
                  {datosAnuales.map((fila, i) => (
                    <tr key={i} className="border-t border-gray-700">
                      <td className="px-3 py-2">{fila.año}</td>
                      <td className="px-3 py-2">
                        {fila.capitalAcumulado.toLocaleString()}
                      </td>
                      <td className="px-3 py-2">{fila.aportado.toLocaleString()}</td>
                      <td className="px-3 py-2 text-green-400">
                        {fila.generado.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
