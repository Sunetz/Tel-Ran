const users = [
    {name: 'Ezra', age: 15, height: 147}, 
    {name: 'Aja', age: 20, height: 150}, 
    {name: 'Billy', age: 35, height: 170}, 
    {name: 'Rob', age: 21, height: 188}, 
    {name: 'Elsa', age: 19, height: 148}, 
    {name: 'Kir', age: 28, height: 181}];

//создать новый массив юзеров старше 20 лет

let usersAfter20 = users.filter(function(user){
    if(user.age > 20){        
        return user
    }
});
console.log(usersAfter20);

//создать массив юзеров ниже 150
let usersSmaller150 = users.filter(function(user){
    if(user.height < 150){
        return user
    }
});
console.log(usersSmaller150);

//добавить в существующий массив уникальные id для каждого юзера
users.forEach(function(user, index){
    user.id = index;
})
console.log(users);

//вернуть юзера с самым длинным именем
users.sort(function (a, b) {
    if (a.name.length > b.name.length) {
        return -1;
    }
    if (a.name.length < b.name.length) {
        return 1;
    }    
    return 0;
});
console.log(users[0]);

//вернуть массив -> ['Vasya, age: 15 years old, height: 180 cm', ...]
const usersByString = users.map(user=>`${user.name}, age: ${user.age} years old, height: ${user.height}`);
console.log(usersByString);

//[Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)
const heros= ['Peter Pan', 'Sherlock Holms', 'Mary Poppins', 'Tom Sawyer'];

function makeHero(name, lastname){
    this.name = name;
    this.lastname = lastname;
}
let herosArray = heros.map(item=>item.split(' '));
let newArr = herosArray.map(item => new makeHero(item[0], item[1]));
console.log(newArr)

//написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]

function fillArr(num, str){
    let newArr = [];
    for(let i=0; i < num; i++){
        newArr.push(str);
    }
    return newArr
}
console.log(fillArr(5, 'hello'));

//написать функцию changeString ('abcdef') -> 'aBcDeF'

function ToCamelCase(str){
    let arr = str.split('');
    let newArr = [];
    for(let i=0; i < arr.length; i++){        
        if(i%2!=0){
            let letter = arr[i].toUpperCase();
            newArr.push(letter);            
        }
        else{
            letter = arr[i].toLowerCase(); 
            newArr.push(letter);
        }        
    }
    return newArr.join('');
}

console.log(ToCamelCase('abcdef'))

//написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве

function countItem(arr, el){
    let newArr = arr.filter(item => item == el);    
    return newArr.length
}
console.log(countItem(['auto', 'train', 'train', 'apple', 3, 4, undefined], 'train'));

//функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7]

function clearArray(arr){

    let newArr = arr.filter(item => typeof item === 'number' && !isNaN(item));
    return newArr;
}
console.log(clearArray([1.1,2,3, null, '', undefined, 5, NaN, 7]))

