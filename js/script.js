import peliculas from './peliculas.js'

let genre28 = document.getElementById("genero28");
let genre53 = document.getElementById("genero53");
let genre12 = document.getElementById("genero12");

let accion = [];
let thriller = [];
let aventura = [];

const filmFiling = () => {
    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(28)) {
            accion.unshift(peliculas[i]);
        }
        if (peliculas[i].genre_ids.includes(53)) {
            thriller.unshift(peliculas[i]);
        }
        if (peliculas[i].genre_ids.includes(12)) {
            aventura.unshift(peliculas[i]);
        }
    }

    console.log({
        accion,
        thriller,
        aventura
    });
}

/*
 @param {Object} film
*/
let createFilmContainer = (film) => {

    return `<div class="film_container">
    <div class="film_img"> <img src="https://image.tmdb.org/t/p/w500/${film.backdrop_path}"> </div>
    <span>  ${film.original_title} </span>
    </div>`

}

let addFilmsIntoContainer = (container, films) => {
    films.forEach(film => {
        container.innerHTML += createFilmContainer(film);
    })
}


// guardo cada film en la lista que corresponda
filmFiling();

// en cada Div, meter las peliculas que correspondan.
addFilmsIntoContainer(genre28, accion);
addFilmsIntoContainer(genre53, thriller);
addFilmsIntoContainer(genre12, aventura);