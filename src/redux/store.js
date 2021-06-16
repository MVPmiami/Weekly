import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/index'

let store = createStore(reducer, applyMiddleware(thunk));

/*store.subscribe(() => console.log(store.getState()))
console.log(store.getState())*/

export default store;