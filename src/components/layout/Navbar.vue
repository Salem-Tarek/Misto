<template>
  <nav>
    <v-container class="py-0 px-0">
        <v-app-bar flat>
            <v-app-bar-nav-icon @click="NavbarNavigationDrawerProp = true" class="d-flex d-md-none"></v-app-bar-nav-icon>
            <div class="bar-content d-flex align-center justify-space-between" style="width: 100%">
                <v-toolbar-title class="display-1 font-weight-bold">
                    <router-link to="/">Mi<span class="text-uppercase">s</span>to</router-link>
                </v-toolbar-title>
                <v-list class="d-none d-md-flex">
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/">Home</router-link>
                    </v-list-item>
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/about">AboutUs</router-link>
                    </v-list-item>
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/women">Women</router-link>
                    </v-list-item>
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/men">Men</router-link>
                    </v-list-item>
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/electronics">Electronics</router-link>
                    </v-list-item>
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/jewelery">Jewelery</router-link>
                    </v-list-item>
                    <!-- <v-list-item class="mx-3 px-0" disabled>
                        <router-link to="/blog">Blog</router-link>
                    </v-list-item> -->
                    <v-list-item class="mx-3 px-0">
                        <router-link to="/contact">Contact</router-link>
                    </v-list-item>
                </v-list>
                <div class="icons">
                    <v-btn icon width="30" @click="SearchNavigationDrawerProp = true">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon width="30" @click="LogInNavigationDrawerProp = true">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                    <v-badge
                    :color="cartProductsGetter.length ? 'black' : 'transparent'"
                    overlap
                    :content="cartProductsGetter.length ? cartProductsGetter.length : ''"
                    >
                        <v-btn icon @click="CartNavigationDrawerProp = true" width="30">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </v-badge>
                    <v-badge
                    :color="favouriteProductsGetter.length ? 'black' : 'transparent'"
                    overlap
                    :content="favouriteProductsGetter.length ? favouriteProductsGetter.length : ''"
                    >
                        <v-btn icon @click="FavouriteNavigationDrawerProp = true" width="30">
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </v-badge>
                </div>
            </div>
        </v-app-bar>
        <AddProduct @hideOverlay="hideOverlay" :show="show" />
    </v-container>



    <!-- Navbar Navigation Drawer -->
    <NavbarDrawer :NavbarNavigationDrawerProp="NavbarNavigationDrawerProp" @toggleNavbarDrawerProp="toggleNavbarDrawer" />
    
    <!-- Cart Navigation Drawer -->
    <CartDrawer :CartNavigationDrawerProp="CartNavigationDrawerProp" @toggleCartDrawerProp="toggleCartDrawer()" @changeAlert="changeAlert" />

    <!-- Search Navigation Drawer -->
    <SearchDrawer :SearchNavigationDrawerProp="SearchNavigationDrawerProp" @toggleSearchDrawerProp="toggleSearchDrawer()" />

    <!-- LogIn Navigation Drawer show = true-->
    <LogInDrawer @addProduct="showOverlay" :LogInNavigationDrawerProp="LogInNavigationDrawerProp" @toggleLogInDrawerProp="toggleLogInDrawer()" />

    <!-- Favourite Navigation Drawer -->
    <FavouriteDrawer :FavouriteNavigationDrawerProp="FavouriteNavigationDrawerProp" @toggleFavouriteDrawerProp="toggleFavouriteDrawer()" @changeAlert="changeAlert" />
    
    <!-- Alert -->
    <Alert :show="snackbar" :isFav="isFav" :isAdd="isAdd" @hideSnackbar="snackbar = false" v-if="snackbar" />

  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CartDrawer from './Navigation Drawers/CartDrawer.vue'
import SearchDrawer from './Navigation Drawers/SearchDrawer.vue'
import LogInDrawer from './Navigation Drawers/LogInDrawer.vue'
import FavouriteDrawer from './Navigation Drawers/FavouriteDrawer.vue'
import NavbarDrawer from './Navigation Drawers/NavbarDrawer.vue'
import Alert from './Alert.vue'
import AddProduct from '../Dashboard/AddProduct.vue'

export default {
    name: "Navbar",
    data(){
        return {
            CartNavigationDrawerProp: this.CartNavigationDrawerProp,
            SearchNavigationDrawerProp: this.SearchNavigationDrawerProp,
            LogInNavigationDrawerProp: this.LogInNavigationDrawerProp,
            FavouriteNavigationDrawerProp: this.FavouriteNavigationDrawerProp,
            NavbarNavigationDrawerProp: this.NavbarNavigationDrawerProp,
            favourite: false,

            snackbar : false,
            isAdd: true,
            isFav: true,

            show: false
        }
    },
    components:{
        CartDrawer,
        SearchDrawer,
        LogInDrawer,
        FavouriteDrawer,
        NavbarDrawer,
        Alert,
        AddProduct
    },
    methods:{
        ...mapActions(['getAllProducts']),
        toggleCartDrawer(){
            this.CartNavigationDrawerProp = !this.CartNavigationDrawerProp
        },
        toggleSearchDrawer(){
            this.SearchNavigationDrawerProp = !this.SearchNavigationDrawerProp
        },
        toggleLogInDrawer(){
            this.LogInNavigationDrawerProp = !this.LogInNavigationDrawerProp
        },
        toggleFavouriteDrawer(){
            this.FavouriteNavigationDrawerProp = !this.FavouriteNavigationDrawerProp
        },
        toggleNavbarDrawer(){
            this.NavbarNavigationDrawerProp = !this.NavbarNavigationDrawerProp
        },
        changeAlert(val){
            this.$emit('changeAlert', val)
        },
        showOverlay(){
            this.LogInNavigationDrawerProp = !this.LogInNavigationDrawerProp
            this.show = true;
        },
        hideOverlay(){
            this.show = false;
        }
    },
    computed:{
        ...mapGetters(['cartProductsGetter', 'favouriteProductsGetter', 'editedProductGetter'])
    },
    created(){
        this.getAllProducts()
    },
    watch:{
        editedProductGetter(newVal, oldVal){
            if(newVal !== oldVal){
                this.show = true;
            }
        }
    }
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
nav .bar-content .v-list .v-list-item a:hover,
nav .bar-content .v-list .v-list-item a.router-link-exact-active {
    color: #0BB17F;
}
.v-badge__badge {
    inset: auto auto calc(100% - 17px) calc(100% - 13px) !important;
}
/* 
.v-input .v-input-control .v-input__slot {
    background-color: red;
} */

</style>