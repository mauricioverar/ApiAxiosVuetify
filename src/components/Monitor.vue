<template>
  <div>
    <h3>monitor</h3>
    <ul v-for="(orden, clave) in dOrdenes" :key="clave">
      <li>{{ orden.cliente }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Monitor',
    props: ["dOrdenes"],
    setup() {
        
    },
}
</script>