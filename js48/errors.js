/* function division(a, b){
    if(b === 0){
        throw new Error('Division by 0')
    }
    return a/b
}

try{
    console.log(division(4,0));
}
catch(err){//what happens if error
    console.log(err.message) //message in Error object
}

console.log('hello') */

/* function f1(){
    if(Math.random() > 0.5){
        throw new Error('something is wrong!')
    }
    return 100;
}
try{
    const res = f1();
    console.log(res)
}
catch(error){
    console.log(error.message)
}
finally{

}
console.log('hello!') */

console.log(new Error)