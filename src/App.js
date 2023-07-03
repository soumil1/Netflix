import React from 'react';
import './App.css';
import Row from "./Row.js";
import requests from './requests';
import Banner from "./Banner.js";
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      <Nav />

      <Banner />

      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl = {requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl = {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Trending Movies" fetchUrl = {requests.fetchTrendingMovies} />
      <Row title="Original Documentaries" fetchUrl = {requests.fetchDocumentaries} />
      <Row title="Trending Shows" fetchUrl = {requests.fetchTrendingShows} />
      <Row title="Top Rated Shows" fetchUrl = {requests.fetchTopRatedShows} />
      <Row title="Airing Today" fetchUrl = {requests.fetchAiringToday} />

    </div>
  );
}

export default App;
