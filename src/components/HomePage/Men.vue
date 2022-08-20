<template>
  <div class="women my-3">
    <div class="section-header d-flex justify-space-between align-center my-4">
        <h2 class="text-uppercase font-weight-medium">Men's</h2>
    </div>
    <Products />
    <v-btn block to="/men" class="text-uppercase button mt-6 mb-12" elevation="0">See More</v-btn>
  </div>
</template>

<script>
import Products from './Products.vue'
export default {
    name: "Men",
    components:{
        Products
    }
}
</script>

<style>
.list-unstyled{
    list-style: none;
    padding:0;
    margin:0
}

.section-header {

}
</style>