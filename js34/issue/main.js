const users = [
    {name: 'Anna', age: 25, id: 1},
    {name: 'John', age: 32, id: 2},
    {name: 'Michael', age: 37, id: 3},
    {name: 'Nina', age: 21, id: 4},
    {name: 'Karl', age: 18, id: 5},
],
    btnShow = document.querySelector('#showUsers');



users.sort((user1, user2)=>user1.name - user2.name);
const wrapper = document.querySelector('.wrapper');
const ul = document.createElement('ul');

/*btnShow.onclick = () =>{

for(let item of users){
    ul.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
}*/

btnShow.onclick = ()=>{
    ul.innerHTML = '';
    for(let item of users){
        ul.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
    }

}

wrapper.append(ul);





