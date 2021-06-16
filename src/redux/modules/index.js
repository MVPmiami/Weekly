import { combineReducers } from 'redux'
import setAccountDataReducer from './accountData'
import {setLoginNameReducer} from './loginName'
import setTasksDataReducer from './tasksData'

export default combineReducers({
  setAccountDataReducer,
  setLoginNameReducer,
  setTasksDataReducer
})