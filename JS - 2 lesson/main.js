//================TASK 1=====================//
//Method 1

let num1 = +prompt('Give me the first number');
let num2 = +prompt('Give me the second number');
let sum = num1 + num2;
const TEN = 10
if (sum < TEN) {
    alert(sum + ' is too small');
} else if (sum > TEN) {
    alert(sum + ' is too big');
} else {
    alert('Bingo!')
}
/*

//=================TASK 1=====================//
//Method 2

let num1 = +prompt('Give me the first number');
let num2 = +prompt('Give me the second number');
let sum = num1 + num2;
let message;
message = (sum < 10) ? (sum + ' is too small') :
(sum > 10) ? (sum + ' is too big') : 
('Bingo!') ; 
alert(message);


/*
//================TASK 2=====================//
//Method 1
let login = prompt('Enter your login')
let message;
message = (login === 'employee') ? ('Hi employee!') :
(login === 'boss') ? ('Hello boss!') :
(login ==='') ? ('no login') :
('Hi user');
alert(message);


//=================TASK 2====================//
//Method 2

let login = prompt('Enter your login');
switch(login) {
    case 'employee':
        alert('Hi employee!');
    case 'boss':
        alert('Hello boss!')
    case '':
        alert('no login')
    default:
        alert('Hi user')
}


//===================TASK 2=================//
//Method 3

let login = prompt('Enter your login');
if (login === 'employee') {
    alert('Hi employee!');
} else if (login === 'boss') {
    alert('Hello boss!')
} else if (login === '') {
    alert('no login')
} else {
    alert('Hi user')
}



//==================TASK 3=================//
//Method 1

let num = +prompt('Enter your number');

if (num >= 14 && num <= 90) {
    alert('The number is between 14 and 90')
}
else{
    alert('The number is NOT between 14 and 90')
}

//=================TASK 3==================//
//Method 1
let num = +prompt('Enter your number');

let message;
message = (num > 90 || num < 14) ? ('The number is NOT between 14 and 90') : ('The number is between 14 and 90');
alert(message);

*/