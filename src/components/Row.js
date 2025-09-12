import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchUrl}?page=${page}`);
      setMovies(request.data.titles || []); 
    }
    fetchData();
  }, [fetchUrl, page]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={movie.poster}
            alt={movie.title}
          />
        ))}
      </div>

      <div className="row__pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Row;
