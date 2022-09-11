<template>
    <!-- Favourite Navigation Drawer -->
    <v-navigation-drawer
    class="favourite-drawer"
    v-model="FavouriteNavigationDrawerPropClone"
    app
    right
    temporary
    width="330"
    @input="emitToggleCartDrawer()"
    >
        <v-list dense class="d-flex flex-column pa-0">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-medium text-uppercase">Favourite List</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="localToggleCartDrawer">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
        <v-list class="d-flex flex-column pa-0 mb-3">
            <v-list-item :ripple="false" class="mb-0" v-for="favouriteProduct in favouriteProductsGetter" :key="favouriteProduct.id">
                <router-link :to="'/product-page/' + favouriteProduct.id" class="d-flex">
                    <v-list-item-avatar tile size="80">
                        <v-img contain :src="favouriteProduct.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1 grey--text">{{ favouriteProduct.title }}</v-list-item-title>
                        <v-list-item-subtitle class="black--text mb-5 body-2">{{ favouriteProduct.category }}</v-list-item-subtitle>
                        <div class="cart-item-info d-flex justify-space-between align-center">
                            <p class="subtitle-1 font-weight-bold mb-0 ml-2">$ {{ parseFloat(favouriteProduct.price).toFixed(2) }}</p>
                            <v-spacer></v-spacer>
                            <v-icon @click.prevent="deleteFavouriteProduct(favouriteProduct.id)">mdi-trash-can-outline</v-icon>
                        </div>
                    </v-list-item-content>
                </router-link>
            </v-list-item>
            <v-list-item class="justify-center headline py-4" v-if="!favouriteProductsGetter.length">
                    Favourite List Is Empty
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "FavouriteNavigationDrawer",
    props:{
        FavouriteNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            FavouriteNavigationDrawerPropClone: this.FavouriteNavigationDrawerProp,
            favouriteProducts: [],
        }
    },
    computed:{
        ...mapGetters(['favouriteProductsGetter', 'womenProducts'])
    },
    methods:{
        ...mapActions(['getAllProducts', 'getFavouriteProducts', 'getFourWomenProducts', 'getWomenProducts', 'getMenProducts', 'getElectronicsProducts', 'getJeweleryProducts']),
        localToggleCartDrawer(){
            this.FavouriteNavigationDrawerPropClone = !this.FavouriteNavigationDrawerPropClone;
            // this.$emit('toggleDrawerProp')
        },
        emitToggleCartDrawer(){
            if((this.FavouriteNavigationDrawerProp == true) && (this.FavouriteNavigationDrawerPropClone == false)){
                this.$emit('toggleFavouriteDrawerProp')
            }
        },
        deleteFavouriteProduct(id){
            this.favouriteProducts = this.favouriteProductsGetter.filter(prod => prod.id !== id);
            this.getFavouriteProducts(this.favouriteProducts);
            this.$emit('changeAlert', {isAdd: false, isFav: true})
        },
    },
    watch:{
        FavouriteNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.FavouriteNavigationDrawerPropClone = newVal
            }
        },
    },
    created(){
        this.favouriteProducts = this.favouriteProductsGetter;
    },
}   
</script>

<style>
.favourite-drawer .remove-after-pseudo-element::after{
    display: none;
}

.favourite-drawer .v-list-item__title {
    white-space: normal;
}
</style>