import { db } from './../../firebase';

const addAccountDataToDataBase = (userName, password) => {
  db.collection("users").add({
      userName: userName,
      password: password,
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

export {addAccountDataToDataBase}