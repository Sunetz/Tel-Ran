const library = [
    {
    id: 0,
    title: 'Harry Potter',
    author: 'J.Rowling',
    yearIssue: 2002,
    genre: 'Adventure',
    ISBN: 2346247,
    cover: 'https://bilder.buecher.de/produkte/40/40584/40584156z.jpg'
    },
    {
    id: 1,
    title: 'Lord of the Ring',
    author: 'J.Tolkien',
    yearIssue: 1956,
    genre: 'Saga',
    ISBN: 2344389,
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL.jpg'
    },
    {
        id: 2,
        title: 'Emma',
        author: 'J.Austen',
        yearIssue: 1816,
        genre: 'Drama',
        ISBN: 2344129,
        cover: 'https://images2.medimops.eu/product/970156/M00007350783-large.jpg'
        },
        {
            id: 3,
            title: 'Emmrdha',
            author: 'J.Austen',
            yearIssue: 1816,
            genre: 'Drama',
            ISBN: 2344129,
            cover: 'https://images2.medimops.eu/product/970156/M00007350783-large.jpg'
            },
]

const left = document.querySelector('#left');
const right = document.querySelector('#right');


library.forEach((element, index) =>{//some names
    const div = document.createElement('div');
    div.id = 'book_' + element.id;
    div.className = "book";
    div.innerHTML = `<p>
    ${index+1}. <span style="font-size: 16px">${element.title}</span>, ${element.author}</p>`;
    left.append(div);
});

const books = left.querySelectorAll('.book');

for(book of books){
    book.onclick = (event)=>{
        right.innerHTML = '';
        const id = +event.currentTarget.id.split("_")[1];
        const element = library.find((b)=> b.id === id);
        const bookDetail = document.createElement('div');
        bookDetail.className = "bookDetail";
        bookDetail.innerHTML = `<img src=${element.cover} alt=${element.title}>
        <h2>${element.title}</h2>
        <h5>${element.author}</h5>
        <p style="text-align: center;">years of issue: ${element.yearIssue}, genre: ${element.genre}</p>`;
        right.append(bookDetail);
    }
}


