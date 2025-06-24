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

export default function CalculadoraStops() {
  const [entrada, setEntrada] = useState(0);
  const [riesgoPct, setRiesgoPct] = useState(0);
  const [relacion, setRelacion] = useState(2);
  const [resultado, setResultado] = useState<{
    stop: number;
    take: number;
    datosGrafico: any[];
  } | null>(null);

  const calcular = () => {
    const precio = parseFloat(entrada.toString());
    const riesgo = parseFloat(riesgoPct.toString()) / 100;
    const rr = parseFloat(relacion.toString());

    if (isNaN(precio) || isNaN(riesgo) || isNaN(rr)) return;

    const stop = +(precio - precio * riesgo).toFixed(2);
    const take = +(precio + precio * riesgo * rr).toFixed(2);

    // Simulación de velas japonesas con errores embebidos
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
      <title>
        Calculadora de Stop Loss y Take Profit | Herramienta de Gestión de
        Riesgo
      </title>
      <meta
        name="description"
        content="Calcula automáticamente tus niveles de Stop Loss y Take Profit en función de tu riesgo y relación beneficio/riesgo. Visualiza en gráfico las posibles rutas del precio mediante velas japonesas."
      />
      <meta
        name="keywords"
        content="calculadora stop loss, take profit, trading gestión de riesgo, relación riesgo beneficio, velas japonesas"
      />
      <link
        rel="canonical"
        href="https://tusitio.com/calculadora-stop-loss"
      />

      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          🎯 Calculadora de Stop Loss / Take Profit
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Introduce tu precio de entrada, porcentaje de riesgo y relación
          riesgo-beneficio para conocer automáticamente tus niveles ideales y
          visualizarlos con velas japonesas simuladas.
        </p>

        <div className="grid gap-4 mb-6">
          <div>
            <label className="block mb-1 text-gray-300">💵 Precio de entrada</label>
            <input
              type="number"
              value={entrada}
              onChange={(e) => setEntrada(+e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">📉 % de riesgo</label>
            <input
              type="number"
              value={riesgoPct}
              onChange={(e) => setRiesgoPct(+e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">
              📈 Relación riesgo/beneficio (1:x)
            </label>
            <input
              type="number"
              value={relacion}
              onChange={(e) => setRelacion(+e.target.value)}
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

        {resultado && (
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
                    domain={[resultado.stop * 0.98, resultado.take * 1.02]}
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
                Con una relación 1:{relacion}, estarías arriesgando un{" "}
                <strong>{riesgoPct}%</strong> para ganar{" "}
                <strong>{+relacion * +riesgoPct}%</strong>.
              </p>
              <p className="mt-1">
                Esto implica que, ganando 1 de cada {+relacion + 1} operaciones,
                ya estarías en break even.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
