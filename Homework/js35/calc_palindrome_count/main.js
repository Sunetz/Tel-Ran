//======================CALCULATOR=======================//

const fn1Sum = document.querySelector('#fn-1-sum'),
        fn2Sum = document.querySelector('#fn-2-sum'),
        fn1Sub = document.querySelector('#fn-1-sub'),
        fn2Sub = document.querySelector('#fn-2-sub'),
        fn1Multi = document.querySelector('#fn-1-multi'),
        fn2Multi = document.querySelector('#fn-2-multi'),
        fn1Div = document.querySelector('#fn-1-div'),
        fn2Div = document.querySelector('#fn-2-div'),
        btnAdd = document.querySelector('#addition'),
        btnSub = document.querySelector('#sub'),
        btnMulti = document.querySelector('#multi'),
        btnDiv = document.querySelector('#div'),
        sumResult = document.querySelector('#sumResult'),
        subResult = document.querySelector('#subResult'),
        multiResult = document.querySelector('#multiResult'),
        divResult = document.querySelector('#divResult');


function sum(num1, num2){
    sumResult.innerHTML = `${(num1+num2).toFixed(2)}`;
}

btnAdd.onclick =()=>{
    sum(Number(fn1Sum.value), Number(fn2Sum.value));
}

function sub(num1, num2){
    subResult.innerHTML = `${(num1-num2).toFixed(2)}`;
}

btnSub.onclick =()=>{
    sub(Number(fn1Sub.value), Number(fn2Sub.value));
}

function multi(num1, num2){
    multiResult.innerHTML = `${(num1*num2).toFixed(2)}`;
}

btnMulti.onclick =()=>{
    multi(Number(fn1Multi.value), Number(fn2Multi.value));
}

function div(num1, num2){
    console.log(num1/num2);
    divResult.innerHTML = `${(num1/num2).toFixed(3)}`;
}

btnDiv.onclick =()=>{
    div(Number(fn1Div.value), Number(fn2Div.value));
}

//======================PALINDROME=======================//
const userText = document.querySelector('#userText'),
        btnCheck = document.querySelector('#checkPalindrome'),
        isPalindrome = document.querySelector('#result');


function checkPalindrome(str){
    str = str.toString().toLowerCase().split(' ').join('');
    if (str.length < 2){
        isPalindrome.style.color = 'yellowgreen';
        return "palindrome!"
    }
    else if (firstChar(str) == lastChar(str)){
        return checkPalindrome(middleChars(str));
    }
    isPalindrome.style.color = 'crimson';
    return "not a palindrome!";
}

function firstChar(str){
    return str.slice(0, 1);
}

function lastChar(str){
    return str.slice(-1);
}

function middleChars(str){
    return str.slice(1, -1);
}

btnCheck.onclick=()=>{
    isPalindrome.innerHTML = checkPalindrome(userText.value);
}

//======================COUNTER=======================//

const btnClick = document.querySelector('#clickCounter');
let clickOutput = document.querySelector('#numberOfClicks');
let count = 0;
btnClick.onclick = ()=>{
    count += 1;
    clickOutput.innerHTML = `clicks: ${count}`;
}