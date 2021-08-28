const inputText = document.querySelector('#myInput'),
addBtn = document.querySelector('#addBtn'),
list = document.querySelector('#todoList');

inputText.focus();

addBtn.onclick = ()=>{
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    //checkbox.type = 'checkbox';
    checkbox.setAttribute('type', 'checkbox');
    
    li.innerHTML += inputText.value;
    li.prepend(checkbox);

    checkbox.onchange=()=>{
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }
    list.append(li);
    inputText.value = '';
    inputText.focus();

}