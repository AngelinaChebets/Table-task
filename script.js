"use strict";

function findParentByTagName (elem, tagName) {
  tagName = tagName.toLowerCase();
  while (elem && elem.parentNode) {
    elem = elem.parentNode;
    if (elem.tagName && elem.tagName.toLowerCase() == tagName) {
      return elem;
    }
  }
 return null;
}

function deleteRowFromTable (target) { 
  let parent = findParentByTagName(target, 'tr');  
  parent.remove(); 
}

tableOfFilms.onclick = function(event){
  let target = event.target.closest('.deleteButton');
  if (target != null) {
    deleteRowFromTable(target);
    return;
  }  
}
    
  
