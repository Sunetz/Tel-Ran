//create variables
const userInput = document.querySelector('#typeTodo'),
        btnAdd = document.querySelector('#btnAdd'),
        list = document.querySelector('#list');
        let li;
let toDo = [];
//добавляем обработчика событий
btnAdd.addEventListener('click', addElements);


//функция, вызывающая функцию создания элемента и очистки инпута
function addElements(){
    if (userInput.value ==='') return;
    createRemoveListElement(userInput.value);
    userInput.value = '';
    userInput.focus();
}

//функция создает элемент 
function createRemoveListElement(value){
    const li = document.createElement('li'),
    checkBox = new newToDo(input);  
    li.textContent = value;  
    //checkBox = document.createElement('input');//create element
    li.append(checkBox.value);
    
    list.append(li);//add li to ul
    const liObject = new newToDo;//create new object
    toDo.push(liObject);//add new object to toDo-array
    return li
}


//create skeleton of the object
function newToDo(value){
    this.name = userInput.value;
    this.checked = false;
}






