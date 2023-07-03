import axios from 'axios';

/* Base URL for making requests to the movie database */

const instance = axios.create({ 
    baseURL: 'https://api.themoviedb.org/3',
});

/* Make a GET request to '/foo-bar' */
/* Request URL: https://api.themoviedb.org/3/foo-bar */

export default instance;