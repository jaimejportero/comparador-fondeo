import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./screens/index";
import CalculadoraStops from "./screens/CalculadoraStops";
import CalculadoraInteres from "./screens/CalculadoraInteres";
import Soporte from "./screens/Soporte";
import CalculadoraTamaño from "./screens/CalculadoraTamaño";
import SimuladorCurvaCapital from "./screens/SimuladorCurvaCapital";
import Privacidad from "./screens/Privacidad";
import AvisoLegal from "./screens/AvisoLegal";
import Cookies from "./screens/Cookies";
import TerminosCondiciones from "./screens/TerminosCondiciones";
import CookieBanner from "./components/CookieBanner";
import Sobre from "./screens/Sobre";
import Faqs from "./screens/Faqs";
import NotFound from "./screens/NotFound";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1110746265632999";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/comparador" element={<Index />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/interes-compuesto" element={<CalculadoraInteres />} />
          <Route path="/stops" element={<CalculadoraStops />} />
          <Route path="/tamanoPosicion" element={<CalculadoraTamaño />} />
          <Route path="/simularCurva" element={<SimuladorCurvaCapital />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
