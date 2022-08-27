<template>
    <!-- Navbar Navigation Drawer -->
    <v-navigation-drawer v-model="NavbarNavigationDrawerPropClone" absolute temporary @input="emitToggleNavbarDrawer()">
        <div class="text-center display-1 my-3 font-weight-bold">Mi<span class="text-uppercase">s</span>to</div>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item-group
            >
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/">Home</router-link>
                    </v-list-item-title>
                </v-list-item>
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
                <!-- <v-list-item disabled>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/blog">Blog</router-link>
                    </v-list-item-title>
                </v-list-item> -->
                <v-list-item>
                    <v-list-item-title class="subtitle-1">
                        <router-link to="/contact">Contact</router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "NavbarDrawer",
    props:{
        NavbarNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            NavbarNavigationDrawerPropClone: this.NavbarNavigationDrawerProp,
        }
    },
    methods:{
        emitToggleNavbarDrawer(){
            if((this.NavbarNavigationDrawerProp == true) && (this.NavbarNavigationDrawerPropClone == false)){
                this.$emit('toggleNavbarDrawerProp')
            }
        }
    },
    watch: {
        NavbarNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.NavbarNavigationDrawerPropClone = newVal
            }
        }
    }
}
</script>

<style>

</style>