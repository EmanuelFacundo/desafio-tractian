import Axios from 'axios'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

const BASE_URL = process.env.REACT_APP_DATABASE_API

export function getDB() {
  
  return (dispatch: Dispatch<AnyAction>) => {
    Axios.get(`${BASE_URL}/db`)
      .then(resp => (
        dispatch({
          type: 'GET_DB',
          payload: resp.data
        })
      ))
  }
}