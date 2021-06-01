"use strict";

function recordToStr (parent) {
  let str = parent.cells[0].innerText;
     for(let i = 1; i < parent.cells.length - 2; i++){
      str = str.concat(', ' +  parent.cells[i].innerText);
     }
     return str;
}

function createPopUp (str) {

  let popUp = document.createElement('div');
  popUp.className = 'b-popup';
    
  let contentDiv = document.createElement('div');
  contentDiv.className = 'popup-content'
    
  let text = document.createElement('p');
  text.innerHTML = str;    
    
  let closeButton = document.createElement('button');
    closeButton.innerHTML = 'Закрыть';
    closeButton.id = 'b_close';

    closeButton.addEventListener('click', function(event) {
      let elem = event.target.closest('.popup-content');
      while (elem.className != 'b-popup'){
        elem = elem.parentNode;
      }
      elem.remove();
    });    

  contentDiv.appendChild(text);
  contentDiv.appendChild(closeButton);
  popUp.appendChild(contentDiv);
  return popUp;  
}
  
function showPopUp (target) {  
  let str = recordToStr(target.closest('tr'));  
  document.getElementById('tableOfFilms').insertAdjacentElement('afterend', createPopUp(str));  
}

tableOfFilms.onclick = function(event){
  let target = event.target.closest('.showButton');
  if (target != null) {
    showPopUp(target);
    return;
  } 
}
    
  
