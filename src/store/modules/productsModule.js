import axios from "axios"

const state = {
    allProducts: JSON.parse(localStorage.getItem('mistoAllProducts')) || [],
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
    discount: 0,
    users: [],
    editedProduct: localStorage.getItem("mistoEditedProuct") || {},
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
    usersGetter: state => state.users,
    editedProductGetter: state => state.editedProduct,
}

const actions = {
    async getAllProducts ({ commit }){
        const response = await axios.get('https://fakestoreapi.com/products');
        commit('getAllProducts', JSON.parse(localStorage.getItem('mistoAllProducts')) || response.data)
    },
    async getMenProducts ({ commit }){
        let response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`);
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
    async addProduct({commit}, product) {
        const response = await axios.post('https://fakestoreapi.com/products', product)
        commit('addProduct', response.data)
        console.log(response.data);
    },
    async deleteProduct ({ commit }, id){
        await axios.delete(`https://fakestoreapi.com/products/${id}`);
        commit('deleteProduct', id)
    },
    async updateProduct ({commit}, updatedProduct){
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${updatedProduct.id}`, updatedProduct);
        commit('updateProduct', response.data)
    },
    getCartProducts ({ commit }, cartProducts){
        commit('getCartProducts', cartProducts)
        localStorage.setItem('mistoCartProducts', JSON.stringify(cartProducts))
    },
    async getFavouriteProducts ({ commit, getters }, favouriteProducts){
        await commit('getFavoutiteProducts', favouriteProducts)
        localStorage.setItem('mistoFavouriteProducts', JSON.stringify(favouriteProducts))
        commit('getAllProducts', getters.allProducts)
        commit('getMenProducts', getters.menProducts)
        commit('getWomenProducts', getters.womenProducts)
        commit('getElectronicsProducts', getters.electronicsProducts)
        commit('getJeweleryProducts', getters.jeweleryProducts)
    },
    getSearchedProducts ({ commit }, SearchedProducts){
        commit('getSearchedProducts', SearchedProducts)
    },
    getTotalCost ({ commit }, cartProductsArray){
        commit('getTotalCost', cartProductsArray)
    },
    async getUsers ({ commit }){
        const response = await axios.get(`https://fakestoreapi.com/users`);
        commit('getUsers', response.data)
    },
    editedProduct({commit}, editedProduct){
        commit('editedProduct', editedProduct)
        localStorage.setItem("mistoEditedProduct", JSON.stringify(editedProduct))
    }
}

const mutations = {
    getAllProducts: (state, allProducts) => {
        for(let product of allProducts){
            product.fav = false;
            for(let favProduct of state.favouriteProducts){
                if( product.id === favProduct.id){
                    product.fav = true;
                }
            }
        }
        state.allProducts = allProducts;
    },
    deleteProduct: (state, id) => {
        state.allProducts = state.allProducts.filter(product => product.id !== id);
        localStorage.setItem('mistoAllProducts', JSON.stringify(state.allProducts))
    },
    getMenProducts: (state, menProducts) => {
        for(let product of menProducts){
            product.fav = false;
            for(let favProduct of state.favouriteProducts){
                if( product.id === favProduct.id){
                    product.fav = true;
                }
            }
        }
        state.menProducts = menProducts
    },
    getWomenProducts: (state, womenProducts) => {
        for(let product of womenProducts){
            product.fav = false;
            for(let favProduct of state.favouriteProducts){
                if( product.id === favProduct.id){
                    product.fav = true;
                }
            }
        }
        state.womenProducts = womenProducts;
    },
    getElectronicsProducts: (state, electronicsProducts) => {
        for(let product of electronicsProducts){
            product.fav = false;
            for(let favProduct of state.favouriteProducts){
                if( product.id === favProduct.id){
                    product.fav = true;
                }
            }
        }
        state.electronicsProducts = electronicsProducts
    },
    getJeweleryProducts: (state, jeweleryProducts) => {
        for(let product of jeweleryProducts){
            product.fav = false;
            for(let favProduct of state.favouriteProducts){
                if( product.id === favProduct.id){
                    product.fav = true;
                }
            }
        }
        state.jeweleryProducts = jeweleryProducts
    },
    getCartProducts: (state, cartProducts) => state.cartProducts = cartProducts,
    getFavoutiteProducts: (state, favouriteProducts) => state.favouriteProducts = favouriteProducts,
    getSearchedProducts: (state, SearchedProducts) => state.SearchedProducts = SearchedProducts,
    getTotalCost: (state, cartProductsArray) => {
        state.totalCost = 0;
        for(let cartProduct of cartProductsArray){
            state.totalCost += cartProduct.quantity * cartProduct.price;
        }
    },
    getUsers: (state, users) => state.users = users,
    editedProduct: (state, editedProduct) => state.editedProduct = editedProduct,
    addProduct: (state, newProduct) => {
        state.allProducts.unshift(newProduct);
        localStorage.setItem('mistoAllProducts', JSON.stringify(state.allProducts))
    },
    updateProduct: (state, updatedProduct) => {
        let productIndex = state.allProducts.findIndex(product => product.id == updatedProduct.id);
        if(productIndex !== -1){
            updatedProduct.id = state.allProducts[productIndex].id;
            state.allProducts.splice(productIndex, 1, updatedProduct)
        }
        localStorage.setItem('mistoAllProducts', JSON.stringify(state.allProducts))
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}