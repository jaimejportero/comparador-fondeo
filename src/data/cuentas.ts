export interface CuentaFondeada {
  nombre: string;
  capitales: number[];
  precios: number[];
  tiempoFase: string;
  tiempoFaseTipo?: "ilimitado" | "30-60" | "otro";
  objetivo_fase1: number;
  objetivo_fase2: number;
  dias_min_fase1?: number;
  dias_min_fase2?: number;
  precio_original?: number;
  fase_unica?: boolean;
  mantiene_finde: boolean;
  activos: string[];
  perdidas_max_diaria?: number;
  perdidas_max_total?: number;
}

export const cuentasData: CuentaFondeada[] = [
   {
    nombre: "FTMO",
    capitales: [10000, 20000, 30000, 80000, 100000, 160000],
    precios: [180, 340, 500, 860, 1000, 1600],
    tiempoFase: "Ilimitado (mín. 4 días por fase)",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    dias_min_fase1: 4,
    dias_min_fase2: 4,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Materias primas", "Criptomonedas", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "E8 Funding",
    capitales: [25000, 50000, 100000, 250000],
    precios: [228, 448, 868, 2188],
    tiempoFase: "Ilimitado, fase1:30d, fase2:60d",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: false,
    activos: ["Forex", "Índices", "Metales", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 8
  },
  {
    nombre: "My Forex Funds",
    capitales: [10000, 20000, 50000, 100000, 200000],
    precios: [84, 139, 299, 499, 979],
    tiempoFase: "30d fase1, 60d fase2",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 5,
    dias_min_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Materias primas", "Criptomonedas"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "Noctorial",
    capitales: [5000, 10000, 25000, 50000, 100000, 250000],
    precios: [65, 129, 249, 275, 499, 1249],
    tiempoFase: "Ilimitado tras 5‑7d mínimos",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 5,
    dias_min_fase2: 7,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex", "Índices", "Materias primas", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "The5ers",
    capitales: [5000, 10000, 20000, 60000, 100000, 250000],
    precios: [130, 260, 450, 1200, 1950, 4500],
    tiempoFase: "Ilimitado",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: false,
    activos: ["Forex", "Índices", "Materias primas", "Acciones"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10
  },
  {
    nombre: "The Funded Trader",
    capitales: [100000], // ejemplo
    precios: [259],
    tiempoFase: "2 fases + cuenta financiada",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex","Acciones","Futuros","CFD"],
    perdidas_max_diaria: 5, // 5%
    perdidas_max_total: 10   // 10% :contentReference[oaicite:1]{index=1}
  },
  {
    nombre: "Axi Select",
    capitales: [500000,1000000],
    precios: [0], // gratis
    tiempoFase: "varias etapas",
    objetivo_fase1: 5,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex","Índices","CFD"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: 10  // 10% por fase :contentReference[oaicite:2]{index=2}
  },
  {
    nombre: "RebelsFunding (Copper)",
    capitales: [5000,10000,25000,50000,100000,250000],
    precios: [25,50,125,250,499,1249],
    tiempoFase: "4 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex","CFD"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10  // :contentReference[oaicite:3]{index=3}
  },
  {
    nombre: "Apex Trader Funding",
    capitales: [25000,50000,100000,150000,250000,300000],
    precios: [150,250,400,600,900,1200],
    tiempoFase: "Evaluación + cuenta financiada",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Futuros"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: 30  // 30%, sube a 50% después :contentReference[oaicite:4]{index=4}
  },
  {
    nombre: "BrightFunded",
    capitales: [100000,200000,400000],
    precios: [199,349,649],
    tiempoFase: "2 fases",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex","Cripto","Índices","Metales"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10  // :contentReference[oaicite:5]{index=5}
  },
  {
    nombre: "Trade The Pool",
    capitales: [20000,50000,100000,200000,260000],
    precios: [99,199,349,649,749],
    tiempoFase: "1 fase evaluación",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 6,
    objetivo_fase2: 15,
    fase_unica: true,
    mantiene_finde: false,
    activos: ["Stocks","ETFs"],
    perdidas_max_diaria: undefined,
    perdidas_max_total: undefined // varía según cuenta pero suelen ser ~3x diaria :contentReference[oaicite:6]{index=6}
  },
  {
    nombre: "FXIFY",
    capitales: [5000,10000,20000,40000,400000],
    precios: [250,400,600,1000,2000],
    tiempoFase: "1–3 fases + Instant",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 10,
    objetivo_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
    activos: ["Forex","CFD","Futuros"],
    perdidas_max_diaria: 5,
    perdidas_max_total: 10  // máximo diario 3-5%, total 5-10%; instant trailing 8% :contentReference[oaicite:7]{index=7}
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
    activos: ["Forex", "Cripto", "Índices", "Materias primas"],
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
    capitales: [50000, 100000],
    precios: [165, 325],
    tiempoFase: "Trading Combine (2 fases)",
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
