import axios from "axios"

const state = {
    allProducts: [],
    menProducts: [],
    womenProducts: [],
    electronicsProducts: [],
    jeweleryProducts: [],
    cartProducts: JSON.parse(localStorage.getItem('mistoCartProducts')) || [],
    favouriteProducts: JSON.parse(localStorage.getItem('mistoFavouriteProducts')) || [],
}

const getters = {
    allProducts : state => state.allProducts,
    menProducts: state => state.menProducts,
    womenProducts: state => state.womenProducts,
    electronicsProducts: state => state.electronicsProducts,
    jeweleryProducts: state => state.jeweleryProducts,
    cartProductsGetter: state => state.cartProducts,
    favouriteProductsGetter: state => state.favouriteProducts,
}

const actions = {
    async getAllProducts ({ commit }){
        const response = await axios.get('https://fakestoreapi.com/products');
        for(let product of response.data){
            product.fav = false
        }
        commit('getAllProducts', response.data)
        // console.log(response.data);
    },
    async getMenProducts ({ commit }, prodsLimit){
        const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing?limit=${prodsLimit}`);
        commit('getMenProducts', response.data)
    },
    async getWomenProducts ({ commit }, prodsLimit){
        const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing?limit=${prodsLimit}`);
        commit('getWomenProducts', response.data)
    },
    async getElectronicsProducts ({ commit }, prodsLimit){
        const response = await axios.get(`https://fakestoreapi.com/products/category/electronics?limit=${prodsLimit}`);
        commit('getElectronicsProducts', response.data)
    },
    async getJeweleryProducts ({ commit }, prodsLimit){
        const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery?limit=${prodsLimit}`);
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
    
}

const mutations = {
    getAllProducts: (state, allProducts) => state.allProducts = allProducts,
    getMenProducts: (state, menProducts) => state.menProducts = menProducts,
    getWomenProducts: (state, womenProducts) => state.womenProducts = womenProducts,
    getElectronicsProducts: (state, electronicsProducts) => state.electronicsProducts = electronicsProducts,
    getJeweleryProducts: (state, jeweleryProducts) => state.jeweleryProducts = jeweleryProducts,
    getCartProducts: (state, cartProducts) => state.cartProducts = cartProducts,
    getFavoutiteProducts: (state, favouriteProducts) => state.favouriteProducts = favouriteProducts,
}

export default {
    state,
    getters,
    actions,
    mutations
}