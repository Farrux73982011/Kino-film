import {
    movies
} from "./db.js";
let genres =  movies.map((item) => item.Genre)
genres = [...new Set(genres)]
let ul_class = document.querySelector('.promo__menu-list ul')
let promo__interactive = document.querySelector('.promo__interactive-list')
let bac = document.querySelector(".promo__bg");
let gen = document.querySelector(".promo__genre");
let title = document.querySelector(".promo__title");
let text = document.querySelector(".promo__descr");
let inp_search = document.querySelector('#search')
let header__logo = document.querySelector('.header__logo img')
// let compStyle = window.getComputedStyle(inp_search.parentElement)
// let afterElement = compStyle.getPropertyValue(':after')

inp_search.onkeyup = (e) => { 
    let val = inp_search.value.toLowerCase().trim()

    let filtered = movies.filter((item) => {
        let {Title} = item

        if(Title.toLowerCase().includes(val)) {
            return item
        }
    })

    reload(filtered)
}


reload(movies);

function reload(data) {
    promo__interactive.innerHTML = ""
    setMovie(data[0])

    for (let item of data) {
        let idx = data.indexOf(item) + 1

        let li = document.createElement('li')
        let dele = document.createElement('div')

        li.classList.add('promo__interactive-item')
        dele.classList.add('delete')

        li.innerHTML = `${idx}. ${item.Title.slice(0, 20)}`

        li.append(dele)
        promo__interactive.append(li)

        dele.onclick = () => {
            let idx = data.indexOf(item)
            data.splice(idx, 1)
        };

        li.onclick = () => {
            setMovie(item)
        };           
    }
}


reload_genres(genres)

function reload_genres(data) {
    ul_class.innerHTML = ''

    for(let item of data){
        let li = document.createElement('li')
        let a = document.createElement('a')
            
        a.innerHTML = item
        a.classList.add('promo__menu-item')
        a.href = "#"

        li.append(a)
        ul_class.append(li)
    }

}


function setMovie(item) {
    bac.style.backgroundImage = `url("${item.Poster}")`;
    gen.innerHTML = item.Genre;
    title.innerHTML = item.Title;
    text.innerHTML = item.Plot;
}


let promo__menu = document.querySelectorAll('.promo__menu-item')
promo__menu.forEach((btn) => {
    btn.onclick = () => {
        promo__menu.forEach(e => e.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    
        let val = btn.innerHTML
    
        let filttrr = movies.filter((item) => {
   
            if(item.Genre.includes(val)) {
                return item
            }
        })
    
        reload(filttrr)
    }
})




    