const movies = {
    "name": "Book of Eli"
}

async function fetchMoviesJSON() {
    const response = await fetch('/movies');
    const movies = await response.json();
    return movies;
}
fetchMoviesJSON().then(movies => {
    movies; // fetched movies
});