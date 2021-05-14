import { actionMenuType, companiesType } from "./types";

const INITIAL_STATE:companiesType = {
  list: [{
    id: 0,
    name: ""
  }]
}



export default function menuReducer(state:companiesType = INITIAL_STATE, action:actionMenuType){
  switch(action.type){
    case "GET_COMPANIES":
      return { ...state, list: action.payload }
    
      default:
        return state
  }

}