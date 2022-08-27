<template>
    <div class="women">
        <v-container>
            <h1 class="mb-4 font-weight-medium text-center">Women</h1>
            <Products :prodsArrayLength="12" :ShowRatingNumber="false" />
        </v-container>
    </div>
</template>

<script>
import Products from '../components/ProductPages/Products.vue'
export default {
    name: "WomenPage",
    components:{
        Products
    },
}
</script>

<style>

</style>