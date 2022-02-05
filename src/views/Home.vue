<template>
  <div>
    <div v-for="(kpi, clave) in kpis" :key="clave">
      <Indicadores :kpi="kpi" />
      <!-- repite pagina (Indicadores) completa por cada iteracion -->
    </div>
    <div>
      <Ultimas :ordenes="ordenes" :devolucion="devolucion" />
      <!-- repite iteraciones dentro de la pagina (Ultimas) -->
    </div>
    <div>
      <button @click="muestra">muestra</button>
    </div>
  </div>
</template>

<script>
import Indicadores from '../components/Indicadores'
import Ultimas from '../components/Ultimas'

import { mapState } from 'vuex'

export default {
  name: 'Home',

  components: {
    Indicadores, Ultimas
  },

  computed: {
    // valor reactivo a diferencia de actions q solo se ejecuta cuando se invoca   (es pasivo)
    ...mapState(['kpis', 'ordenes', 'devolucion']) // definido como props
  },

  methods: {
    muestra () {
    console.log('ver ', this.kpis, this.ordenes)
    }
  }
}
</script>
