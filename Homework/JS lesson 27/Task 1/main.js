/* Task01
    игра русско-английский словарь;
    // Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
    // и если пользователь ввел правильный перевод - удалять слово из массива
    // Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
    // Если ошибки были - показывать число сделанных ошибок, спросить не хотите повторить?
    // Спросить пользователя, хочет ли он перейти на следующий уровень?
    //Реализовать следующий уровень

    //Со звездочкой - реализовать возможность выбора языка
 */
let langFrom;
let langTo;

const en = 0;
const ru = 1;
const de = 2;

const dictionary = [
    [['apple', 'яблоко', 'Apfel'],
    ['meat','мясо','Fleisch'], 
    ['goose','гусь','Hans'], 
    ['table','стол','Tisch'], 
    ['sky', 'небо', 'Himmel'], 
    ['stairs','лестница','Treppe']], 
    [['defender', 'защитник', 'Verteidiger'],
    ['forward', 'нападающий','Stürmer'],
    ['halfback','полузащитник','Mittelfeldspieler'],
    ['referee','судья','Schiedsrichter'],
    ['reserves bench','скамейка запасных','Ersatzbank']]];

const languages = ['english', 'russian', 'german'];



//==============================SELECT LANGUAGES====================================//

function startGame(arrWords, ){
    alert('Welcom to the word-memory game!')
}

function selectLang(){
    langFrom = +prompt('Select the first language. For translation from english, type "0". For translation from russian, type "1". For translation from german, type "2"');   
    langTo = +prompt('Select the second language. For translation to english, type "0". For translation to russian, type "1". For translation to german, type "2"');
}   
    

//=================================TRANSLATION FUNCTIONS================================//

function translate(array,langFrom,langTo){
    
    if(selectLang = null){
        return null;
    }
    else{
        for(let i=0; i < array.length; i++){
        let mistakes = 0;
        
        while (array[i].length > 0){
            let word = array[i][Math.floor(Math.random()*array[i].length)];
            const index = array[i].indexOf(word);
            console.log(word)
            let answer = prompt(`Translate ${word[langFrom]} from ${languages[langFrom]} to ${languages[langTo]}`);
            if(answer == null || answer == ''){
                break;
            }
            else if(answer == word[langTo]){
                alert('Right!');
                array[i].splice(index,1);
            }
            else if(answer != word[langTo]){
                alert(`Wrong! The right answer is ${word[langTo]}`);
                mistakes += 1;
            }
        }
        alert('Great job!');
        if(mistakes > 0){
            alert(`The number of mistakes is: ${mistakes}`);
        }
        
    
        let nextLevel = confirm('Do you want to play next level?');
        
        if(nextLevel != true){
            alert('Bye-bye!');
            break;
        }
    }
}
}


selectLang();
//randomWord(dictionary);
translate(dictionary, langFrom, langTo);

