<template>
  <div class="women my-3">
    <div class="section-header d-flex justify-space-between align-center my-4">
        <h2 class="text-uppercase font-weight-medium">Women's</h2>  
    </div>
    <Products :prodsArray="fourWomenProducts" :ShowFilter="false" @changeAlert="changeAlert" />
    <v-btn block to="/women" class="text-uppercase button mt-6 mb-12" elevation="0">See More</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '../ProductPages/Products.vue'

export default {
    name: "Women",
    components:{
        Products
    },
    computed:{
      ...mapGetters(['allProducts']),
      womenProducts(){
        let womenProducts = this.allProducts.filter(prod => prod.category === "women's clothing");
        if(womenProducts.length > 4){
          return womenProducts.slice(0, 4)
        }else{
          return womenProducts
        }
        
      },
      fourWomenProducts(){
        if(this.womenProducts.length > 4){
          return this.womenProducts.slice(0, 4)
        }else{
          return this.womenProducts
        }
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