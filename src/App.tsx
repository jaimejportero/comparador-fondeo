import  { useState } from "react";
import { cuentasData } from "./data/cuentas";
import { CuentaCard } from "./components/CuentaCard";
import { Filtros } from "./components/Filtros";

export default function App() {
  const [filtros, setFiltros] = useState({
    capitalMinimo: 0,
    precioMaximo: 10000,
    mantieneFinde: false,
    faseUnica: false,
    numeroFases: 0,
    capitalSeleccionado: 0,
    costeMaximo: 10000,
    objetivoFase1Minimo: 0,
    objetivoFase2Minimo: 0,
    tiempoFase: "",
  });

  const cuentasFiltradas = cuentasData.filter((cuenta) => {
    const tieneCapitalMinimo = cuenta.capitales.some((c) => c >= filtros.capitalMinimo);
    const tienePrecioMaximo = cuenta.precios.some((p) => p <= filtros.precioMaximo);
    const tieneCosteMaximo = cuenta.precios.some((p) => p <= filtros.costeMaximo);
    const cumpleCapitalExacto =
      filtros.capitalSeleccionado === 0 || cuenta.capitales.includes(filtros.capitalSeleccionado);
    const cumpleObjetivoF1 = cuenta.objetivo_fase1 >= filtros.objetivoFase1Minimo;
    const cumpleObjetivoF2 = cuenta.objetivo_fase2 >= filtros.objetivoFase2Minimo;
    const cumpleMantieneFinde = !filtros.mantieneFinde || cuenta.mantiene_finde;
    const cumpleFaseUnica = !filtros.faseUnica || cuenta.fase_unica;
    const cumpleTiempoFase =
      filtros.tiempoFase === "" ||
      cuenta.tiempoFase.toLowerCase().includes(filtros.tiempoFase.toLowerCase());
    const cumpleNumeroFases =
      filtros.numeroFases === 0 ||
      (cuenta.fase_unica ? 1 : 2) === filtros.numeroFases;

    return (
      tieneCapitalMinimo &&
      tienePrecioMaximo &&
      tieneCosteMaximo &&
      cumpleCapitalExacto &&
      cumpleObjetivoF1 &&
      cumpleObjetivoF2 &&
      cumpleMantieneFinde &&
      cumpleFaseUnica &&
      cumpleTiempoFase &&
      cumpleNumeroFases
    );
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-400">
        Comparador de Cuentas Fondeadas
      </h1>
      <Filtros filtros={filtros} setFiltros={setFiltros} />
      {cuentasFiltradas.length === 0 ? (
        <p className="text-center text-red-400 mt-8">No hay cuentas que cumplan esos criterios.</p>
      ) : (
        cuentasFiltradas.map((cuenta, idx) => (
          <CuentaCard key={idx} cuenta={cuenta} />
        ))
      )}
    </div>
  );
}
