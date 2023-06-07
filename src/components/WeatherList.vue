<template>
    <div v-if="weather">
        <h2 class="pt-5">{{ weather.city.name }}</h2>
        <div class="pt-14 flex justify-around gap-8">
            <ShowWeather :weather="weather" :index="0"/>
            <li class="list-none" v-for="index in 5" :key="index">
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