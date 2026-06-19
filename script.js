const apiKey = "fac996a1";

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const movieContainer = document.getElementById("movieContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

searchBtn.addEventListener("click", searchMovies);

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchMovies();
    }
});

async function searchMovies() {
    const movieName = searchInput.value.trim();

    if (!movieName) {
        showError("Please enter a movie name.");
        return;
    }

    loading.classList.remove("hidden");
    error.classList.add("hidden");
    movieContainer.innerHTML = "";

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`
        );

        const data = await response.json();

        loading.classList.add("hidden");

        if (data.Response === "False") {
            showError(data.Error);
            return;
        }

        displayMovies(data.Search);

    } catch (err) {
        loading.classList.add("hidden");
        showError("Something went wrong. Please try again.");
    }
}

function displayMovies(movies) {
    movieContainer.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${
                movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
            }" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
            <p>Type: ${movie.Type}</p>
        `;

        movieContainer.appendChild(card);
    });
}

function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}