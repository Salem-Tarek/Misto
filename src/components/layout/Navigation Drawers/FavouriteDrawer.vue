<template>
    <!-- Favourite Navigation Drawer -->
    <v-navigation-drawer
    class="favourite-drawer"
    v-model="FavouriteNavigationDrawerPropClone"
    app
    right
    temporary
    width="330"
    @input="emitToggleCartDrawer()"
    >
        <v-list dense class="d-flex flex-column pa-0">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-medium text-uppercase">Favourite List</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="localToggleCartDrawer">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
        <v-list class="d-flex flex-column pa-0 mb-3">
            <router-link to="/product-page">
                <v-list-item :ripple="false" class="mb-0">
                    <v-list-item-avatar tile size="80">
                        <v-img src="../../../assets/cartImg1.png"></v-img>
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
                        <v-img src="../../../assets/prod1.jpg"></v-img>
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
</template>

<script>
export default {
    name: "FavouriteNavigationDrawer",
    props:{
        FavouriteNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            FavouriteNavigationDrawerPropClone: this.FavouriteNavigationDrawerProp
        }
    },
    methods:{
        localToggleCartDrawer(){
            this.FavouriteNavigationDrawerPropClone = !this.FavouriteNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleCartDrawer(){
            if((this.FavouriteNavigationDrawerProp == true) && (this.FavouriteNavigationDrawerPropClone == false)){
                this.$emit('toggleFavouriteDrawerProp')
            }
        }
    },
    watch:{
        FavouriteNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.FavouriteNavigationDrawerPropClone = newVal
            }
        },
    }
}   
</script>

<style>
.favourite-drawer .remove-after-pseudo-element::after{
    display: none;
}
</style>