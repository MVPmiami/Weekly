import { combineReducers } from 'redux'
import setAccountDataReducer from './accountData'
import {setLoginNameReducer} from './loginName'

export default combineReducers({
  setAccountDataReducer,
  setLoginNameReducer
})