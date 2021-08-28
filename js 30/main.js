//let num = +prompt('Give a number, please');

/*function recursiveOutput(n){
    let arr=[];
    for(let i=1; i <= n; i++){
        arr.push(i)
    }
    return arr.join('');
}
*/

//========================Task01===============================// 
/* n = 10
function recusionOutput(n) -> '12345678910'
 */

let i = 1;
let arr =[];

function recursiveOutput(n){
    
    arr.push(i);
    i++;

    while (i <=n){
        recursiveOutput(n-1)
    }
    return arr.join('');   
}
console.log(recursiveOutput(25));

//=======================Task02================================//
/* 'шалаш' 'abba' 'потоп' 'а роза упала на лапу азора' 
function checkPolindrom('nagan') -> true;
        checkPolindrom('grhjs') -> false;
 */

function checkPalindrome(str){
    str = str.toLowerCase();
    str = str.split(' ').join('');
    
    if (str.length < 2){
        return true
    }

    else if (firstChar(str) == lastChar(str)){
        return checkPalindrome(middleChars(str));
    }
    return false;
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

console.log(checkPalindrome('nagan nagan'));
console.log(checkPalindrome('nagay'));
console.log(checkPalindrome('а роза упала на лапу азора'));

//===========================Task03================================//
/* метод, который получает массив вида users возвращает массив вида changedUsers */
const users = [
    {firstName: 'Vasya', lastName:'Pupkin', id:1},
    {firstName: 'Vas', lastName:'Pupk', id:2},
    {firstName: 'Sasha', lastName:'Vasin', id:3}
]

/*changedUsers -> [
    {fullName: 'Vasya Pupkin', id:1},
    {fullName: 'Vas Pupk', id:2},
    {fullName: 'Sasha Vasin', id:3}
]*/

function change(arr){
    
    const changedUsers = new Array;
    for(let i=0; i < arr.length; i++){
        const element = new Object;
        element.fullName = `${arr[i].firstName} ${arr[i].lastName}`;
        element.id = arr[i].id;
        changedUsers.push(element);
    }
    return changedUsers;

}
console.log(change(users));

function change(arr){
    const newArray = [];
    for(let i=0; i < arr.length; i++){
        newArray.push({
            fullName: array[i].firstName + ' ' + array[i].lastName,
            id: array[i].id
        })
        
    }
    return newArray;
}

function change(arr){
    const newArray = [];

    for (let user of arr){
        const{firstName, lastName, id} = user;
        newArray.push({
            fullName: firstName + '' + lastName,
            id
        })
    }
    return newArray;
}

function change(arr){
    return arr.map(user => ({
        fullName: user.firstName + ' ' + lastName,
        user: user.id
    }))
}