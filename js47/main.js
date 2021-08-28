/* localStorage.setItem('myKey', [1,2,3,4])//хочу что-то сохранить
console.log(localStorage.getItem('myKey'));
console.log(localStorage.getItem('mkl'))
localStorage.removeItem('myKey')
console.log(localStorage.getItem('key1'))
localStorage.clear();

const user = {
    name: 'Anna',
    age: 45,
    address: {
        city: 'Berlin',
        street: 'Haupt'
    },
    sayHi: function(){
        console.log('hi!')

    }
}

localStorage.setItem('user', JSON.stringify(user))

const user2 = JSON.parse(localStorage.getItem('user'))
console.log(user2)


const users = [user, user, user];

localStorage.setItem('users', JSON.stringify(users))


//=====deep coping======//
//поля сохраняются, но методы - НЕТ, если копировать через JSON!

let user1 = JSON.stringify(user); //string
user1 = JSON.parse(user1) //object

user1.address.city = 'London'

console.log(user)
console.log(user1) */

