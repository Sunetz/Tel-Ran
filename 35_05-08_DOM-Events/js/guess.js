const input = document.querySelector('#userAnswer'),
        checkBtn = document.querySelector('#button'),
        repeatBtn = document.querySelector('#repeatBtn'),
        MAX_TRY_COUNT = 5;

hide(repeatBtn);


let tryCount = 0,
    guessNumber = parseInt(Math.random()* 101),
    isGuessed = false;
console.log(guessNumber);

function hide(element){
    element.style.display = 'none';
}
function show(element){
    element.style.display = 'block';
}

function gameState(message){
    hide(checkBtn);
    hide(input);
    show(repeatBtn);
    changeMessage(message);
}

function gameOver(isGuessed = false){
    if(isGuessed){
        gameState('You win!');
    }
    else if(tryCount == MAX_TRY_COUNT){
        gameState(`You lost! <br> Correct answer ${guessNumber}`);
    }
    else{
        gameState('Play another time')
    }
}

function changeMessage(message){
    document.querySelector('#message').innerHTML = message;
}

checkBtn.onclick = function(){
    const userAnswer = input.value;
    
    if(userAnswer === 'q'){
        return gameOver();
    }
    else if(userAnswer === '' || isNaN(userAnswer)){
        changeMessage(`Looks like your input is not a number, <br> try again. You have ${MAX_TRY_COUNT - tryCount} more attempts`);
        input.value = '';
        return
    }
    else if(userAnswer == guessNumber){
        isGuessed = true;
        return gameOver(isGuessed);      
    }
    else if(tryCount == MAX_TRY_COUNT){
        
        return gameOver();
    }
    else{
        tryCount ++;
        changeMessage(`The number is too ${userAnswer > guessNumber ? 'big' : 'small'}, try again. You have ${MAX_TRY_COUNT - tryCount} more attempts`);
        input.value = '';
    }
    
}


repeatBtn.onclick = function(){
    guessNumber = parseInt(Math.random() * 101);
    tryCount = 0;
    isGuessed = false;
    input.value = '';
    hide(repeatBtn);
    show(input);
    show(checkBtn);
    changeMessage("Guessed number is greater than 0, but less than 100 <br> To EXIT enter 'q'")
}