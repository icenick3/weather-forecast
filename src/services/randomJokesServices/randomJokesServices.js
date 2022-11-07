import axios from "axios";

const baseURL = 'https://icanhazdadjoke.com/'

const axiosRandomJokes  = () => axios.get(baseURL, {headers: {Accept: 'text/plain' }});

export default axiosRandomJokes;
