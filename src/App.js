import './App.css';
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from './components/Nav';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.fetchPopularMovies} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} isLargeRow />
      <Row title="Trending TV Shows" fetchUrl={requests.fetchTrendingTV} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
