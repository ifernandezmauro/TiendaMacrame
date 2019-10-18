<template>
    <ul class="listOfProducts">
        <li v-for="(product,index) in products" :key="index" class="product">
            <img :src="product.image" alt="" class="product-image" width="100%">
            <router-link to="/producto">
                <h2 class="product-name" @click="addCurrentProduct(product)">
                    {{ product.name }}
                </h2>
            </router-link>
            <div class="product-price">
                <span>CLP$ {{ product.price }}</span>
            </div>

            <btn btnColor="btn btn-large btn-sucess"
                @click.native="addProductToCart(product)">
                Agregar al carrito
            </btn>
        </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';

export default {
    props: ['products'],
    components: {
        btn
    },
    methods: {
        ...mapActions([
            'addProduct',
            'currentProduct'
        ]),
        addProductToCart(product) {
            this.addProduct(product);
        }, 
        addCurrentProduct(product) {
            this.currentProduct(product);
        }
    }
};
</script>

<style scoped>
    img{
        border-radius: 8px;
    }

    .listOfProducts {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
    }

    .product {
        width: 300px;
        background-color: #fff;
        list-style: none;
        box-sizing: border-box;
        padding: 1em;
        margin: 1em 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
    }

    .product-name {
        color: black;
        font-size: 1.2em;
        font-weight: normal;
        cursor: pointer;
    }

    .product-price {
        width: 100%;
        align-self: flex-start;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5em;
    }
</style>