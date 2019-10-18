<template>
  <section>
    <Navbar />
    <v-timeline>
      <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`" v-text="year.titulo"></h2>
          <span v-text="year.text"></span>
        </div>
      </v-timeline-item>
    </v-timeline>
    <Footer />
  </section>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
  components: {Navbar, Footer},
  data: () => ({
    years: [
      {
        color: "#F2913D",
        year: "Febrero de 2011",
        titulo: "El inicio",
        text:
          "Aquí comienza la historia del canal de youtube que abrió el macramé a la comunidad principalmente de latinoamérica."
      },
      {
        color: "#F2A74B",
        year: "Octubre de 2018",
        titulo: "Pequeño emprendimiento",
        text:
          "A través de la página de faceook e instagram se comenzaron a vender diferentes manualidades de las cuales se habían enseñado"
      },
      {
        color: "#F2913D",
        year: "Marzo de 2019",
        titulo: "Los 100.000",
        text:
          "El canal de youtube llega a los 100 mil suscriptores, lo que supone aún más apoyo de parte de la comunidad y empresas."
      }
    ]
  })
};
</script>