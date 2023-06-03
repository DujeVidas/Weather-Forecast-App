<template>
    <div v-if="weather">
        <h2>{{ weather.city.name }}</h2>
        <div class="weather-list">
            <ShowWeather :weather="weather" :index="0"/>
            <li v-for="index in 5" :key="index">
                <ShowWeather :weather="weather" :index="index"/>
            </li>
        </div>
        
    </div>
</template>

<script>
import ShowWeather from './ShowWeather.vue'

export default {
    props:{
        numOfDays: {
            type: Number,
            default: 0
        },
        weather: {
            type: Object,
        }
        
    },
    components: {
        ShowWeather
    },
}
</script>

<style scoped>

h2 {
    padding-top: 20px;
}
.weather-list {
    padding-top: 50px;
    display: flex;
    justify-content: space-around;
    gap: 30px;
}

li {
    list-style: none;
}

</style>