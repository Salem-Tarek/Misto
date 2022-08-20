<template>
  <div class="products">
    <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 8" :key="i">
            <v-card class="mx-auto" max-width="374" elevation="0">
                <v-img
                height="250"
                src="../../assets/prod1.jpg"
                contain
                style="background-color: #f0f0f0"
                alt="Product Name"
                ></v-img>

                <v-card-title class="pt-2 pl-2 pb-0 grey--text body-1">Women's tracksuit Q109</v-card-title>

                <v-card-text class="pa-0 d-flex justify-space-between align-center">
                    <v-card-subtitle class="pl-2 black--text font-weight-bold">$ 38.00</v-card-subtitle>
                    <div class="rating d-flex">
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                            4.5 (413)
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "Products",
}
</script>

<style>

</style>