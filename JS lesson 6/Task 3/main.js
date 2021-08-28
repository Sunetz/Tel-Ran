const numbers = [2,4,6,10,12];
let result = 0;
let len = numbers.length;

function sumNumbers(numbers){
    for(i=0; i<=len-1; i++){
        result += numbers[i]
    }
    
    console.log(`The sum of numbers is ${result}`)
    return result
}

sumNumbers(numbers);