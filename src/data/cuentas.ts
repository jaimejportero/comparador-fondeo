export interface CuentaFondeada {
  nombre: string;
  capitales: number[];
  precios: number[];               // price for each capital tier
  tiempoFase: string;
  tiempoFaseTipo?: "ilimitado" | "30-60" | "otro";
  objetivo_fase1: number;
  objetivo_fase2: number;
  dias_min_fase1?: number;         // si aplica
  dias_min_fase2?: number;
  precio_original?: number;
  fase_unica?: boolean;
  mantiene_finde: boolean;
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
  },
  {
    nombre: "E8 Funding",
    capitales: [25000, 50000, 100000, 250000],
    precios: [228, 448, 868, 2188],
    tiempoFase: "Ilimitado, fase1:30d, fase2:60d",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 0,
    dias_min_fase2: 0,
    fase_unica: false,
    mantiene_finde: false,
  },
  {
    nombre: "My Forex Funds",
    capitales: [10000, 20000, 50000, 100000, 200000],
    precios: [84, 139, 299, 499, 979],
    tiempoFase: "30d fase1, 60d fase2 o ilimitado si es reciente",
    tiempoFaseTipo: "30-60",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 5,
    dias_min_fase2: 5,
    fase_unica: false,
    mantiene_finde: true,
  },
  {
    nombre: "Noctorial",
    capitales: [5000, 10000, 25000, 50000, 100000, 250000],
    precios: [65, 129, 249, 275, 499, 1249],
    tiempoFase: "Ilimitado tras 5d/7d mínimos por fase",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: 5,
    dias_min_fase2: 7,
    fase_unica: false,
    mantiene_finde: true,
  },
  {
    nombre: "The5ers",
    capitales: [5000, 10000, 20000, 60000, 100000, 250000],
    precios: [130, 260, 450, 1200, 1950, 4500],
    tiempoFase: "Ilimitado (High Stakes y Bootcamp)",
    tiempoFaseTipo: "ilimitado",
    objetivo_fase1: 8,
    objetivo_fase2: 5,
    dias_min_fase1: undefined,
    dias_min_fase2: undefined,
    fase_unica: false,
    mantiene_finde: false,
  },
];
