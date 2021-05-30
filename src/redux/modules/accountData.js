export const SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA';

const defaultState = {
  userName: '',
  password:''
}


export default function setAccountDataReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACCOUNT_DATA:
      return { ...state, userName: `${action.userName}`, password: `${action.password}` }
    default:
      return state
  }
}