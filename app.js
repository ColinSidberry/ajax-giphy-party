"use strict";

/** Creates a gif search webpage that pulls data from the Giphy API given
 * a user input. It shows the Gif selected in the DOM. All Gifs added can
 * then be deleted at once. 
 */

console.log("Let's get this party started!");

const API_SEARCH_URL = "http://api.giphy.com/v1/gifs/search";
const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const $gifContainer = $("#gifContainer");

/** Upon click, findGif collects the user input and searches the Giphy
 *  API. It calls showGif with the Gif URL argument.
 */

//would benefit from function decomp because it does different things
async function findGif(evt) {
    evt.preventDefault();
    const giphySearch = $("#giphySearch").val(); //does it make sense to split this into another function.
    const response = await axios.get(API_SEARCH_URL,
        { params: { q: giphySearch, api_key: GIPHY_API_KEY } });
        const gifs = response.data.data;
    const randomGifIndex = pickRandomApiIndex(gifs);
    const gifURL = gifs[randomGifIndex].images.original.url;
    appendGif(gifURL);
};

function pickRandomApiIndex(gifs) {
    return Math.floor(Math.random() * (gifs.length + 1));
}

/** Given a gifURL, showGif adds a new image element and
 *  appends the image to the DOM. */
function appendGif(gifURL) {
    const $newGif = $("<img>");
    $newGif.attr('src', gifURL)
           .addClass('gifImages'); //prefer addClass over attr
    $gifContainer.append($newGif);
}

/** Upon click, removeGifs removes all gifs within the gifContainer. */
function removeGifs() {
    $gifContainer.empty();
}

$("#gifSearchForm").on("submit", findGif);
$("#deleteButton").on("click", removeGifs);