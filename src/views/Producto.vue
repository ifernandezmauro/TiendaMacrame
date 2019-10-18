<template>
    <section>
        <Navbar />
        <div class="product-box">
        <div class="product-image">
            <img :src="currentProduct.image" alt="" width="100%">
            <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews" />
        </div>
        <div class="product-info">
            <h2 class="product-title">{{ currentProduct.name }}</h2>
            <span class="product-price">CLP$ {{currentProduct.price }}</span>
            <btn btnColor="btn btn-large btn-sucess"
                @click.native="addProductToCart(currentProduct)">
                Agregar al carrito
            </btn>
            <btn btnColor="btn btn-large btn-info"
            @click.native="openModal()">
                Más información
            </btn>
        </div>
        <modal>{{ currentProduct.details }}</modal>
    </div>
    <Footer />
    </section>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mapGetters, mapActions } from 'vuex';
import btn from '../components/Btn';
import stars from '../components/Stars';
import modal from '../components/Modal';

export default {
    components: {Navbar, Footer, btn, stars, modal},
    computed: {
        ...mapGetters({currentProduct: 'getCurrentProduct',}),
    },
    methods: {
        ...mapActions([
        'addProduct',
        'showOrHiddenModal',
        ]),
        addProductToCart(product) {
        this.addProduct(product);
        },
        rated(rate) {
        return `${rate * 20}%`;
        },
        openModal() {
        this.showOrHiddenModal();
        },
    }
}
</script>

<style scoped>
    img{
        border-radius: 8px;
    }

  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .product-image {
    width: 300px;
  }
  .product-info {
    width: 400px;
    align-self: flex-start;
  }
  .product-title {
    font-weight: normal;
  }
  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }
  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>