document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const apiKey = "92da0ee94af7bf49b35a99fb677bf97a"; // Replace with your TMDb API key

    // Function to fetch popular movies
    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
            );
            const data = await response.json();
            movieList.innerHTML = ""; // Clear existing movies
            data.results.forEach((movie) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <div class="movie-item">
                        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} Poster">
                        <div class="movie-info">
                            <h3>${movie.title}</h3>
                            <p>Rating: ${movie.vote_average}/10</p>
                        </div>
                    </div>
                `;
                movieList.appendChild(listItem);
            });
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    // Fetch movies on page load
    fetchPopularMovies();
});