<template>
    <div class="women">
        <v-container>
            <h1 class="mb-4 font-weight-medium text-center">Men</h1>
            <Products :prodsArray="menProducts" :ShowRatingNumber="false" />
            <!-- I Used it More than time Becasue I use Fake API with small Data -->
            <Products :prodsArray="menProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="menProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            <Products :prodsArray="menProducts" :ShowRatingNumber="false" :ShowFilter="false" />
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '../components/ProductPages/Products.vue'

export default {
    name: "MenPage",
    components:{
        Products
    },
    computed:{
      ...mapGetters(['menProducts'])
    },
    methods:{
      ...mapActions(['getMenProducts'])
    },
    created(){
      this.getMenProducts(4);
    }
}
</script>

<style>

</style>