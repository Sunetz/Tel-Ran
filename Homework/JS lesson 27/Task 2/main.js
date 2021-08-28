//===========TASK 1=============//


let text = ['background-color', 'list-style-image', 'Text-Decoration'];

const splitJoinMethod = function(str){
    let temp = str.split(['-']);
    let temp2 = [temp[0].charAt(0).toLowerCase() + temp[0].slice(1)];
    for(let i=1; i < temp.length; i++){
        temp2.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
    }
    return temp2.join('');
}

for (let i=0; i < text.length; i++){
    splitJoinMethod(text[i]);    
}


//===========TASK 2============//

const average = function(array){
    let sum = 0;
    for(let i=0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum/array.length)
}

average([2,8,10,0]);


//===========TASK 3============//
/*
function factorial(n){
    
    if (n==1){
        return n;
    }
    else{
        return (n*factorial(n-1))
    }
}
*/
const factorial = [1,2,3,4,5];

console.log(factorial.reduce((a, b) => a*b))
//console.log(factorial(5));

