let moviesContainer = document.getElementById("movies-container");
console.log(moviesContainer);

function displayMovies(movies) {
    moviesContainer.innerHTML = "";
    movies.map(() => {
        moviesContainer.innerHTML += ""
    })
}