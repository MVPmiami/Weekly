import { db } from './../../firebase';

function checkData(userName, password, store){
  const errorMessage = document.getElementById('wrong-message');

  db.collection("users").where("userName", "==", `${userName}`)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(userName == doc.data().userName && password == doc.data().password){
                store.dispatch({type: 'SET_ACCOUNT_DATA', userName: userName, password: password});
                store.dispatch({type: 'SET_LOGIN_NAME', loginName:userName});
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

