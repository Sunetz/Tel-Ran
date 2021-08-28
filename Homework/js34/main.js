//Task01
/* 
сделать шесть кнопок и абзац с текстом. Три кнопки меняют размер шрифта в абзаце (15px, 25px, 35px). 
Оставшиеся три меняют цвет текста - на синий, красный зеленый. Изменение размера шрифта не изменяет цвет 
и наоборот - изменение цвета не влияет на размер
 */

const btn15 = document.querySelector('#make-fs-15'),
        btn25= document.querySelector('#make-fs-25'),
        btn35= document.querySelector('#make-fs-35'),
        btnPink = document.querySelector('#make-pink'),
        btnYellowgreen = document.querySelector('#make-yellowgreen'),
        btnOrange = document.querySelector('#make-orange');

function makeSize(size){
    document.querySelector('p.changedText').style.fontSize = `${size}px`;
};

function makeColor(color){
    document.querySelector('p.changedText').style.color = `${color}`;    
};

btn15.onclick = ()=>{
    makeSize(15);    
};
btn25.onclick = ()=>{
    makeSize(25);    
};
btn35.onclick = ()=>{
    makeSize(35);
};
btnYellowgreen.onclick = ()=>{
    makeColor('yellowgreen')
};
btnPink.onclick = ()=>{
    makeColor('pink')
};
btnOrange.onclick = ()=>{
    makeColor('orange')
};
    
//Task02
/* 
Сделать два input, для каждого инпута своя кнопка. Под инпутами текст. В одном инпуте можно задавть размер шрифта, 
при нажатии на кнопку шрифта текста становится того размера, который ввели. Второй инпут для цвета, соответсвенно 
при нажатии на кнопку цвет текста становится таким, который задали в инпуте.
 */


const setFontSize = document.querySelector('#font-size'),
        btnSize = document.querySelector('#set-size'),
        setColor = document.querySelector('#color'),
        btnColor = document.querySelector('#set-color');
        textByYou = document.querySelector('#textByYou');

        
btnSize.onclick = () =>{
    textByYou.style.fontSize = `${setFontSize.value}px`;
}

btnColor.onclick =()=>{
    textByYou.style.color = setColor.value;
}


//Task03*
/* 
На странице сделать квадрат, изначально черного цвета, при нажатии на квадрат, его цвет менется на другой рандомный цвет, 
а в самом квадрате появляется порядковый номер сделанного клика

 */

const square = document.querySelector('.square'),
        clickNumber = document.querySelector('.clicknumber');


/*square.onclick = () =>{
    changeColor();   
    
}*/


function changeColor(){
    let numberOfClicks = 0;
    return () => {square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        numberOfClicks += 1;
        clickNumber.textContent = `${numberOfClicks}`;
}
}
square.onclick = changeColor();



