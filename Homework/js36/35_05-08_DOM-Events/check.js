const inputWord = document.querySelector('#userWord'),
    inputLetter = document.querySelector('#userLetter'),
    btnSubmit = document.querySelector('#submit'),
    btnCheck = document.querySelector('#check'),
    message = document.querySelector('#message');
let count,
    str = [];
function countLetters(){ //=========================Кол-во букв
    count = inputWord.value.length;
    return count;
}
function submitWord(){
    message.innerHTML = `Your word has ${count} letters <br><br>`;
    for(let i=0; i<count; i++){
        //str += '-';
        str.push('-');
    }    
    message.innerHTML += str.join('');
    message.innerHTML += `<br><br>enter a letter<br><br>`
    console.log(str);
    return str; 
}

btnSubmit.onclick = ()=>{
    inputWord.style.display = "none";
    btnSubmit.style.display = "none";
    inputLetter.style.display = "block";
    btnCheck.style.display = "block";
    countLetters();
    submitWord();
}

btnCheck.onclick = ()=>{
    checkLetter();
}

function checkLetter(letter){
    let letterContain = false;
    for(let i; i < inputWord; i++){
        if(letter == inputWord[i] && str[i]=='-'){
            letterContain = true;
            str[i] = letter;
            numLetter--;
        }
        return letterContain;
    }

}


