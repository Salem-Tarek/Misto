<template>
    <div class="women">
        <v-container>
            <h1 class="mb-4 font-weight-medium text-center">Electronics</h1>
            <ProductsFilter :filterdProductsNum="filteredProducts.length" @filterChanged="filterChanged" />
            <Products :prodsArray="filteredProducts" :ShowRatingNumber="false" @prods-array-changed="changeProdArray" />
            <h3 class="text-center" v-if="filteredProducts.length === 0">There Is No Filtered Products</h3>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '../components/ProductPages/Products.vue'
import ProductsFilter from '../components/ProductPages/ProductsFilter.vue'

export default {
    name: "ElectronicsPage",
    data(){
      return {
        filteredProducts: this.electronicsProducts
      }
    },
    components:{
        Products,
        ProductsFilter,
    },
    computed:{
      ...mapGetters(['electronicsProducts'])
    },
    methods:{
      ...mapActions(['getElectronicsProducts']),
      filterChanged(val){ // Filtering Data Depend on Rate
        
        if(val.rateFilter === 0 && val.priceFilter.min === 0 && val.priceFilter.max === undefined){
          // If There is No Filter
          this.filteredProducts = this.electronicsProducts;
        }else{
          
          if(val.rateFilter === 0){
            // Price Filter Changes 
            if(val.priceFilter.max){
              this.filteredProducts = this.electronicsProducts.filter(prod => (prod.price >= val.priceFilter.min) && (prod.price <= val.priceFilter.max));
            }else{
              this.filteredProducts = this.electronicsProducts.filter(prod => prod.price >= val.priceFilter.min );
            }

          }else{
            // Rate Filter Changes 
            if(val.priceFilter.min > 0 && val.priceFilter.max){
              this.filteredProducts = this.electronicsProducts.filter(prod => Math.floor(prod.rating.rate) === val.rateFilter).filter(prod => (prod.price >= val.priceFilter.min) && (prod.price <= val.priceFilter.max));
            }else if(val.priceFilter.min > 0 && val.priceFilter.max === undefined) {
              this.filteredProducts = this.electronicsProducts.filter(prod => Math.floor(prod.rating.rate) === val.rateFilter).filter(prod => prod.price >= val.priceFilter.min)
            }else{
              this.filteredProducts = this.electronicsProducts.filter(prod => Math.floor(prod.rating.rate) === val.rateFilter)
            }

          }
        }
      },
      async changeProdArray(){
        await this.getElectronicsProducts();
        this.filteredProducts = this.electronicsProducts;
      }
    },
    created(){
      this.filteredProducts = this.electronicsProducts;
    },
    async mounted(){
      await this.getElectronicsProducts();
      this.filteredProducts = this.electronicsProducts;
    },
}
</script>

<style>

</style>