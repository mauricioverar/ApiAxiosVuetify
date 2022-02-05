<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          orden
        </h1>

        <ul v-for="(orden, clave) in ordenes" :key="clave">
            <li>{{orden.cliente}}</li>
        </ul>
        <!-- <p>{{orden.cliente}} </p> -->

      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          devolucion
        </h1>

        <ul v-for="(devol, clave) in devolucion" :key="clave">
            <li>{{devol.cliente}}</li>
        </ul>
        <!-- <p>{{orden.cliente}} </p> -->

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
// import { mapActions} from 'vuex'

  export default {
    name: 'Ultimas',
    props: ["ordenes", "devolucion"],

    data: () => ({
    }),
  }
</script>
