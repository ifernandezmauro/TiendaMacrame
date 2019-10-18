<template>
    <section>
        <Navbar />
        <listOfProducts :products="getProducts" />
        <Footer />
    </section>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mapGetters } from 'vuex';
import listOfProducts from '../components/ListaProductos';

export default {
    components: {Navbar, Footer, listOfProducts},
    computed: {
        ...mapGetters([
            'getProducts'
        ])
    }
}
</script>