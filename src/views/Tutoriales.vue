<template>
  <section>
    <Navbar />
    <br>
    <p class="font-weight-thin display-2 text-center">COMO TEJER MACRAMÉ</p>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
              height="640px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

<v-card-actions>
        <v-btn
          text
          color="#F2913D"
        >
          Materiales
        </v-btn>
        <v-btn
          text
          color="#F2A74B"
        >
          Tutorial
        </v-btn>
        <v-spacer></v-spacer>
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
      cards: [
        {
          title: "Aros girasol",
          src: require("../assets/tutoriales/tutorial1.png"),
          flex: 4
        },
        {
          title: "Collar circular",
          src: require("../assets/tutoriales/tutorial2.png"),
          flex: 4
        },
        {
          title: "Aros celestiales",
          src: require("../assets/tutoriales/tutorial3.png"),
          flex: 4
        }
      ]
    };
  }
};
</script>