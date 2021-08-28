const right = document.querySelector('.right');
const form = document.querySelector('#contact-form');

renderList();

form.onsubmit = onAddContactHandler();

function renderList(){
    const contacts = Store.getAll();
    right.innerHTML = contacts.map(mapToRow).join('')
}

function mapToRow(contact, index){
    return `
    <div>
    <h2>${contact.name} ${contact.lastName}</h2>
    <h3>${contact.phone}</h3>
    <h4>${contact.email}</h4>
    <br>
    <button data-index = ${index}>remove</button>
    </div>
    `
}

function onAddContactHandler(e){
    e.target.preventDefault();
    
}