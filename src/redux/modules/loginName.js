const SET_LOGIN_NAME = 'SET_LOGIN_NAME';

const defaultState = {
  loginName: 'Sign-in'
}

function setLoginNameReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOGIN_NAME:
      return { ...state, loginName: `${action.loginName}`}
    default:
      return state
  }
}

export {setLoginNameReducer}