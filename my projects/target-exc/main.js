class User{
    constructor(name, city){
        this.name = name,
        this.city = city
        this.id = User.id++
    }
    static id = 0
}

const users = [
    new User('Aleks', 'Berlin'), 
    new User('Bobby', 'Oslo'), 
    new User('Greta', 'Paris'), 
    new User('Kate', 'Berlin')
];

console.log(users)
