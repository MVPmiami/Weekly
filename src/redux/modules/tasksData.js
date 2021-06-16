export const SET_TASKS = 'SET_TASKS';
const SET_STATUS_TASK = 'SET_STATUS_TASK';

const defaultState = {
  tasks: []              
}


export default function setTasksDataReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks}
    case SET_STATUS_TASK:
        function changeStatus (arr, id) {
          let newArr = arr.slice();
          for(let i = 0; i < newArr.length; i++){
            if(newArr[i].id === id){
              if(newArr[i].done){
                newArr[i].done = false;
              }else{
                newArr[i].done = true;
              }
            }
          }
          return newArr;
        }
        
        return { ...state, tasks: changeStatus(state.tasks, action.value.id)}
    default:
      return state
  }
}