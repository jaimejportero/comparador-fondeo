import { useEffect } from "react";
import stopsImg from "../imagenes/stops.png";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre FundedTools – Comparativa de cuentas fondeadas y herramientas para traders";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Conoce FundedTools, la plataforma independiente que te ayuda a comparar cuentas fondeadas y usar herramientas de trading responsables y educativas.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="bg-gray-900 w-full text-white px-4 sm:px-6 py-10">
      <div className="max-w-3xl mx-auto text-sm text-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Sobre FundedTools</h1>

        {/* Introducción editorial */}
        <p className="mb-6 text-base">
          FundedTools es una plataforma independiente creada para ayudarte a comparar y entender las distintas cuentas fondeadas disponibles en el mercado. Aquí encontrarás información clara, herramientas prácticas y una comunidad centrada en operar con responsabilidad y estrategia.
        </p>

        <h2 className="text-lg font-semibold text-white mb-4">¿Qué es FundedTools?</h2>
        <p className="mb-4">
          <strong className="text-white">FundedTools</strong> te ayuda a elegir la mejor cuenta fondeada entre plataformas como FTMO, MyForexFunds, Nocturnal Funding, The5ers, FXIFY y otras. Compara capitales, precios, reglas, objetivos y fases en un solo lugar, de forma visual e intuitiva.
        </p>

        <p className="mb-4">
          Además, dispones de calculadoras especializadas para traders: riesgo por operación, tamaño de posición, interés compuesto y simuladores de crecimiento. Todo pensado para ayudarte a operar con responsabilidad y maximizar tus resultados.
        </p>

        <p className="mb-4">
          Nuestro objetivo es ofrecer un análisis transparente de los requisitos, precios, fases y condiciones que cada empresa de fondeo exige a los traders. Para ello, combinamos información actualizada con herramientas prácticas que te ayudan a tomar mejores decisiones.
        </p>

        <h2 className="text-lg font-semibold text-white mt-8 mb-4">¿Quién está detrás?</h2>
        <p className="mb-4">
          Este sitio está gestionado por un desarrollador con pasión por el trading y la tecnología. No vendemos nada ni estamos afiliados a ninguna plataforma de fondeo, lo que nos permite mantener la independencia del contenido.
        </p>

        <p className="mb-4">
          Trabajamos para ofrecerte un espacio libre de humo, con comparativas reales, datos útiles y herramientas enfocadas en la gestión del riesgo, la psicología del trading y la educación financiera.
        </p>

        <h2 className="text-lg font-semibold text-white mt-8 mb-4">¿Quieres colaborar o aportar algo?</h2>
        <p className="mb-4">
          Si tienes sugerencias, preguntas o detectas algún error, no dudes en contactar desde la página de <a href="/soporte" className="text-teal-400 underline">Soporte</a>. Tu feedback nos ayuda a mejorar y seguir creciendo.
        </p>

        {/* Consejos para principiantes */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">Tips para principiantes</h2>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>No arriesgues más del 2% de tu capital por operación.</li>
          <li>Establece siempre un Stop Loss antes de abrir una operación.</li>
          <li>Comienza con cuentas de prueba antes de fondeadas reales.</li>
          <li>Revisa las reglas de cada cuenta fondeada antes de aplicar estrategias.</li>
        </ul>

        {/* Mini FAQ */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">Preguntas frecuentes</h2>
        <div className="mb-4">
          <strong>¿FundedTools ofrece señales de trading?</strong>
          <p>No, FundedTools solo proporciona herramientas de cálculo y comparativas educativas.</p>
        </div>
        <div className="mb-4">
          <strong>¿Es gratis usar la web?</strong>
          <p>Sí, todas las herramientas y comparativas son completamente gratuitas.</p>
        </div>
        <div className="mb-4">
          <strong>¿Cómo puedo contactar con el creador?</strong>
          <p>Desde la página de <a href="/soporte" className="text-teal-400 underline">Soporte</a>, donde puedes enviar dudas, sugerencias o reportar errores.</p>
        </div>

        {/* Imagen de ejemplo */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">Ejemplo de calculadora</h2>
        <img
          src={stopsImg}
          alt="Ejemplo de cálculo Stop Loss y Take Profit en FundedTools"
          className="rounded-lg mb-6"
        />

        {/* Contenido educativo extra */}
        <h2 className="text-lg font-semibold text-white mt-8 mb-4">Mini tutorial rápido</h2>
        <p className="mb-2">
          1️⃣ Ingresa tu precio de entrada, porcentaje de riesgo y relación riesgo/beneficio.
          <br />
          2️⃣ Haz clic en “Calcular” para obtener Stop Loss y Take Profit.
          <br />
          3️⃣ Observa la simulación gráfica con velas japonesas.
          <br />
          4️⃣ Ajusta tus parámetros según tu gestión de riesgo y estrategia.
        </p>
        <p className="mb-6">
          Con este enfoque podrás tomar decisiones más conscientes y controlar mejor tu capital mientras practicas trading responsable.
        </p>
      </div>
    </div>
  );
}
