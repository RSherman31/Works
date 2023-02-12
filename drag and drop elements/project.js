const tasksListElement = document.querySelector(`.boxed_2`);
const taskElements = tasksListElement.querySelectorAll(`.boxed_item`);


for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  })
  
  tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });

  tasksListElement.addEventListener(`dragover`, (evt) => {
    
    evt.preventDefault();
  
    
    const activeElement = tasksListElement.querySelector(`.selected`);
    
    const currentElement = evt.target;
    
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`boxed_1`);
  
    if (!isMoveable) {
      return;
    }
  
    
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    
    tasksListElement.insertBefore(activeElement, nextElement);
  });

  const getNextElement = (cursorPosition, currentElement) => {
    
    const currentElementCoord = currentElement.getBoundingClientRect();
    
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };

  tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
  
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`boxed_item`);
  
    if (!isMoveable) {
      return;
    }
  
    
    const nextElement = getNextElement(evt.clientY, currentElement);
  
    
    if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      
      return;
    }
  
    tasksListElement.insertBefore(activeElement, nextElement);
  });