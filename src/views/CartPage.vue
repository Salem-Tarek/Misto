<template>
    <div class="cart">
        <v-container>
            <v-list nav dense class="d-flex flex-column pa-0" min-height="100%">
                <v-list-item class="mb-5 d-flex justify-space-between">
                    <p class="cart-title text-uppercase title mb-0">Shopping Cart</p>
                    <v-list-item-title class="text-right title">
                        {{ cartProductsGetter.length }} Items
                    </v-list-item-title>
                </v-list-item>
                <!-- Cart Products Section -->
                <template>
                    <v-list-item  v-for="product in cartProductsGetter" :key="product.id" :ripple="false" class="remove-after-pseudo-element pt-3 pb-4 mb-2 d-flex justify-space-between flex-column flex-sm-row" style="gap: 20px">
                        <div class="img-info d-flex">
                            <v-list-item-avatar tile size="80">
                                <v-img :src="product.image"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-2 grey--text">{{ product.title }}</v-list-item-title>
                                <v-list-item-subtitle class="black--text mb-5">{{ product.category }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-divider class="d-sm-none"></v-divider>
                        <div class="input d-flex align-center">
                            <v-icon :disabled="product.quantity <= 1" @click="product.quantity--;decQuantity()">mdi-minus</v-icon>
                            <v-text-field
                            v-model="product.quantity"
                            solo
                            dense
                            flat
                            hide-details
                            type="number"
                            hide-spin-buttons
                            height="30"
                            ></v-text-field>
                            <v-icon :disabled="product.quantity >= 100" @click="product.quantity++;incQuantity()">mdi-plus</v-icon>
                        </div>
                        <v-divider class="d-sm-none"></v-divider>
                        <p class="subtitle-1 font-weight-bold mb-0 ml-2">${{ product.price.toFixed(2) }}</p>
                        <v-divider class="d-sm-none"></v-divider>
                        <v-icon @click="deleteCartProduct(product.id)">mdi-trash-can-outline</v-icon>
                    </v-list-item>
                    <v-divider></v-divider>
                </template>
                <v-list-item class="justify-center display-1 py-4" v-if="!cartProductsGetter.length">
                    Cart Is Empty
                </v-list-item>
                <!-- Total Cost Section -->
                <v-list-item class="remove-after-pseudo-element pt-3 mt-auto rounded-0 px-3 flex-column" v-if="cartProductsGetter.length">
                    <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                        <p class="subtitle-1 grey--text text--darken-2 mb-0">Tax</p>
                        <p class="subtitle-1 font-weight-bold mb-0">$ {{ taxGetter.toFixed(2) }}</p>
                    </v-list-item-title>
                    <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                        <p class="subtitle-1 grey--text text--darken-2 mb-0">Shipping</p>
                        <p class="subtitle-1 font-weight-bold mb-0">$ {{ shippingGetter.toFixed(2) }}</p>
                    </v-list-item-title>
                    <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                        <p class="subtitle-1 grey--text text--darken-2 mb-0">Discount</p>
                        <p class="subtitle-1 font-weight-bold mb-0">$ {{ discountGetter.toFixed(2) }}</p>
                    </v-list-item-title>
                    <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                        <p class="subtitle-1 grey--text text--darken-2 mb-0">Cart Total</p>
                        <p class="subtitle-1 font-weight-bold mb-0">$ {{ totalCostGetter.toFixed(2) }}</p>
                    </v-list-item-title>
                    <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                        <p class="subtitle-1 grey--text text--darken-2">Total</p>
                        <p class="headline">$ {{ getTotalCostOfCartProducts.toFixed(2) }}</p>
                    </v-list-item-title>
                    <v-list-item-action class="mx-auto" style="width:80%">
                        <v-btn dark class="text-uppercase mb-3 rounded-0" block>Check out</v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "CartPage",
    data(){
        return {
            cartProducts: []
        }
    },
    computed:{
        ...mapGetters(['cartProductsGetter', 'totalCostGetter', 'shippingGetter', 'taxGetter', 'discountGetter']),
        getTotalCostOfCartProducts(){
            let theTotal = this.totalCostGetter + this.shippingGetter + this.taxGetter - this.discountGetter;
            return theTotal
        }
    },
    methods:{
        ...mapActions(['getCartProducts', 'getTotalCost']),
        saveCartProductsChanges(){
            this.getCartProducts(this.cartProductsGetter)
            this.getTotalCost(this.cartProductsGetter)
        },
        decQuantity(){
            this.getCartProducts(this.cartProductsGetter)
            this.getTotalCost(this.cartProductsGetter)
        },
        incQuantity(){
            this.getCartProducts(this.cartProductsGetter)
            this.getTotalCost(this.cartProductsGetter)
        },
        deleteCartProduct(id){
            this.cartProducts = this.cartProductsGetter.filter(prod => prod.id !== id);
            this.getCartProducts(this.cartProducts)
            this.getTotalCost(this.cartProducts)
            this.$emit('changeAlert', {isAdd: false, isFav: false})
        },
    },
    created(){
        this.cartProducts = this.cartProductsGetter;
        this.getTotalCost(this.cartProducts)
    }
}
</script>

<style>
.cart .remove-after-pseudo-element::after{
    display: none;
}
@media(min-width: 600px){
    .cart .v-list .v-list-item > .img-info {
        flex-basis: 400px !important;
    }
}


.cart .v-list-item__content {
    max-width: 300px
}
.cart .v-list-item .v-list-item__title {
    white-space: normal;
}

.cart .v-list .v-list-item .cart-title {
    min-width: fit-content;
}
.cart .v-input input {
    text-align: center;
    width: 30px;
}

.v-list-item > .v-icon {
    transition: 0.5s
}

.v-list-item > .v-icon:hover {
    color: #0BB17F
}


.v-divider {
    width :100%
}

@media (max-width: 599px){
    .cart .v-list .v-list-item:not(:first-of-type):not(:last-of-type) {
        border: 1px solid #333;
    }
}

</style>