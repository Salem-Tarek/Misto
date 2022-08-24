<template>
    <div class="footer mt-3">
        <div class="upper-footer black white--text">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="4" class="py-2">
                        <p class="mb-0 text-uppercase">Be in Touch With Us:</p>
                    </v-col>
                    <v-col cols="12" md="4" class="py-2">
                        <v-form>
                            <v-row>
                                <v-col cols="12" sm="12" class="d-flex">
                                    <v-text-field filled hide-details height="32px" dense class="rounded-0 grey mr-2" placeholder="Enter your email"></v-text-field>
                                    <v-btn type="submit" tile height="32px" class="text-uppercase black white--text">Join Us</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                    <v-col cols="12" md="4" class="py-2 d-block d-md-flex">
                        <v-spacer></v-spacer>
                        <v-list dense class="d-flex pa-0 social-icons" color="transparent">
                            <v-list-item class="px-1">
                                <a href="https://www.facebook.com/profile.php?id=100004563854725" target="_blank">
                                    <v-list-item-icon class="mr-0">
                                        <v-icon>
                                            mdi-facebook
                                        </v-icon>
                                    </v-list-item-icon>
                                </a>
                            </v-list-item>
                            <v-list-item class="px-1">
                                <a href="https://mobile.twitter.com/SalemTarek16" target="_blank">
                                    <v-list-item-icon class="mr-0">
                                        <v-icon>
                                            mdi-twitter
                                        </v-icon>
                                    </v-list-item-icon>
                                </a>
                            </v-list-item>
                            <v-list-item class="px-1">
                                <a href="https://www.instagram.com/salemtarek97/" target="_blank">
                                    <v-list-item-icon class="mr-0">
                                        <v-icon>
                                            mdi-instagram
                                        </v-icon>
                                    </v-list-item-icon>
                                </a>
                            </v-list-item>
                            <v-list-item class="px-1">
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <v-list-item-icon class="mr-0">
                                        <v-icon>
                                            mdi-pinterest
                                        </v-icon>
                                    </v-list-item-icon>
                                </a>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="middle-footer">
            <v-container>
                <v-row>
                    <v-col cols="12" md="3" sm="6">
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-subtitle class="grey--text text--darken-4 text-uppercase font-weight-bold" style="letter-spacing: 1px">Categories</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/electronics">Electronics</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/men">Men</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/women">Women</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/jewelery">Jewelery</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-subtitle class="grey--text text--darken-4 text-uppercase font-weight-bold" style="letter-spacing: 1px">Information</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/about">AboutUs</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/contact">Contact Us</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/blog">Blog</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">
                                    <router-link style="color:rgba(0, 0, 0, 0.6)" to="/faqs">FAQs</router-link>
                                </v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-subtitle class="grey--text text--darken-4 text-uppercase font-weight-bold" style="letter-spacing: 1px">Useful Links</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">Terms &amp; Conditions</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">Returns &amp; Exchanges</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">Shipping &amp; Delivery</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-subtitle style="letter-spacing: 1px">Privacy Policy</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-subtitle class="grey--text text--darken-4 text-uppercase font-weight-bold" style="letter-spacing: 1px">Contact Us</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <v-list-item-icon class="mx-1">
                                    <v-icon small right class="mr-0">
                                        mdi-map-marker
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Ukraine, Kyiv, Khreshchatyk1</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <v-list-item-icon class="mx-1">
                                    <v-icon small right class="mr-0">
                                        mdi-phone
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>+38 (050)1234567</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <v-list-item-icon class="mx-1">
                                    <v-icon small right class="mr-0">
                                        mdi-clock-time-five
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>All Week 24/7</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <v-list-item-icon class="mx-1">
                                    <v-icon small right class="mr-0">
                                        mdi-email
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>shaman.magic.music@gmail.com</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="lower-footer pt-3">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" lg="4" class="py-0">
                        <p class="mb-0 grey--text text--darken-1">Copyright &copy; 2022 all rights reserved</p>
                    </v-col>
                    <v-col cols="12" lg="4" class="px-0 py-0">
                        <v-list class="d-flex px-0 flex-wrap flex-sm-nowrap">
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/Stripe.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/AES256.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/paypal.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/visa.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/mastercard.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/discover.png"></v-img>
                            </v-list-item>
                            <v-list-item class="pr-0">
                                <v-img contain width="43px" height="16px" src="../../assets/pay-methods/american-express.png"></v-img>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="12" lg="4" class="d-block d-lg-flex py-0">
                        <v-spacer></v-spacer>
                        <p class="mb-0 grey--text text--darken-1">Designed by <span class="font-weight-bold"><a target="_blank" href="https://www.behance.net/shamandesign">Oleh Chabanov</a></span></p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>    
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss">
.footer {
    .upper-footer {
        .v-text-field{
            max-width: 300px;
            .v-input__control .v-input__slot {
                min-height: auto !important;
                display: flex !important;
                align-items: center !important;
                input {
                    text-align: left;
                }
            }
        }
        button[type='submit']{
            border: 1px solid #FFF !important;
        }
        .social-icons {
            a {
                text-decoration: none;
                .v-icon {
                    transition: 0.4s;
                    color:#fff !important;
                    &:hover {
                        color: gray !important;
                    }
                }
            }
        }
    }
    .lower-footer {
        .v-list-item {
            max-width: fit-content;
        }
        a {
            color: black
        }   
    }
}

</style>