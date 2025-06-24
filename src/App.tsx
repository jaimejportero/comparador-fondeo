import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Index from './screens/index'
import CalculadoraStops from './screens/CalculadoraStops'
import CalculadoraInteres from './screens/CalculadoraInteres'
import News from './screens/New'
import Soporte from './screens/Soporte'
import CalculadoraTamaño from './screens/CalculadoraTamaño'
import SimuladorCurvaCapital from './screens/SimuladorCurvaCapital'

export default function App() {
  return (
    <>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interes-compuesto" element={<CalculadoraInteres />} />
          <Route path="/stops" element={<CalculadoraStops />} />
          <Route path="/tamanoPosicion" element={<CalculadoraTamaño />} />
          <Route path="/simularCurva" element={<SimuladorCurvaCapital />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/soporte" element={<Soporte />} />
        </Routes>
      </div>
    </>
  )
}
