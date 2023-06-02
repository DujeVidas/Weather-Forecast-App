<template>
  <header>
    <nav>
      <div class="ikona">
        <Icon icon="material-symbols:weather-mix-outline" color="#42b983" width="75" height="75"/>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    
    </nav>
  </header>
  
  <router-view/>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  components: {
    Icon,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
}

header {
  background-color: rgb(209, 208, 208);
}
nav {
  padding: 30px;
  display: flex;
  align-items: center;
  
  margin: 0;
  
}

.links{
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 8px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
