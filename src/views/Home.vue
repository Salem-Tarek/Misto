<template>
  <div class="home">
    <v-container>
      <Categories />
      <Features />
      <Women />
      <Men />
      <OffersAndCollections />
      <Subscribe />
      <LatestBlogs />
    </v-container>
  </div>
</template>

<script>
import Categories from '../components/HomePage/Categories.vue'
import Features from '../components/HomePage/Features.vue'
import Women from '../components/HomePage/Women.vue'
import Men from '../components/HomePage/Men.vue'
import OffersAndCollections from '../components/HomePage/OffersAndCollections.vue'
import Subscribe from '../components/HomePage/Subscribe.vue'
import LatestBlogs from '../components/HomePage/LatestBlogs.vue'
export default {
  name: "Home",
  components:{
    Categories,
    Features,
    Women,
    Men,
    OffersAndCollections,
    Subscribe,
    LatestBlogs
  }
};
</script>
