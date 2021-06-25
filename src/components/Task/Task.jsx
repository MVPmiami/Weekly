import React from 'react';
import './task.css';
import './check-box.css';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { db } from './../../firebase';
import firebase from 'firebase';
import {checkWorkLoad} from './../supFunctions/checkWorkLoad';


const Task = (props) => {
  let classNameForTaskWrapper = props.task.done ? 'task-wrapper' + ' complete-task' : 'task-wrapper';
  let classNameForTaskText = props.task.done ? 'task-text' + ' complete-task-text' : 'task-text';
  let classNameforDeleteBtn = props.task.done ? 'delete-btn' + ' complete-task-btns' : 'delete-btn';
  let classNameforDoneBtn = props.task.done ? 'done-btn' + ' complete-task-btns' : 'done-btn';
  let loginName = props.loginName;
  let id = props.task.id;
  let title = props.task.title;
  let done = props.task.done;

  const completeTask = () => {
    store.dispatch({type: 'SET_STATUS_TASK', value: {id: props.task.id, done: !props.task.done}});

    db.collection("users").where("userName", "==", `${loginName}`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let updateUser = db.collection("users").doc(doc.id);
          return updateUser.update({
            tasks: firebase.firestore.FieldValue.arrayRemove({id: id, title: title, done: done})
          })
          .then(() => {
            console.log("Document successfully updated!");
            return updateUser.update({
              tasks: firebase.firestore.FieldValue.arrayUnion({id: id, title: title, done: !done})
            })
          })
          .catch((error) => {
              console.error("Error updating document: ", error);
          });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }

  const deleteTask = () => {
    store.dispatch({type: 'DELETE_TASK', value: {id: props.task.id}});

    db.collection("users").where("userName", "==", `${loginName}`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let updateUser = db.collection("users").doc(doc.id);
          return updateUser.update({
            tasks: firebase.firestore.FieldValue.arrayRemove({id: id, title: title, done: done})
          })
          .then(() => {
            checkWorkLoad("DELETE", doc.data().tasks.length);
          })
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
    <div className={classNameForTaskWrapper}>
      <h1 className={classNameForTaskText}>{props.task.title}</h1>
      <div className={classNameforDoneBtn} onClick={completeTask}>Done</div>
      <div className={classNameforDeleteBtn} onClick={deleteTask}>Delete</div>
    </div>
  )
}

export default connect(
  (store) => (store.setTasksDataReducer)
)(Task);
