<template>
  <div class="home">
    <v-container>
      <Categories />
      <Features />
    </v-container>
  </div>
</template>

<script>
import Categories from '../components/HomePage/Categories.vue'
import Features from '../components/HomePage/Features.vue'
export default {
  name: "Home",
  components:{
    Categories,
    Features
  }
};
</script>
