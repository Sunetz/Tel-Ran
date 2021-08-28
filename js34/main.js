function simpleClick(){
    console.log('click');
}

const btn1 = document.querySelector('#btn'),
        one = document.querySelector('.one'),
        two = document.querySelector('.two'),
        btnChangeSize = document.querySelector('#size30'),
        
        buttonSend = document.querySelector('#send');
        

btn1.style.display = "block";
//btn1.style.cssText = {display: block; margin-bottom: 10px}
btn1.onclick = simpleClick;
btn1.onclick = function(){
    document.querySelector('h2').style.color = 'red';
}

btn1.addEventListener('click', simpleClick);

one.onclick = ()=>{
    one.classList.toggle('yellowgreen');
}

btn1.onclick = ()=>{
    btn1.classList.toggle('yellowgreen');
}

two.onmouseover = ()=>{
    two.style.backgroundColor = 'pink';
}
two.onmouseout = ()=>{
    two.style.backgroundColor = 'violet';
}

three.onmouseover =()=>{
    three.style.cssText = 'width: 100px; height: 100px'
}

three.onmouseout = ()=>{
    three.style.cssText = 'width: 200px; height: 200px'
}

btnChangeSize.onclick = ()=>{
    document.querySelector('p.topText').style.fontSize = '30px';
}
btnChangeSize.onclick = ()=>{
    //document.querySelector('p.topText').style.fontSize = '30px';
    document.querySelector('p.topText').classList.toggle('fs-30');
}


buttonSend.onclick = ()=>{
    let firstName = document.querySelector('#firstName').value,
        lastName = document.querySelector('#lastName').value;
    document.querySelector('#output').textContent = `Hello, my name is ${firstName} ${lastName}!`;
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    
}

mySelect.onchange = ()=>{
    document.querySelector('#carName').textContent = 'You selected' + ' ' + mySelect.value;
}


