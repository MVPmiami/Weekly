const checkWorkLoad = (event, length) => {
  const card = document.querySelector('.card-wrapp').classList;
  const cardScroll = document.querySelector('.card-content').classList;
  if(event === 'ADD'){
    if(length <= 2) {
      card.remove('medium-workload-color');
      card.remove('hard-workload-color');
      card.add('easy-workload-color');
    }else if(length > 2 && length <= 5) {
      card.remove('easy-workload-color');
      card.remove('hard-workload-color');
      card.add('medium-workload-color');
    }else if(length > 5) {
      card.remove('easy-workload-color');
      card.remove('medium-workload-color');
      card.add('hard-workload-color');
      cardScroll.remove('card-scroll');
      if(length >= 12){
        cardScroll.add('card-scroll');
      }
    }
  }else if( event === "LOAD"){
    if(length > 0 && length <= 3) {
      card.remove('medium-workload-color');
      card.remove('hard-workload-color');
      card.add('easy-workload-color');
    }else if(length > 3 && length <= 6) {
      card.remove('easy-workload-color');
      card.remove('hard-workload-color');
      card.add('medium-workload-color');
    }else if(length > 6) {
      card.remove('easy-workload-color');
      card.remove('medium-workload-color');
      card.add('hard-workload-color');
      cardScroll.remove('card-scroll');
      if(length >= 13){
        cardScroll.add('card-scroll');
      }
    }
  }else if( event === "DELETE"){
    length = length - 1;
    if(length > 0 && length <= 3) {
      card.remove('medium-workload-color');
      card.remove('hard-workload-color');
      card.add('easy-workload-color');
    }else if(length > 3 && length <= 6) {
      card.remove('easy-workload-color');
      card.remove('hard-workload-color');
      card.add('medium-workload-color');
    }else if(length > 6) {
      card.remove('easy-workload-color');
      card.remove('medium-workload-color');
      card.add('hard-workload-color');
      if(length <= 12){
        cardScroll.remove('card-scroll');
      }
    }else if(length === 0){
      card.remove('easy-workload-color');
      card.remove('medium-workload-color');
      card.remove('hard-workload-color');
    }
  }
}

export {checkWorkLoad};