const names = ['Ivan', 'Anna', 'Maria', 'Niko', 'Pete', 'Olga'];

const ul = document.querySelector('#list'),
    addBtn = document.querySelector('#addBtn');

addBtn.onclick = ()=>{
    const index = getRnd(names.length);
    //ul.innerHTML += `<li>${names[index]}</li>` добавляет строчку, весь элемент полностью собирается заново
    //const li = document.createElement('li'); //добавляет элемент, собирается только последний элемент
    //li.innerHTML = `${names[index]}`;
    ul.append(createLi(names[index]));
    
    //ul.insertAdjacentHTML('beforeend', createLi(names[index]));
}

function createLi(name){
    const li = document.createElement('li');
    li.innerHTML = name;
    li.style.backgroundColor = getRndColor();
    li.classList.add('nameList');
    li.onclick = changeBg;
    
    //return li.outerHTML;//возвращается узел, теряется функциональность, нужно по новой получать доступ
    return li;//возвращается узел, теряется функциональность, нужно по новой получать доступ
}
function getRnd(max){//нужно указать диапазон чисел
    return parseInt(Math.random() * max);
}

function getRndColor(){
    return `rgb(${getRnd(256)}, ${getRnd(256)}, ${getRnd(256)})`
}

const box = document.querySelector('.box');

box.onclick = (event)=>{
    console.log(event.target)
    box.style.backgroundColor = getRndColor();
}

//При любом событии создается объект-событие

box.onclick = changeBg;

function changeBg(event){
    event.target.style.backgroundColor = getRndColor();
}

box.onclick = ()=>{
    console.log('click');
}

box.addEventListener('click', changeBg);
/*box.addEventListener('click', ()=>{
    console.log('click');
})*/

box.removeEventListener('click', changeBg);