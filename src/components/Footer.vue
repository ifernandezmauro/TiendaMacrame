<template>
<!-- Enlace a Redes sociales -->
  <v-card flat tile class="lighten-1 white--text text-center" style="background-color: #8C5042">
    <v-card-text>
      <v-btn class="mx-4 white--text" href="http://www.facebook.com/tutorialestemuco" target="_blank" icon>
        <v-icon size="24px">mdi-facebook</v-icon>
      </v-btn>
            <v-btn class="mx-4 white--text" href="http://www.instagram.com/tutorialestemuco" target="_blank" icon>
        <v-icon size="24px">mdi-instagram</v-icon>
      </v-btn>
            <v-btn class="mx-4 white--text" href="http://www.youtube.com/tutorialestco" target="_blank" icon>
        <v-icon size="24px">mdi-youtube</v-icon>
      </v-btn>
    </v-card-text>

<!-- Frase para motivar al consumidor -->
    <v-card-text
      class="white--text pt-0"
    >"Cuando compras a un artesano, no solo estás comprando un objeto, estás comprando horas de práctica, fracasos y experimentación, momentos de frustración y alegría, pero lo más importante es que compras el tiempo del artesano para seguir haciendo lo que más le apasiona"</v-card-text>

    <v-divider></v-divider>
    
<!-- Año y nombre de la página -->
    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} —
      <strong>Macrame Tienda</strong>
    </v-card-text>
  </v-card>
</template>
