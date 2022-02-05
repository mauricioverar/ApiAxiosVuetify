<template>
  <v-container>
    <!-- <v-row class="text-center">
      <v-col class="mb-4"  v-for="(kpi, clave) in kpis" :key="clave">
        <div>
        <p>{{kpi.nombre}} </p>
        </div>
      </v-col>
    </v-row> -->
    <v-row class="text-center">
      <v-col v-for="(kpi, clave) in kpis" :key="clave">
        <div> 
          <p>{{kpi.nombre}} </p>
          <p>{{kpi.entregadas / porcentaje() * 100}}% </p>

          <!-- parseInt (entregadas) / (parseInt (entregadas) + parseInt (pendientes)) * 100        -->
          <p>{{kpi.entregadas}} {{kpi.pendientes}}</p>
          <p>{{kpi.totales}} {{kpi.atrasadas}}</p>

        </div>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <!-- cada col es una clave -->
      <v-col v-for="(kpi, clave) in kpis" :key="clave">
        <div> 
          <p>{{kpi.nombre}} </p>
          <p>{{porcentaje()}}% </p>

          <!-- parseInt (entregadas) / (parseInt (entregadas) + parseInt (pendientes)) * 100        -->
          <p>{{kpi.entregadas}} {{kpi.pendientes}}</p>
          <p>{{kpi.totales}} {{kpi.atrasadas}}</p>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapActions} from 'vuex'

  export default {
    name: 'Indicadores',
    props: ["kpis"],

    data: () => ({
      // parseInt (entregadas) / (parseInt (entregadas) + parseInt (pendientes)) * 100
    }),

    methods: {
      porcentaje() {
        const n2 = (parseInt(this.kpis[0].entregadas) + parseInt(this.kpis[0].pendientes))
        console.log('n2 ', n2)
        // return (this.kpis[0].entregadas / n2) * 100
        return n2
      },
      porcentaje() {
        const n2 = (parseInt(this.kpis[0].entregadas) + parseInt(this.kpis[0].pendientes))
        console.log('n2 ', n2)
        // return (this.kpis[0].entregadas / n2) * 100
        return n2
      }
    }
  }
</script>
