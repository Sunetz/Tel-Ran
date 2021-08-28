const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'), //return collection
circle = document.getElementsByClassName('circle'),//return collection
square = document.querySelectorAll('.wrapper div'),// return NodeList
greens = document.getElementsByClassName('square'),
wrapper = document.querySelector('#wrapperTwo'), //return element
title = document.querySelector('h1');

console.dir(box);
console.log(greens);
console.log(wrapper);
wrapper.innerHTML += '<div class="square"></div>'
console.log(wrapper);

const elemenst = Array.from(greens);
console.log(elemenst)

box.style.backgroundColor = 'yellowgreen';
box.style.width = '400px';

//for Collection

for (btn of btns){
    btn.style.borderRadius = '50%';
}

//square.forEach(el => el.style.cssText = "background-color: red");

for(s of square){
    s.style.backgroundColor = 'red';
}

console.log(square);

const color = prompt('Type your color');
box.style.cssText = `background-color: ${color}; width: 100px;`

//const color = 'violet';



//circle[0].style = `background-color: ${color}`;

//title.className = 'title active';

title.classList.add('active', 'title');
title.classList.remove('title');
title.classList.toggle('active');
title.classList.add('active', 'title');

const div = document.createElement('div');

div.classList.add('black');
//wrapperTwo.append(div);
//wrapperTwo.prepend(div)ж

greens[1].after(div);

div.innerHTML = '<h2>Hello!</h2>';

//div.textContent = '<h2>Hello!</h2>';

/*<element> -----> nextSibling */