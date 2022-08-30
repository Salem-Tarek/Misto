<template>
    <v-container class="pt-0">
        <div class="productPage">
            <div class="breadcrumb_share d-flex justify-space-between align-center">
                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <v-btn depressed class="grey--text text--darken-2">
                    <v-icon left>mdi-share-variant</v-icon>
                    <span>Share</span>
                </v-btn>
            </div>
            <div class="prodInfo">
                <h1 class="text-center">{{ product.title }}</h1>
                <div class="d-flex justify-space-between align-center">
                    <div class="rating d-flex align-center" v-if="product.rating">
                        <v-rating
                        :value="product.rating.rate"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="12"
                        ></v-rating>
                        <div class="grey--text caption ms-2">
                            {{ product.rating.count }} Reviews
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row">
                        <span class="grey--text caption mr-3">SKU: <span class="black--text font-weight-bold">777</span></span>
                        <span class="grey--text caption">Availability: <span class="black--text font-weight-bold">In Stock</span></span>
                    </div>
                </div>
            </div>
            <v-row>
                <v-col cols="12" md="6" style="position: relative">
                    <v-img max-height="470px" contain :src="product.image"></v-img>
                    <div v-if="product.discount" class="pink white--text sale font-weight-medium d-flex justify-center align-center">
                        - 50%
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="color mb-2">
                        <p class="subtitle-2 mb-2"><span class="text-uppercase grey--text">Color:</span> <span class="black--text font-weight-bold">{{ colors[selectedColor] }}</span></p>
                        <v-list dense class="pt-0">
                            <v-list-item-group
                                v-model="selectedColor"
                                class="d-flex"
                            >
                                <v-list-item
                                v-for="(color, i) in colors"
                                :key="i"
                                :class="color"
                                class="mx-1"
                                ></v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                    <div class="size mb-2">
                        <p class="subtitle-2 mb-2"><span class="text-uppercase grey--text">Size:</span> <span class="black--text font-weight-bold">{{ sizes[selectedSize] }}</span></p>
                        <v-list dense class="pt-0">
                            <v-list-item-group
                                v-model="selectedSize"
                                class="d-flex"
                            >
                                <v-list-item
                                v-for="(size, i) in sizes"
                                :key="i"
                                class="mx-1 px-2"
                                style="border:1px solid #000"
                                >{{ size }}</v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                    <p><v-icon left>mdi-hanger</v-icon><span>Size Guide</span></p>
                    <v-divider></v-divider>
                    <div class="price_addToCart_Fav d-flex align-center my-6">
                        <div class="prices d-flex flex-column flex-sm-row justify-center align-center">
                            <h2 class="font-weight-bold mr-3">${{ parseFloat(product.price).toFixed(2) }}</h2>
                            <span v-if="product.discount" class="mr-2 grey--text text-decoration-line-through body-1 font-weight-black">$76.00</span>
                        </div>
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
                            <span>{{  product.fav ? 'Add To' : 'Remove From' }} Favourite List</span>
                        </v-tooltip>
                    </div>
                    <v-divider></v-divider>
                    <v-row class="my-1 mb-3">
                        <v-col cols="12" sm="4">
                            <div class="feat d-flex">
                                <v-icon class="mr-2">mdi-car-estate</v-icon>
                                <div class="content mt-1">
                                    <p class="caption black--text font-weight-medium mb-1">Shipping &amp; Delivery</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="feat d-flex">
                                <v-icon class="mr-2">mdi-rotate-3d-variant</v-icon>
                                <div class="content mt-1">
                                    <p class="caption black--text font-weight-medium mb-1">Returns &amp; Exchanges</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="feat d-flex">
                                <v-icon class="mr-2">mdi-email</v-icon>
                                <div class="content mt-1">
                                    <p class="caption black--text font-weight-medium mb-1">Ask a question</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="pay-methods mb-5">
                        <div class="d-flex align-center">
                            <p class="text-caption text-sm-body-2 text-uppercase mb-0 mr-3">guaranteed safe checkout</p>
                            <div class="divider-line"></div>
                        </div>
                        <v-list class="d-flex px-0 flex-wrap flex-sm-nowrap pb-0">
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/Stripe.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/AES256.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/paypal.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/visa.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/mastercard.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/discover.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/american-express.png"></v-img>
                            </v-list-item>
                        </v-list>
                    </div>
                    <v-divider></v-divider>
                    <div class="description my-5">
                        <p class="subtitle-1 grey--text mb-2">Description</p>
                        <p class="subtitle-2 grey--text text--darken-2">{{ product.description }}</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="additional_information my-5">
                        <p class="subtitle-2 text-uppercase grey--text text--darken-4">Additional Information</p>
                        <p class="grey--text"><span class="grey--text text--darken-4">Color:</span> Black, White, Blue, Grey</p>
                        <p class="grey--text"><span class="grey--text text--darken-4">Size:</span> XS, S, M, L</p>
                        <p class="grey--text"><span class="grey--text text--darken-4">Material:</span> 100% Polyester</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="reviews my-5">
                        <p class="subtitle-2 text-uppercase grey--text text--darken-4 mb-0">Reviews</p>
                        <div class="rating d-flex justify-space-between align-center" v-if="product.rating">
                            <div class="d-flex align-center">
                                <v-rating
                                :value="product.rating.rate"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="12"
                                ></v-rating>
                                <div class="grey--text ms-2 caption">
                                    {{ product.rating.count }} Reviews
                                </div>
                            </div>
                            <div class="d-flex align-center">
                                <v-icon right small>mdi-message-text-outline</v-icon>
                                <v-text-field hide-details placeholder="Write a review" solo></v-text-field>
                            </div>
                        </div>
                        <div class="reviews-wrapper">
                            <div class="review mb-7" v-for="i in 2" :key="i">
                                <div class="review-header mb-2 d-flex justify-space-between align-center">
                                    <p class="text-grey text--darken-3 grey--text mb-0">Oleh Chabanov</p>
                                    <div class="rating_time d-flex align-center" v-if="product.rating">
                                        <span class="grey--text caption">3 monthes ago</span>
                                        <v-rating
                                        :value="product.rating.rate"
                                        color="amber"
                                        dense
                                        half-increments
                                        readonly
                                        size="12"
                                        ></v-rating>
                                    </div>
                                </div>
                                <p class="grey--text body-2">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                            </div>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    
                </v-col>
            </v-row>
            <div class="related_products my-4">
                <h2 class="my-5">Related Products</h2>
                <products :maxProdsNum="4" :prodsArray="menProducts" :ShowRatingNumber="false" :ShowFilter="false" />
            </div>
        </div>
    </v-container>
