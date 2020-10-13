"use strict";

import { MOVIE_KEY } from './keys.js';

const img = document.getElementById("moviePoster");

const info = () => {
    return fetch(`http://www.omdbapi.com/?apikey=${MOVIE_KEY}&s=Guardians+Of+The+Galaxy`);
}
info().then(response => response.json()).then(response => {
    img.setAttribute("src", response.Search[0].Poster);
});

const mainHeader = document.getElementById("mainHeader");

const simpleHandler = () => {
    mainHeader.textContent = "This is the Header for the Index page";
};
mainHeader.addEventListener('load', simpleHandler());