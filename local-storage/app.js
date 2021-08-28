const right = document.querySelector('.right'),
      form = document.querySelector('#contact-form');
      const contacts = Store.getAll();


renderList();

form.onsubmit = onAddContactHandler;

function renderList(){
    //const contacts = Store.getAll();
    right.innerHTML = contacts.map(mapToRow).join('')
}

function mapToRow(contact, index){
    return `
    <div>
    <h2>${contact.name} ${contact.lastName}</h2>
    <h4>${contact.phone}</h4>
    <p>${contact.email}</p>
    <br>
    <button data-index = ${index}>remove</button>
    </div>
    `
}
const buttons = document.querySelectorAll('button');
console.log(contacts)
for(button of buttons){

        button.onclick = (event)=>{
            contacts.splice(+button.dataset.index, 1);
            this.reset();
            event.currentTarget.parentNode.remove();
            
        }
    }
    

function onAddContactHandler(e){
    e.preventDefault();
    const form = e.target;
    const contact = new Contact(
        form.name.value,
        form.lastName.value,
        form.phone.value,
        form.email.value
    )
    Store.save(contact);
    renderList();
    form.reset();
}