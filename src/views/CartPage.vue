<template>
    <div class="cart">
        <v-container>
            <v-list nav dense class="d-flex flex-column pa-0" min-height="100%">
                <v-list-item class="mb-5 d-flex justify-space-between">
                    <p class="cart-title text-uppercase title mb-0">Shopping Cart</p>
                    <v-list-item-title class="text-right title">
                        3 Items
                    </v-list-item-title>
                </v-list-item>
                <!-- Cart Products Section -->
                <template>
                    <v-list-item  v-for="i in 3" :key="i" :ripple="false" class="remove-after-pseudo-element pt-3 pb-4 mb-2 d-flex justify-space-between flex-column flex-sm-row" style="gap: 20px">
                        <div class="item d-flex">
                            <v-list-item-avatar tile size="80">
                                <v-img src="../assets/cartImg1.png"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-2 grey--text">Women's tracksuit Q109</v-list-item-title>
                                <v-list-item-subtitle class="black--text mb-5">Women</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-divider class="d-sm-none"></v-divider>
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
                        <v-divider class="d-sm-none"></v-divider>
                        <p class="subtitle-1 font-weight-bold mb-0 ml-2">$159.9</p>
                        <v-divider class="d-sm-none"></v-divider>
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-list-item>
                    <v-divider></v-divider>
                </template>
                <!-- Total Cost Section -->
                <v-list-item class="remove-after-pseudo-element pt-3 mt-auto rounded-0 px-3 flex-column">
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
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "CartPage",
    data(){
        return {
            amount: 1,
        }
    }
}
</script>

<style>
.cart .remove-after-pseudo-element::after{
    display: none;
}
.cart .v-list .v-list-item .cart-title {
    min-width: fit-content;
}
.cart .v-input input {
    text-align: center;
    width: 30px;
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