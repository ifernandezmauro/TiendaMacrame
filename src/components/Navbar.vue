<template>
  <v-toolbar style="background-color: #D97B59">
    <v-avatar :tile="true">
      <img :src="require('@/assets/logo blanco.png')" alt="logo" />
    </v-avatar>
    <v-toolbar-title style="color:white" class="font-weight-black">Macrame Tienda</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items>
      <v-btn text to="/" style="color:white">Inicio</v-btn>
      <v-btn text to="/productos" style="color:white">Productos</v-btn>
      <v-btn text to="/tutoriales" style="color:white">Tutoriales</v-btn>
      <v-btn text to="/acerca" style="color:white">Acerca de</v-btn>
      <v-btn style="background-color:#8C5042" @click.native="showPopupCart()">
         <v-icon size="30px" style="color:white" >mdi-cart</v-icon>
         <span class="btn-circle" v-if="hasProducts()">
           {{ getProductsInCart.length }}
         </span>
      </v-btn>
      <transition name="appear">
        <popupcart class="cart" v-if="getPopupCart" />
      </transition>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import popupcart from './Popupcart';

export default {
  components: {popupcart},
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart'
    ]),
    hasProducts() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    }
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart'
    ])
  }
}
</script>

<style scoped>
  .btn-circle {
    opacity: 0.8;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>