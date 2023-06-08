<template>
  <div v-if="weather">
    <h2 class="pt-5">{{ weather.city.name }}</h2>
    <div class="pt-14 flex justify-around gap-8">
      <ShowWeather :weather="weather" :index="0" />
      <li class="list-none" v-for="index in 5" :key="index">
        <ShowWeather :weather="weather" :index="index" />
      </li>
    </div>
  </div>
</template>

<script setup>
import ShowWeather from "./ShowWeather.vue";

const props = defineProps({
  numOfDays: {
    type: Number,
    default: 0,
  },
  weather: Object,
});
</script>
