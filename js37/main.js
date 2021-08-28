const input = document.querySelector('#simple-input');


/*input.onchange = (event)=>{
    //console.log('hello');
    console.log(event.target.value);
}*/
/*
input.oninput =(event)=>{
    console.log(event.target.value);
}
*/
input.onkeydown = (event)=>{
    if(event.keyCode === 13){
        console.log(event.target.value);
    }
}

input.onfocus = ()=>{
    console.log('hello')
}

input.onblur = ()=>{
    console.log('good bye');
}

const myForm = document.querySelector('#myForm');

myForm.onsubmit = (event)=>{
    event.preventDefault();
    console.log(myForm.querySelector('#firstName').value);
    console.log(myForm.querySelector('#lastName').value);
}