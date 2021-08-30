const btn = document.createElement('button');
const wrapper =document.querySelector('.wrapper');
btn.innerText = 'click me'




wrapper.append(btn);

btn.onclick = ()=>{
    const colors = ['blue', 'yellowgreen', 'crimson'];
    localStorage.setItem('colors', JSON.stringify(colors));
    renderBoxes(3);

}

function createBox(){
    const box = document.createElement('div');
    box.classList.add('box');
    return box
}

function renderBoxes(num){
    const index = JSON.parse(localStorage.getItem('boxId'))
    //const colors = JSON.parse(localStorage.getItem('colors'))
    for(let i=0; i < num; i++){
        const box = createBox();
        box.setAttribute('data-index', i)
        //box.style.backgroundColor = colors[i]
        box.onclick = onclickHandler;
        if(i == index){
            box.click()
        }
        wrapper.prepend(box)
        }
        
    }

function onclickHandler(event){
    const boxes = document.querySelectorAll('.box');
    /* const colored_boxes = [];
    localStorage.setItem('colored_boxes', colored_boxes) */
    boxes.forEach(el => el.style.backgroundColor = 'yellowgreen')
    event.target.style.backgroundColor = 'yellow';
    const id = event.target.dataset.index;
    localStorage.setItem('boxId', id)
    console.log(event.target);

}