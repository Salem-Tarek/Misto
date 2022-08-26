<template>
    <div class="contact">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="py-5"
                    >
                        <v-row>
                            <v-col cols="12" sm="6" class="py-0">
                                <v-text-field
                                v-model="firstName"
                                :rules="firstNameRules"
                                label="First Name"
                                placeholder="First Name"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" class="py-0">
                                <v-text-field
                                v-model="lastName"
                                :rules="lastNameRules"
                                label="Last Name"
                                placeholder="Last Name"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                placeholder="E-mail"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pt-0 mb-3">
                                <v-textarea
                                v-model="message"
                                name="input-7-4"
                                label="Write your Message Here"
                                placeholder="Write your Message Here"
                                :rules="messageRules"
                                required
                                ></v-textarea>
                            </v-col>
                        </v-row>

                        <v-btn
                        :disabled="!valid"
                        dark
                        class="mr-4"
                        >
                        Send Message
                        </v-btn>
                    </v-form>
                </v-col>
                <v-col cols="12" md="6">
                    <p class="title">We'd Love To Hear From You</p>
                    <p class="my-3 pl-2 body-1">Whether You Have a question about our Products, Price or anything else. Our Team is ready to answer all your questions.</p>
                    <p class="title mb-2">Follow Us</p>
                    <v-list dense class="d-flex social-icons" color="transparent">
                        <v-list-item class="px-1">
                            <a href="https://www.facebook.com/profile.php?id=100004563854725" target="_blank">
                                <v-list-item-icon class="">
                                    <v-icon large>
                                        mdi-facebook
                                    </v-icon>
                                </v-list-item-icon>
                            </a>
                        </v-list-item>
                        <v-list-item class="px-1">
                            <a href="https://mobile.twitter.com/SalemTarek16" target="_blank">
                                <v-list-item-icon class="">
                                    <v-icon large>
                                        mdi-twitter
                                    </v-icon>
                                </v-list-item-icon>
                            </a>
                        </v-list-item>
                        <v-list-item class="px-1">
                            <a href="https://www.instagram.com/salemtarek97/" target="_blank">
                                <v-list-item-icon class="">
                                    <v-icon large>
                                        mdi-instagram
                                    </v-icon>
                                </v-list-item-icon>
                            </a>
                        </v-list-item>
                        <v-list-item class="px-1">
                            <a href="https://www.pinterest.com/" target="_blank">
                                <v-list-item-icon class="">
                                    <v-icon large>
                                        mdi-pinterest
                                    </v-icon>
                                </v-list-item-icon>
                            </a>
                        </v-list-item>
                    </v-list>
                    <v-list class="contact-info d-flex flex-column pa-0" color="transparent">
                        <v-list-item class="pa-0">
                            <a href="tel:0201093967431" class="d-flex">
                                <v-list-item-icon class="mx-1">
                                    <v-icon right class="mr-0">
                                        mdi-phone
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>+38 (050)1234567</v-list-item-title>
                                </v-list-item-content>
                            </a>
                        </v-list-item>
                        <v-list-item class="pa-0">
                            <a href="mailto:shaman.magic.music@gmail.com" class="d-flex">
                                <v-list-item-icon class="mx-1">
                                    <v-icon right class="mr-0">
                                        mdi-email
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>shaman.magic.music@gmail.com</v-list-item-title>
                                </v-list-item-content>
                            </a>
                        </v-list-item>
                        <v-list-item class="pa-0">
                            <a href="https://wa.me/0201093967431" class="d-flex">
                                <v-list-item-icon class="mx-1">
                                    <v-icon right class="mr-0">
                                        mdi-whatsapp
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>0201093967431</v-list-item-title>
                                </v-list-item-content>
                            </a>
                        </v-list-item>
                        <v-list-item class="pa-0">
                            <v-list-item-icon class="mx-1">
                                <v-icon right class="mr-0">
                                    mdi-clock-time-five
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>All Week 24/7</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12">
                    <h2 class="text-center mb-3 text-uppercase">Our Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5371079177603!2d31.237845015399476!3d30.05013512525809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840957a6f506f%3A0x926d1851cea7a363!2sTalaat%20Harb%20Mall!5e0!3m2!1sen!2seg!4v1661520826835!5m2!1sen!2seg" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ContactPage",
    data(){
        return {
            valid: true,
            firstName: '',
            lastName: '',
            message: '',
            firstNameRules: [
                v => !!v || 'First Name is required',
            ],
            lastNameRules: [
                v => !!v || 'Last Name is required',
            ],
            messageRules: [
                v => !!v || 'Message is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }
    },

}
</script>

<style lang="scss">
.contact {
    .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
        background-color: rgba(0, 0, 0, 0.3) !important;
        color: rgba(0, 0, 0) !important;
    }
    .social-icons {
        .v-list-item {
            max-width: fit-content;
            a {
                text-decoration: none;
                .v-icon {
                    transition: 0.4s;
                    color:#333 !important;
                    &:hover {
                        transform: translateY(-10px);
                    }
                }
            }
        }
        
    }
    .contact-info {
        a {
            color: #121212;
            transition: 0.5s;
            &:hover {
                color: #121212;
                transform: translateX(5px);
            }
        }
    }
}
</style>