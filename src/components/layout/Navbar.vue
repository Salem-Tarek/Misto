<template>
  <nav style="border-bottom: 1px solid #121212">
    <v-container class="py-0">
        <v-app-bar flat>
            <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-md-none"></v-app-bar-nav-icon>
            <div class="bar-content d-flex align-center justify-space-between" style="width: 100%">
                <v-toolbar-title class="display-1 font-weight-bold">
                    <router-link to="/">Mi<span class="text-uppercase">s</span>to</router-link>
                </v-toolbar-title>
                <ul class="list-unstyled d-none d-md-flex">
                    <li class="mx-3">
                        <router-link to="/about">AboutUs</router-link>
                    </li>
                    <li class="mx-3">
                        <router-link to="/women">Women</router-link>
                    </li>
                    <li class="mx-3">
                        <router-link to="/men">Men</router-link>
                    </li>
                    <li class="mx-3">
                        <router-link to="/electronics">Electronics</router-link>
                    </li>
                    <li class="mx-3">
                        <router-link to="/jewelery">Jewelery</router-link>
                    </li>
                    <li class="mx-3">
                        <router-link to="/blog">Blog</router-link>
                    </li>
                    <li class="mx-3">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
                <div class="icons">
                    <v-btn icon width="42">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon width="42">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                    <v-badge
                    :color="cartNum ? 'black' : 'transparent'"
                    overlap
                    :content="cartNum ? cartNum : ''"
                    >
                        <v-btn icon @click="cart = true" width="42">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </v-badge>
                    
                </div>
            </div>
            
        </v-app-bar>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <div class="text-center display-1 my-3 font-weight-bold">Mi<span class="text-uppercase">s</span>to</div>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item-group
            >
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/about">AboutUs</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/women">Women</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/men">Men</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/electronics">Electronics</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/jewelery">Jewelery</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/blog">Blog</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/contact">Contact</router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <!-- Cart Navigation Drawer -->
    <v-navigation-drawer
    v-model="cart"
    app
    right
    temporary
    width="330"
    >
        <v-list nav dense class="d-flex flex-column pa-0" min-height="100%">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-bold text-uppercase">Shopping Cart</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="cart = false">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <!-- Cart Products Section -->
            <template>
                <v-list-item :ripple="false" class="mb-0">
                    <v-list-item-avatar tile size="80">
                        <v-img src="../../assets/cartImg1.png"></v-img>
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
                        <v-img src="../../assets/cartImg1.png"></v-img>
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
  </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return {
            drawer: false,
            cartNum: 2,
            cart: false,
            amount: 1 //Untill we add data
        }
    },
}
</script>

<style>
.list-unstyled {
    list-style:none;
    padding:0;
    margin:0
}

.v-toolbar__content {
    padding: 8px;
}

.bar-content .v-toolbar__title a{
    text-decoration: none;
    color: #121212;
}
.bar-content ul li a, .v-list .v-list-item a {
    text-decoration: none;
    color: #121212;
    font-weight:bold;
    transition:0.4s
}
.bar-content ul li a.router-link-exact-active,
.bar-content ul li a:hover,
.v-list .v-list-item a:hover,
.v-list .v-list-item a.router-link-exact-active {
    color: #0BB17F
}
.v-badge__badge {
    inset: auto auto calc(100% - 18px) calc(100% - 20px) !important;
}

.remove-after-pseudo-element::after{
    display: none;
}

.v-input {
    width:  50px;
}

.v-input .v-input-control .v-input__slot {
    background-color: transparent;
}

.v-input input {
    text-align: center;
}
.v-list-item {
    flex: 0
}
</style>