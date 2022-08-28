<template>
    <div class="women">
        <v-container>
            <h1 class="mb-4 font-weight-medium text-center">Electronics</h1>
            <Products :prodsArray="electronicsProducts" :ShowRatingNumber="false" />
            <!-- I Used it More than time Becasue I use Fake API with small Data -->
            <Products :prodsArray="electronicsProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="electronicsProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="electronicsProducts" :ShowRatingNumber="false" :ShowFilter="false" />
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '../components/ProductPages/Products.vue'

export default {
    name: "ElectronicsPage",
    components:{
        Products
    },
    computed:{
      ...mapGetters(['electronicsProducts'])
    },
    methods:{
      ...mapActions(['getElectronicsProducts'])
    },
    created(){
      this.getElectronicsProducts(4);
    }
}
</script>

<style>

</style>