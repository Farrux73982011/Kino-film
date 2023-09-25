
import { movies } from "./db.js";
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

let genres = movies.map((item) => item.Genre);
genres = ["All", ...new Set(genres)];

let adds = document.querySelector('.promo__adv')
adds.innerHTML = ' '

let logo = document.querySelector('.promo__bg')

logo.style.backgroundImage = 'url(../img/bg.jpg)';

let promo__interactive = document.querySelector('.promo__interactive-list')

let bac = document.querySelector(".promo__bg");
let gen = document.querySelector(".promo__genre");
let title = document.querySelector(".promo__title");
let text = document.querySelector(".promo__descr");
let IMBd = document.querySelector(".IMBd");
let kinopoisk = document.querySelector(".kinopoisk");
let h1 = document.querySelector('.h1')
let h2 = document.querySelector('.h2')
let h3 = document.querySelector('.h3')
let h4 = document.querySelector('.h4')
let h5 = document.querySelector('.h5')
let h6 = document.querySelector('.h6')
let h7 = document.querySelector('.h7')
let h8 = document.querySelector('.h8')
let h9 = document.querySelector('.h9')
let h10 = document.querySelector('.h10')
let h11 = document.querySelector('.h11')

let filterfordel = [...movies];
reload(filterfordel);
function reload(data) {
    

for(let item of movies){
    let div = document.createElement('div')
    let li = document.createElement('h1')
    let dele = document.createElement('div')

    li.classList.add('promo__interactive-item')
    dele.classList.add('delete')

    li.innerHTML = item.Title

    promo__interactive.append(div)
    div.append(li, dele)

    dele.onclick = () => {
        data = data.filter((event) => event.ID !== event.ID);
    };

    li.onclick = () => {
        bac.style.backgroundImage = `url("${item.Poster}")`;
        gen.innerHTML = item.Genre;
        title.innerHTML = item.Title;
        text.innerHTML = item.Plot;
        IMBd.innerHTML = `IMDb: ${item.imdbRating}`;
        kinopoisk.innerHTML = `Кинопоиск: ${item.Metascore}`;
        h1.innerHTML = `Titel: ${item.Title}`
        h2.innerHTML =  `Year: ${item.Year}`
        h3.innerHTML =  `Runtime: ${item.Runtime}`
        h4.innerHTML =  `Genre: ${item.Genre}`
        h5.innerHTML =  `Director: ${item.Director}`
        h6.innerHTML =  `Writer: ${item.Writer}`
        h7.innerHTML =  `Actors: ${item.Actors}`
        h8.innerHTML =  `Plot: ${item.Plot}`
        h9.innerHTML =  `Language: ${item.Language}`
        h10.innerHTML =  `Country: ${item.Country}`
        h11.innerHTML =  `Awards: ${item.Awards}`
    };
}
}
let promo__menu = document.querySelectorAll('.promo__menu-item')

promo__menu.forEach((btn) => {
    btn.onclick = () => {
        promo__menu.forEach(e => e.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    }
})
