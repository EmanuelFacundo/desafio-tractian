export type propsAssets = {
  asset: {
    id: number;
    sensors: Array<string>
    model: string;
    status: string;
    healthscore: number;
    name: string;
    image: string;
    specifications: {
      maxTemp: number;
      power?: number;
      rpm?: number;
    }
    metrics: {
      totalCollectsUptime: number;
      totalUptime: number;
      lastuptimeAt: number;
    }
    unitId: number;
    companyId: number;
  },
  unity?: {
    id: number;
    name: string;
    company: string;
  }

  company?: {
    id: number;
    name: string;
  }
}