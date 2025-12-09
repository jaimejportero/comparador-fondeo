const tipos = [
  {
    nombre: "Acciones",
    descripcion: "Representan una fracción del capital de una empresa. Comprar acciones te convierte en accionista, con derecho a dividendos y participación en la apreciación de la empresa.",
    ventajas: [
      "Potencial de crecimiento a medio/largo plazo",
      "Dividendos como ingreso pasivo",
      "Liquidez alta en mercados principales",
    ],
    desventajas: [
      "Volatilidad de mercado",
      "Riesgo empresarial",
      "Necesidad de análisis constante",
    ],
    ejemplo: "Invertir 1000€ en Apple (AAPL) durante 10 años ha dado una rentabilidad media anual ~12%."
  },
  {
    nombre: "Criptomonedas",
    descripcion: "Activos digitales descentralizados que usan criptografía para asegurar transacciones. Ejemplos: Bitcoin, Ethereum.",
    ventajas: [
      "Alto potencial de rentabilidad",
      "Innovación tecnológica",
      "Diversificación de cartera",
    ],
    desventajas: [
      "Volatilidad extrema",
      "Riesgos de seguridad",
      "Regulación cambiante",
    ],
    ejemplo: "Bitcoin tuvo una rentabilidad media anual histórica ~200% en sus primeros años, pero con grandes caídas."
  },
  {
    nombre: "Forex",
    descripcion: "Mercado de divisas global donde se compran y venden pares de monedas. Funciona 24/7.",
    ventajas: [
      "Alta liquidez",
      "Accesible desde brokers online",
      "Posibilidad de apalancamiento",
    ],
    desventajas: [
      "Apalancamiento puede amplificar pérdidas",
      "Requiere análisis técnico y fundamental sólido",
      "Alta competencia profesional",
    ],
    ejemplo: "Un trader con buen sistema puede lograr rentabilidades medias anuales del 10-15%, pero con alto riesgo."
  },
  {
    nombre: "ETFs (Fondos Cotizados)",
    descripcion: "Fondos que replican índices y se negocian como acciones. Ofrecen diversificación instantánea y comisiones bajas.",
    ventajas: [
      "Diversificación automática",
      "Liquidez y facilidad de compra/venta",
      "Bajos costes de gestión",
    ],
    desventajas: [
      "Exposición al mercado completo",
      "No buscan superar al índice",
      "Dependencia del índice replicado",
    ],
    ejemplo: "ETF S&P 500 ha dado una rentabilidad media anual ~10% durante las últimas décadas."
  },
  {
    nombre: "Fondos Indexados",
    descripcion: "Fondos que replican índices bursátiles específicos, buscando igualar la rentabilidad del índice.",
    ventajas: [
      "Coste muy bajo",
      "Diversificación automática",
      "Inversión pasiva simple",
    ],
    desventajas: [
      "No superan al índice",
      "Exposición total al mercado",
      "Rentabilidad depende de la evolución del índice",
    ],
    ejemplo: "Invertir en un fondo indexado Nasdaq-100 puede dar rentabilidades medias ~12% anual a largo plazo."
  },
];

export default function TiposInversion() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-teal-400 mb-6 text-center">
          💰 Diferentes Formas de Inversión
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
          Conocer las distintas formas de inversión, sus ventajas, desventajas y ejemplos históricos de rentabilidad te ayudará a construir una estrategia sólida y adaptada a tu perfil.
        </p>

        {tipos.map((tipo, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl transition duration-200">
            <h2 className="text-2xl font-bold text-teal-400 mb-3">{tipo.nombre}</h2>
            <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">{tipo.descripcion}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-1">✅ Ventajas</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed">
                  {tipo.ventajas.map((v, idx) => (
                    <li key={idx}>{v}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-1">❌ Desventajas</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed">
                  {tipo.desventajas.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-teal-400 text-gray-200">
              <strong>Ejemplo:</strong> {tipo.ejemplo}
            </div>
          </div>
        ))}

        <div className="text-center">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Cada tipo de inversión tiene su propio perfil de riesgo y potencial de rentabilidad. Combinar distintos instrumentos y aplicar gestión de riesgo es clave para un crecimiento sostenido de tu capital.
          </p>
        </div>
      </div>
    </div>
  );
}
