import axios from "axios";

const baseURL = 'https://api.openweathermap.org/geo/1.0/direct'

const axiosLocation = (location) => axios.get(baseURL, {params:{q:location, limit:4, appid: process.env.REACT_APP_API_KEY}});

export default axiosLocation;
