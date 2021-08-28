/* Задания:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



//1) Удалить все рекламные блоки со страницы (правая часть сайта)

let promoAdv = document.querySelector('.promo__adv');
console.log(promoAdv);
while(promoAdv.firstChild){
    promoAdv.removeChild(promoAdv.firstChild);
}

//2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.querySelector('.promo__genre');
console.log(genre);
genre.textContent = 'DRAMA';

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS.

const bg = document.querySelector('.promo__bg');
bg.style.cssText = 'background: url(./img/bg.jpg)';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту.
//5) Добавить нумерацию выведенных фильмов

const films = document.querySelectorAll('.promo__interactive-item');
const filmsArr = Array.from(films);
const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};
for(let i=0; i < filmsArr.length; i++){
    filmsArr[i].textContent = `${i+1}.${movieDB.movies[i]}`
}










