<template>
  <div>
    <div>
      <v-row>
          <Indicadores :kpis="kpis" />
      </v-row>
      <!-- repite pagina (Indicadores) completa por cada iteracion -->
    </div>
    <div>
      <!-- repite iteraciones dentro de la pagina (Ultimas) -->
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          orden
        </h1>
        <Tabla :datos="ordenes" :headers="headers" />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          devolucion
        </h1>
        <Tabla :datos="devolucion" :headers="headers" />
      </v-col>
    </v-row>
    </div>
    <div>
      <button @click="muestra">muestra</button>
    </div>
  </div>
</template>

<script>
import Indicadores from '../components/Indicadores'
import Tabla from '@/components/Tabla'

import { mapState } from 'vuex'

export default {
  name: 'Home',

  components: {
    Indicadores, Tabla
  },

  data () {
    return {
      headers: [
        {
          text: 'num_orden',
          align: 'start',
          sortable: false,
          value: 'num_orden',
        },
        { text: 'cliente', value: 'cliente' },
        { text: 'fecha_entrega', value: 'fecha_entrega' },
        { text: 'estado', value: 'estado' }
      ],
    }
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
