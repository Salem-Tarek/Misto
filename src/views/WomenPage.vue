<template>
    <div class="women">
        <v-container>
            <h1 class="mb-4 font-weight-medium text-center">Women</h1>
            <Products :prodsArray="womenProducts" :ShowRatingNumber="false" />
            <!-- I Used it More than time Becasue I use Fake API with small Data -->
            <Products :prodsArray="womenProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="womenProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="womenProducts" :ShowRatingNumber="false" :ShowFilter="false" />
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Products from '../components/ProductPages/Products.vue'
export default {
    name: "WomenPage",
    components:{
        Products
    },
    computed:{
      ...mapGetters(['womenProducts'])
    },
    methods:{
      ...mapActions(['getWomenProducts']),
    },
    created(){
      this.getWomenProducts(4);
    }
}
</script>

<style>

</style>