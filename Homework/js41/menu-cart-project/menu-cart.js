const nav = document.querySelector('.nav'),
    root = document.querySelector('#root');

meals = [
    {   id:0,
        picture: './images/salad-pngrepo-com-1.png',
        title: 'Ceaser salad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
        price: 6,
        quantity: 0
    },
    {   id:1,
        picture: 'images/soup-pngrepo-com.png',
        title: 'Tomato soup',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
        price: 5,
        quantity: 0
    },
    {   id:2,
        picture: './images/steak-pngrepo-com.png',
        title: 'Steak',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
        price: 12,
        quantity: 0
    },
    {   id:3,
        picture: './images/orange-juice-juice-pngrepo-com.png',
        title: 'Orange juice',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.',
        price: 3,
        quantity: 0
    },
];
let arrCount = [];

renderHome();
const btnHome = document.querySelector('#homeBtn');
const btnCart = document.querySelector('#cartBtn');

btnHome.onclick = (event)=>{
    
    event.preventDefault();
    renderHome();
}
btnCart.onclick = (event)=>{
    
    event.preventDefault();
    
    renderCart();
}
/* nav.onclick = function (event) {
    console.log(event.target)
    event.preventDefault();
    if (event.target.getAttribute('href') === 'home') renderHome();
    if (event.target.getAttribute('href') === 'cart') renderCart();
} */

function Meal(id, title, price, quantity){
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
}
function renderHome() {
    document.querySelector('#homeBtn').classList.add('active');
    document.querySelector('#cartBtn').classList.remove('active');
    root.className = 'products';
    root.innerHTML = '';
    meals.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card'
        card.innerHTML = `
        <img src=${item.picture} alt=${item.title}>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <h3>Price: € ${item.price}</h3>
        <button id = meals_${index}>Add to cart</button>`
        root.append(card);

        let meal = new Meal(item.id, item.title, item.price, item.quantity);
        arrCount.push(meal);
        
    })
    const addButtons = document.querySelectorAll('button');
    addButtons.forEach(btn => btn.onclick=(event)=>{
    arrCount[event.target.id.split('_')[1]].quantity++;
    
});

        
    }



function renderCart() {
    
    document.querySelector('#homeBtn').classList.remove('active');
    document.querySelector('#cartBtn').classList.add('active');
    root.className = 'cart';
    root.innerHTML = '';
    root.innerHTML = `<table>
    <thead>
    <th class="title">title</th>
    <th class="price">price</th>
    <th class="count">count</th>
    <th class="total">total</th>
    </thead> </table>`
    const tbody = document.createElement('tbody');

    arrCount.forEach(item => {
        
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.title}</td>
        <td>€ ${item.price}</td>
        <td>${item.quantity}</td>
        <td>€ ${item.price * item.quantity}</td>`;
        console.log(tr)
        tbody.append(tr)
    });
    const total = document.createElement('div');
    total.className = "totalPrice";
    total.innerHTML = `Total: € ${arrCount.reduce((total, item) => total += item.price * item.quantity, 0)}`;
    root.querySelector('table').append(tbody);
    root.append(total);

}

