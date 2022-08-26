<template>
  <div class="products">
    <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 8" :key="i">
            <router-link to="/product-page">
                    <v-card class="mx-auto" max-width="374" elevation="0">
                        <v-img
                        height="250"
                        src="../../assets/prod1.jpg"
                        contain
                        style="background-color: #f0f0f0"
                        alt="Product Name"
                        ></v-img>
                        <div v-if="i % 3 === 0" class="pink white--text sale font-weight-medium d-flex justify-center align-center">
                            - 50%
                        </div>
                        <v-card-title class="pt-2 pl-2 pb-0 grey--text body-1">Women's tracksuit Q109</v-card-title>

                        <v-card-text class="pa-0 d-flex justify-space-between align-center">
                            <v-card-subtitle class="pl-2 black--text font-weight-bold">
                                <span>$38.00</span> 
                                <span v-if="i % 3 === 0" class="ml-1 grey--text text-decoration-line-through body-2 font-weight-black">$76.00</span>
                            </v-card-subtitle>
                            <div class="rating d-flex">
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ms-2">
                                    4.5 (413)
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
            </router-link>
            <div class="product-details">
                <!-- <div class="color mb-2">
                    <v-list dense class="pt-0">
                        <v-list-item-group
                            class="d-flex"
                        >
                            <v-list-item
                            v-for="(color, i) in colors"
                            :key="i"
                            :class="color"
                            class="mx-1"
                            ></v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div>
                <div class="size mb-2">
                    <v-list dense class="pt-0">
                        <v-list-item-group
                            class="d-flex"
                        >
                            <v-list-item
                            v-for="(size, i) in sizes"
                            :key="i"
                            class="mx-1 px-2"
                            style="border:1px solid #000"
                            >{{ size }}</v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div> -->
                <div class="price_addToCart_Fav d-flex align-center my-2 justify-space-between">
                    <v-btn dark tile class="mr-3">Add To Cart</v-btn>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                            v-bind="attrs"
                            v-on="on"
                            :class="{'red--text': isFav}"
                            @click="isFav = !isFav"
                            v-text="isFav ? 'mdi-heart' : 'mdi-heart-outline'" 
                            ></v-icon>
                        </template>
                        <span>{{ !isFav ? 'Add To' : 'Remove From' }} Favourite List</span>
                    </v-tooltip>
                </div>
            </div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "Products",
    data(){
        return {
            colors:['black', 'white', 'blue', 'grey'],
            sizes:['XS', 'S', 'M', 'L'],
            isFav: false
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

a{
    text-decoration: none
}

.product-details .v-list .v-list-item {
    max-width:fit-content;
}
</style>