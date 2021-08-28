//Task02
/* написать функцию, которая корачивает строку (если слово длиннее, чем maxLength - обрезать до maxLength и добавит ... , если короче - вернуть изначальную строку)
    function stringCat(str, maxLength);

    stringCat('hello world!', 5) -> 'hello...'
    stringCat('hello', 5) -> 'hello'

let newstr = prompt('Say something');
let maxLength = Number(prompt('Maximal length of string must be...?'));

function stringCat(string, Number){
    if(string.length > Number){
        document.write(string.slice(0, maxLength) + '...');
    }else{
        document.write(string)
    }
}


function stringCat(str, maxLength){
    if(str.length > maxLength){
        document.write(str.slice(0, maxLength) + '...')
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

function stringCat(str, maxLength){
    return (str.length > maxLength) ? str.slice(0, maxLength) + '...': str;
}

stringCat(newstr, maxLength);
*/

//Task03
/* 
    игра русско-английский словарь;
    двухмерный массив с парами слов (всего пять пар)
    спрашивать пользователя перевод английского слова из массива, если ответ правильный - выводить "Отлично!", если нет - правильный перевод слова
*/
let langFrom;
let langTo;
const en = 0;
const ru = 1;
const de = 2;
const dictionary = [['defender', 'защитник', 'Verteidiger'],['forward', 'нападающий','Stürmer'],['halfback','полузащитник','Mittelfeldspieler'],['referee','судья','Schiedsrichter'],['reserves bench','скамейка запасных','Ersatzbank']];
const languages = ['english', 'russian', 'german'];
let rightAnswers = [];


//==============================SELECT LANGUAGES====================================//

function selectLang(){
    
    langFrom = +prompt('Select the first language. For translation from english, type "0". For translation from russian, type "1". For translation from german, type "2"');
    langTo = +prompt('Select the second language. For translation to english, type "0". For translation to russian, type "1". For translation to german, type "2"');
}   
    

//=================================TRANSLATION FUNCTIONS================================//


function translate(array,langFrom, langTo){
    let j = 0;
    loop1:
    for(i=0; i <= array.length; i++){
        let translation = prompt(`Translate ${array[i][langFrom]} from ${languages[langFrom]} to ${languages[langTo]}`);
        
        if(translation === null || translation ===''){
            break loop1;
        }else{
            if(translation == dictionary[i][langTo]){
                alert('Perfect!')
                dictionary.splice(i-j, 1);
                console.log(dictionary)
                j += 1;
                
                
            }else{ 
                alert(`Wrong. The correct translation is ${array[i][langTo]}`);
            }
        }
    }
}


selectLang();
translate(dictionary, langFrom, langTo);

