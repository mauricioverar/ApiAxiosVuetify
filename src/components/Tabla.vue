<template>
  <div>
    <!-- data -->
    <div>
        <h3>data</h3>
      <v-data-table
        :headers="headers"
        :items="datos"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>

    <!-- simple -->
    <!-- <div>
        <h3>simple</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">num_orden</th>
              <th class="text-left">cliente</th>
              <th class="text-left">monto</th>
              <th class="text-left">cant_productos</th>
              <th class="text-left">fecha_entrega</th>
              <th class="text-left">avance_preparacion</th>
              <th class="text-left">estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, clave) in datos" :key="clave">
              <td>{{ item.num_orden }}</td>
              <td>{{ item.cliente }}</td>
              <td>{{ item.monto }}</td>
              <td>{{ item.cant_productos }}</td>
              <td>{{ item.fecha_entrega }}</td>
              <td>{{ item.avance_preparacion }}</td>
              <td>{{ item.estado }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'Tabla',

    props: ["datos", "headers"],
  // data () {
  //   return {
  //     headers: [
  //       {
  //         text: 'Dessert (100g serving)',
  //         align: 'start',
  //         sortable: false,
  //         value: 'name',
  //       },
  //       { text: 'Calories', value: 'calories' },
  //       { text: 'Fat (g)', value: 'fat' },
  //       { text: 'Carbs (g)', value: 'carbs' },
  //       { text: 'Protein (g)', value: 'protein' },
  //       { text: 'Iron (%)', value: 'iron' },
  //     ]
  //   }
  // },
}
</script>
