const inputText = document.querySelector('#myInput');

const todoList = document.querySelector('#todo-list');
const addBtn = document.querySelector('#addBtn');

const todoArray = []; //{id, todo:'', done: false}

/*
1.Забираем тескт из инпута,
2. Создаем объект
3. Сохранить в массиве
4. а. В цикле по длине массива todoArray преобразовываем объекты в эдементы списка li 

{
    id: num,
    todo: input.value,
    done: false}
---> 
'<li class="list-group-item d-flex align-items-center">
                        <input type="checkbox" class="col-1" id="item">
                        <h2 class="col-9">item</h2>
                        <button class="col-2 btn btn-danger">remove</button>
                    </li>'
    б. привязываем прослушивание событий
5. Наполняем список элементами    */

addBtn.onclick = ()=>{
    const input = inputText.value.trim(); //1
    if(input){
        todoArray.push(createTodoItem(input));//2,3
        const elArray = todoArray.map(mapTaskToListElement);
        renderParent('#todo-list', elArray);
        inputText.value ='';
        inputText.focus();
    }
}

function mapTaskToListElement(task, index){//4a
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const title = document.createElement('h2');
    const button = document.createElement('button');

    li.className = "list-group-item d-flex align-items-center";
    checkbox.type = 'checkbox';
    checkbox.className = "col-1";
    checkbox.checked = task.done;
    title.className = "col-9";
    title.innerText = task.todo;
    title.style.textDecoration = task.done ? 'line-through' : 'none';
    button.className = "col-2 btn btn-danger";
    button.innerText = 'remove';
    button.style.color = 'white';

    button.onclick = ()=>{
        todoArray.splice(index, 1);
        renderParent();
    }

    checkbox.onchange = ()=>{
        todoArray[index].done = checkbox.checked;
        title.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }

    li.append(checkbox);
    li.append(title);
    li.append(button);
    
    return li;

}

function renderParent(selector, array){
    const element = document.querySelector(selector);
    if(element){
        element.innerHTML ='';
        array.forEach(item => {
            element.append(item)
        });
    }
}


function createTodoItem(task){//2
    return{
        id: todoArray.length,
        todo:task,
        done: false,
    }
}

