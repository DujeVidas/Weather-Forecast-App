import axios from "axios";

const API_KEY = "dd75386a8969cb1c1f63dba5906fd8a7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default {
  getWeatherByCityName(cityName) {
    const url = `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}`;
    return axios.get(url);
  },
};
