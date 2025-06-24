import { useState } from "react";

export default function CalculadoraTamañoPosicion() {
  const [capitalCuenta, setCapitalCuenta] = useState("");
  const [riesgoPct, setRiesgoPct] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [precioEntrada, setPrecioEntrada] = useState("");
  const [tipoActivo, setTipoActivo] = useState("acciones");
  const [resultado, setResultado] = useState<number | null>(null);
  const [aviso, setAviso] = useState("");

  const calcular = () => {
    const capital = parseFloat(capitalCuenta);
    const riesgo = parseFloat(riesgoPct) / 100;
    const stop = parseFloat(stopLoss);
    const entrada = parseFloat(precioEntrada);

    if (isNaN(capital) || isNaN(riesgo) || isNaN(stop) || isNaN(entrada)) return;
    if (stop <= 0 || riesgo <= 0 || capital <= 0 || entrada <= 0) {
      setAviso("⚠️ Todos los valores deben ser mayores que 0.");
      return;
    }

    const riesgoTotal = capital * riesgo;
    let tamaño = riesgoTotal / stop;

    const costeTotal = tamaño * entrada;

    if (costeTotal > capital) {
      tamaño = Math.floor(capital / entrada);
      setAviso("⚠️ El tamaño calculado excede tu capital. Se ajustó al máximo posible.");
    } else {
      setAviso("");
    }

    setResultado(+tamaño.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          📐 Calculadora de Tamaño de Posición
        </h1>

        <p className="text-gray-400 mb-6 text-center">
          Calcula automáticamente cuántas unidades abrir según tu capital, riesgo y stop loss. Esencial para traders que buscan proteger su cuenta.
        </p>

        <div className="grid gap-4 mb-6">
          <div>
            <label className="block text-gray-300 mb-1">📊 Tipo de activo</label>
            <select
              value={tipoActivo}
              onChange={(e) => setTipoActivo(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            >
              <option value="acciones">📈 Acciones</option>
              <option value="forex">💱 Forex</option>
              <option value="crypto">💹 Criptomonedas</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">💼 Capital de la cuenta (€)</label>
            <input
              type="number"
              value={capitalCuenta}
              onChange={(e) => setCapitalCuenta(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">🎯 % de riesgo por operación</label>
            <input
              type="number"
              value={riesgoPct}
              onChange={(e) => setRiesgoPct(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">
              📉 Stop Loss ({tipoActivo === "forex" ? "pips" : "€ por unidad"})
            </label>
            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">💰 Precio de entrada</label>
            <input
              type="number"
              value={precioEntrada}
              onChange={(e) => setPrecioEntrada(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
        </div>

        <button
          onClick={calcular}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-lg"
        >
          Calcular tamaño de posición
        </button>

        {resultado !== null && (
          <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-600 text-center">
            <p className="text-xl text-green-400 font-bold">
              🔢 Tamaño de posición recomendado: {resultado} unidades
            </p>
            {aviso && <p className="text-yellow-400 mt-2">{aviso}</p>}
            <p className="text-sm text-gray-400 mt-2">
              Este es el número ideal para cumplir tu gestión de riesgo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
