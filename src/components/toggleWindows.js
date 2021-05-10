const toggleRegisterWindow = () => {
  const registerWindow = document.getElementById('wrapper-register');
  registerWindow.classList.toggle('hidden')
}

const toggleRegisterSuccesfulWindow = () => {
  const registerSuccesfulWindow = document.getElementById('register-succesful');
  registerSuccesfulWindow.classList.toggle('hidden')
  setTimeout(() => {
    registerSuccesfulWindow.classList.toggle('hidden')
  },1000)
}

export {toggleRegisterWindow, toggleRegisterSuccesfulWindow};