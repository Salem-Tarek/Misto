<template>
  <div class="blogs my-2">
    <div class="blog-header d-flex justify-space-between align-center">
        <p class="text-uppercase text-sm-h4 text-subtitle-1 mb-4">Latest From Blog</p>
        <v-btn to="/blogs" class="text-uppercase text-sm-button text-caption mt-6 mb-12" elevation="0" disabled>See More</v-btn>
    </div>
    <v-row justify="center">
        <v-col cols="12" sm="6" md="4" class="py-0" v-for="i in 3" :key="i">
            <v-card elevation="0">
                <v-img contain src="../../assets/blog1.jpg"></v-img>
                <div class="card-content white">
                    <v-card-title class="pb-2 text-uppercase subtitle-1">The Easiest Way to Break</v-card-title>
                    <v-card-text class="grey--text text--darken-1">
                        But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
                    </v-card-text>
                    <div class="date_showMore d-flex justify-space-between align-center">
                        <p class="subtitle-2 mb-0 pl-4 grey--text">April 6, 2022</p>
                        <v-btn depressed class="text-uppercase">Read More</v-btn>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "LatestBlogs",
}
</script>

<style>
.card-content {
    width: 260px;
    margin-left: 50%;
    transform: translate(-50%, -50%);
}

.date_showMore {
    transition: 0.5s;
    transform: translateY(-100%);
    opacity: 0;
}

.v-card:hover .date_showMore {
    transform: translateY(0);
    opacity: 1;
}

</style>