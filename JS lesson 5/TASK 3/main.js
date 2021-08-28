let num = +prompt('Enter number, bigger than 2');
res = [];
for(let i=2; i<=num; i++){
    res.push(i);
}

here:
for(let i = 0; i <=res.length; i++){
    for(let j = 0; j <=primeNumbers.length; j++)
    if(res[i] % primeNumbers[j] == 0){
        continue here;
    }
    primeNumbers.push(res[i])
}
console.log(`Prime numbers are between 2 and ${num}: ${primeNumbers}`)
