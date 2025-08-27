import axios from "axios";

const instance = axios.create({
  baseURL: "https://unogs-unogs-v1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
  },
});

export default instance;
