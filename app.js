console.log("Let's get this party started!");


let $button = $("#submitButton").on("click", handleClick);
// let $button = $("#submitButton").submit(handleClick); //Question: how do we do the "submit" one?

async function handleClick () {
    console.log("button submission captured");
    let $giphySearch = $("#giphySearch").val();
    console.log("$giphySearch: ", $giphySearch);
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:$giphySearch,api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    // let response = await axios.get("http://api.giphy.com/v1/gifs/search?", {q:$giphySearch});
    console.log(response);
};