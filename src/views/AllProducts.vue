<template>
    <v-container>
        <div class="allProducts">
            <v-row>
                <template v-for="product in products">
                    <v-col cols="12" sm="6" md="4" lg="3" :key="product.id">
                        <router-link :to="'/product-page/' + product.id">
                                <v-card class="mx-auto d-flex flex-column" max-width="374" elevation="0" height="400px">
                                    <v-img
                                    height="250"
                                    :src="product.image"
                                    contain
                                    alt="Product Name"
                                    ></v-img>
                                    <div v-if="product.discount" class="pink white--text sale font-weight-medium d-flex justify-center align-center">
                                        - 50%
                                    </div>
                                    <v-card-title class="pt-2 pl-2 pb-0 grey--text body-2">{{ product.title }}</v-card-title>

                                    <v-card-text class="pa-0 d-flex justify-space-between align-center">
                                        <v-card-subtitle class="pl-2 black--text font-weight-bold">
                                            <span>${{ parseFloat(product.price).toFixed(2) }}</span> 
                                            <span v-if="product.discount" class="ml-1 grey--text text-decoration-line-through body-2 font-weight-black">$76.00</span>
                                        </v-card-subtitle>
                                    </v-card-text>
                                </v-card>
                        </router-link>
                        <div class="product-details mx-auto d-flex align-center my-2 justify-space-between">
                            <v-btn depressed @click.stop="editProduct(product)">
                                <v-icon left>mdi-pencil</v-icon>
                                <span>Edit</span>
                            </v-btn>
                            <v-btn depressed @click.stop="deleteProduct(product.id)">
                                <v-icon left>mdi-delete</v-icon>
                                <span>Delete</span>
                            </v-btn>
                        </div>
                    </v-col>
                </template>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "AllProducts",
    data(){
        return {
            products: []
        }
    },
    computed:{
        ...mapGetters(['allProducts', 'editedProductGetter'])
    },
    methods:{
        ...mapActions(['getAllProducts', 'editedProduct', 'deleteProduct']),
        editProduct(product){
            localStorage.setItem('mistoEditedProduct', JSON.stringify(product))
            let myProd = JSON.parse(localStorage.getItem('mistoEditedProduct'))
            this.editedProduct(myProd);
        },
        // deleteProductFunc(id){
        //     this.deleteProduct(id); // Don't Remove from Products
        // },
    },
    async mounted(){
        await this.getAllProducts();
        this.products = this.allProducts;
    },
    watch:{
        allProducts(newVal, oldVal){
            if(newVal !== oldVal){
                this.getAllProducts();
                this.products = this.allProducts;
            }
        }
    }
}
</script>

<style>
.sale {
    width:50px;
    height:30px;
    position:absolute;
    top:0;
    left:0;
}

.allProducts .v-card .v-image__image {
    transition: 0.4s
}

.allProducts .v-card:hover .v-image__image {
    transform: scale(1.1) !important;
}

.allProducts a{
    text-decoration: none
}

.allProducts .product-details {
    max-width: 380px;
}

.allProducts .product-details .v-list .v-list-item {
    max-width:fit-content;
}
</style>