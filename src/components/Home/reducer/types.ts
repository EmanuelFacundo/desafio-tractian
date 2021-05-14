export type stateType = {
  assets: assetsType;
  units: unitsType;
  users: usersType;
  companies: companiesType;
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
  specifications: Array<number>
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastuptimeAt: number;
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