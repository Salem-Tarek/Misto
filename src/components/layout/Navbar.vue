<template>
  <nav>
    <v-container class="py-0 px-0">
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
                    <v-btn icon width="30" @click="searchDrawer = true">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon width="30" @click="logInDrawer = true">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                    <v-badge
                    :color="cartNum ? 'black' : 'transparent'"
                    overlap
                    :content="cartNum ? cartNum : ''"
                    >
                        <v-btn icon @click="cart = true" width="30">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </v-badge>
                    <v-badge
                    :color="favNum ? 'black' : 'transparent'"
                    overlap
                    :content="favNum ? favNum : ''"
                    >
                        <v-btn icon @click="FavDrawer = true" width="30">
                            <v-icon>mdi-heart</v-icon>
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
    <!-- LogIn Navigation Drawer -->
    <v-navigation-drawer
    class="logIn-drawer"
    v-model="logInDrawer"
    app
    right
    temporary
    width="330"
    >
        <v-list nav dense class="d-flex flex-column pa-0" min-height="100%">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-bold text-uppercase">LogIn</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="logInDrawer = false">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item :ripple="false" class="mb-0 px-1">
                <v-list-item-title class="body-2 grey--text text--darken-2 text-center">If you have an account with us, please log in.</v-list-item-title>
            </v-list-item>
            <v-list-item class="justify-center">
                <form>
                    <label class="font-weight-bold subtitle-1">Email</label>
                    <v-text-field
                    v-model="email"
                    placeholder="Email"
                    required
                    solo
                    class="mx-auto"
                    ></v-text-field>
                    <div class="forPass d-flex justify-space-between align-center">
                        <label class="font-weight-bold subtitle-1">password</label>
                        <span class="caption grey--text font-weight-medium">Lost Your Password ?</span>
                    </div>
                    <v-text-field
                    v-model="password"
                    placeholder="Password"
                    type="password"
                    required
                    solo
                    class="mx-auto"
                    ></v-text-field>
                    <v-btn dark class="text-uppercase mb-3 mr-4 rounded-0" block type="submit">LogIn</v-btn>
                </form>
            </v-list-item>
            <v-list-item class="justify-center login-or">
                <div class="dividers-parent d-flex align-center">
                    <div class="divider-line"></div>
                    <div class="px-2 white grey--text text--darken-2">or</div>
                    <div class="divider-line"></div>
                </div>
            </v-list-item>
            <v-list-item class="justify-center mt-3">
                <v-list class="d-flex justify-center">
                    <v-list-item>
                        <v-list-item-icon class="ma-0 mx-2">
                            <v-icon x-large>mdi-facebook</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon class="ma-0 mx-2">
                            <v-icon x-large>mdi-google</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon class="ma-0 mx-2">
                            <v-icon x-large style="transform: translateY(-4px);">mdi-apple</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-list-item>
            <!-- Don't Have Account Question Section -->
            <v-list-item class="remove-after-pseudo-element py-12 mt-auto rounded-0 px-3 flex-column-reverse">
                <v-list-item-title class="title">
                    <router-link to="/signUp">Create Your Account</router-link>  
                </v-list-item-title>   
                <v-list-item-subtitle class="mb-8 subtitle-1 font-weight-normal">New Customer ?</v-list-item-subtitle>   
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <!-- Search Navigation Drawer -->
    <v-navigation-drawer
    class="search-drawer"
    v-model="searchDrawer"
    app
    right
    temporary
    width="330"
    >
        <v-list dense class="d-flex flex-column pa-0">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-bold text-uppercase">Search</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="searchDrawer = false">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="mt-3">
                <v-select
                v-model="categories[selectCategory]"
                :items="categories"
                cache-items
                solo
                ></v-select>
            </v-list-item>
            <v-list-item>
                <v-text-field
                v-model="search"
                solo
                placeholder="What are you Looking for ?"
                append-icon="mdi-magnify"
                ></v-text-field>
            </v-list-item>
        </v-list>
        <div class="divider-line mx-auto"></div>
        <v-list class="d-flex flex-column pa-0 mb-3">
            <v-list-item class="remove-after-pseudo-element">
                <v-list-item-title class="font-weight-medium">Searched Products :</v-list-item-title>
            </v-list-item>
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                        <v-list-item-avatar tile size="80">
                            <v-img src="../../assets/cartImg1.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="align-self-start pt-2">
                            <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">$159.90</v-list-item-subtitle>
                        </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                        <v-list-item-avatar tile size="80">
                            <v-img src="../../assets/prod1.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="align-self-start pt-2">
                            <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">$159.90</v-list-item-subtitle>
                        </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>
        <div class="divider-line mx-auto"></div>
        <h4 class="ma-2 ml-5 font-weight-medium">Need Some Inspiration ?</h4>
        <v-list class="d-flex flex-column pa-0 my-3">
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                        <v-list-item-avatar tile size="80">
                            <v-img src="../../assets/cartImg1.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="align-self-start pt-2">
                            <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">$159.90</v-list-item-subtitle>
                        </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                        <v-list-item-avatar tile size="80">
                            <v-img src="../../assets/prod1.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="align-self-start pt-2">
                            <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">$159.90</v-list-item-subtitle>
                        </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
    <!-- Favourite Navigation Drawer -->
    <v-navigation-drawer
    class="favourite-drawer"
    v-model="FavDrawer"
    app
    right
    temporary
    width="330"
    >
        <v-list dense class="d-flex flex-column pa-0">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-medium text-uppercase">Favourite List</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="FavDrawer = false">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
        <v-list class="d-flex flex-column pa-0 mb-3">
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                    <v-list-item-avatar tile size="80">
                        <v-img src="../../assets/cartImg1.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                        <v-list-item-subtitle class="black--text mb-5">Women</v-list-item-subtitle>
                        <div class="cart-item-info d-flex justify-space-between align-center">
                            <p class="subtitle-1 font-weight-bold mb-0 ml-2">$159.9</p>
                            <v-spacer></v-spacer>
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </div>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                    <v-list-item-avatar tile size="80">
                        <v-img src="../../assets/prod1.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1 grey--text">Women T-shirt</v-list-item-title>
                        <v-list-item-subtitle class="black--text mb-5">Women</v-list-item-subtitle>
                        <div class="cart-item-info d-flex justify-space-between align-center">
                            <p class="subtitle-1 font-weight-bold mb-0 ml-2">$159.9</p>
                            <v-spacer></v-spacer>
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </div>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
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
            favNum: 2,
            cart: false,
            favourite: false,
            logInDrawer: false,
            searchDrawer: false,
            FavDrawer: false,
            email:"",
            password:"",
            search:"",
            selectCategory: 0,
            categories: ["All Categories", "Electronics", "Men", "Women", "Jewelery"],
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

.divider-line {
    height:1px;
    width:120px;
    background-color: grey;
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
    inset: auto auto calc(100% - 17px) calc(100% - 13px) !important;
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

.logIn-drawer .v-input {
    width: 280px;
}

.logIn-drawer .v-text-field input,
.search-drawer .v-text-field input {
    text-align: left;
}

.logIn-drawer .v-list .v-list-item a {
    font-weight:400;
}

.search-drawer .divider-line {
    width:90%
}

.search-drawer .v-list .v-list-item .v-text-field .v-input__control > .v-input__slot {
    box-shadow: none;
}
</style>