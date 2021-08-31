/* 

const BASE_URL = 'https://jsonplaceholder.typicode.com'
let xhr = new XMLHttpRequest();
xhr.open('GET',`${BASE_URL}/posts`)
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status < 300){
        console.log(JSON.parse(xhr.response))
    }else{
        console.log(`Error in code, status: ${xhr.status}`)
    }
    
}
console.log('end of code'); */
/* const BASE_URL = 'https://jsonplaceholder.typicode.com'
fetch(`${BASE_URL}/posts`)
    .then(response =>{
        if(response.ok){
            return response.json()
        }
        throw new Error(response.status)
    }).then(data => console.log(data));

    console.log('end of code') */
const BASE_URL = 'https://jsonplaceholder.typicode.com'

function renderTodo(todo){
    document.querySelector('#todo').innerHTML += `<li>${todo.title}</li>`
}

/* fetch(`${BASE_URL}/todos?userId=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(el => {
            renderTodo(el)})
        }).catch(err => console.log(err.message)) */


async function getData(){
    const response = await fetch(`${BASE_URL}/todos?userId=3`);
    const data = await response.json();
    console.log(data);
    data.forEach(el => {
        renderTodo(el)
    })
    return data
}

getData();
