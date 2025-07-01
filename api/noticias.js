export default async function handler(req, res) {
  try {
    const r = await fetch("https://newsapi.org/v2/everything?q=trading+OR+forex+OR+mercados+financieros&language=es&sortBy=publishedAt&pageSize=10&apiKey=4c4a999b4e4641cda39400740e162ac9");
    
    // Asegúrate de que la respuesta fue exitosa
    if (!r.ok) {
      const errorText = await r.text();
      console.error("Respuesta no válida:", errorText);
      return res.status(500).json({ error: "Fallo al obtener noticias", detalle: errorText });
    }

    const data = await r.json();
    res.status(200).json(data.articles);
  } catch (error) {
    console.error("Error interno:", error);
    res.status(500).json({ error: "Error del servidor", detalle: error.message });
  }
}
