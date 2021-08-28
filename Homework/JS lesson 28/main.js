/* Task01
написать метод, который на вход получает массив целых чисел, которые могут повторятся, а возвращает новый массив без повторяющихся чисел
[2,5,7,9,7,2] -> [2,5,7,9]
[2,0,0,1,1,2] -> [2,0,1]
 */

function noRepeat(someArray){
    let newArray = [];
    for(let i=0; i < someArray.length; i++){
        if(!newArray.includes(someArray[i])){
            newArray.push(someArray[i])
        }
    }
    return newArray
}

console.log(noRepeat([2,5,7,9,7,2]));
console.log(noRepeat([2,5,7,0,0,0,0,7,2]));


//Task02
/* 
написать метод, который на вход получает массив целых чисел, сравнивает первый и последний элемент этого массива и возвращает новый массив, в котором все элементы старого массива заменены на большее значение.
[1,5,6,7,2] -> [2,2,2,2,2];
[7,3,8,4] -> [7,7,7,7]
*/

function changeToTheBiggest(someArray){
    let newArray;
    if (someArray[0] > someArray[someArray.length-1]){
        newArray = someArray.map(item => item = someArray[0])
    } else{
        newArray = someArray.map(item => item = someArray[someArray.length-1])
    }
    return newArray
}

console.log(changeToTheBiggest([7,3,8,4]));