<template>
  <header>
    <nav>
      <div class="logo">
        <Icon
          icon="material-symbols:weather-mix-outline"
          color="#42b983"
          width="75"
          height="75"
        />
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
header {
  background-color: #f7f7f7;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 20px;
}

.links {
  display: flex;
  gap: 20px;
}

nav a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
