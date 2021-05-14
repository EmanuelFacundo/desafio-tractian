export type companyType = {
  id: number;
  name: string;
}

export type companiesType = {
  list: Array<companyType>
}


export type actionMenuType = {
  type: string;
  payload: companyType
}