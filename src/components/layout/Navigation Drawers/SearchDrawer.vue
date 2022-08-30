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
                v-model="selectCategory"
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
                @keyup.enter="searchForProducts()"
                @click:append="searchForProducts()"
                ></v-text-field>
            </v-list-item>
        </v-list>
        <div class="divider-line mx-auto"></div>
        <v-list class="d-flex flex-column pa-0 mb-3" v-if="searchedProducts.length">
            <v-list-item class="remove-after-pseudo-element">
                <v-list-item-title class="font-weight-medium">Searched Products :</v-list-item-title>
            </v-list-item>
            <v-list-item :ripple="false" class="mb-0" v-for="product in searchedProducts" :key="product.id">
                <router-link :to="'/product-page/' + product.id" class="d-flex">
                        <v-list-item-avatar tile size="80">
                            <v-img :src="product.image"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="align-self-start pt-2">
                            <v-list-item-title class="body-2 grey--text">{{ product.title }}</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">${{ chackIfNumIsInt(product.price) ?  `${product.price}.00` : product.price}}</v-list-item-subtitle>
                        </v-list-item-content>
                </router-link>
            </v-list-item>
        </v-list>
        <h3 class="text-center headline my-4" v-if="!searchedProducts.length">
            No Searched Products
        </h3>
        <div class="divider-line mx-auto"></div>
        <h4 class="ma-2 ml-5 font-weight-medium">Need Some Inspiration ?</h4>
        <v-list class="d-flex flex-column pa-0 my-3">
            <template v-for="(product, index) in inspiredProducts">
                <v-list-item :ripple="false" class="mb-0" :key="product.id" v-if="index <= 3">
                    <router-link :to="'/product-page/' + product.id" class="d-flex">
                            <v-list-item-avatar tile size="80">
                                <v-img :src="product.image"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content class="align-self-start pt-2">
                                <v-list-item-title class="subtitle-1 grey--text">{{ product.title }}</v-list-item-title>
                                <v-list-item-subtitle class="subtitle-1 font-weight-bold black--text">${{ chackIfNumIsInt(product.price) ?  `${product.price}.00` : product.price}}</v-list-item-subtitle>
                            </v-list-item-content>
                    </router-link>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
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
            search: "",
            searchedProducts: [],
            inspiredProducts: [],
            selectCategory: "All Categories",
            categories: ["All Categories", "Electronics", "Men", "Women", "Jewelery"],
        }
    },
    computed:{
        ...mapGetters(['allProducts', 'menProducts', 'womenProducts', 'electronicsProducts', 'jeweleryProducts'])
    },
    methods:{
        ...mapActions(['getAllProducts', 'getMenProducts', 'getWomenProducts', 'getElectronicsProducts', 'getJeweleryProducts']),
        localToggleSearchDrawer(){
            this.SearchNavigationDrawerPropClone = !this.SearchNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleSearchDrawer(){
            if((this.SearchNavigationDrawerProp == true) && (this.SearchNavigationDrawerPropClone == false)){
                this.$emit('toggleSearchDrawerProp')
            }
        },
        searchForProducts(){
            let chosenCategory = "";
            switch (this.selectCategory) {
                case 'Electronics':
                    chosenCategory = "electronics";
                    break;
                case 'Men':
                    chosenCategory = "men's clothing";
                    break;
                case 'Women':
                    chosenCategory = "women's clothing";
                    break;
                case 'Jewelery':
                    chosenCategory = "jewelery";
                    break;
                default:
            }

            if(chosenCategory !== ""){

                this.searchedProducts = this.allProducts.filter(prod => prod.title.toLowerCase().includes(this.search.toLowerCase()) && prod.category.toLowerCase() === chosenCategory.toLowerCase());
    
                this.inspiredProducts = this.allProducts.filter(filteredProd => filteredProd.category.toLowerCase() === chosenCategory.toLowerCase()).filter(prod => !prod.title.toLowerCase().includes(this.search.toLowerCase()))

            }else{

                this.searchedProducts = this.allProducts.filter(prod => prod.title.toLowerCase().includes(this.search.toLowerCase()) && prod.category.toLowerCase().includes(chosenCategory.toLowerCase()));

                this.inspiredProducts = this.allProducts.filter(prod => !prod.title.toLowerCase().includes(this.search.toLowerCase())).filter(filteredProd => filteredProd.category.toLowerCase().includes(chosenCategory.toLowerCase()))
            }
            // console.log(chosenCategory);
        },
        chackIfNumIsInt(num){
            if(num % 1 === 0){
                return true
            }else{
                return false
            }
        },
    },
    watch:{
        SearchNavigationDrawerProp(newVal, oldVal){
            // This Code To Add Some Products as Suggested(Inspired) Products
            if(newVal === true){
                this.inspiredProducts = this.allProducts;
            }
            
            if(newVal !== oldVal){
                this.SearchNavigationDrawerPropClone = newVal
            }
        },
    },
    created(){
        this.getAllProducts()
        this.searchedProducts = this.allProducts;
        // this.inspiredProducts = this.allProducts;
        // console.log(this.inspiredProducts);
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

.search-drawer .v-list-item__title {
    white-space: normal;
}

</style>