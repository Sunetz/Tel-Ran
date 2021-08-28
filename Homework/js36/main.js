//Version 1
/*const UserInput = document.querySelector('#input'),
    btnSet = document.querySelector('#set');
    const ul = document.querySelector('#list');
let films = [];

UserInput.value = UserInput.value.trim();
UserInput.focus();


btnSet.onclick = ()=>{
    let title = UserInput.value.trim();
    if(!title){
        alert('enter something!');
        cleanInput(UserInput);
    }else{
    films.push(title);
    ul.innerHTML = '';
    renderUl();
    
    cleanInput(UserInput);
    
    }
}

function renderUl(){
    for(let i=0; i < films.length; i++){
        ul.innerHTML += `<li>${films[i]}</li>`;
    }
}

function cleanInput(element){
    element.value = '';
    element.focus();
}*/


//=====================================================Version 2===============================================================//

const UserInput = document.querySelector('#input'),
    btnSet = document.querySelector('#set');
    const ul = document.querySelector('#list');
let films = [];

UserInput.value = UserInput.value.trim();
UserInput.focus();


btnSet.onclick = ()=>{
    let title = UserInput.value.trim();
    if(!title){
        alert('enter something!');
        cleanInput(UserInput);
    }else{
    films.push(title);
    ul.innerHTML = '';
    renderUl();
    
    cleanInput(UserInput);
    
    }
}

function renderUl(){
    films.map((film)=> createFilmLi(film)).forEach(li=>ul.append(li));
}
function createFilmLi(title){
    const li = document.createElement('li');
    li.innerHTML = `${title}`;
    li.onclick =()=>{
    li.classList.toggle('line-through');
}
    return li}

function cleanInput(element){
    element.value = '';
    element.focus();
}