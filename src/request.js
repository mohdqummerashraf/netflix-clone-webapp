const API_KEY = "ac98b39ea9a336d711fc25eebdec592c";

const request = {
fetchTrending : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals : `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated : `https://api.themoviedb.org/3/top_rated?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginalsIndian : `https://api.themoviedb.org/3/top_rated?api_key=${API_KEY}&language=hindi`,
fetchActionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentries : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;