const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

const defaultState = {
  input: ''
}

function setInputValueReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return { ...state, input: `${action.value}`}
    default:
      return state
  }
}

export {setInputValueReducer}