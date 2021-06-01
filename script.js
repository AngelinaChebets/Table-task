"use strict";

function deleteRowFromTable (target) { 
  let row = target.closest('tr');  
  row.remove(); 
}

tableOfFilms.onclick = function(event){
  let target = event.target.closest('.deleteButton');
  if (target != null) {
    deleteRowFromTable(target);
    return;
  }  
} 
