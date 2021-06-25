//есть небольшая проблемка с переключением входа, если уже был совершен вход и нажать на вход и просто закрыть карточка не видна.

const toggleRegisterWindow = (isReg) => {
  if(isReg){
    const registerWindow = document.getElementById('wrapper-register');
    registerWindow.classList.toggle('hidden')
    const card = document.querySelector('.card-wrapp');
    const classArray = card.classList;

    for(let i = 0; i < classArray.length; i++){
      if(classArray[i] === 'easy-workload-color' || classArray[i] === 'medium-workload-color' || classArray[i] === 'hard-workload-color'){
        classArray.remove('easy-workload-color');
        classArray.remove('medium-workload-color');
        classArray.remove('hard-workload-color');
      }
    }

    if(classArray.length !== 2){
      card.classList.toggle('hidden')
    }
  }else{
    const signInWindow = document.getElementById('wrapper-sign-in');
    signInWindow.classList.toggle('hidden')
    const card = document.querySelector('.card-wrapp');
    const classArray = card.classList;

    for(let i = 0; i < classArray.length; i++){
      if(classArray[i] === 'easy-workload-color' || classArray[i] === 'medium-workload-color' || classArray[i] === 'hard-workload-color'){
        classArray.remove('easy-workload-color');
        classArray.remove('medium-workload-color');
        classArray.remove('hard-workload-color');
      }
    }

    if(classArray.length !== 2){
      card.classList.toggle('hidden')
    }
  }
}

const toggleRegisterSuccesfulWindow = () => {
    const registerSuccesfulWindow = document.getElementById('register-succesful');
    registerSuccesfulWindow.classList.toggle('hidden')
    setTimeout(() => {
      registerSuccesfulWindow.classList.toggle('hidden')
    },1000)
}

export {toggleRegisterWindow, toggleRegisterSuccesfulWindow};