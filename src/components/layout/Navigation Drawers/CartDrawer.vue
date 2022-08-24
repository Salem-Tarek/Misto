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
            <template>
                <v-list-item :ripple="false" class="mb-0">
                    <v-list-item-avatar tile size="80">
                        <v-img src="../../../assets/cartImg1.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                        <v-list-item-subtitle class="black--text mb-5">Women</v-list-item-subtitle>
                        <div class="cart-item-info d-flex justify-space-between align-center">
                            <div class="input d-flex align-center">
                                <v-icon @click="amount--">mdi-minus</v-icon>
                                <v-text-field
                                v-model="amount"
                                solo
                                dense
                                flat
                                hide-details
                                type="number"
                                hide-spin-buttons
                                height="30"
                                ></v-text-field>
                                <v-icon @click="amount++">mdi-plus</v-icon>
                            </div>
                            <p class="subtitle-1 font-weight-bold mb-0 ml-2">$159.9</p>
                            <v-spacer></v-spacer>
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </div>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </template>
            <template>
                <v-list-item :ripple="false" class="mb-0">
                    <v-list-item-avatar tile size="80">
                        <v-img src="../../../assets/cartImg1.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                        <v-list-item-subtitle class="black--text mb-5">Women</v-list-item-subtitle>
                        <div class="cart-item-info d-flex justify-space-between align-center">
                            <div class="input d-flex align-center">
                                <v-icon @click="amount--">mdi-minus</v-icon>
                                <v-text-field
                                v-model="amount"
                                solo
                                dense
                                flat
                                hide-details
                                height="30"
                                ></v-text-field>
                                <v-icon @click="amount++">mdi-plus</v-icon>
                            </div>
                            <p class="subtitle-1 font-weight-bold mb-0 ml-2">$159.9</p>
                            <v-spacer></v-spacer>
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </div>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </template>
            <!-- Total Cost Section -->
            <v-list-item class="remove-after-pseudo-element pt-3 mt-auto rounded-0 px-3 flex-column">
                <v-list-item-title class="d-flex justify-space-between align-center" style="width:100%">
                    <p class="subtitle-1 grey--text text--darken-2">Total</p>
                    <p class="headline">$ 350.00</p>
                </v-list-item-title>
                <v-list-item-action class="mx-auto" style="width:80%">
                    <v-btn dark class="text-uppercase mb-3 rounded-0" block>Check out</v-btn>
                    <v-btn class="text-uppercase rounded-0" depressed block to="/cartPage">View Cart</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "CartNavigationDrawer",
    data(){
        return {
            CartNavigationDrawerPropClone: this.CartNavigationDrawerProp,
            amount: 1
        }
    },
    props:{
        CartNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    methods:{
        localToggleCartDrawer(){
            this.CartNavigationDrawerPropClone = !this.CartNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleCartDrawer(){
            if((this.CartNavigationDrawerProp == true) && (this.CartNavigationDrawerPropClone == false)){
                this.$emit('toggleCartDrawerProp')
            }
        }
    },
    watch:{
        CartNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.CartNavigationDrawerPropClone = newVal
            }
        },
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

.cart-drawer .v-input {
    width:  50px;
}

.cart-drawer .v-input input {
    text-align: center;
}

.v-list .v-list-item a:hover {
    color: #0BB17F
}

</style>
