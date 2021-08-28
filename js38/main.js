const box = document.querySelector('.box'),
item = box.querySelector('.item'),
row = document.querySelector('.row'),
items = document.querySelectorAll('.box-item');

const click = (event)=>{
    console.log(event.target);
    console.log('click');

}
item.addEventListener('click', click);
box.addEventListener('click', click);


row.onclick = (event)=>{
    if(event.target.classList.contains('box-item')){
        /*console.log(event.target);
        console.log('click');
    }*/
    click();
}
}