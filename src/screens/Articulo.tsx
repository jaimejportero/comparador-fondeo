// src/screens/Articulo.tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { articulos } from "../data/articulos";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Articulo() {
  const { slug } = useParams<{ slug: string }>();
  const art = articulos.find((a) => a.slug === slug);

  if (!art) return <Navigate to="/blog" replace />;
  usePageMeta({ title: `${art.titulo} | FundedTools`, description: art.descripcion });

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
          className="
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4
            [&_li]:text-gray-300
            [&_a]:text-teal-400 [&_a]:underline
            [&_strong]:text-white
            [&_em]:text-gray-200
          "
          dangerouslySetInnerHTML={{ __html: art.contenido }}
        />

        <div className="mt-12 p-5 bg-gray-900 border border-gray-700 rounded-2xl">
          <h3 className="text-lg font-bold text-teal-400 mb-3">🛠 Herramientas relacionadas</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/comparador"
              className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 transition-colors"
            >
              Comparador de Prop Firms
            </Link>
            <Link
              to="/calculadora-tamanoPosicion"
              className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 transition-colors"
            >
              Calculadora de Posición
            </Link>
            <Link
              to="/calculadora-simulador-interes"
              className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 transition-colors"
            >
              Simulador de Interés Compuesto
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
