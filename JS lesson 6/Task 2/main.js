let number = +prompt('Give me a number');
let power = +prompt('Give me another number. It will be a power.') 

function powerNumber(number, power){
    let result = number ** power;
    alert(`Let see...${number} to ${power} power will be ${result}`)
}

powerNumber(number, power);