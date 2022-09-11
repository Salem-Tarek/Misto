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
        <v-snackbar app class="snackbar-absolute-z-index" top :color="isLogIn ? 'green' : 'red' " v-model="showAlert" :timeout="2000">
            {{ alertText }}
            <template v-slot:action="{ attrs }">
                <v-btn
                text
                v-bind="attrs"
                @click="showAlert = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-list nav dense class="d-flex flex-column pa-0" min-height="100%" v-if="!isLogIn">
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
                <v-form ref="form" v-model="valid" lazy-validation>
                    <label class="font-weight-bold subtitle-1">Email</label>
                    <v-text-field
                    v-model="email"
                    placeholder="Email"
                    required
                    :rules="logInRules.email"
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
                    required
                    :rules="logInRules.password"
                    type="password"
                    solo
                    class="mx-auto"
                    ></v-text-field>
                    <v-btn dark class="text-uppercase my-3 mr-4 rounded-0" :disabled="!valid" block @click="logIn()">LogIn</v-btn>
                </v-form>
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
            <v-list-item disabled class="remove-after-pseudo-element py-12 mt-auto rounded-0 px-3 flex-column-reverse">
                <v-list-item-title class="title">
                    <router-link to="/signUp">Create Your Account</router-link>  
                </v-list-item-title>   
                <v-list-item-subtitle class="mb-8 subtitle-1 font-weight-normal">New Customer ?</v-list-item-subtitle>   
            </v-list-item>
        </v-list>
        <v-list v-else class="pa-0">
            <v-list-item class="remove-after-pseudo-element mb-0 rounded-0 black white--text px-3 d-flex justify-space-between">
                <h3 class="text-uppercase">User Profile</h3>
                <v-list-item-action>
                    <v-icon color="white" @click="logOut()">mdi-logout</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item class="my-2 justify-center">
                <div class="dividerLine"></div>
                <h2 class="mx-3 display-1">Hi, <span class="myColor"> {{ loggedUserData.username }} </span></h2>
                <div class="dividerLine"></div>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="d-flex align-center justify-center">
                        <v-icon large left>mdi-monitor-dashboard</v-icon>
                        <h2>Dashboard</h2>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="justify-center">
                <v-list-item-action class="ma-0">
                    <v-btn @click="$emit('addProduct')">
                        <v-icon left>mdi-plus-thick</v-icon>
                        <span>Add New Product</span>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-list-item class="justify-center">
                <v-list-item-action class="ma-0">
                    <v-btn to="/all-products">
                        <v-icon left>mdi-view-dashboard-edit</v-icon>
                        <span>All Products</span>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-list-item class="justify-center">
                <v-list-item-action class="ma-0">
                    <v-btn @click="resetProducts">
                        <v-icon left>mdi-restore</v-icon>
                        <span>Reset Products</span>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
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
            logInRules:{
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                password:[
                    value => !!value || 'Password is Required'
                ]
            },
            valid: false,
            users: [],
            isLogIn: false,
            alertText: '',
            showAlert: false,
            loggedUserData: {},

            overlay: true,
            zIndex: 0
        }
    },
    computed:{
        ...mapGetters(['usersGetter'])
    },
    methods:{
        ...mapActions(['getUsers']),
        localToggleLogInDrawer(){
            this.LogInNavigationDrawerPropClone = !this.LogInNavigationDrawerPropClone
            // this.$emit('toggleDrawerProp')
        },
        emitToggleLogInDrawer(){
            if((this.LogInNavigationDrawerProp == true) && (this.LogInNavigationDrawerPropClone == false)){
                this.$emit('toggleLogInDrawerProp')
            }
        },
        logIn(){
            if(this.$refs.form.validate()){
                this.showAlert = true;
                for(let user of this.users){
                    if(user.email === this.email && user.password === this.password){
                        this.isLogIn = true;
                        this.alertText = `Logged In Successfully`
                        this.loggedUserData = user;
                        localStorage.setItem('mistoUser', JSON.stringify(this.loggedUserData));
                        break;
                    }else{
                        this.isLogIn = false;
                        this.alertText = `Email or Password incorrect`
                    }
                }
            }
        },
        logOut(){
            this.showAlert = true;
            this.isLogIn = false;
            this.alertText = `Logged Out Successfully`
            this.loggedUserData = {};
            localStorage.setItem('mistoUser', JSON.stringify(this.loggedUserData));
            if(this.$route.path === '/dashboard'){
                this.$router.push('/');
            }
        },
        resetProducts(){
            localStorage.removeItem('mistoAllProducts')
        }
    },
    watch:{
        LogInNavigationDrawerProp(newVal, oldVal){
            if(newVal !== oldVal){
                this.LogInNavigationDrawerPropClone = newVal
            }
        },
    },
    async mounted(){
        await this.getUsers();
        this.users = this.usersGetter;
        this.loggedUserData = JSON.parse(localStorage.getItem('mistoUser')) || {};
        if(this.loggedUserData.id){
            this.isLogIn = true;
        }
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

.logIn-drawer .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: rgba(0, 0, 0, 0.3) !important;
    color: rgba(0, 0, 0) !important;
}

.logIn-drawer .v-list .v-list-item a {
    font-weight:400;
}

.logIn-drawer .v-list .v-list-item a:hover {
    color: #0BB17F !important;
}

.logIn-drawer .dividerLine {
    width:50px;
    height:2px;
    background-color: #333;
}

.logIn-drawer .myColor {
    color: #0BB17F
}

</style>