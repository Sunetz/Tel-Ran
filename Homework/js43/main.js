function Person(id, name, phone, email, city, description) {
    this.id = id,
    this.name = name,
    this.phone = phone,
    this.email = email,
    this.city = city,
    this.description = description
};
const Mercedes = new Person(0, 'Mercedes', '1029834566', 'merc@gmail.com', 'Berlin', 'car dealer');
const Honda = new Person(1, 'Honda', '1029837463','honda@gmail.com', 'Tokio', 'motocycle engines');
const Java = new Person(2, 'Java', '1029234566','java@gmail.com', 'Bonn', 'it-girl');
const Bond = new Person(3, 'Bond', '1029234007','bond007@gmail.com', 'London', 'Agent 007');
const message = document.querySelector('.message');
const errorMessage = document.querySelector('#error');
let persons = [Mercedes, Honda, Java, Bond];


const btnContacts = document.querySelector('.btnContacts');
const btnAdd = document.querySelector('.btnAdd');
const info = document.querySelector('.info-area');
const shortInfo = document.querySelector('.short-info');
const fullInfo = document.querySelector('.full-info');
const searchInput = document.querySelector('#search');
const personList = document.querySelectorAll('.person');
console.log(personList)

renderShortInfo();

//searchInput.oninput = liveSearch();

btnContacts.onclick=(event)=>{
              //================navigation
    renderShortInfo();//==========================call function
    info.classList.remove('hide');
    userForm.classList.add('hide');
    event.currentTarget.classList.add('active');
    btnAdd.classList.remove('active');
    
    
}
btnAdd.onclick = (event)=>{               //================navigation
    searchInput.value = '';
    info.classList.add('hide');
    userForm.classList.remove('hide');
    event.currentTarget.classList.add('active');
    btnContacts.classList.remove('active');

    renderAddForm();//==========================call function
}



function renderShortInfo(){
    shortInfo.innerHTML = '';
    errorMessage.classList.add('hide');
    persons.forEach((element, index) => {
        //console.log(element, index);
        const div = document.createElement('div');
        div.id = 'person_' + index;
        //console.log(persons)
        div.classList.add('person');
        div.innerHTML += `<div class="main-side">
        <h3>${element.name}</h3>
        <p>${element.phone}</p></div><div class="remove-side">
        <i class="fas fa-trash"></i></div>`;
        shortInfo.append(div);
        const contacts = shortInfo.querySelectorAll('.person');
        

for(contact of contacts){
    
    contact.onclick = (event)=>{
    //contact.classList.remove('active');
    fullInfo.innerHTML = '';
    event.currentTarget.classList.add('active');
    const id = +event.currentTarget.id.split("_")[1];
    const element = persons.find((p)=> p.id === id);
    const personDetail = document.createElement('div');
    personDetail.classList.add('inner');
    personDetail.innerHTML = `
    <h3>${element.name}</h3>                    
    <div id="phone"><i class="fas fa-phone"></i>${element.phone}</div>                   
    <div id="email"><i class="fas fa-envelope"></i>${element.email}</div>                    
    <div id="city"><i class="fas fa-city"></i>${element.city}</div>
    <div id="descript">${element.description}</div>
    `;
    fullInfo.append(personDetail);
        
    if(event.target.classList.contains('fa-trash')){
        event.currentTarget.classList.add('hide');
        shortInfo.removeChild(event.currentTarget);
        fullInfo.removeChild(personDetail);
        
        persons.splice(persons.findIndex(((p)=>p.id === id)), 1);  
    };
}    
}
    });
}

const userForm = document.querySelector('.form-area');



const btnAddContact  = document.querySelector('#btnAdd');

function renderAddForm(){
    btnAddContact.onclick = (event)=>{        
        event.preventDefault();          
        const inputs = userForm.querySelectorAll('input');   
        const newContact = new Person(
            persons.length
        )
        count = 0

        for(input of inputs){
            
            if(input.value != ''){
                count++
                input.style.borderColor='yellowgreen';
                newContact[input.id] = input.value;
                
                //input.value = '';     
            }
        
        if(count === inputs.length){
            
            persons.push(newContact);

            for(input of inputs){
                input.value = '';
                input.classList.remove('is-invalid');
                //input.style.backgroundColor = 'rgba(180, 238, 45, 0.37)';
                input.style.borderColor = 'black';
                errorMessage.style.color = 'white';
                errorMessage.style.backgroundColor = 'yellowgreen';
                errorMessage.innerHTML = 'Contact was added';
                errorMessage.classList.remove('hide')
            }
        }
        else{
            for(input of inputs){
                if(!input.value){
                    //input.style.borderColor = 'crimson';
                    input.classList.add('is-invalid');
                    errorMessage.style.color = 'white';
                    errorMessage.style.backgroundColor = 'crimson';
                    errorMessage.innerHTML = 'Fill empty fields';
                    errorMessage.classList.remove('hide')
                }
            }
        }
    }
}
}
console.log(persons);
//===================================SEARCH by Name==============================//


searchInput.oninput=function(){
    let value = this.value.trim();
        if(value){
            personList.forEach(element =>{
                if(element.innerText.toLowerCase().search(value) == -1){
                    element.classList.add('hide');
                }
                })}
                else{
                personList.forEach(element => {
                    element.classList.remove('hide');
                })
            }
        }



//===============================SEARCH by City with onclick============//

const details = document.querySelectorAll('.inner');
const search = document.querySelector('.fa-search');

search.onclick=()=>{
    persons.forEach(p =>{
        if(searchInput.value === p.city.toLowerCase()){
            for(item of personList){
                if(item.id.split('_')[1] === p.id){
                    item.classList.remove('hide')
                }
                else{
                    item.classList.add('hide')
                }
            }

        }
    })
    
}

