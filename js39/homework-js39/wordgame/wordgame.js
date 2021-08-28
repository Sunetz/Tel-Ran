const dictionary = [
    {word: 'ипотека', description: 'кредит на квартиру'},
    {word: 'гимн', description: 'главная песня страны'},
    {word: 'библиотека', description: 'дом, полный книг'},
    {word: 'аптека', description: 'магазин лекарств'},
    {word: 'архив', description: 'собрание старинных документов'},
    {word: 'университет', description: 'высшая школа'},
    {word: 'ясли', description: 'детский сад для самых маленьких'},
    {word: 'билет', description: 'проездной документ'},
    {word: 'паразитизм', description: 'жизнь засчет других'},
];

const input = document.querySelector("#userAnswer"),
    startBtn = document.querySelector("#button"),
    checkBtn = document.querySelector("#checkBtn");

let guessWord;
let answerArr;
let numLetter;
let wordState = document.querySelector("#wordState");

hide(checkBtn)

function changeMessage(message) {
    document.querySelector("#message").innerHTML = message;
}

function hide(element) {
    element.style.display = "none"
}

function show(element) {
    element.style.display = "block"
}


startBtn.onclick = () => {
    let indexOfWord = Math.floor(Math.random()*dictionary.length);
    guessWord = dictionary[indexOfWord].word;
    
    
    answerArr = makeSymbolArr(guessWord);
    changeMessage(`Your word is ${guessWord.length} letters, and means ${dictionary[indexOfWord].description}.<br>Enter letter`);

    hide(startBtn);
    show(checkBtn);
    wordState.innerHTML=`${answerArr.join(" ")}`
    input.style.display = 'block';
    }
    


function makeSymbolArr(str) {
    const arr = [];
    arr.length = str.length;
    for (let i = 0; i < arr.length; i++){
        arr[i] = "-";
    }
    return arr;
}

checkBtn.onclick = () => {
    let inputLetter = input.value;
    if (checkLetter(inputLetter)) {
        changeMessage(`Super!`);
        wordState.innerHTML = `${answerArr.join(" ")}`
        input.value = "";
        input.focus();
        if (!answerArr.includes("-")){
            hide(input);
            hide(checkBtn);
            show(startBtn);
            checkBtn.innerHTML = 'play again';
            wordState.innerHTML +=`<br> <p>The end ))). Would you like to play again?To repeat the game, press the button</p>`;
            
            
        }
    } else {
        changeMessage(`No such letter...`);
        input.value = "";
        input.focus();
    }
}

function checkLetter(letter) {
    let letterContain = false;
    for (let i = 0; i < guessWord.length; i++){
        if (letter == guessWord[i] && answerArr[i]=="-") {
            letterContain = true;
            answerArr[i] = letter;
            numLetter--;
        }
    } return letterContain;
}