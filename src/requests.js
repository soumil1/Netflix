const requests = {
  fetchTrending: `/aaapi.cgi?q=get:new7:US`,
  fetchNetflixOriginals: `/aaapi.cgi?q=get:netflixOriginals:US`,
  fetchTopRated: `/aaapi.cgi?q=get:topRated:US`,
  fetchActionMovies: `/aaapi.cgi?q=genre:Action`,
  fetchComedyMovies: `/aaapi.cgi?q=genre:Comedy`,
  fetchRomanceMovies: `/aaapi.cgi?q=genre:Romance`,
  fetchDocumentaries: `/aaapi.cgi?q=genre:Documentary`,
  fetchTrendingShows: `/aaapi.cgi?q=type:series`,
  fetchTopRatedShows: `/aaapi.cgi?q=topRatedShows`,
};

export default requests;
