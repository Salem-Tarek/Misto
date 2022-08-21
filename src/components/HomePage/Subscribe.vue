<template>
  <div class="subscribe my-4 py-5">
    <div class="subscribe-content">
        <p class="grey--text subtitle-1 mb-1 text-uppercase text-center">Spcial Offers</p>
        <p class="black--text text-uppercase text-center display-1 mb-1">
            Subscribe And <span class="d-block d-sm-inline pink--text">Get 10% Off</span></p>
    </div>
    <v-form>
        <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="12"
                class="pb-0"
                >
                    <v-text-field outlined color="black" class="mx-auto" placeholder="Enter your email"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" class="pt-0 text-center">
                    <v-btn type="submit" x-large tile width="350px" max-width="100%" dark class="text-uppercase">Subscribe</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
    name: "Subscribe",
}
</script>

<style scoped>
.subscribe {
    background-image: linear-gradient(white, #cdcdcd);
}
.v-text-field{
    width: 300px;
    max-width: 240px;
}
</style>