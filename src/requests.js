const BASE_URL = "http://localhost:5000/api/movies";

const requests = {
  fetchPopularMovies: `${BASE_URL}/popular`,
  fetchTrendingTV: `${BASE_URL}/trending`,
  fetchActionMovies: `${BASE_URL}/genre/1`,
  fetchComedyMovies: `${BASE_URL}/genre/3`,
  fetchHorrorMovies: `${BASE_URL}/genre/4`,
  fetchRomanceMovies: `${BASE_URL}/genre/5`,
  fetchDocumentaries: `${BASE_URL}/genre/7`,
};

export default requests;
