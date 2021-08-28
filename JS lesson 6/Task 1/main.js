//=====Variables======================================//

const numbers = [];

let numOfnum = +prompt('How many numbers do you want to remember?');
let maxNum = +prompt('Numbers you remember will be from 1 to...?');

generateNumbers(numOfnum, maxNum);

let randomIndex = parseInt(Math.random() * numbers.length);
let userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);
let randomNum = numbers[randomIndex];

checkNumber(randomNum, userAnswer);

//=====Functions=========================================//

function generateNumbers(numOfnum, maxNum){
    
    for(let i = 0; i <= numOfnum-1; i++){
        numbers[i] = parseInt(Math.random() * maxNum);        
    }
    alert(`Remember these numbers: ${numbers}`)
    return numbers
}

function checkNumber(randomNum, userAnswer){
    if(userAnswer == randomNum){
        alert('You right!!!')
    }else{
        alert(`Wrong answer, right number is ${numbers[randomIndex]}`)
}
}
