import { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function CalculadoraTamañoPosicion() {
  usePageMeta({
    title: "Calculadora de Tamaño de Posición | FundedTools",
    description:
      "Calcula cuántas unidades abrir según tu capital, riesgo por operación y stop loss. Ideal para cuentas fondeadas y gestión profesional del riesgo.",
  });
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
    const stopPct = parseFloat(stopLoss) / 100; // ahora stopLoss es porcentaje
    const entrada = parseFloat(precioEntrada);

    if (isNaN(capital) || isNaN(riesgo) || isNaN(stopPct) || isNaN(entrada)) return;
    if (stopPct <= 0 || riesgo <= 0 || capital <= 0 || entrada <= 0) {
      setAviso("⚠️ Todos los valores deben ser mayores que 0.");
      return;
    }

    // convertimos porcentaje a valor absoluto del stop
    const stopValor = entrada * stopPct;

    const riesgoTotal = capital * riesgo;
    let tamaño = riesgoTotal / stopValor;

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
        <div className="mb-6 text-gray-300 text-base leading-relaxed space-y-4">
          <p>
            Una correcta gestión del riesgo empieza por saber exactamente cuántas unidades puedes operar sin poner en peligro tu cuenta. Esta herramienta está pensada para ayudarte a calcular de forma rápida y precisa tu tamaño de posición ideal según tu capital, nivel de riesgo y stop loss.
          </p>
          <p>
            Es especialmente útil para traders que operan con cuentas fondeadas o bajo reglas estrictas de control de drawdown. Con solo unos parámetros, sabrás cuántas unidades abrir en cada operación, ya sea en acciones, forex o criptomonedas.
          </p>
        </div>
        {/* Explicación educativa */}
        <div className="mb-10 text-gray-300 space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">
            ¿Qué es el tamaño de posición y para qué sirve?
          </h2>
          <p>
            El tamaño de posición es una herramienta esencial para controlar el riesgo en cada operación.
            Establecer cuántas unidades comprar o vender permite mantener la disciplina y evitar pérdidas
            mayores a lo planeado.
          </p>
          <p>
            Esta calculadora te ayuda a definir con precisión el número óptimo de unidades en función de tu
            capital disponible, tu nivel de riesgo por operación y la distancia al stop loss.
          </p>
          <p>
            💡 <strong>Ejemplo:</strong> Si tienes 10.000 € y arriesgas un 1% (100 €) por operación, y tu stop está a
            2€, deberías abrir una posición de 50 unidades.
          </p>
          <p>
            Gestionar bien tu tamaño de posición es uno de los pilares de una estrategia de trading sólida
            y profesional.
          </p>
        </div>

        {/* Formulario */}
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
              placeholder="Ej: 10.000"
              value={capitalCuenta}
              onChange={(e) => setCapitalCuenta(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">🎯 % de riesgo por operación</label>
            <input
              type="number"
              placeholder="Ej:2"
              value={riesgoPct}
              onChange={(e) => setRiesgoPct(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">
              📉 Stop Loss ({tipoActivo === "forex" ? "%" : "%"})
            </label>
            <input
              type="number"
              value={stopLoss}
              placeholder="Ej: 2"
              onChange={(e) => setStopLoss(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">💰 Precio de entrada</label>
            <input
              type="number"
              value={precioEntrada}
              placeholder="Ej: 100"
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
          <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-600 text-center shadow-lg">
            <p className="text-3xl text-green-400 font-extrabold mb-2">
              🔢 Tamaño de posición recomendado: {resultado} unidades
            </p>
            <p className="text-lg text-teal-400 mb-2">
              Riesgo aproximado: {(parseFloat(capitalCuenta) * parseFloat(riesgoPct) / 100).toLocaleString()} €
            </p>
            {aviso && <p className="text-yellow-400 mt-2">{aviso}</p>}
            <p className="text-sm text-gray-400 mt-2">
              Este es el número ideal para cumplir tu gestión de riesgo.
            </p>
          </div>
        )}


        {/* FAQ Educativa */}
        <div className="mt-12 text-gray-300 space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">❓ Preguntas frecuentes</h2>
          <div>
            <strong>¿Qué porcentaje de riesgo se recomienda por operación?</strong>
            <p>La mayoría de traders profesionales arriesgan entre un 0.5% y un 2% por operación.</p>
          </div>
          <div>
            <strong>¿Puedo usar esta calculadora para cualquier tipo de activo?</strong>
            <p>Sí, puedes usarla para acciones, forex, criptomonedas u otros. Solo ajusta los parámetros según el tipo de activo.</p>
          </div>
          <div>
            <strong>¿Qué pasa si el tamaño de posición calculado supera mi capital?</strong>
            <p>La herramienta ajusta automáticamente el tamaño para que nunca excedas tu capital disponible.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