</template>

<script>
import Products from '../components/ProductPages/Products.vue'
import axios from "axios"
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { Products },
    name: "ProductPage",
    data(){
        return {
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Women',
                    disabled: false,
                    href: '/women',
                },
                {
                    text: "Women's tracksuit Q109",
                    disabled: true,
                    href: '/product-page',
                },
            ],
            colors:['black', 'white', 'blue', 'grey'],
            selectedColor:1,

            sizes:['XS', 'S', 'M', 'L'],
            selectedSize:1,

            product: {},
            cartProducts: [],
            favouriteProducts: [],

        }
    },
    computed:{
      ...mapGetters(['allProducts', 'cartProductsGetter', 'favouriteProductsGetter', 'menProducts']),
    },
    methods:{
        ...mapActions(['getAllProducts', 'getCartProducts', 'getFavouriteProducts', 'getMenProducts', 'getTotalCost']),
        addProductToCart(id){
            let cartProdData = this.allProducts.filter(prod => prod.id === id)[0];
            if(this.cartProducts.length){
                const prodIndexInCart = this.cartProducts.findIndex(prod => prod.id === id);
                if(prodIndexInCart >= 0){ // Means This Product Already Exist
                    // alert('This Product Exists')
                    this.cartProducts[prodIndexInCart].quantity ++
                    this.getCartProducts(this.cartProducts)
                }else{
                    cartProdData.quantity = 1;
                    this.cartProducts.unshift(cartProdData)
                    this.getCartProducts(this.cartProducts)
                }
            }else {
                cartProdData.quantity = 1;
                this.cartProducts.push(cartProdData)
                this.getCartProducts(this.cartProducts)
            }
            this.getTotalCost(this.cartProductsGetter)
        },
        addProductToFavouriteList(id){
            this.favouriteProducts = this.allProducts.filter(prod => prod.fav === true);
            console.log(this.favouriteProducts);
            let favProdData = this.allProducts.filter(prod => prod.id === id)[0];
            if(this.favouriteProducts.length){
                const prodIndexInFavourite = this.favouriteProducts.findIndex(prod => prod.id === id);
                if(prodIndexInFavourite >= 0){ // Means This Product Already Exist
                    // alert('This Product Exists')
                    this.favouriteProducts[prodIndexInFavourite].fav = false
                    this.favouriteProducts = this.favouriteProducts.filter(prod => prod.id !== id)
                    this.getFavouriteProducts(this.favouriteProducts)
                }else{
                    favProdData.fav = true;
                    this.favouriteProducts.unshift(favProdData)
                    this.getFavouriteProducts(this.favouriteProducts)
                }
                this.isFav()
            }else {
                favProdData.fav = true;
                this.favouriteProducts.push(favProdData)
                this.getFavouriteProducts(this.favouriteProducts)
                this.isFav(id)
            }
            // console.log(this.favouriteProducts);
        },
        isFav(id){
            for(let product of this.favouriteProducts){
                if(product.id == id){
                    return true
                }else{
                    return false
                }
            }
        }
    },
    created(){
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then(res => {
                this.product = res.data;
                this.product.fav = false
                // console.log(this.product);
            })   
            .catch(err => console.log(err));
            this.getMenProducts(4);
            window.scrollBy({ 
                top: -5000, // could be negative value
                left: 0, 
                behavior: 'smooth' 
            });
            this.cartProducts = this.cartProductsGetter;
            this.favouriteProducts = this.favouriteProductsGetter;

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                if(toParams.id !== previousParams.id){
                    axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
                    .then(res => this.product = res.data)   
                    .catch(err => console.log(err));
                    this.getMenProducts(4);
                    window.scrollBy({ 
                        top: -5000, // could be negative value
                        left: 0, 
                        behavior: 'smooth' 
                    });
                    this.cartProducts = this.cartProductsGetter;
                }
            }
        )

        this.getTotalCost(this.cartProductsGetter)
      
    },
    watch:{
        cartProductsGetter(newVal, oldVal){
            if(newVal !== oldVal){
                this.cartProducts = this.cartProductsGetter
            }
        },
        favouriteProductsGetter(newVal, oldVal){
            if(newVal !== oldVal){
                this.favouriteProducts = this.favouriteProductsGetter
            }
        }
    }
}
</script>

<style>
.v-breadcrumbs .v-breadcrumbs__item:not(.v-breadcrumbs__item--disabled){
    color:black
}

.v-breadcrumbs li.v-breadcrumbs__divider {
    padding:0 4px !important;
}

.sale {
    width:50px;
    height:30px;
    position:absolute;
    top:20px;
    left:20px;
}

.productPage .v-list-item {
    max-width: fit-content;
}

.v-list-item.v-item--active {
    background-color:rgba(0, 0, 0, 0.3)
}
.divider-line {
    width:50%
}

.v-input input {
    width: 100px;
}

.reviews .v-input .v-input__control > .v-input__slot {
    box-shadow: none !important;
    margin-bottom: 0 !important;
    padding-left: 4px !important;
    padding-right: 0 !important;
}
</style>