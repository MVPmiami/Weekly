export const SET_TASKS = 'SET_TASKS';
const SET_STATUS_TASK = 'SET_STATUS_TASK';
const DELETE_TASK = 'DELETE_TASK';
const ADD_TASK = 'ADD_TASK';


const defaultState = {
  tasks: []              
}


export default function setTasksDataReducer(state = defaultState, action) {
  switch (action.type) {

    case ADD_TASK:
      function addTask(arr, newTask) {
        let newArr = arr.slice();
        newArr.push(newTask)
        return newArr;
      }

      return { ...state, tasks: addTask(state.tasks, action.value)}

    case SET_TASKS:
      return { ...state, tasks: action.tasks}

    case DELETE_TASK:
      function deleteCompleteTask(arr, id) {
        let newArr = arr.slice();
        newArr = newArr.filter( task => task.id !== id)
          return newArr;
      }
        return { ...state, tasks: deleteCompleteTask(state.tasks, action.value.id)}

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