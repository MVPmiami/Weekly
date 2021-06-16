import React from 'react';
import './card.css';
import Task from './../Task/Task'
import { connect } from 'react-redux';
// сделать удаление из карточки тасков и загрузкой изменений на бд
const Card = (store) => {
  const { tasks } = store.setTasksDataReducer;
  return (
    <div>
      <div className='card-wrapp hidden'>
        <div className='card-content'>
          {tasks.map( task => (
            <Task task={task} key={task.id} loginName={store.setLoginNameReducer.loginName}></Task>
          ))}
        </div>
        <div className="btn-add">ADD</div>
      </div>
    </div>
  )
}

export default connect(
  (store) => (store)
)(Card);