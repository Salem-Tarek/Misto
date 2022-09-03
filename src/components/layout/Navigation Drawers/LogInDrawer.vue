<template>
    <!-- LogIn Navigation Drawer -->
    <v-navigation-drawer
    class="logIn-drawer"
    v-model="LogInNavigationDrawerPropClone"
    app
    right
    temporary
    width="330"
    @input="emitToggleLogInDrawer()"
    >
        <v-list nav dense class="d-flex flex-column pa-0" min-height="100%">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="font-weight-bold text-uppercase">LogIn</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="localToggleLogInDrawer">mdi-close</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item :ripple="false" class="mb-0 px-1">
                <v-list-item-title class="body-2 grey--text text--darken-2 text-center">If you have an account with us, please log in.</v-list-item-title>
            </v-list-item>
            <v-list-item class="justify-center">
                <form>
                    <label class="font-weight-bold subtitle-1">Email</label>
                    <v-text-field
                    v-model="email"
                    placeholder="Email"
                    required
                    solo
                    class="mx-auto"
                    ></v-text-field>
                    <div class="forPass d-flex justify-space-between align-center">
                        <label class="font-weight-bold subtitle-1">password</label>
                        <span class="caption grey--text font-weight-medium">Lost Your Password ?</span>
                    </div>
                    <v-text-field
                    v-model="password"
                    placeholder="Password"
                    type="password"
                    required
                    solo
                    class="mx-auto"
                    ></v-text-field>
                    <v-btn dark class="text-uppercase mb-3 mr-4 rounded-0" block type="submit">LogIn</v-btn>
                </form>
            </v-list-item>
            <v-list-item class="justify-center login-or">
                <div class="dividers-parent d-flex align-center">
                    <div class="divider-line"></div>
                    <div class="px-2 white grey--text text--darken-2">or</div>
                    <div class="divider-line"></div>
                </div>
            </v-list-item>
            <v-list-item class="justify-center mt-3">
                <v-list class="d-flex justify-center">
                    <v-list-item>
                        <v-list-item-icon class="ma-0 mx-2">
                            <v-icon x-large>mdi-facebook</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon class="ma-0 mx-2">
                            <v-icon x-large>mdi-google</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon class="ma-0 mx-2">
                            <v-icon x-large style="transform: translateY(-4px);">mdi-apple</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-list-item>
            <!-- Don't Have Account Question Section -->
            <v-list-item class="remove-after-pseudo-element py-12 mt-auto rounded-0 px-3 flex-column-reverse">
                <v-list-item-title class="title">
                    <router-link to="/signUp">Create Your Account</router-link>  
                </v-list-item-title>   
                <v-list-item-subtitle class="mb-8 subtitle-1 font-weight-normal">New Customer ?</v-list-item-subtitle>   
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "LogInNavigationDrawer",
    props:{
        LogInNavigationDrawerProp: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            LogInNavigationDrawerPropClone: this.LogInNavigationDrawerProp,
            selectCategory: 0,
            categories: ["All Categories", "Electronics", "Men", "Women", "Jewelery"],
            email:"",
            password:"",
        }
    },
    methods:{
        localToggleLogInDrawer(){
            this.LogInNavigationDrawerPropClone = !this.LogInNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleLogInDrawer(){
            if((this.LogInNavigationDrawerProp == true) && (this.LogInNavigationDrawerPropClone == false)){
                this.$emit('toggleLogInDrawerProp')
            }
        },
    },
    watch:{
        LogInNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.LogInNavigationDrawerPropClone = newVal
            }
        },
    }
}
</script>

<style scoped>
.logIn-drawer .v-input {
    width: 280px;
}

.logIn-drawer .v-text-field input {
    text-align: left;
}

.logIn-drawer .v-list-item {
    flex: 0
}

.logIn-drawer .divider-line {
    height:1px;
    width:120px;
    background-color: grey;
}

.logIn-drawer .remove-after-pseudo-element::after{
    display: none;
}

.logIn-drawer .v-input input {
    text-align: center;
}

.logIn-drawer .v-list .v-list-item a {
    font-weight:400;
}

.logIn-drawer .v-list .v-list-item a:hover {
    color: #0BB17F
}
</style>