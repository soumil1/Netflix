import axios from "axios";

const instance = axios.create({
  baseURL: "https://movie-of-the-night.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "movie-of-the-night.p.rapidapi.com",
  },
});

export default instance;
