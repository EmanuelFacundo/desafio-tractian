import { combineReducers } from 'redux'

import home from '../components/Home/reducer'

const rootReducer = combineReducers({
  data: home
})

export default rootReducer