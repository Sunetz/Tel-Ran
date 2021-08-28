//TASK 1
function getShortNames4(arr){
    let shortNames = [];
    for (i=0; i < arr.length; i++){
        if(arr[i].length <= 4){
            shortNames.push(arr[i]);
        }
    }
    return shortNames
}

console.log(getShortNames4(['Ana', 'Annna']));


function getShortNames(arr, len){
    let newArray = []; 
    for (i=0; i < arr.length; i++){
        if(arr[i].length <= len){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(getShortNames(['Ana', 'Annna'], 3));

//TASK 2

function getDivisors(n){
    let divisors = [];
    for(let i=2; i < n; i++){
        if (n%i === 0){
            divisors.push(i);
        }
    }
    return divisors;
}

console.log(getDivisors(10));
console.log(getDivisors(12));

//TASK 3
//recursion

function sumDigitalNumber(num){
    let total = 0;
    if(String(num).length < 2){
        return total += num;
    }
    else{
        newNum = String(num).split('');
        for(let i=0; i < newNum.length; i++){
            total += Number(newNum[i]);
        }
            if (total > 9){
                return sumDigitalNumber(total);
            }      
        
    }
    return total;
}
            
        

console.log(sumDigitalNumber(8)); //8
console.log(sumDigitalNumber(88)); //7
console.log(sumDigitalNumber(888)); //6
console.log(sumDigitalNumber(8888)); //5
console.log(sumDigitalNumber(88888)); //4