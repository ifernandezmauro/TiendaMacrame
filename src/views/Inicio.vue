<template>
  <section>
    <Navbar />
    <v-layout wrap mt-6 justify-center>
      <p class="font-weight-thin display-2 text-center">APRENDE Y REGALA HECHO A MANO</p>
      <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-layout>
    <br />
    <br />
    <p class="font-weight-thin display-2 text-center">LO MÁS POPULAR</p>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
              height="300px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

<v-card-actions>
        <v-btn
          text
          color="#F2913D"
        >
          Detalles
        </v-btn>
        <v-btn
          text
          color="#F2A74B"
        >
          Tutorial
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-shopping</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share</v-icon>
        </v-btn>
      </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </section>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default {
  components: {Navbar, Footer},
  data() {
    return {
      items: [
        {
          src: require("../assets/carousel/foto1.png")
        },
        {
          src: require("../assets/carousel/foto2.png")
        },
        {
          src: require("../assets/carousel/foto3.png")
        }
      ],
      icons: [
        "mdi-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      cards: [
        {
          title: "Aros girasol",
          src: require("../assets/popular/popular1.png"),
          flex: 4
        },
        {
          title: "Collar circular",
          src: require("../assets/popular/popular2.png"),
          flex: 4
        },
        {
          title: "Aros celestiales",
          src: require("../assets/popular/popular3.png"),
          flex: 4
        }
      ]
    };
  }
};
</script>