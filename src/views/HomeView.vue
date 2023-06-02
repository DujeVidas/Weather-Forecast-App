<template>
  <div class="home">
    
    <WeatherByCity />
  </div>
</template>

<script>
// @ is an alias to /src

import WeatherByCity from '@/components/GetWeatherByCity.vue';


export default {
  name: 'HomeView',
  components: {
    WeatherByCity
}
}
</script>
