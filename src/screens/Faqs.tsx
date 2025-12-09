import tipsImg from "../imagenes/tips.png"; // reemplaza con tu imagen
import drawdownImg from "../imagenes/drawdown.jpg"; // reemplaza con tu imagen

export default function Faqs() {
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Preguntas Frecuentes</h1>

        <p className="mb-6 text-gray-300 text-base leading-relaxed">
          En esta sección respondemos a las dudas más comunes sobre las cuentas fondeadas y el uso de nuestras herramientas. Si estás empezando en el mundo del trading con capital proporcionado o simplemente quieres optimizar tu gestión del riesgo, aquí encontrarás respuestas claras y directas.
        </p>

        {/* Preguntas principales */}
        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué es una cuenta fondeada?</h2>
        <p className="mb-4">
          Es un tipo de cuenta que te ofrece una empresa para operar con su dinero. Si superas una prueba (normalmente con objetivos y reglas), te permiten operar capital real a cambio de una comisión o reparto de beneficios.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué plataformas compara FundedTools?</h2>
        <p className="mb-4">
          Comparamos cuentas como FTMO, The5ers, MyForexFunds, Nocturnal Funding y muchas más. Puedes ver los capitales, precios, fases y requisitos de cada una para tomar una decisión informada. Más detalles en la página <a href="/" className="text-teal-400 underline">Sobre FundedTools</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué calculadoras ofrece el sitio?</h2>
        <p className="mb-4">
          Actualmente ofrecemos herramientas para calcular interés compuesto, tamaño de posición, stop loss y take profit. También estamos trabajando en un simulador de curva de capital para que puedas visualizar tu progreso de forma más detallada. Navega a las calculaoras para probarlas.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿El contenido es imparcial?</h2>
        <p className="mb-4">
          Sí. FundedTools no está afiliado a ninguna empresa de fondeo. Toda la información presentada en el sitio ha sido investigada con el objetivo de ofrecer una comparativa transparente, imparcial y útil para los traders.
        </p>

        {/* Preguntas nuevas */}
        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué pasa si no supero la fase de prueba?</h2>
        <p className="mb-4">
          En la mayoría de plataformas puedes volver a intentarlo pagando de nuevo. Algunas ofrecen reintentos gratuitos si cumples ciertas condiciones (como no haber violado las reglas y haber operado consistentemente).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué significa “drawdown” y por qué es importante?</h2>
        <img src={drawdownImg} alt="Ilustración drawdown" className="w-full max-w-md rounded-lg mb-4"/>
        <p className="mb-4">
          El drawdown es la caída máxima del capital desde un pico. Las cuentas fondeadas suelen poner límites estrictos al drawdown diario o total. Superarlo puede significar la pérdida automática de la cuenta.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Puedo usar robots o EAs en cuentas fondeadas?</h2>
        <p className="mb-4">
          Depende de la empresa. Algunas lo permiten si no usas estrategias prohibidas como grid, martingala o arbitraje. Es importante leer los términos específicos de cada plataforma antes de operar con un bot.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo elijo la mejor empresa de fondeo?</h2>
        <p className="mb-4">
          Debes tener en cuenta factores como: capital ofrecido, coste del acceso, duración de las fases, reglas de riesgo, velocidad de pago y reputación en la comunidad. FundedTools te ayuda a comparar estos aspectos fácilmente.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Es necesario tener experiencia previa para optar a una cuenta fondeada?</h2>
        <p className="mb-4">
          No es obligatorio, pero sí muy recomendable. Las pruebas son exigentes y requieren conocimientos sólidos de análisis técnico, gestión de riesgo y psicología del trading. Puedes usar cuentas demo para prepararte antes de dar el salto.
        </p>

        {/* Tips visuales finales */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Tips rápidos para principiantes</h2>
        <img src={tipsImg} alt="Tips para principiantes" className="rounded-lg mb-4" width={100} />
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>No arriesgues más del 2% de tu capital por operación.</li>
          <li>Establece siempre un Stop Loss antes de abrir una operación.</li>
          <li>Comienza con cuentas demo para practicar sin riesgo.</li>
          <li>Revisa las reglas de cada cuenta fondeada antes de aplicar estrategias.</li>
          <li>Lleva un registro de tus operaciones y aprende de cada resultado.</li>
        </ul>

        <p className="text-gray-400 text-sm">
          Para cualquier duda o sugerencia, puedes contactar con el creador desde <a href="/soporte" className="text-teal-400 underline">Soporte</a>.
        </p>
      </div>
    </div>
  );
}
