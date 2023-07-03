import React, {useState,useEffect} from 'react'

import axios from './axios'

import requests from './requests';

import './Banner.css';

function Banner() {

    // JS code is used to select a movie each time

    const[movie,setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchNetflixOriginals);

            // similar to array of n-1
            // set a random movie to appear as a banner
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return request

        }

        fetchData();
    }, []);


    function truncate(str,n){

        // ?. chainning operator is used to check the condition if length is greater than n
        // str.substr concanate the truncated substring with ...
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

  return (
    <div>
        <header className="banner"
      style={{
        //inline style
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      {/* Background Image & main content */}
      <div className="banner_contents">
        <h1 className="banner_title">
          {/* all the information which is presented */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>


    </div>
  )
}

export default Banner