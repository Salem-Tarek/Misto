<template>
    <div class="offers_collections my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-card
                    class="mx-auto"
                    width="100%"
                    elevation="0"
                >
                    <v-img src="../../assets/newCollection.jpg" class="fill-height"></v-img>
                    <v-card-text class="content pa-2 rounded-2 mt-4 white black--text" style="width: fit-content">
                        <p class="grey--text caption mb-1 text-uppercase text-center">New Season</p>
                        <p class="black--text text-uppercase font-weight-bold text-center body-1 mb-1">Lookbook Collection</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card
                    class="mx-auto"
                    width="100%"
                    elevation="0"
                >
                    <v-img src="../../assets/offer50.jpg" class="fill-height"></v-img>
                    <v-card-text class="content pa-2 rounded-2 mt-4 white black--text" style="width: fit-content">
                        <p class="grey--text caption mb-1 text-uppercase text-center">Sale</p>
                        <p class="black--text text-uppercase font-weight-bold text-center body-1 mb-1">Get Up To <span class="pink--text">50% Off</span></p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>    
</template>

<script>
export default {
    name: "OffersAndCollections",
}
</script>

<style>
.offers_collections .v-card div.content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>