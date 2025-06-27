export default async function handler(req: any, res: any) {
  const r = await fetch("https://newsapi.org/v2/everything?q=trading+OR+forex+OR+mercados+financieros&language=es&sortBy=publishedAt&pageSize=10&apiKey=4c4a999b4e4641cda39400740e162ac9");
  const data = await r.json();
  res.status(200).json(data.articles); // Solo devolvemos los artículos
}
