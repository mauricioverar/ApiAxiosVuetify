<template>
  <div>
    <h3>ordenes2</h3>
    <div>
      <Monitor :dOrdenes="dOrdenes" />
      <!-- repite iteraciones dentro de la pagina (Ultimas) -->
    </div>
  </div>
</template>

<script>
import Monitor from '@/components/Monitor'
import { mapState } from 'vuex'

export default {
  name: 'Ordenes',

  components: {
    Monitor
  },

  setup() {},

  computed: {
    ...mapState(['dOrdenes']) // definido como props
  },

}
</script>
