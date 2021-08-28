users =[
    {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
    {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
    {name: 'Mariya', address:{city:'London', country:'England'}, age: 17},
    {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
    {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
    {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
]

//=====================Task 1=======================//

function averAge(array){
    let sum = 0;
    for(let i=0; i < array.length; i++){
        sum += array[i].age;
    }
    return (sum/array.length);
}

console.log((users.reduce((sumAge, user)=> sumAge + user.age, 0)/usrs.length).toFixed(0));

console.log(averAge(users));

//=====================Task 2=======================//

function theYoungest(array){
    let young = array[0].age;
    for(let i=1; i < array.length; i++){
        if(array[i].age < young){
            young = array[i].age
        }
    }
    return young;
}

console.log(theYoungest(users));

//=====================Task 3=======================//

function theOldest(array){
    let young = array[0].age;
    for(let i=1; i < array.length; i++){
        if(array[i].age > young){
            young = array[i].age
        }
    }
    return young;
}

console.log(theOldest(users));

//=====================Task 4=======================//

function notItalian(array){
    let notFromItaly = [];
    for(let i=0; i < array.length; i++){
        if(array[i].address.country != 'Italy'){
            notFromItaly.push(array[i]);
        }
    }
    return notFromItaly;
}

console.log(notItalian(users));

//=====================Task 5=======================//

function fromSixteenToThirtyFive(array){
    let from16to35 = [];
    for(let i=0; i <array.length; i++){
        if(array[i].age > 16 && array[i].age < 35){
            from16to35.push(array[i])
        }
    }
    return from16to35;
}

console.log(fromSixteenToThirtyFive(users));
console.log(typeof(fromSixteenToThirtyFive));

//=====================Task 6=======================//

function names(array){
    let names = [];
    for(let i=0; i < array.length; i++){
        names.push(array[i].name)
    }
    return names
}

console.log(names(users));

//=====================Task 7=======================//

function nameStartsFromM(array){
    let mNames = [];
    for(let i=0; i < array.length; i++){
        if(array[i].name.charAt(0) == 'M'){
            mNames.push(array[i]);
        }
    }
    return mNames;
}

console.log(nameStartsFromM(users));