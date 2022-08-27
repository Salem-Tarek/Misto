<template>
    <div class="categories">
        <v-row>
            <v-col cols="12" sm="6">
                <v-card
                    class="mx-auto"
                    width="100%"
                    height="425"
                >
                    <v-img src="../../assets/categories/electronics.jpg" class="fill-height"></v-img>
                    <v-btn to="/electronics" color="white black--text">Electronics</v-btn>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col cols="6" sm="6">
                                <v-card
                                    class="mx-auto"
                                    max-width="344"
                                    height="200"
                                >
                                    <v-img src="../../assets/categories/woman.jpg" class="fill-height"></v-img>
                                    <v-btn to="/women" color="white black--text">Women</v-btn>
                                </v-card>
                            </v-col>
                            <v-col cols="6" sm="6">
                                <v-card
                                    class="mx-auto"
                                    max-width="344"
                                    height="200"
                                >
                                    <v-img src="../../assets/categories/man.jpg" class="fill-height"></v-img>
                                    <v-btn to="/men" color="white black--text">Men</v-btn>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-card
                            class="mx-auto"
                            width="100%"
                            height="200"
                        >
                            <v-img src="../../assets/categories/jewelery.jpg" class="fill-height"></v-img>
                            <v-btn to="/jewelery" color="white black--text">jewelery</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Categories",
    data(){
        return {
            hover: true
        }
    }
}
</script>

<style>
.categories .v-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>