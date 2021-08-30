//отрисовать юзеров, при клике текст меняет цвет.Данные об этом сохраняются в локальном хранилище.  

const users = [
    {name: 'Ann',
    phone: '123854305',
    email: 'ann@ya.ru'
    },
    {name: 'Cole',
    phone: '12385433',
    email: 'cole@ya.ru'
    },
    {name: 'Rich',
    phone: '234567',
    email: 'rich@ya.ru'
    },
    {name: 'Keisha',
    phone: '123834567',
    email: 'k@ya.ru'
    },
    {name: 'Bri',
    phone: '1238543456705',
    email: 'bri@ya.ru'
    }
];

const wrapper = document.querySelector('.wrapper');

for(let i=0; i < users.length; i++){ //add id
    users[i].id = i;
    console.log(users[i].id);
    renderUser(users[i]);
}
localStorage.setItem('users', JSON.stringify(users)); //save in localStorage

function renderUser(obj){ //render every user
    const index = JSON.parse(localStorage.getItem('picked'))
    const div = document.createElement('div');
    div.classList.add('user-box');
    div.dataset.id = obj.id;    
    div.innerHTML = `<h2>${obj.name}</h2>
    <h3>${obj.phone}</h3>
    <p>${obj.email}</p>`
    div.onclick = changeColor;
    if(obj.id == index){
        div.click()
    }
    wrapper.append(div);
}

function changeColor(event){
    const userBoxes = document.querySelectorAll('.user-box');
    userBoxes.forEach(el => el.style.backgroundColor = 'lavender');
    userBoxes.forEach(el => el.style.color = 'white');
    event.currentTarget.style.color = 'black';
    const id = event.currentTarget.dataset.id;
    localStorage.setItem('picked', id);
}



