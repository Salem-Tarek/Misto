<template>
  <v-app>
    <Alert :show="snackbar" :isFav="isFav" :isAdd="isAdd" @hideSnackbar="snackbar = false" />
    <Header />
    <Navbar @changeAlert="changeSnackbarData" />
    <v-main>
      <router-view @changeAlert="changeSnackbarData" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import Alert from './components/layout/Alert.vue'
export default {
  name: "App",
  components:{
    Header,
    Navbar,
    Footer,
    Alert
  },
  data(){
    return {
      snackbar: false,
      isFav: false,
      isAdd: false
    }
  },
  methods:{
    changeSnackbarData(val){
      this.snackbar = true;
      this.isFav = val.isFav;
      this.isAdd = val.isAdd;
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
