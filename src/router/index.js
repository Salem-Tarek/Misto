import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllProducts from "../views/AllProducts.vue";
import ProductPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import WomenPage from "../views/WomenPage.vue";
import MenPage from "../views/MenPage.vue";
import JeweleryPage from "../views/JeweleryPage.vue";
import ElectronicsPage from "../views/ElectronicsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/all-products",
    name: "AllProducts",
    component: AllProducts,
    beforeEnter: (to, from, next) => {
      let isLoged = JSON.parse(localStorage.getItem('mistoUser')) || {};
      if(Object.keys(isLoged).length){
        next()
      }else{
        next(false)
        router.push('/')
        alert("Please Login First")
      }
    },
  },
  {
    path: "/women",
    name: "WomenPage",
    component: WomenPage,
  },
  {
    path: "/men",
    name: "MenPage",
    component: MenPage,
  },
  {
    path: "/electronics",
    name: "ElectronicsPage",
    component: ElectronicsPage,
  },
  {
    path: "/jewelery",
    name: "JeweleryPage",
    component: JeweleryPage,
  },
  {
    path: "/product-page/:id",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/cart-page",
    name: "CartPage",
    component: CartPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
