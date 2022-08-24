<template>
  <!-- Search Navigation Drawer -->
    <v-navigation-drawer
    class="search-drawer"
    v-model="SearchNavigationDrawerPropClone"
    app
    right
    temporary
    width="330"
    @input="emitToggleSearchDrawer()"
    >
        <v-list dense class="d-flex flex-column pa-0">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-bold text-uppercase">Search</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="localToggleSearchDrawer">mdi-close</v-icon>
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
                            <v-img src="../../../assets/cartImg1.png"></v-img>
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
                            <v-img src="../../../assets/prod1.jpg"></v-img>
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
                            <v-img src="../../../assets/cartImg1.png"></v-img>
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
                            <v-img src="../../../assets/prod1.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="align-self-start pt-2">
                            <v-list-item-title class="subtitle-1 grey--text">Women's tracksuit Q109</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">$159.90</v-list-item-subtitle>
                        </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "SearchNavigationDrawer",
    props:{
        SearchNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            SearchNavigationDrawerPropClone: this.SearchNavigationDrawerProp,
            search:"",
            selectCategory: 0,
            categories: ["All Categories", "Electronics", "Men", "Women", "Jewelery"],
        }
    },
    methods:{
        localToggleSearchDrawer(){
            this.SearchNavigationDrawerPropClone = !this.SearchNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleSearchDrawer(){
            if((this.SearchNavigationDrawerProp == true) && (this.SearchNavigationDrawerPropClone == false)){
                this.$emit('toggleSearchDrawerProp')
            }
        }
    },
    watch:{
        SearchNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.SearchNavigationDrawerPropClone = newVal
            }
        },
    }
}
</script>

<style>
.search-drawer .divider-line {
    height:1px;
    width:120px;
    background-color: grey;
    width:90%
}

.search-drawer .v-text-field input {
    text-align: left;
}

.search-drawer .remove-after-pseudo-element::after{
    display: none;
}

.search-drawer .v-list .v-list-item .v-text-field .v-input__control > .v-input__slot {
    box-shadow: none;
}
</style>