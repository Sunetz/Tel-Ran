const arrMenu = [
    {
        picture:'./images/lemon-juice.png',
        title: 'Lemon juice',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam, error.',
        price: 5,
        quantity: 1
    },
    {
        picture:'./images/salad.png',
        title: 'Greece salad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam, error.',
        price: 6,
        quantity: 1
    },
    {
        picture:'./images/soup.png',
        title: 'Tomato soup',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam, error.',
        price: 4,
        quantity: 1
    },
    {
        picture:'./images/steak.png',
        title: 'Steak',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam, error.',
        price: 15,
        quantity: 1
    }
    
];

const homeBtn = document.querySelector('#homeBtn');
const cartBtn = document.querySelector('#cartBtn');
const root = document.querySelector('#root');
const cards = [];


homeBtn.onclick = (event)=>{
    event.preventDefault();
    root.innerHTML = '';
    createCard(arrMenu);
}

function createCard(arr){
    for(let item of arr){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<img src=${item.picture} alt=''>`
        div.innerHTML += `<h2>${item.title}</h2>`;
        div.innerHTML += `<p>${item.description}</p>`;
        div.innerHTML += `<h3>Price: $${item.price}</h3>`;
        div.innerHTML += `<button>add to cart</button>`;
        //button.id = `add_${buttons}`
        root.append(div);
        
    }
}

cartBtn.onclick = (event)=>{
    event.preventDefault();
    root.innerHTML = '';
    const table = document.createElement('table');
    
    table.innerHTML = `<thead>
    <th>title</th>
    <th>price</th>
    <th>quantity</th>
    <th>total</th></thead>`;
    for(let item of arrMenu){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.title}</td>
        <td>${item.price} &#8364</td>
        <td>${item.quantity}</td>
        <td>${item.quantity * item.price} &#8364</td>`
        table.append(tr)
    }
    root.append(table);
    const total = document.createElement('div');
    total.innerHTML = `Total: ${arrMenu.reduce((total, item)=>total += item.quantity*item.price, 0)}`;
    root.append(total);
}


