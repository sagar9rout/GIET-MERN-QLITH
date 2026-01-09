let moviesContainer = document.getElementById("movies-container");
let Apikey = "48414764";
let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let movieModal = document.getElementById("movie-modal");
let movieContent = document.getElementById("modal-content");


function displayMovies(movies) {
  moviesContainer.innerHTML = "";
  movies.map((movie) => {
    moviesContainer.innerHTML += `
        <div class="rounded bg-white shadow hover:scale-105 transition cursor-pointer"
        onclick="getMoviesDetails('${movie.imdbID}')">
            <img src="${movie.Poster}" alt="movie poster"
            class="rounded h-64 w-full object-cover"
            />
            <div class="p-3">
                <h3 class="font-bold">${movie.Title}</h3>
                <p class="text-xl text-gray-500">${movie.Year}</p>
            </div>
        </div>
        `;
  });
}

async function loadDefaultMovies() {
  moviesContainer.innerHTML = "<p>Loading...</p>";

  try {
    let res = await fetch(`http://www.omdbapi.com/?apikey=${Apikey}&s=all`);
    let data = await res.json();
    if (data.Response === "False") {
      moviesContainer.innerHTML =
        "<p class='text-red-500'>Movies Not Found....</p>";
    }
    displayMovies(data.Search);
  } catch (error) {
    console.log("Something went wrong");
  }
}

window.addEventListener("load", () => {
  loadDefaultMovies();
});

async function moviesBasedOnSearch() {
  let search = searchInput.value.trim();

  moviesContainer.innerHTML = "";

  try {
    let res = await fetch(`http://www.omdbapi.com/?apikey=${Apikey}&s=${search}`);
    let data = await res.json();
    console.log(data);
    if (data.Response === "False") {
      moviesContainer.innerHTML =
        "<p class='text-red-500'>Movies Not Found....</p>";
    }
    displayMovies(data.Search);
  } catch (error) {
    console.log("Something went wrong");
  }
}

searchButton.addEventListener("click", () => {
  moviesBasedOnSearch();
});

async function getMoviesDetails(id){
    try{
        let res = await fetch(`http://www.omdbapi.com/?apikey=${Apikey}&i=${id}`);
        let data = await res.json();

        movieContent.innerHTML = `
        <img src="${data.Poster}" alt="${data.Title}" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-xl font-bold mb-2">${data.Title}</h2>
        <p class="text-sm mb-2">${data.Year}</p>
        <p class="text-sm mb-2">${data.Genre}</p>
        <p class="text-sm mb-2">${data.imdbRating}</p>
        <p class="text-sm text-gray-600">${data.Plot}</p>`

        movieModal.classList.remove("hidden");
        movieModal.classList.add("flex");
    }
    catch (error){
        console.log("Something went wrong");
    }
}


function closeModal(){
    movieModal.classList.remove("flex");
    movieModal.classList.add("hidden");
}