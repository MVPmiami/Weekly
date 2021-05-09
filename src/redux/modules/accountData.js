export const SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA';


const defaultState = {
  notChangepar: [],
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

export function setAccountDataActionCreator() {
  return function(dispatch) {
    dispatch({type: `SET_ACCOUNT_DATA`, userName: 'Alex1', password: "12345"})
  }
}