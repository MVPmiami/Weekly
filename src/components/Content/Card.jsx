import React from 'react';
import './card.css';
import Task from './../Task/Task'
import { connect } from 'react-redux';
import Input from './../Input/inputNewTask';
import { db } from './../../firebase';
import firebase from 'firebase';
import {checkWorkLoad} from './../supFunctions/checkWorkLoad';

const Card = (store) => {
  const { tasks } = store.setTasksDataReducer;
  const { loginName } = store.setLoginNameReducer;

  const addTask = () => {
    let inputText = document.querySelector('.input').value

    let id = Math.random();

    store.dispatch({type: 'ADD_TASK', value: {id:id, title: `${inputText}`, done:false}});

    db.collection("users").where("userName", "==", `${loginName}`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let updateUser = db.collection("users").doc(doc.id);
          return updateUser.update({
            tasks: firebase.firestore.FieldValue.arrayUnion({id: id, title: `${inputText}`, done: false})
          })
          .then( () => {
            document.querySelector('.input').value = '';
            checkWorkLoad('ADD', tasks.length);
          } )
          .catch((error) => {
              console.error("Error updating document: ", error);
          });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

  return (
    <div>
      <div className='card-wrapp hidden'>
        <div className='card-content'>
          {tasks.map( task => (
            <Task task={task} key={task.id} loginName={store.setLoginNameReducer.loginName}></Task>
          ))}
        </div>
        <div className="bottom-interface">
          <Input></Input>
          <div className="btn-add" onClick={addTask}>ADD</div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (store) => (store)
)(Card);