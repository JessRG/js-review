"use strict";

import { MOVIE_KEY } from './keys.js';

const img = document.getElementById("moviePoster");

// const info = () => {
//     return fetch(`http://www.omdbapi.com/?apikey=${MOVIE_KEY}&s=Guardians+Of+The+Galaxy`)
//         .then(response => response.json());
// }
// info().then(response => {
//     img.setAttribute("src", response.Search[0].Poster);
// });

const info = async () => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_KEY}&s=Guardians+Of+The+Galaxy`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    } else {
        let result = await response.json();
        let poster = result.Search[0].Poster;
        img.setAttribute("src", poster);
    }
};

info().catch(e => {
    console.log("There has been a problem with your fetch operation: " + e.message);
});

const mainHeader = document.getElementById("mainHeader");

const simpleHandler = () => {
    mainHeader.textContent = "This is the Header for the Index page";
};
mainHeader.addEventListener('load', simpleHandler());