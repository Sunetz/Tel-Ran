//Task01
/* 
'hjkld fghj fhjgldhgfjlhsg shfjg shgjslg' -> 4 (вернуть длину самого короткого слова в строке)
 */


function findShortest1(str){
    const arr = str.split(' ');
    let shortest = arr[0].length;
    for(let i=1; i < arr.length; i++){
        if(arr[i].length < shortest){
            shortest = arr[i].length;
        }
    }
    return shortest;     
}


function findShortest2(str){
    return str.split(' ').reduce((minWord, currentWord)=>minWord.length < currentWord.length ? minWord : currentWord).length;
    
}

console.log(findShortest1('hjkld fghj fhjgldhgfjlhsg shfjg shgjslg'));
console.log(findShortest2('hjkld fghj fhjgldhgfjlhsg shfjg shgjslg'));