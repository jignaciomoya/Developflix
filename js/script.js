import peliculas from './peliculas.js'

let accion = [];
let thriller = [];
let aventura = [];

const mostrarPeliculas = () =>{
    for(let i = 0; i < peliculas.length; i++){
        console.log(i);
        if(peliculas[i].genre_ids.includes(28)){
            accion.unshift(peliculas[i].original_title);
        }
        if(peliculas[i].genre_ids.includes(53)){
            thriller.unshift(peliculas[i].original_title);
        }
        if(peliculas[i].genre_ids.includes(12)){
            aventura.unshift(peliculas[i].original_title);
        }
    }
}
mostrarPeliculas();



