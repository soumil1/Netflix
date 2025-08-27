import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);

            setMovies(request.data.ITEMS || []);
        } 
        fetchData();
     }, [fetchUrl]);   

    return (

        <div className="row">

            <h2>{title}</h2>
            <div className="row_posters">

            {movies.map((movie, idx) => 
              movie.image ? (
                <img
                  key={idx}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={movie.image}
                  alt={movie.title}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Row;