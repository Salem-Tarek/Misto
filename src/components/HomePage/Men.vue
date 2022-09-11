<template>
  <div class="women my-3">
    <div class="section-header d-flex justify-space-between align-center my-4">
      <h2 class="text-uppercase font-weight-medium">Men's</h2>
    </div>
    <Products :prodsArray="menProducts" @changeAlert="changeAlert" />
    <v-btn block to="/men" class="text-uppercase button mt-6 mb-12" elevation="0">See More</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '../ProductPages/Products.vue'

export default {
    name: "Men",
    components:{
        Products,
    },
    computed:{
      ...mapGetters(['allProducts']),
      menProducts(){
        return this.allProducts.filter(prod => prod.category === "men's clothing")
      }
    },
    methods:{
      ...mapActions(['getAllProducts']),
      changeAlert(val){
        this.$emit('changeAlert', val)
      }
    },
    created(){
      this.getAllProducts();
    },
    watch:{
      allProducts(newVal, oldVal){
        if(newVal !== oldVal){
          this.getAllProducts();
        }
      }
    }
}
</script>

<style>
.list-unstyled{
    list-style: none;
    padding:0;
    margin:0
}
</style>