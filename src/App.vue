<template>
  <v-app>
    <Navbar />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- <v-main>
      <router-view/>
    </v-main> -->
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import { mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['get_Datos', 'get_DatoOrden']) // inicializa action
  },
  mounted() {
    this.get_Datos() // invoca action
    this.get_DatoOrden()
  }
};
</script>
