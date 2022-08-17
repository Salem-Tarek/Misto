<template>
  <nav>
    <v-app-bar flat style="border-bottom: 1px solid #121212">
        <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
        <div class="bar-content d-flex align-center justify-space-between" style="width: 100%">
            <v-toolbar-title class="display-1 font-weight-bold">
                <router-link to="/">Mi<span class="text-uppercase">s</span>to</router-link>
            </v-toolbar-title>
            <ul class="list-unstyled d-none d-sm-flex">
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
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-badge
                :color="cartNum ? 'black' : 'transparent'"
                overlap
                :content="cartNum ? cartNum : ''"
                >
                    <v-btn icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </v-badge>
                
            </div>
        </div>
        
    </v-app-bar>
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
  </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return {
            drawer: false,
            cartNum: 2
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
</style>