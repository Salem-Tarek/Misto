<template>
  <div class="products py-5">
    <v-row>
        <template v-for="(product) in prodsArray">
            <v-col cols="12" sm="6" md="4" lg="3" :key="product.id">
                <router-link :to="'/product-page/' + product.id">
                        <v-card class="mx-auto d-flex flex-column" max-width="374" elevation="0" height="400px">
                            <v-img
                            height="250"
                            :src="product.image"
                            contain
                            alt="Product Name"
                            ></v-img>
                            <div v-if="product.discount" class="pink white--text sale font-weight-medium d-flex justify-center align-center">
                                - 50%
                            </div>
                            <v-card-title class="pt-2 pl-2 pb-0 grey--text body-2">{{ product.title }}</v-card-title>

                            <v-card-text class="pa-0 d-flex justify-space-between align-center">
                                <v-card-subtitle class="pl-2 black--text font-weight-bold">
                                    <span>${{ parseFloat(product.price).toFixed(2) }}</span> 
                                    <span v-if="product.discount" class="ml-1 grey--text text-decoration-line-through body-2 font-weight-black">$76.00</span>
                                </v-card-subtitle>
                                <div class="rating d-flex">
                                    <v-rating
                                    :value="product.rating.rate"
                                    color="amber"
                                    dense
                                    readonly
                                    size="14"
                                    ></v-rating>

                                    <div class="grey--text ms-2" v-if="ShowRatingNumber">
                                        {{ product.rating.rate }} ({{ product.rating.count }})
                                    </div>
                                </div>
                            </v-card-text>
                            <!-- <div class="title_priceAndRating d-flex flex-column align-space-between">
                            </div> -->
                        </v-card>
                </router-link>
                <div class="product-details mx-auto price_addToCart_Fav d-flex align-center my-2 justify-space-between">
                    <v-btn dark tile class="mr-3" @click="addProductToCart(product.id)">Add To Cart</v-btn>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                            v-bind="attrs"
                            v-on="on"
                            :class="{'red--text': product.fav}"
                            @click="addProductToFavouriteList(product.id)"
                            >{{ product.fav ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
                        </template>
                        <span>{{ !product.fav ? 'Add To' : 'Remove From' }} Favourite List</span>
                    </v-tooltip>
                </div>
            </v-col>
        </template>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Products",
    data(){
        return {
            colors: ['black', 'white', 'blue', 'grey'],
            sizes: ['XS', 'S', 'M', 'L'],

            cartProducts: [],
            favouriteProducts: [],

            snackbar : false,
            isAdd: true,
            isFav: true,

        }
    },
    props:{
        prodsArray: {
            type: Array
        },
        ShowRatingNumber: {
            type: Boolean,
            default: true
        },
    },
    computed:{
      ...mapGetters(['allProducts', 'cartProductsGetter', 'favouriteProductsGetter', 'menProducts', 'womenProducts', 'electronicsProducts', 'jeweleryProducts']),
    },
    methods:{
        ...mapActions(['getAllProducts', 'getCartProducts', 'getFavouriteProducts', 'getTotalCost', 'getWomenProducts', 'getMenProducts', 'getElectronicsProducts', 'getJeweleryProducts']),
        addProductToCart(id){
            let cartProdData = this.allProducts.filter(prod => prod.id === id)[0];
            if(this.cartProducts.length){
                const prodIndexInCart = this.cartProducts.findIndex(prod => prod.id === id);
                if(prodIndexInCart >= 0){ // Means This Product Already Exist
                    // alert('This Product Exists')
                    this.cartProducts[prodIndexInCart].quantity ++
                    this.getCartProducts(this.cartProducts)
                    this.getTotalCost(this.cartProducts)
                }else{
                    cartProdData.quantity = 1;
                    this.cartProducts.unshift(cartProdData)
                    this.getCartProducts(this.cartProducts)
                    this.getTotalCost(this.cartProducts)
                }
            }else {
                cartProdData.quantity = 1;
                this.cartProducts.push(cartProdData)
                this.getCartProducts(this.cartProducts)
                this.getTotalCost(this.cartProducts)
            }
            this.$emit('changeAlert', {isAdd: true, isFav: false})
        },
        async addProductToFavouriteList(id){
            this.isFav = true;
            this.snackbar = true;
            let favProdData = this.allProducts.filter(prod => prod.id === id)[0];
            favProdData.fav = false;
            if(this.favouriteProducts.length){
                const prodIndexInFavourite = this.favouriteProducts.findIndex(prod => prod.id === id);
                if(prodIndexInFavourite >= 0){ // Means This Product Already Exist
                    // alert('This Product Exists')
                    this.favouriteProducts[prodIndexInFavourite].fav = false;
                    this.$emit('changeAlert', {isAdd: false, isFav: true})
                    // console.log(this.favouriteProducts[prodIndexInFavourite]);
                    this.favouriteProducts = this.favouriteProducts.filter(prod => prod.id !== id)
                    this.getFavouriteProducts(this.favouriteProducts)
                    await this.updateProductsToFavouriteOrNot()
                    this.$emit('prods-array-changed', this.favouriteProducts)
                }else{
                    favProdData.fav = true;
                    this.$emit('changeAlert', {isAdd: true, isFav: true})
                    this.favouriteProducts.unshift(favProdData)
                    this.getFavouriteProducts(this.favouriteProducts)
                    await this.updateProductsToFavouriteOrNot()
                    this.$emit('prods-array-changed', this.favouriteProducts)
                }
            }else {
                favProdData.fav = true;
                this.$emit('changeAlert', {isAdd: true, isFav: true})
                this.favouriteProducts.push(favProdData)
                this.getFavouriteProducts(this.favouriteProducts)
                await this.updateProductsToFavouriteOrNot()
                this.$emit('prods-array-changed', this.favouriteProducts)
            }
        },
        updateProductsToFavouriteOrNot(){
            this.getAllProducts() 
            this.getWomenProducts() 
            this.getMenProducts()
            this.getElectronicsProducts()
            this.getJeweleryProducts()
        },
    },
    created(){
        this.getAllProducts();
        this.cartProducts = this.cartProductsGetter;
        this.favouriteProducts = this.favouriteProductsGetter;
        this.getTotalCost(this.cartProductsGetter)
    },
    watch:{
        cartProductsGetter(newVal, oldVal){
            if(newVal !== oldVal){
                this.cartProducts = this.cartProductsGetter
                this.getTotalCost(this.cartProductsGetter)
            }
        },
        favouriteProductsGetter(newVal, oldVal){
            if(newVal !== oldVal){
                this.favouriteProducts = this.favouriteProductsGetter;
            }
        },
    },
}
</script>

<style>
.fade-slide-enter, .fade-slide-leave-to {
  opacity:0;
  transform: translateX(-2em);
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}

.sale {
    width:50px;
    height:30px;
    position:absolute;
    top:0;
    left:0;
}

.products .v-card .v-image__image {
    transition: 0.4s
}

.products .v-card:hover .v-image__image {
    transform: scale(1.1) !important;
}

a{
    text-decoration: none
}

.product-details {
    max-width: 380px;
}

.product-details .v-list .v-list-item {
    max-width:fit-content;
}
</style>