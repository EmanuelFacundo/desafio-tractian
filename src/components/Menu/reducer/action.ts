import Axios from 'axios'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

const BASE_URL = process.env.REACT_APP_DATABASE_API

export  function getCompanies(){
  
  return (dispatch: Dispatch<AnyAction>) => {
    Axios.get(`${BASE_URL}/companies`)
      .then(resp => {
        dispatch({
          type: "GET_COMPANIES",
          payload: resp.data
        })
      })
      .catch(e => console.log(e.message));
  }
}