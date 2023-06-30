
import './App.css';
import Counter from './Counter';
import requests from './requests';
import Row from "./Row";

function App() {
  return (
    <div className="App">

      We will rock together

      <Row title="NETFLIX MOVIE LIST" fetchUrl = {requests.fetchNetflixMovieList} isLargeRow />
      <Row title="Trending" fetchUrl = {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Original Documentaries" fetchUrl = {requests.fetchDocumentaries} />
      <Row title="Trending Shows" fetchUrl = {requests.fetchTrendingShows} />
      <Row title="Top Rated Shows" fetchUrl = {requests.fetchTopRatedShows} />
      <Row title="Airing Today" fetchUrl = {requests.fetchAiringToday} />

    </div>
  );
}

export default App;
