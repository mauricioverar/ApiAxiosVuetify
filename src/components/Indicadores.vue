<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          kpis
        </h1>

        <!-- <p>{{kpi.nombre}} </p> -->
        <p>{{kpi.nombre}} </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
// import { mapActions} from 'vuex'

  export default {
    name: 'Indicadores',
    props: ["kpi"],

    data: () => ({
    }),
  }
</script>
