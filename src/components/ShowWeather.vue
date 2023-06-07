<template>
  <div v-if="weather" class="weatherCard p-5 rounded-lg text-[#fff] font-bold flex items-center justify-center text-center w-40 h-40 flex-col" :class="weatherClass">
    <p>
      {{ weather.list[index].main.temp }}
      <Icon
        icon="solar:temperature-bold-duotone"
        color="red"
        heigth="20"
        width="20"
      />
    </p>
    <p>
      {{ weather.list[index].main.humidity }}
      <Icon icon="mdi:humidity" color="#38e3f2" heigth="20" width="20" />
    </p>
    <p>
      {{ weather.list[index].wind.speed }}
      <Icon icon="svg-spinners:wind-toy" color="white" heigth="20" width="20" />
    </p>
    <p>
      {{ weather.list[index].weather[0].main }}
      <Icon :icon="ikona" heigth="20" width="20"></Icon>
    </p>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default {
  props: {
    weather: {
      type: Object,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      ikona: "",
    };
  },
  computed: {
    weatherClass() {
      if (this.weather.list[this.index].weather[0].main == "Rain") {
        this.ikona = "noto-v1:cloud-with-lightning-and-rain";
        return "rainy";
      } else if (this.weather.list[this.index].weather[0].main == "Clouds") {
        this.ikona = "emojione-v1:cloud";
        return "cloudy";
      } else if (this.weather.list[this.index].weather[0].main == "Clear") {
        this.ikona = "openmoji:sun";
        return "clear";
      }
    },
  },
  components: {
    Icon,
  },
};

var d = new Date();
console.log(dayNames[d.getDay()]);
</script>

<style scoped>
.weatherCard {
  transition: background-color 0.3s ease;
}
.rainy {
  background: linear-gradient(
    to bottom,
    #68a0ff,
    #4a7cff
  ); /* Light Blue Gradient */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.cloudy {
  background: linear-gradient(to bottom, #a0a0a0, #666666); /* Gray Gradient */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.clear {
  background: linear-gradient(to bottom, #ffd700, #ffa500); /* Gold Gradient */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.weatherCard:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
</style>
