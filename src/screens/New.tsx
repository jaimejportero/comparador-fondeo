import { useEffect, useState } from "react";

type Noticia = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export default function News() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = encodeURIComponent("https://www.investing.com/rss/news_25.rss");

        const res = await fetch(proxyUrl + targetUrl);
        const data = await res.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title")?.textContent || "",
          link: item.querySelector("link")?.textContent || "",
          pubDate: item.querySelector("pubDate")?.textContent || "",
          description: item.querySelector("description")?.textContent || "",
        }));
        setNoticias(items);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  if (loading) return <p className="text-gray-300">Cargando noticias...</p>;

  return (
    <div className="bg-gray-900 min-h-screen w-full text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-6">📰 Últimas Noticias del Mercado</h1>
        <div className="space-y-6">
          {noticias.map((noticia, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:scale-102 transition-transform">
              <a href={noticia.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-teal-400 hover:underline">
                {noticia.title}
              </a>
              <p className="text-gray-400 text-sm mb-2">{new Date(noticia.pubDate).toLocaleString()}</p>
              <p className="text-gray-300">{noticia.description.replace(/<[^>]*>?/gm, "")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
