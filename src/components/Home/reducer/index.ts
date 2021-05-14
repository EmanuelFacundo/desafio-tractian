import { actionType, stateType } from "./types"

const INITIAL_STATE = {
  assets: {
    id: 0,
    sensors: [],
    model: "",
    status: "",
    healthscore: 0,
    name: "",
    image: "",
    specifications: [],
    metrics: {
      totalCollectsUptime: 0,
      totalUptime: 0,
      lastuptimeAt: 0
    },
    unitId: 0,
    companyId: 0,
  },
  units: {
    id: 0,
    name: "",
    company: ""
  },
  users: {
    id: 0,
    email: "",
    name: "",
    unitId: 0,
    companyId: 0
  },
  companies: {
    id: 0,
    name: ""
  }
}

export default function reducerHome(state: stateType = INITIAL_STATE, action: actionType) {
  switch (action.type) {
    case 'GET_DB':
      return { state: action.payload }
    default: 
      return state
  }

}