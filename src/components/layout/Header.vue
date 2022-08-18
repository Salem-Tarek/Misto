<template>
    <header class="d-none d-md-block black white--text">
        <v-container class="py-0">
            <v-system-bar window dark>
                <v-list dense class="d-flex pa-0" color="transparent">
                    <v-list-item class="pa-0">
                        <v-list-item-icon class="mx-1 ml-0">
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
                                mdi-clock-time-five
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>All Week 24/7</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
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
            </v-system-bar>
        </v-container>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss">
header {
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
</style>