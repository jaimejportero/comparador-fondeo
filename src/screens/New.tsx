import { useEffect, useState } from "react";

interface Noticia {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: { name: string };
}

export default function NoticiasTrading() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("/api/noticias");
        const data = await res.json();
        setNoticias(data);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">📰 Noticias de Trading y Finanzas</h1>

        {loading ? (
          <p className="text-center text-gray-400">Cargando noticias...</p>
        ) : (
          <ul className="space-y-6">
            {noticias.map((noticia, i) => (
              <li key={i} className="bg-gray-800 p-4 rounded border border-gray-700">
                <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl text-teal-300 font-semibold mb-1">{noticia.title}</h2>
                </a>
                <p className="text-gray-400 text-sm mb-1">{noticia.description}</p>
                <p className="text-gray-500 text-xs">
                  {new Date(noticia.publishedAt).toLocaleString()} | {noticia.source.name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
