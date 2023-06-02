<template>
    <div v-if="weather">
        <h2>{{ weather.city.name }}</h2>
        <p>{{ weather.list[index].main.temp }}</p>
        <p>{{ weather.list[index].main.humidity }}</p>
        <p>{{ weather.list[index].wind.speed }}</p>
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
    }



}

</script>

<style scoped></style>
