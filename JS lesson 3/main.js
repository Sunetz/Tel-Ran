//=========TASK 1===========//
/*
let rubles = +prompt('Enter the summe in rubles');
if (isNaN(rubles)) {
    alert('You have to find another exchange point');
}
else{
    const euro = 86.52;
    const dollar = 72.78;

    let sumRuEu = (rubles / euro).toFixed(2);

    let sumRuDo = (rubles / dollar).toFixed(2);

    alert('You have ' + sumRuDo + ' $ or ' + sumRuEu + ' €');
} 


//========TASK 2==========//


let userNum;
let sum = 0;
do{
    userNum = +prompt('Enter your number');
}while(isNaN(userNum) || userNum < 2);

for (let i = 2; i <= userNum; i++){
    
    if(i % 2 == 0) {
        sum+=i;
    }   
}
alert('This is sum: ' + sum);
*/

//==========TASK 3=========//

//let num = parseInt(Math.random() * 100);
let num = 6;
let count = 5;

while(count>0){
    
    let guessNum = prompt('Guess number');
    if (guessNum == 'q' || guessNum == null){
        
        break;
    }
    else if (guessNum === num){
        alert('Win!');
        break;
    }
    else if(num > guessNum) {
        count -= 1;
        alert('Too small. Try again. You have ' + count + ' attempts');
        
        
    }
    else {
        count -= 1;
        alert('Too big. Try again. You have ' + count + ' attempts')
    }
}
alert('Game over. The right answer is ' + num);
