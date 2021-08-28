let staff = {
    person1:{
        name: 'John',
        salary: 2000
    },
    person2:{
        name: 'Anna',
        salary: 4100
    },
    person3:{
        name: 'Pete',
        salary: 2500
    },
    person4:{
    name: 'Kate',
    salary: 1900
}
}
console.log(staff)

//==================TASK 1========================//


let sum = 0;
for (let key in staff) {
    if(typeof(staff[key])==='object'){
        for (let name_key in staff[key]) {
            if(name_key === 'salary'){
                sum += staff[key][name_key];
            }
        }
    }
}
console.log(`Summe of salaries is ${sum}`)

//=================TASK 2=========================//


for (key in staff){
    for (deep_key in staff[key]){
        if(deep_key ==='name' && staff[key][deep_key] === 'John' || deep_key ==='name' && staff[key][deep_key] === 'Kate'){
            let salary_of = staff[key].salary
            console.log(`${staff[key][deep_key]} has salary ${staff[key].salary}`)
        }
    } 
}


//=================TASK 3=========================//
staff.person5 = {
    name: 'Sergio',
    salary: 2400
}

staff.person6 = {
    name: 'Kai',
    salary: 8000
}
console.log(staff)

//===================TASK 4=====================//

let max = staff.person1.salary
let richPerson = staff.person1.name
for (let key in staff) {
    for (deep_key in staff[key]) {
        if(deep_key === 'salary' && staff[key][deep_key] > max){
            max = staff[key][deep_key]
            richPerson = staff[key].name
        }
    }
}
console.log(`${richPerson} has maximal income. It is ${max}`)

