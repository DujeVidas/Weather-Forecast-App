<template>
  <header class="bg-[#f7f7f7] p-5 shadow-lg">
    <nav class="flex items-center">
      <div class="mr-5">
        <Icon
          icon="material-symbols:weather-mix-outline"
          color="#42b983"
          width="75"
          height="75"
        />
      </div>
      <div class="flex gap-5">
        <router-link
          class="font-bold text-[#333] no-underline hover:text-[#42b983] transition-colors duration-300"
          to="/"
          >Home</router-link
        >
        <router-link
          class="font-bold text-[#333] no-underline hover:text-[#42b983] transition-colors duration-300"
          to="/about"
          >About</router-link
        >
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
nav a.router-link-exact-active {
  @apply text-[#42b983];
}
</style>
