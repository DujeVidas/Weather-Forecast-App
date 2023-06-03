import axios from "axios";

const API_KEY = "dd75386a8969cb1c1f63dba5906fd8a7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default {
  getWeatherByCityName(cityName) {
    const url = `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}`;
    return axios.get(url);
  },

  async fetchCityNames(query) {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&mode=json&appid=YOUR_API_KEY`)
      const cities = response.data.list.map(city => city.name)
      return cities
    } catch (err){
      console.error(err);
      return []
    }
  }
};
