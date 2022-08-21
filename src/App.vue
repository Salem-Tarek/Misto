<template>
  <v-app>
    <Header />
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
export default {
  name: "App",
  components:{
    Header,
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
