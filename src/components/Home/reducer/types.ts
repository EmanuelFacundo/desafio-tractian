export type stateType = {
  assets: Array<assetsType>;
  units: Array<unitsType>;
  users: Array<usersType>;
  companies: Array<companiesType>;
}

export type actionDBType = {
  type: string
  payload: stateType
}

export type assetsType = {
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
    lastUptimeAt: string;
  }
  unitId: number;
  companyId: number;

}

export type unitsType = {
  id: number;
  name: string;
  company: string;
}

export type usersType = {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}

export type companiesType = {
  id: number;
  name: string;
}