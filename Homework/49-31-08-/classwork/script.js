const BASE_URL = 'https://jsonplaceholder.typicode.com';

//=====================XML Http Request====================
// let xhr = new XMLHttpRequest();

// xhr.open('GET', `${BASE_URL}/posts`);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send();
// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log(xhr.response);
//     }
//     else {
//         console.log(`Error in code, status ${xhr.status}`)
//     }
// }
// console.log('end of code');

// fetch(`${BASE_URL}/posts`)
//     .then(response => {
//         if (response.ok) {
//             return response.json()// забирает данные а не только заголовки и делает массив
//         }
//         throw new Error(response.status)
//     }).then(data => {
//         console.log(data);
//     })
// console.log('end of code');
    

function renderTodo(todo) {
    document.querySelector('#todo').innerHTML+=`<li>${todo.title}</li>`
}

// fetch(`${BASE_URL}/todos?userId=1`)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             renderTodo(element)
//         });
//     }).catch(err => console.log(err.message));

async function getData() {
    try {
        const response = await fetch(`${BASE_URL}/todos?userId=1`);
        const data = await response.json();
        return data
    }
    catch {
        console.log(e.message)
    }
}
getData().then(res => {
    res.forEach(element => renderTodo(element))});
