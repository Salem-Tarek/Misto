import axios from "axios"

const state = {
    allProducts: [],
    menProducts: [],
    womenProducts: [],
    electronicsProducts: [],
    jeweleryProducts: [],
    cartProducts: JSON.parse(localStorage.getItem('mistoCartProducts')) || [],
    favouriteProducts: JSON.parse(localStorage.getItem('mistoFavouriteProducts')) || [],
    SearchedProducts: [],
    totalCost: 0,
    shipping: 30,
    tax: 10,
    discount: 0
}

const getters = {
    allProducts : state => state.allProducts,
    menProducts: state => state.menProducts,
    womenProducts: state => state.womenProducts,
    electronicsProducts: state => state.electronicsProducts,
    jeweleryProducts: state => state.jeweleryProducts,
    cartProductsGetter: state => state.cartProducts,
    favouriteProductsGetter: state => state.favouriteProducts,
    SearchedProductsGetter: state => state.SearchedProducts,
    totalCostGetter: state => state.totalCost,
    shippingGetter: state => state.shipping,
    taxGetter: state => state.tax,
    discountGetter: state => state.discount,
}

const actions = {
    async getAllProducts ({ commit }){
        const response = await axios.get('https://fakestoreapi.com/products');
        commit('getAllProducts', response.data)
    },
    async getMenProducts ({ commit }){
        let response;
        response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`);
        commit('getMenProducts', response.data)
    },
    async getWomenProducts ({ commit }){
        const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`);
        commit('getWomenProducts', response.data)
    },
    async getFourWomenProducts ({ commit }){
        const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing?limit=4`);
        commit('getWomenProducts', response.data)
    },
    async getElectronicsProducts ({ commit }){
        const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`);
        commit('getElectronicsProducts', response.data)
    },
    async getJeweleryProducts ({ commit }){
        const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
        commit('getJeweleryProducts', response.data)
    },
    getCartProducts ({ commit }, cartProducts){
        commit('getCartProducts', cartProducts)
        localStorage.setItem('mistoCartProducts', JSON.stringify(cartProducts))
    },
    getFavouriteProducts ({ commit }, favouriteProducts){
        commit('getFavoutiteProducts', favouriteProducts)
        localStorage.setItem('mistoFavouriteProducts', JSON.stringify(favouriteProducts))
    },
    getSearchedProducts ({ commit }, SearchedProducts){
        commit('getSearchedProducts', SearchedProducts)
    },
    getTotalCost ({ commit }, cartProductsArray){
        commit('getTotalCost', cartProductsArray)
    },
}

const mutations = {
    getAllProducts: (state, allProducts) => state.allProducts = allProducts,
    getMenProducts: (state, menProducts) => state.menProducts = menProducts,
    getWomenProducts: (state, womenProducts) => state.womenProducts = womenProducts,
    getElectronicsProducts: (state, electronicsProducts) => state.electronicsProducts = electronicsProducts,
    getJeweleryProducts: (state, jeweleryProducts) => state.jeweleryProducts = jeweleryProducts,
    getCartProducts: (state, cartProducts) => state.cartProducts = cartProducts,
    getFavoutiteProducts: (state, favouriteProducts) => state.favouriteProducts = favouriteProducts,
    getSearchedProducts: (state, SearchedProducts) => state.SearchedProducts = SearchedProducts,
    getTotalCost: (state, cartProductsArray) => {
        state.totalCost = 0;
        for(let cartProduct of cartProductsArray){
            state.totalCost += cartProduct.quantity * cartProduct.price;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}