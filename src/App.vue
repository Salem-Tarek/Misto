<template>
  <v-app>
    <Header />
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
import Navbar from './components/layout/Navbar.vue'
export default {
  name: "App",
  components:{
    Header,
    Navbar
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
