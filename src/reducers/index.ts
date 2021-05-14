import { combineReducers } from 'redux'

import home from '../components/Home/reducer'
import menuReducer from '../components/Menu/reducer'

const rootReducer = combineReducers({
  data: home,
  companies: menuReducer 
})

export default rootReducer