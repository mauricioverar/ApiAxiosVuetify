<template>
  <div>
    <h3>ordenes2</h3>
    <div>
      <Tabla :datos="dOrdenes" :headers="headers" />
    </div>
  </div>
</template>

<script>
import Tabla from '@/components/Tabla'

import { mapState } from 'vuex'

export default {
  name: 'Ordenes',

  components: {
    Tabla
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
        { text: 'monto', value: 'monto' },
        { text: 'cant_productos', value: 'cant_productos' },
        { text: 'fecha_entrega', value: 'fecha_entrega' },
        { text: 'avance_preparacion', value: 'avance_preparacion' },
        { text: 'estado', value: 'estado' }
      ],
    }
  },

  computed: {
    ...mapState(['dOrdenes']) // definido como props
  },

}
</script>
