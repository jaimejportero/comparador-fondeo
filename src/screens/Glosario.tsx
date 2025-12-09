import { useState } from "react";

interface Termino {
  termino: string;
  definicion: string;
  categoria: string;
}

export default function Glosario() {
  const [busqueda, setBusqueda] = useState("");

  const glosario: Termino[] = [
    // ---------- Inversión y Finanzas ----------
    { termino: "Acción", definicion: "Parte del capital de una empresa que puedes comprar para participar en sus beneficios.", categoria: "Inversión" },
    { termino: "Activo", definicion: "Todo aquello que tiene valor económico y que puede generar ingresos o apreciación.", categoria: "Inversión" },
    { termino: "ETF", definicion: "Fondo que cotiza en bolsa y replica el comportamiento de un índice, sector o activo.", categoria: "Inversión" },
    { termino: "Liquidez", definicion: "Facilidad con la que un activo se puede convertir en efectivo sin afectar su precio.", categoria: "Inversión" },
    { termino: "Margen", definicion: "Dinero prestado o requisito de capital necesario para abrir una posición apalancada.", categoria: "Inversión" },
    { termino: "Apalancamiento", definicion: "Uso de fondos prestados para aumentar la exposición de inversión y potencialmente las ganancias o pérdidas.", categoria: "Inversión" },
    { termino: "Dividendos", definicion: "Distribución de ganancias de una empresa a sus accionistas.", categoria: "Inversión" },
    { termino: "Capital inicial", definicion: "Dinero con el que comienzas una inversión o cuenta de trading.", categoria: "Inversión" },
    { termino: "Capitalización", definicion: "Proceso de reinvertir intereses o ganancias para generar más rendimientos.", categoria: "Inversión" },
    { termino: "Aportación mensual", definicion: "Cantidad que agregas de manera regular a tu inversión para aumentar tu capital.", categoria: "Inversión" },

    // ---------- Trading ----------
    { termino: "Curva de capital", definicion: "Gráfico que muestra cómo cambia tu capital a lo largo del tiempo según tus operaciones.", categoria: "Trading" },
    { termino: "Drawdown", definicion: "Pérdida máxima desde un pico de capital hasta un mínimo antes de recuperarse.", categoria: "Trading" },
    { termino: "Gestión del riesgo", definicion: "Estrategias para limitar pérdidas y proteger tu capital en trading o inversiones.", categoria: "Trading" },
    { termino: "Ratio riesgo/beneficio (RR)", definicion: "Comparación entre la ganancia potencial y la pérdida potencial de una operación.", categoria: "Trading" },
    { termino: "Riesgo (%)", definicion: "Porcentaje del capital que estás dispuesto a perder en una operación.", categoria: "Trading" },
    { termino: "Stop Loss", definicion: "Nivel de precio donde se cierra una operación para limitar pérdidas.", categoria: "Trading" },
    { termino: "Take Profit", definicion: "Nivel de precio donde se cierra una operación para asegurar ganancias.", categoria: "Trading" },
    { termino: "Tamaño de posición", definicion: "Número de unidades de un activo que debes comprar o vender según tu capital y nivel de riesgo.", categoria: "Trading" },
    { termino: "Winrate", definicion: "Porcentaje de operaciones ganadoras respecto al total de operaciones realizadas.", categoria: "Trading" },
    { termino: "Velas japonesas", definicion: "Representación gráfica del movimiento del precio en un período, mostrando apertura, cierre, máximo y mínimo.", categoria: "Trading" },
    { termino: "Soporte", definicion: "Nivel de precio donde la demanda suele ser suficiente para detener la caída del precio.", categoria: "Trading" },
    { termino: "Resistencia", definicion: "Nivel de precio donde la oferta suele ser suficiente para detener la subida del precio.", categoria: "Trading" },
    { termino: "Swing Trading", definicion: "Estrategia que busca capturar movimientos de precio a medio plazo (días o semanas).", categoria: "Trading" },
    { termino: "Scalping", definicion: "Estrategia que busca ganancias muy pequeñas en operaciones de muy corto plazo.", categoria: "Trading" },
    { termino: "Gap", definicion: "Espacio en un gráfico donde no se negoció ningún precio, usualmente entre cierres y aperturas.", categoria: "Trading" },
    { termino: "Backtesting", definicion: "Prueba de una estrategia de trading usando datos históricos para evaluar su efectividad.", categoria: "Trading" },
    { termino: "Correlación", definicion: "Medida de cómo dos activos se mueven entre sí.", categoria: "Trading" },
    { termino: "Hedging", definicion: "Estrategia para reducir riesgos mediante operaciones compensatorias.", categoria: "Trading" },
    { termino: "Drawdown máximo", definicion: "Pérdida máxima registrada desde un pico hasta un valle en la curva de capital.", categoria: "Trading" },

    // ---------- Interés compuesto ----------
    { termino: "Interés compuesto", definicion: "Intereses que se generan sobre el capital inicial más los intereses previamente acumulados.", categoria: "Finanzas" },
    { termino: "Bear Market", definicion: "Mercado bajista, cuando los precios de los activos están en tendencia descendente.", categoria: "Finanzas" },
    { termino: "Blue Chip", definicion: "Empresas grandes y consolidadas con historial estable y confiable.", categoria: "Finanzas" },
    { termino: "Break Even", definicion: "Punto en el que tus ganancias y pérdidas se equilibran; no hay beneficio ni pérdida neta.", categoria: "Finanzas" },
    { termino: "Diversificación", definicion: "Estrategia de invertir en distintos activos para reducir riesgos.", categoria: "Finanzas" },
    { termino: "Volatilidad", definicion: "Medida de la variación del precio de un activo durante un periodo.", categoria: "Finanzas" },
  ];

  const glosarioFiltrado = glosario.filter((item) =>
    item.termino.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-8">
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-4 text-center">📚 Glosario de Términos</h1>

        <input
          type="text"
          placeholder="🔍 Buscar término..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white mb-6"
        />

        {glosarioFiltrado.length > 0 ? (
          <ul className="space-y-2">
            {glosarioFiltrado.map((item, i) => (
              <li key={i} className="bg-gray-800 p-3 rounded border border-gray-700">
                <span className="font-semibold text-teal-400">{item.termino}</span> ({item.categoria}): {item.definicion}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No se encontraron términos.</p>
        )}
      </div>
    </div>
  );
}
