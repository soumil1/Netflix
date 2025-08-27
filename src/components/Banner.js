import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Banner.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export default function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(fetchUrl);
        const items = res?.data?.ITEMS || res?.data?.results || [];
        const pick = items[Math.floor(Math.random() * items.length)];
        setMovie(pick);
      } catch (err) {
        console.error("Banner fetch error:", err);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie?.image || ""})`,
        backgroundPosition: "center center",
      }}
      aria-label={`Banner: ${movie?.title || "Featured"}`}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || "Featured"}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.synopsis || movie?.overview || "", 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
