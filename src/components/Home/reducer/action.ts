import Axios from 'axios'

const BASE_URL = process.env.REACT_APP_DATABASE_API

export async function getDB() {
  
  return (dispatch: (arg0: { type: string; payload: Object }) => any) => {
    Axios.get(`${BASE_URL}/db`)
      .then(resp => (
        dispatch({
          type: 'GET_DB',
          payload: resp.data
        })
      ))
  }
}