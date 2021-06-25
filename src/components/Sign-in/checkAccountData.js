import { db } from './../../firebase';
import {checkWorkLoad} from './../supFunctions/checkWorkLoad'

function checkData(userName, password, store){
  const errorMessage = document.getElementById('wrong-message');

  db.collection("users").where("userName", "==", `${userName}`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(userName == doc.data().userName && password == doc.data().password){
                store.dispatch({type: 'SET_ACCOUNT_DATA', userName: userName, password: password});
                store.dispatch({type: 'SET_LOGIN_NAME', loginName:userName});
                store.dispatch({type: 'SET_TASKS', tasks: doc.data().tasks});
                checkWorkLoad("LOAD", doc.data().tasks.length)
                const signInWindow = document.getElementById('wrapper-sign-in');
                signInWindow.classList.toggle('hidden')
                const card = document.querySelector('.card-wrapp');
                card.classList.toggle('hidden')
            if(!errorMessage.classList.contains('hidden')){
            errorMessage.classList.add('hidden');
            }
            }else{
           errorMessage.classList.remove('hidden')
        }
    })
})
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

export {checkData}

