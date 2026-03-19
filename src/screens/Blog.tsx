// ============================================================
// src/screens/Blog.tsx  —  listado de artículos
// ============================================================

import { Link } from "react-router-dom";
import { articulos } from "../data/articulos";
import { usePageMeta } from "../hooks/usePageMeta";

const categoriaColor: Record<string, string> = {
  "Prop Firms": "bg-teal-900 text-teal-300",
  "Gestión del Riesgo": "bg-red-900 text-red-300",
  "Análisis Técnico": "bg-blue-900 text-blue-300",
  "Educación Financiera": "bg-yellow-900 text-yellow-300",
  "Psicología": "bg-purple-900 text-purple-300",
  "Estrategia": "bg-green-900 text-green-300",
  "Mercados": "bg-orange-900 text-orange-300",
};

export default function Blog() {
  usePageMeta({
    title: "Blog de Trading | Guías y estrategias para traders | FundedTools",
    description:
      "Artículos sobre gestión del riesgo, prop firms, análisis técnico, psicología del trading e interés compuesto. Todo gratis en FundedTools.",
  });

  return (
    <div className="bg-gray-950 min-h-screen text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-3 text-center">Blog de Trading</h1>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Guías, estrategias y conceptos esenciales para traders. Todo el contenido es gratuito
          y está pensado para ayudarte a operar con más criterio y disciplina.
        </p>

        <div className="grid gap-6">
          {articulos.map((art) => (
            <Link
              key={art.slug}
              to={`/blog/${art.slug}`}
              className="block bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-teal-500 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${categoriaColor[art.categoria] ?? "bg-gray-700 text-gray-300"
                    }`}
                >
                  {art.categoria}
                </span>
                <span className="text-gray-500 text-xs">{art.tiempoLectura} de lectura</span>
                <span className="text-gray-600 text-xs ml-auto">
                  {new Date(art.fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 hover:text-teal-400 transition-colors">
                {art.titulo}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">{art.descripcion}</p>
              <span className="mt-4 inline-block text-teal-400 text-sm font-semibold">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


// ============================================================
// src/screens/Articulo.tsx  —  página individual de artículo
// ============================================================
// PÉGALO EN UN ARCHIVO SEPARADO: src/screens/Articulo.tsx

/*
import { useParams, Link, Navigate } from "react-router-dom";
import { articulos } from "../data/articulos";

export default function Articulo() {
  const { slug } = useParams<{ slug: string }>();
  const art = articulos.find((a) => a.slug === slug);

  if (!art) return <Navigate to="/blog" replace />;

  return (
    <div className="bg-gray-950 min-h-screen text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">

        <Link to="/blog" className="text-teal-400 text-sm mb-6 inline-block hover:underline">
          ← Volver al blog
        </Link>

        <div className="flex flex-wrap gap-2 items-center mb-4">
          <span className="text-xs bg-teal-900 text-teal-300 px-2 py-1 rounded-full font-semibold">
            {art.categoria}
          </span>
          <span className="text-gray-500 text-xs">{art.tiempoLectura} de lectura</span>
          <span className="text-gray-600 text-xs ml-auto">
            {new Date(art.fecha).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">{art.titulo}</h1>
        <p className="text-gray-400 text-base mb-8 border-l-4 border-teal-500 pl-4">
          {art.descripcion}
        </p>

        <article
          className="prose prose-invert prose-teal max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-gray-300 prose-ul:space-y-1
            prose-a:text-teal-400 prose-a:underline
            prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: art.contenido }}
        />

        <div className="mt-12 p-5 bg-gray-900 border border-gray-700 rounded-2xl">
          <h3 className="text-lg font-bold text-teal-400 mb-3">🛠 Herramientas relacionadas</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/comparador" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 transition-colors">
              Comparador de Prop Firms
            </Link>
            <Link to="/calculadora-tamanoPosicion" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 transition-colors">
              Calculadora de Posición
            </Link>
            <Link to="/calculadora-simulador-interes" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 transition-colors">
              Simulador de Interés Compuesto
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
*/
