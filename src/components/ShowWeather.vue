<template>
    <div v-if="weather" class="weatherCard" :class="weatherClass" >
        <p>{{ weather.list[index].main.temp }}</p>
        <p>{{ weather.list[index].main.humidity }}</p>
        <p>{{ weather.list[index].wind.speed }}</p>
        <p>{{ weather.list[index].weather[0].main }}</p>
        
    </div>
</template>

<script>
export default {

    props: {
        weather: {
            type: Object,
        },
        index: {
            type: Number,
            default: 0
        }
    },
    computed:{
        weatherClass() {
            if(this.weather.list[this.index].weather[0].main== "Rain"){
                return 'rainy'
            } else if (this.weather.list[this.index].weather[0].main== "Clouds") {
                return 'cloudy'
            } else if (this.weather.list[this.index].weather[0].main== "Clear") {
                return 'clear'
            }
        }
    }
}

        
</script>

<style scoped>


.weatherCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 200px;
    height: 200px;
}
.rainy {
    background-image: linear-gradient(to right top, #051937, #002968, #00369c, #2b40ce, #6343ff);
    color: white;
}
.cloudy {
    background-image: linear-gradient(to right top, #051937, #364064, #676b95, #9b99c9, #d3caff);
    color: white;
}
.clear {
    background-image: linear-gradient(to right top, #d4ffa4, #a7ffe6, #b9ffff, #e9ffff, #ffffff);
}

</style>
