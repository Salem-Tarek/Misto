<template>
    <div class="filter my-5">
        <v-expansion-panels>
            <v-expansion-panel class="elevation-0">
                <v-expansion-panel-header hide-actions disable-icon-rotate class="grey--text">
                    <v-icon left>mdi-filter</v-icon>
                    <span class="text-uppercase">Filter</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" sm="3">
                            <p class="subtitle-1 font-weight-bold">Rate</p>
                            <v-select
                            v-model="selectedRate"
                            :items="rated"
                            cache-items
                            solo
                            item-text="text"
                            item-value="value"
                            return-object
                            :menu-props="{ top: true, offsetY: true }"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <p class="subtitle-1 font-weight-bold">Price</p>
                            <v-select
                            v-model="selectedPrice"
                            :items="price"
                            cache-items
                            solo
                            item-text="text"
                            item-value="value"
                            return-object
                            :menu-props="{ top: true, offsetY: true }"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="selectedFilters px-8 d-flex align-center" v-if="isFiltered">
            <p class="subtitle-2 font-weight-bold mb-0 mr-4">{{ filterdProductsNum }} {{ filterdProductsNum === 1 ? 'item' : 'items' }} Found</p>
            <v-btn depressed x-small class="mr-4 d-flex align-center" @click="selectedRate = rated[0];selectedPrice = price[0]">
                <v-icon x-small class="mr-1">mdi-close</v-icon>
                <span class="grey--text">Clear All</span>
            </v-btn>
            <v-btn depressed x-small class="mr-4 d-flex align-center" v-if="selectedRate.text !== 'All'" @click="selectedRate = rated[0]">
                <v-icon x-small class="mr-1">mdi-close</v-icon>
                <span class="grey--text">Rate: {{ selectedRate.text }}</span>
            </v-btn>
            <v-btn depressed x-small class="mr-4 d-flex align-center" v-if="selectedPrice.text !== 'All'" @click="selectedPrice = price[0]">
                <v-icon x-small class="mr-1">mdi-close</v-icon>
                <span class="grey--text">Price: {{ selectedPrice.text }}</span>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsFilter",
    data(){
        return {
            rated:[
                {text: "All", value: 0},
                {text: "* (1 Star)", value: 1},
                {text: "** (2 Stars)", value: 2},
                {text: "*** (3 Stars)", value: 3},
                {text: "**** (4 Stars)", value: 4},
                {text: "***** (5 Stars)", value: 5},
            ],
            selectedRate: {text: "All", value: 0},
            price:[
                {text: "All", value: {min: 0}},
                {text: "$ < 10", value: {min: 1 , max: 10}},
                {text: "$ 10 - 50", value: {min: 10 , max: 50}},
                {text: "$ 50 - 100", value: {min: 50 , max: 100}},
                {text: "$ 100 - 500", value: {min: 100 , max: 500}},
                {text: "$ > 500", value: {min: 500}},
            ],
            selectedPrice: {text: "All", value: {min: 0}},
        }
    },
    props:{
        filterdProductsNum: {
            type: Number,
        }
    },
    computed:{
        isFiltered(){
            if(this.selectedRate.text == "All" && this.selectedPrice.text == "All"){
                return false
            }else{
                return true
            }
        },

    },
    watch:{
        selectedRate(newVal, oldVal){
            if(newVal.text != oldVal.text){
                this.$emit('filterChanged', { rateFilter: this.selectedRate.value, priceFilter: this.selectedPrice.value })
            }
        },
        selectedPrice(newVal, oldVal){
            if(newVal.text != oldVal.text){
                this.$emit('filterChanged', { rateFilter: this.selectedRate.value, priceFilter: this.selectedPrice.value })
            }
        },
    }
}
</script>

<style>
.v-expansion-panel::before {
    box-shadow: none;
}

.v-expansion-panel-header {
    width: fit-content;
}

</style>