import './App.css';
import Row from "./components/Row";
import requests from './requests';
import Banner from "./components/Banner";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">

      <Nav />

      <main>
        <Banner fetchUrl={requests.fetchTrending} />
        <section className="rows">
          <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl = {requests.fetchNetflixOriginals} />
          <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
          <Row title="Comedy" fetchUrl = {requests.fetchComedyMovies} />
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
          <Row title="Trending TV Shows" fetchUrl = {requests.fetchTrendingShows} />
      </section>
      </main>
    </div>
  );
}

export default App;
