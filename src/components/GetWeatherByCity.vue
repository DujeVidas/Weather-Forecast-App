<template>
  <div class="getInput">
    <input type="text" v-model="city" placeholder="City Name" @keyup.enter="getWeather" />
    <button @click="getWeather" class="weatherButton">Get Weather</button>
  </div>
  <WeatherList :weather="weather" />
</template>

<script>
import weatherService from "../services/weatherService";
import ShowWeather from "./ShowWeather.vue";
import WeatherList from "./WeatherList.vue";

export default {
  data() {
    return {
      city: "",
      weather: null,
    };
  },
  methods: {
    getWeather() {
      if (this.city.trim() !== "") {
        weatherService
          .getWeatherByCityName(this.city)
          .then((response) => {
            this.weather = response.data;
            console.log(this.weather);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  components: {
    ShowWeather,
    WeatherList,
  },
};
</script>

<style scoped>
.getInput {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
}
input[type="text"] {
  font-size: 14px;
  border-radius: 6px;
  line-height: 1.5;
  padding: 5px 10px;
  transition: box-shadow 100ms ease-in, border 100ms ease-in,
    background-color 100ms ease-in;
  border: 2px solid #dee1e2;
  color: rgb(14, 14, 16);
  background: #dee1e2;
  display: flex;
  height: 20px;
}

input[type="text"]:hover {
  border-color: #ccc;
}

input[type="text"]:focus {
  border-color: #e6ff04;
  background: #fff;
}

.weatherButton {
  display: flex;
  outline: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  font-size: 13px;
  height: 35px;
  background-color: #0000000d;
  color: #0e0e10;
  padding: 0 20px;
  align-items: center;
}
.weatherButton:hover {
  background-color: #0000001a;
}
</style>
