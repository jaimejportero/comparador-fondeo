import type { CuentaFondeada } from "./types"; // ajusta el path si lo tienes en otro sitio

// ⚠️ CAMBIOS RESPECTO A TU VERSIÓN ORIGINAL:
// - My Forex Funds ELIMINADA: cerrada por reguladores en agosto 2023, caso CFTC
// - FTMO: precios actualizados (€155-€1080), capitales corregidos (sin 30k ni 80k ni 160k)
// - FTMO: mantiene_finde FALSE en cuenta Normal (solo Swing permite fin de semana en funded)
// - The5ers: precios actualizados, capitales corregidos, mantiene_finde TRUE
// - Noctorial: precios actualizados (€59-€1249), drawdown total corregido a 8%
// - E8 Funding: mantiene_finde TRUE (sí permite fin de semana en evaluación)
// - FXIFY: capitales y precios actualizados, max capital $400k

export const cuentasData: CuentaFondeada[] = [
  {
    nombre: "FTMO",
    capitales: [10000, 25000, 50000, 100000, 200000],
    precios: [155, 250, 345, 540, 1080], // EUR, precios estándar 2026
    tiempoFase: "Ilimitado (mín. 4 días por fase)",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    dias_min_fase1: 4,
    dias_min_fase2: 4,
    fase_unica: false,
    mantiene_finde: false, // cuenta Normal no permite finde en funded; Swing sí (cuenta aparte)
    activos: ["Forex", "Índices", "Materias primas", "Criptomonedas", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "E8 Funding",
    capitales: [25000, 50000, 100000, 250000],
    precios: [228, 448, 868, 2188],
    tiempoFase: "Ilimitado",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Metales", "Acciones", "Criptomonedas"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 8
  },
  // ❌ My Forex Funds ELIMINADA — cerrada por la CFTC en agosto 2023
  {
    nombre: "Noctorial",
    capitales: [5000, 10000, 25000, 50000, 100000, 250000],
    precios: [59, 99, 199, 275, 499, 1249], // EUR, actualizados 2026
    tiempoFase: "Ilimitado tras días mínimos",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 5,
    dias_min_fase2: 7,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Materias primas", "Criptomonedas", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 8 // drawdown total es 8% en Noctorial, no 10%
  },
  {
    nombre: "The5ers",
    capitales: [5000, 10000, 20000, 60000, 100000],
    precios: [39, 69, 119, 199, 299], // USD, programa High Stakes 2026
    tiempoFase: "Ilimitado",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 3, // 3 días rentables mínimo
    dias_min_fase2: 3,
    fase_unica: false,
    mantiene_finde: true, // permite overnight y fin de semana
    activos: ["Forex", "Índices", "Metales", "Oil", "Criptomonedas"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "The Funded Trader",
    capitales: [25000, 50000, 100000, 200000],
    precios: [99, 179, 299, 499],
    tiempoFase: "Ilimitado",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Materias primas", "Criptomonedas"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "Axi Select",
    capitales: [500000, 1000000],
    precios: [0], // sin coste de entrada
    tiempoFase: "Varias etapas por Edge Score",
    objetivo_fase1: 5,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "CFD"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: 10
  },
  {
    nombre: "RebelsFunding (Copper)",
    capitales: [5000, 10000, 25000, 50000, 100000, 250000],
    precios: [25, 50, 125, 250, 499, 1249],
    tiempoFase: "4 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "CFD"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "Apex Trader Funding",
    capitales: [25000, 50000, 100000, 150000, 250000, 300000],
    precios: [150, 250, 400, 600, 900, 1200],
    tiempoFase: "Evaluación + cuenta financiada",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Futuros"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: 30
  },
  {
    nombre: "BrightFunded",
    capitales: [100000, 200000, 400000],
    precios: [199, 349, 649],
    tiempoFase: "2 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Criptomonedas", "Índices", "Metales"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "Trade The Pool",
    capitales: [20000, 50000, 100000, 200000, 260000],
    precios: [99, 199, 349, 649, 749],
    tiempoFase: "1 fase evaluación",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 6,
    objetivo_fase2: 15,
    fase_unica: true,
    mantiene_finde: false,
    activos: ["Acciones", "ETFs"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: undefined
  },
  {
    nombre: "FXIFY",
    capitales: [5000, 10000, 25000, 50000, 100000, 200000, 400000],
    precios: [39, 69, 149, 249, 449, 799, 1399], // precios actualizados 2026
    tiempoFase: "Ilimitado",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "CFD", "Índices", "Materias primas", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "True Forex Funds",
    capitales: [10000, 25000, 50000, 100000],
    precios: [85, 189, 359, 629],
    tiempoFase: "2 fases o 1 express",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Criptomonedas", "Índices", "Materias primas"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "DNA Funded",
    capitales: [5000, 10000, 25000],
    precios: [45, 79, 139],
    tiempoFase: "1 o 2 fases + express",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: false,
    activos: ["Forex", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "fundedprime",
    capitales: [10000, 25000, 50000],
    precios: [89, 179, 329],
    tiempoFase: "2 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Metales"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "Hola Prime",
    capitales: [5000, 10000, 25000],
    precios: [55, 99, 199],
    tiempoFase: "1 o 2 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "CFD", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 8
  },
  {
    nombre: "Profitex",
    capitales: [10000, 25000],
    precios: [79, 149],
    tiempoFase: "1 fase",
    tiempoFaseTipo: "otro",
    objetivo_fase1: 8,
    objetivo_fase2: 0,
    fase_unica: true,
    mantiene_finde: false,
    activos: ["Forex"],
    perdidas_max_diaria: 7,
    perdidas_max_total: 10
  },
  {
    nombre: "PipFarm",
    capitales: [5000, 10000, 20000],
    precios: [39, 69, 119],
    tiempoFase: "1 o 2 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex"],
    perdidas_max_diaria: 3,
    perdidas_max_total: 10
  },
  {
    nombre: "OFP Funding",
    capitales: [10000, 25000],
    precios: [59, 129],
    tiempoFase: "1 fase",
    tiempoFaseTipo: "otro",
    objetivo_fase1: 10,
    objetivo_fase2: 0,
    fase_unica: true,
    mantiene_finde: false,
    activos: ["Forex", "Índices"],
    perdidas_max_diaria: 2,
    perdidas_max_total: 4
  },
  {
    nombre: "Topstep",
    capitales: [50000, 100000, 150000],
    precios: [165, 325, 375],
    tiempoFase: "Trading Combine (evaluación continua)",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 6,
    objetivo_fase2: 4,
    fase_unica: false,
    mantiene_finde: false,
    activos: ["Futuros"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: undefined
  }
];