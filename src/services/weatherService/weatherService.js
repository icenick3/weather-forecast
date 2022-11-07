import axios from "axios";

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const axiosWeather = (coordinates) =>  axios.get(baseURL, {params:{lat: coordinates.lat, lon: coordinates.lon, appid: process.env.REACT_APP_API_KEY, lang: 'ua',units: 'metric'}})

export default axiosWeather;
