<template>
  <main>
    <v-container class="pt-0">
        <div class="productPage">
            <div class="breadcrumb_share d-flex justify-space-between align-center">
                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <v-btn depressed class="grey--text text--darken-2">
                    <v-icon left>mdi-share-variant</v-icon>
                    <span>Share</span>
                </v-btn>
            </div>
            <div class="prodInfo">
                <h1 class="text-center">Women's tracksuit Q109</h1>
                <div class="d-flex justify-space-between align-center">
                    <div class="rating d-flex align-center">
                        <v-rating
                        :value="4"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="12"
                        ></v-rating>
                        <div class="grey--text caption ms-2">
                            2 Reviews
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row">
                        <span class="grey--text caption mr-3">SKU: <span class="black--text font-weight-bold">777</span></span>
                        <span class="grey--text caption">Availability: <span class="black--text font-weight-bold">In Stock</span></span>
                    </div>
                </div>
            </div>
            <v-row>
                <v-col cols="12" md="6">
                    <v-img max-height="470px" contain lazy-src="../assets/prod1.jpg"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="color mb-2">
                        <p class="subtitle-2 mb-2"><span class="text-uppercase grey--text">Color:</span> <span class="black--text font-weight-bold">{{ colors[selectedColor] }}</span></p>
                        <v-list dense class="pt-0">
                            <v-list-item-group
                                v-model="selectedColor"
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
                        <p class="subtitle-2 mb-2"><span class="text-uppercase grey--text">Size:</span> <span class="black--text font-weight-bold">{{ sizes[selectedSize] }}</span></p>
                        <v-list dense class="pt-0">
                            <v-list-item-group
                                v-model="selectedSize"
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
                    </div>
                    <p><v-icon left>mdi-hanger</v-icon><span>Size Guide</span></p>
                    <v-divider></v-divider>
                    <div class="price_addToCart_Fav d-flex align-center my-6">
                        <h2 class="font-weight-bold mr-3">$379.99</h2>
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
                    <v-divider></v-divider>
                    <v-row class="my-1 mb-3">
                        <v-col cols="12" sm="4">
                            <div class="feat d-flex">
                                <v-icon class="mr-2">mdi-car-estate</v-icon>
                                <div class="content mt-1">
                                    <p class="caption black--text font-weight-medium mb-1">Shipping &amp; Delivery</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="feat d-flex">
                                <v-icon class="mr-2">mdi-rotate-3d-variant</v-icon>
                                <div class="content mt-1">
                                    <p class="caption black--text font-weight-medium mb-1">Returns &amp; Exchanges</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="feat d-flex">
                                <v-icon class="mr-2">mdi-email</v-icon>
                                <div class="content mt-1">
                                    <p class="caption black--text font-weight-medium mb-1">Ask a question</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="pay-methods">
                        <div class="d-flex align-center">
                            <p class="text-caption text-sm-body-2 text-uppercase mb-0 mr-3">guaranteed safe checkout</p>
                            <div class="divider-line"></div>
                        </div>
                        <v-list class="d-flex px-0 flex-wrap flex-sm-nowrap pb-0">
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/Stripe.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/AES256.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/paypal.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/visa.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/mastercard.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/discover.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../assets/pay-methods/colored/american-express.png"></v-img>
                            </v-list-item>
                        </v-list>
                    </div>
                </v-col>
            </v-row>
            <div class="related_products my-4">
                <h2 class="my-5">Related Products</h2>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 4" :key="i">
                        <router-link to="/product-page">
                                <v-card class="mx-auto" max-width="374" elevation="0">
                                    <v-img
                                    height="250"
                                    src="../assets/prod1.jpg"
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
                                        </div>
                                    </v-card-text>
                                </v-card>
                        </router-link>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
  </main>
</template>

<script>
export default {
    name: "ProductPage",
    data(){
        return {
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Women',
                    disabled: false,
                    href: '/women',
                },
                {
                    text: "Women's tracksuit Q109",
                    disabled: true,
                    href: '/product-page',
                },
            ],
            colors:['black', 'white', 'blue', 'grey'],
            selectedColor:1,

            sizes:['XS', 'S', 'M', 'L'],
            selectedSize:1,

            isFav: false
        }
    }
}
</script>

<style>
.v-breadcrumbs .v-breadcrumbs__item:not(.v-breadcrumbs__item--disabled){
    color:black
}

.v-breadcrumbs li.v-breadcrumbs__divider {
    padding:0 4px !important;
}

.productPage .v-list-item {
    max-width: fit-content;
}

.v-list-item.v-item--active {
    background-color:rgba(0, 0, 0, 0.3)
}
.divider-line {
    width:50%
}
</style>