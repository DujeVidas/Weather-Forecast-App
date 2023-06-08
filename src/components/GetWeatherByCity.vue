<template>
  <div class="pt-8 flex justify-center gap-8">
    <input
      class="text-sm hover:border-[#42b983] focus:bg-white focus:outline-none focus:border-[#42b983] text-[#0E0E10] h-5 bg-[#dee1e2] rounded-md py-1 px-2 border-2 border-[#dee1e2] border-solid"
      type="text"
      v-model="city"
      placeholder="City Name"
      @keyup.enter="getWeather"
    />
    <button
      @click="getWeather"
      class="hover:bg-[#0000001a] outline-none text-[#0e0e10] py-0 px-5 bg-[#0000000d] h-9 text-sm rounded font-semibold cursor-pointer border-none"
    >
      Get Weather
    </button>
  </div>
  <WeatherList :weather="weather" />
</template>

<script setup>
import { ref } from "vue";
import weatherService from "../services/weatherService";
import WeatherList from "./WeatherList.vue";

const city = ref("");
const weather = ref(null);

const getWeather = () => {
  if (city.value.trim() !== "") {
    weatherService
      .getWeatherByCityName(city.value)
      .then((response) => {
        weather.value = response.data;
        console.log(weather.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
</script>

<style scoped>
input[type="text"] {
  transition: box-shadow 100ms ease-in, border 100ms ease-in,
    background-color 100ms ease-in;
}
</style>
