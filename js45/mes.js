class User {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser() {
        return `<h3 data-id="${this.id}">${this.name}, ${this.city}</h3>`
    }
}

const users = [
    new User('Vasya Pupkin', 'Berlin'),
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]

const usersList = document.querySelector('.users-list')

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

