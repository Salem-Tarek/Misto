<template>
    <div class="addProductOverlay">
        <v-overlay :value="show" color="rgb(255, 255, 255)" opacity="0.9">
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mx-auto py-5"
            @submit.prevent="func($event)"
            >
                <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                        <v-text-field
                        v-model="title"
                        :rules="Rules.title"
                        placeholder="Product Title"
                        label="Product Title"
                        required
                        outlined
                        light
                        dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" class="py-0">
                        <v-text-field
                        v-model="price"
                        :rules="Rules.price"
                        placeholder="Product Price"
                        label="Product Price"
                        type="number"
                        hide-spin-buttons
                        required
                        outlined
                        light
                        dense
                        append-icon="mdi-currency-usd"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" class="py-0">
                        <v-textarea
                        v-model="description"
                        :rules="Rules.description"
                        placeholder="Product Description"
                        label="Product Description"
                        required
                        outlined
                        light
                        dense
                        height="100px"
                        no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="12" class="py-0">
                        <v-select
                        v-model="selectedCategory"
                        :items="categories"
                        :rules="Rules.category"
                        cache-items
                        outlined
                        label="Select Category"
                        light
                        dense
                        ></v-select>
                    </v-col>
                    <!-- <v-col cols="12" sm="12" class="py-0">
                        <v-file-input
                            label="Upload Product Image"
                            outlined
                            light
                            dense
                            append-icon="mdi-image"
                            prepend-icon=""
                            @change="test($event)"
                        ></v-file-input>
                    </v-col> -->
                </v-row>
                <div class="d-flex mt-4 justify-space-between">
                    <v-btn :disabled="!valid" type="submit"> {{ test ? 'Save Changes' : 'Add Product' }} </v-btn>
                    <v-btn @click="cancelEditing()">Cancel</v-btn>
                </div>
            </v-form>
        </v-overlay>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "AddProduct",
    data(){
        return {
            title: "",
            price: "" ,
            description: "",
            Rules: {
                title: [
                    v => !!v || "Title is Required",
                ], 
                price: [
                    v => !!v || "Price is Required",
                ],
                description: [
                    v => !!v || "Description is Required",
                ],
                category: [
                    v => v !== "Select Category" || "Select Category",
                ],
            },
            categories: ["Select Category", "electronics", "men's clothing", "women's clothing", "jewelery"],
            selectedCategory: "Select Category",

            valid: false
        }
    },
    props:{
        show:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        ...mapActions(['editedProduct', 'addProduct', 'updateProduct']),
        // addNewProduct(){
        //     if(this.$refs.form.validate()){
        //         let prodData = {
        //             title: this.title,
        //             description: this.description,
        //             price: this.price,
        //             category: this.selectedCategory,
        //             rating:{
        //                 rate: 0,
        //                 count: 0
        //             },
        //         }
        //         this.addProduct(prodData)
        //     }
        // },
        // saveChanges(){
        //     alert("Save Changes");
        //     this.$emit('hideOverlay');
        //     let myObj = {};
        //     this.editedProduct(myObj);
        //     localStorage.removeItem('mistoEditedProduct');
        // },
        func(e){
            if(this.$refs.form.validate()){
                if(e.submitter.textContent.trim() === "Add Product"){
                    let prodData = {
                        title: this.title,
                        description: this.description,
                        price: this.price,
                        category: this.selectedCategory,
                        rating:{
                            rate: 0,
                            count: 0
                        },
                    }
                    if(this.selectedCategory === "electronics"){
                        prodData.image = "https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU";
                    }else{
                        prodData.image = "https://i.picsum.photos/id/1059/7360/4912.jpg?hmac=vVWk1qyiXN_VgPhpNqFm3yl2HUPW6fHqYOjTHYO2bHQ";
                    }
                    this.addProduct(prodData)
                    this.$emit('hideOverlay');
                }else{
                    let prodData = {
                        title: this.title,
                        description: this.description,
                        price: this.price,
                        category: this.selectedCategory,
                        image: JSON.parse(localStorage.getItem('mistoEditedProduct')).image,
                        rating:{
                            rate: 0,
                            count: 0
                        },
                    }
                    prodData.id = JSON.parse(localStorage.getItem('mistoEditedProduct')).id;
                    this.updateProduct(prodData)
                    this.$emit('hideOverlay');
                    let myObj = {};
                    this.editedProduct(myObj);
                    localStorage.removeItem('mistoEditedProduct');
                }
            }else{
                alert("Please, Fill all Product Data")   
            }
        },
        cancelEditing(){
            this.$emit('hideOverlay');
            let myObj = {};
            this.editedProduct(myObj);
            localStorage.removeItem('mistoEditedProduct');
        },
       
    },
    computed:{
        ...mapGetters(['editedProductGetter']),
         test(){ // Check This
            if(Object.keys(this.editedProductGetter).length){
                return true
            }else{
                return false
            }
        }
        
    },
    watch:{
        editedProductGetter(newVal){ // Check it Again
            let myProd = JSON.parse(localStorage.getItem('mistoEditedProduct'))
            if(newVal.id > 0){
                this.title = myProd.title;
                this.price = myProd.price;
                this.description = myProd.description;
                this.selectedCategory = myProd.category || "Select Category";
            }else{
                this.title = "";
                this.price = "";
                this.description = "";
                this.selectedCategory = "Select Category";
                localStorage.removeItem('mistoEditedProduct');
                this.$emit('hideOverlay')
            }
        },
    }
}
</script>

<style>

.addProductOverlay form {
    width:90%;
    max-width: 758px;
}

/* .addProductOverlay .v-input {
    
} */

.addProductOverlay .v-input__slot {
    cursor: pointer !important;
}

.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: rgba(0, 0, 0, 0.5) !important;
    color: #000 !important;
}

</style>