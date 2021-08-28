class User {
    constructor(name, city){
        this.name = name
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser(){
        return `<h3 data-id = "${this.id}">${this.name}, ${this.city}</h3>`
    }
}

const users = [
    new User('Vasya Pupkin', 'Berlin'), 
    new User('Malina Blau', 'Oslo'), 
    new User('Buratino Bell', 'Torino')
]

const usersList = document.querySelector('.users-list');

const renderUsersList = (array)=>{
    array.forEach(item => {
        usersList.innerHTML += item.renderUser();
    })
}

renderUsersList(users)



class Message{
    constructor(userId, title, text, data){
        this.userId = userId,
        this.title = title,
        this.text = text,
        this.data = data,
        this.id = Message.id++,
        this.comments = []
    }
    static id = 0

    renderMessage(){
        return `
        <div data-messageId="${this.id}">
            <h4>${this.title}</h4>
            <p>Published: ${this.data}</p>
        </div>
        `
    }

    renderFullInfo(userName){
        return `
            <div>
                <h3>${this.title}</h3>
                <p>${this.text}</p>
                <h4>Published: ${this.data}</h4>
                <hr>
                ${(this.comments.length ===0) ? 'No comment' : this.comments.map(item =>
                    item.renderComments()).join('')
                })}
            </div>
        `
    }
}

class Comment {
    constructor(userId, messageId){
        this.id = Comment.id++,
        this.userId = userId,
        this.messageId = messageId,
        this.text = this.text,
        this.data = data
    }

    static id = 0

    renderComment(userName){
        return `
            <div>
                <h5>${this.text}</h5>
                <p>${this.data}, commen by ${this.name}</p>
            </div>
        `
    }
}

const messages = [
    new Message(0, 'Hello', 'World', new Date().getFullYear()),
    new Message(0, 'About', 'Meeting', new Date().getFullYear()),
    new Message(0, 'Text', 'Info', new Date().getFullYear())
]

usersList.onclick = (event) => {
    if(event.target.tagName === 'H3'){
        const user = users.find(item => event.target.dataset.id == item.id);
        const userMessages = messages.filter(message => message.userId === user.id)
        const leftBox = document.querySelector('.left')
        leftBox.innerHTML = userMessages.map(item = > item)
    }
}
