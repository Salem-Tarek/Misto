<template>
    <div class="women">
        <v-container>
            <h1 class="mb-4 font-weight-medium text-center">Jewelery</h1>
            <Products :prodsArray="jeweleryProducts" :ShowRatingNumber="false" />
            <!-- I Used it More than time Becasue I use Fake API with small Data -->
            <Products :prodsArray="jeweleryProducts" :ShowRatingNumber="false" :ShowFilter="false"/>
            <Products :prodsArray="jeweleryProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="jeweleryProducts" :ShowRatingNumber="false" :ShowFilter="false" />
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '../components/ProductPages/Products.vue'

export default {
    name: "Jewelery",
    components:{
        Products
    },
    computed:{
      ...mapGetters(['jeweleryProducts'])
    },
    methods:{
      ...mapActions(['getJeweleryProducts'])
    },
    created(){
      this.getJeweleryProducts(4);
    }
}
</script>

<style>

</style>