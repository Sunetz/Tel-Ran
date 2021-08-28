//TASK 1

users =[
    {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
    {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
    {name: 'Mariya', address:{city:'London', country:'England'}, age: 17},
    {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
    {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
    {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
]

function sortByAge(arr){
    arr.sort((a, b) => a.age-b.age);
    return arr
    }

console.log(sortByAge(users));

function sortByName(arr){
    arr.sort(function(a,b){
        if (a.name > b.name){
            return 1;
        }
        else if(a.name < b.name){
            return -1;
        }
        return 0
    });
    return arr;
}
console.log(sortByName(users));


function sortByAddress(arr){
    arr.sort(function(a,b){
        if (a.address.country > b.address.country){
            return 1;
        }
        else if (a.address.country < b.address.country){
            return -1
        }
        return 0;
    })
    return arr;
}

console.log(sortByAddress(users));

//TASK 2
/*
[1,5,8,4,6,9,3,10];
function filterRange(array,1,4) -> [1,3,4]
 */

let thisArr = [1,5,8,4,6,9,3,10];

function filterRange(arr, startNum, finishNum){
    arr.sort((a,b) => a-b);
    let result = arr.filter(num => num <= finishNum && num > startNum)
    
    return result;
}

console.log(filterRange(thisArr, 2, 6));


//TASK 3

let arr = [1,2,5,10];

function fromBigToSmall(someArr){
    someArr.sort((a,b)=> b-a);
    return someArr
}

console.log(fromBigToSmall(arr));
