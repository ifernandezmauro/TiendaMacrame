import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                name: 'Aros girasol',
                price: 7500,
                image: require('./assets/popular/popular1.png'),
                stars: 5,
                totalReviews: 230,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                name: 'Collar circular',
                price: 8500,
                image: require('./assets/popular/popular2.png'),
                stars: 3.5,
                totalReviews: 430,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                name: 'Aros celestiales',
                price: 6300,
                image: require('./assets/popular/popular3.png'),
                stars: 4.5,
                totalReviews: 180,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
        ],
        cartProducts: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false
    },

    getters: {
        getProducts: state => state.products,
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart
    },

    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        }
    },

    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        }
    }
})