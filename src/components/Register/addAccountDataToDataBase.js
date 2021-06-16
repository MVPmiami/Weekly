import { db } from './../../firebase';

const addAccountDataToDataBase = (userName, password) => {
  db.collection("users").add({
      userName: userName,
      password: password,
      tasks: [{id:1, title: 'test1', done:false},{id:2, title: 'test2', done:false},{id:3, title: 'test3', done:false}]
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

export {addAccountDataToDataBase}