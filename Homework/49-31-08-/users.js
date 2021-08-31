const BASE_URL = 'https://jsonplaceholder.typicode.com';

getUserList();

async function getUserList() {
    const response = await fetch(`${BASE_URL}/users/`);
    const data = await response.json();
    renderUserList(data);
}

async function renderUserList(arr) {
    arr.forEach(el=>{
        const li = document.createElement('li');
        li.innerHTML = `${el.name}`;
        li.id = 'user_' + el.id;
        li.onclick = (event) =>{
            const id = event.currentTarget.id.split('_')[1]
            getUserById(id);
        }
        document.querySelector('.user-list').append(li);
    })    
}

async function getUserById(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`); // сохраняем данные, извлеченные из url
    const data = await response.json(); // сохраняем данные как объект
    renderUser(data); // рисуем юзера
    //getTodoByUserId(id);// получаем его тудулист
}

function renderUser(user) { //отрисовываем юзера
    document.querySelector('#user').innerHTML = '';
    const div = document.createElement('div');
    div.id = 'id_' + user.id;
    div.onclick = (event)=>{
        const id = event.currentTarget.id.split('_')[1];
        getTodoByUserId(id);
    }
    div.innerHTML = `
    <h3>Name: ${user.name}</h3>
    <p>Nickname: ${user.username}</p>
    <p>Email: ${user.email}</p>
    `
    document.querySelector('#user').append(div);
}
async function getTodoByUserId(id) {
    const response = await fetch(`${BASE_URL}/todos?userId=${id}`); //сохраняем данные, извлеченные из url по id юзера 
    const data = await response.json(); // сохраняем данные как объект
    createTodoList(data); // отрисовываем тудулист
}
function renderTodo(todo) {
    return `
    <li>${todo.title}</li>
    `
}
function createTodoList(arr) {
    document.querySelector('#todo ul').innerHTML = '';
    arr.forEach(el => {
        document.querySelector('#todo ul').innerHTML+=renderTodo(el)
    });
}