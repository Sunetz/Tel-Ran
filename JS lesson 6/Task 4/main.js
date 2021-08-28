const numbers = [1,2,3,4,5];
let result = [];

//=======Var 1========(с новым массивом)=====//
/*
function reversArray(numbers){
    for(i=numbers.length-1; i >=0; i--){
        result.push(numbers[i])
    }
    alert(`Reversed array will be: ${result}`)
    return result
}

reversArray(numbers);
*/
//======Var 2=======(с тем же массивом)======//


let len = numbers.length;
function reversArray(numbers){
    for(i=0; i<=(len/2); i++){
        let index = len-i-1;
        [numbers[i],numbers[index]] = [numbers[index], numbers[i]];
    }
    alert(`Reversed array will be: ${numbers}`)
    return numbers
}

reversArray(numbers)