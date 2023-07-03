const API_KEY = "5923925720e3bbf8c75c6d7a3e9512b7";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTrendingMovies: `/trending/movie/day?language=en-US&api_key=${API_KEY}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
  fetchTrendingShows: `/trending/tv/week?language=en-US&api_key=${API_KEY}&with_genre=10765`,
  fetchTopRatedShows: `/tv/top_rated?language=en-US&api_key=${API_KEY}&with_networks=213`,
  fetchAiringToday: `/tv/airing_today?language=en-US&page=4&api_key=${API_KEY}&with_genre=103`  
}

export default requests;

