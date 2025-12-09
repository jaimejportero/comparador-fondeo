import { useState } from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  ErrorBar,
} from "recharts";

interface Vela {
  name: string;
  open: number;
  close: number;
  high: number;
  low: number;
  error: {
    y: number;
    yBottom: number;
  };
}

export default function CalculadoraStops() {
  const [entrada, setEntrada] = useState("");
  const [riesgoPct, setRiesgoPct] = useState("");
  const [relacion, setRelacion] = useState("");
  const [resultado, setResultado] = useState<{
    stop: number;
    take: number;
    datosGrafico: Vela[];
  }>({
    stop: 0,
    take: 0,
    datosGrafico: [],
  });

  const calcular = () => {
    const precio = parseFloat(entrada.toString());
    const riesgo = parseFloat(riesgoPct.toString()) / 100;
    const rr = parseFloat(relacion.toString());

    if (isNaN(precio) || isNaN(riesgo) || isNaN(rr)) return;
    if (precio <= 0 || riesgo <= 0 || rr <= 0) {
      alert("Todos los valores deben ser mayores que 0");
      return;
    }
    const stop = +(precio - precio * riesgo).toFixed(2);
    const take = +(precio + precio * riesgo * rr).toFixed(2);

    const datosGrafico = [
      {
        name: "Vela 1",
        open: precio,
        close: precio * 0.99,
        high: precio * 1.01,
        low: precio * 0.98,
        error: { y: precio * 1.01, yBottom: precio * 0.98 },
      },
      {
        name: "Vela 2",
        open: precio * 0.99,
        close: precio * 1.01,
        high: precio * 1.02,
        low: precio * 0.98,
        error: { y: precio * 1.02, yBottom: precio * 0.98 },
      },
      {
        name: "Vela 3",
        open: precio * 1.01,
        close: take,
        high: take * 1.01,
        low: precio * 1.0,
        error: { y: take * 1.01, yBottom: precio * 1.0 },
      },
      {
        name: "Vela 4",
        open: precio,
        close: stop,
        high: precio * 1.01,
        low: stop * 0.98,
        error: { y: precio * 1.01, yBottom: stop * 0.98 },
      },
    ];

    setResultado({ stop, take, datosGrafico });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">

        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          🎯 Calculadora de Stop Loss / Take Profit
        </h1>
        <div className="mb-6 text-gray-300 space-y-4 text-base leading-relaxed">
          <p>
            Calcular correctamente tus niveles de salida es una de las habilidades más importantes en el trading. Esta herramienta te permite determinar de forma rápida y visual tus valores ideales de <strong>Stop Loss</strong> y <strong>Take Profit</strong> en base al porcentaje de riesgo y la relación riesgo/beneficio que elijas.
          </p>
          <p>
            Es especialmente útil si operas con cuentas fondeadas, donde controlar el drawdown es vital para no incumplir las reglas de gestión de riesgo de la plataforma. Además, te permite visualizar gráficamente los movimientos potenciales del mercado con velas simuladas.
          </p>
        </div>
        <div className="mb-8 text-gray-300 space-y-4 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">¿Para qué sirve esta calculadora?</h2>
          <p>
            Esta herramienta te ayuda a calcular automáticamente los niveles de salida ideales en tus operaciones de trading: el <strong>Stop Loss</strong> para limitar pérdidas y el <strong>Take Profit</strong> para asegurar beneficios.
          </p>
          <p>
            Introduciendo tu precio de entrada, el porcentaje de riesgo y la relación riesgo-beneficio deseada, obtendrás valores óptimos para proteger tu cuenta y maximizar resultados.
          </p>
          <p>
            Es fundamental para aplicar una <strong>gestión del riesgo profesional</strong> y evitar decisiones impulsivas. Ideal tanto para traders de forex, acciones o criptomonedas.
          </p>
        </div>

        <p className="text-center text-gray-400 mb-6">
          Introduce tu precio de entrada, porcentaje de riesgo y relación riesgo-beneficio para conocer automáticamente tus niveles ideales y visualizarlos con velas japonesas simuladas.
        </p>

        <div className="grid gap-4 mb-6">
          <div>
            <label className="block mb-1 text-gray-300">💵 Precio de entrada</label>

            <input
              type="number"
              step="any" // permite decimales
              value={entrada}
              placeholder="Ej: 150"

              onChange={(e) => setEntrada(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />

          </div>
          <div>
            <label className="block mb-1 text-gray-300">📉 % de riesgo</label>
            <input
              type="number"
              step="any" // permite decimales
              placeholder="Ej: 2"

              value={riesgoPct}
              onChange={(e) => setRiesgoPct(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">📈 Relación riesgo/beneficio (1:x)</label>
            <input
              type="number"
              value={relacion}
              placeholder="Ej: 2"

              onChange={(e) => setRelacion(e.target.value)}
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

        {resultado.stop !== 0 && resultado.take !== 0 && (
          <div className="mt-6 bg-gray-800 p-4 rounded border border-gray-600">
            <h2 className="text-xl font-bold text-center mb-4">📊 Resultados</h2>
            <p className="text-green-400 mb-2">
              🔻 Stop Loss: <strong>{resultado.stop}</strong>
            </p>
            <p className="text-yellow-300 mb-4">
              🟢 Take Profit: <strong>{resultado.take}</strong>
            </p>

            <div className="h-64 bg-gray-900 rounded p-2">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={resultado.datosGrafico}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis
                    stroke="#ccc"
                    domain={[
                      Number((resultado.stop * 0.98).toFixed(2)),
                      Number((resultado.take * 1.02).toFixed(2))
                    ]}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#222",
                      borderColor: "#555",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="close" fill="#14b8a6" barSize={12} />
                  <ErrorBar
                    dataKey="error"
                    width={8}
                    strokeWidth={2}
                    stroke="#facc15"
                    direction="y"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 text-sm text-gray-300">
              <p>
                Con una relación 1:{relacion}, estarías arriesgando un <strong>{riesgoPct}%</strong> para ganar <strong>{+relacion * +riesgoPct}%</strong>.
              </p>
              <p className="mt-1">
                Esto implica que, ganando 1 de cada {+relacion + 1} operaciones, ya estarías en break even.
              </p>
            </div>
          </div>
        )}

        {/* Preguntas frecuentes */}
        <div className="mt-12 text-gray-300 space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">❓ Preguntas frecuentes</h2>
          <div>
            <strong>¿Qué es el Stop Loss?</strong>
            <p>Es un nivel de precio donde se cierra una operación para limitar las pérdidas en caso de que el mercado se mueva en contra.</p>
          </div>
          <div>
            <strong>¿Y el Take Profit?</strong>
            <p>Es el precio objetivo al que cierras una operación para asegurar las ganancias alcanzadas.</p>
          </div>
          <div>
            <strong>¿Qué relación riesgo-beneficio se recomienda?</strong>
            <p>Muchos traders utilizan una relación de 1:2 o superior para asegurar que las ganancias compensen las posibles pérdidas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
