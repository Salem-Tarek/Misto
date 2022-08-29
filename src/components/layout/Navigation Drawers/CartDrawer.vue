<template>
    <!-- Cart Navigation Drawer -->
    <v-navigation-drawer
    class="cart-drawer"
    v-model="CartNavigationDrawerPropClone"
    app
    right
    temporary
    width="330"
    @input="emitToggleCartDrawer()"
    >
        <v-list nav dense class="d-flex flex-column pa-0" min-height="100%">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-bold text-uppercase">Shopping Cart</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="localToggleCartDrawer">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <!-- Cart Products Section -->
            <template  v-for="cartProduct in cartProductsGetter">
                <v-list-item :ripple="false" class="mb-0" :key="'A' + cartProduct.id">
                    <v-list-item-avatar tile size="80">
                        <v-img :src="cartProduct.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="body-2 grey--text">{{ cartProduct.title }}</v-list-item-title>
                        <v-list-item-subtitle class="black--text mb-5">{{ cartProduct.category }}</v-list-item-subtitle>
                        <div class="cart-item-info d-flex justify-space-between align-center">
                            <div class="input d-flex align-center">
                                <v-icon @click="cartProduct.quantity--;decQuantity()">mdi-minus</v-icon>
                                <v-text-field
                                v-model="cartProduct.quantity"
                                solo
                                dense
                                flat
                                hide-details
                                type="number"
                                hide-spin-buttons
                                height="30"
                                @input="saveCartProductsChanges"
                                ></v-text-field>
                                <v-icon @click="cartProduct.quantity++;incQuantity()">mdi-plus</v-icon>
                            </div>
                            <p class="subtitle-1 font-weight-bold mb-0 ml-2">${{ cartProduct.price }}</p>
                            <v-spacer></v-spacer>
                            <v-icon @click="deleteCartProduct(cartProduct.id)">mdi-trash-can-outline</v-icon>
                        </div>
                    </v-list-item-content>
                </v-list-item>
                <!-- <v-divider :key="cartProduct.id*0.222221"></v-divider> -->
            </template>
            <!-- Total Cost Section -->
            <v-list-item class="justify-center headline py-4" v-if="!cartProductsGetter.length">
                    Cart Is Empty
            </v-list-item>
            <v-list-item class="remove-after-pseudo-element pt-3 mt-auto rounded-0 px-3 flex-column" v-if="cartProductsGetter.length">
                <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                    <p class="subtitle-1 grey--text text--darken-2 mb-0">Tax</p>
                    <p class="subtitle-1 font-weight-bold mb-0">$ 50.00</p>
                </v-list-item-title>
                <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                    <p class="subtitle-1 grey--text text--darken-2 mb-0">Shipping</p>
                    <p class="subtitle-1 font-weight-bold mb-0">$ 100.00</p>
                </v-list-item-title>
                <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                    <p class="subtitle-1 grey--text text--darken-2 mb-0">Discount</p>
                    <p class="subtitle-1 font-weight-bold mb-0">$ 200.00</p>
                </v-list-item-title>
                <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                    <p class="subtitle-1 grey--text text--darken-2 mb-0">Cart Total</p>
                    <p class="subtitle-1 font-weight-bold mb-0">$ 350.00</p>
                </v-list-item-title>
                <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                    <p class="subtitle-1 grey--text text--darken-2">Total</p>
                    <p class="headline">$ 350.00</p>
                </v-list-item-title>
                <v-list-item-action class="mx-auto" style="width:80%">
                    <v-btn dark class="text-uppercase mb-3 rounded-0" block>Check out</v-btn>
                    <v-btn class="text-uppercase rounded-0" depressed block to="/cart-page">View Cart</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "CartNavigationDrawer",
    data(){
        return {
            CartNavigationDrawerPropClone: this.CartNavigationDrawerProp,
            cartProducts: []
        }
    },
    props:{
        CartNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    computed:{
        ...mapGetters(['cartProductsGetter'])
    },
    methods:{
        ...mapActions(['getCartProducts']),
        localToggleCartDrawer(){
            this.CartNavigationDrawerPropClone = !this.CartNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleCartDrawer(){
            if((this.CartNavigationDrawerProp == true) && (this.CartNavigationDrawerPropClone == false)){
                this.$emit('toggleCartDrawerProp')
            }
        },
        saveCartProductsChanges(){
            this.getCartProducts(this.cartProductsGetter)
        },
        decQuantity(){
            this.getCartProducts(this.cartProductsGetter)
        },
        incQuantity(){
            this.getCartProducts(this.cartProductsGetter)
        },
        deleteCartProduct(id){
            this.cartProducts = this.cartProductsGetter.filter(prod => prod.id !== id);
            this.getCartProducts(this.cartProducts)
        }
    },
    watch:{
        CartNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.CartNavigationDrawerPropClone = newVal
            }
        },
    },
    created(){
        this.cartProducts = this.cartProductsGetter;
    }
}
</script>

<style>
.cart-drawer .v-list-item {
    flex: 0
}

.cart-drawer .remove-after-pseudo-element::after{
    display: none;
}

.cart-drawer .v-list-item__title {
    white-space: normal;
}

.cart-drawer .v-input input {
    text-align: center;
    width: 30px;
}

.cart-drawer .v-list .v-list-item a:hover {
    color: #0BB17F
}

.cart-item-info > .v-icon {
    transition: 0.5s
}

.cart-item-info > .v-icon:hover {
    color: #0BB17F
}

</style>
