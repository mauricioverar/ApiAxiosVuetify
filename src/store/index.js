import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kpis: [], //
    ordenes: [],
    devolucion: [],
    dOrdenes: []
  },
  mutations: {
    GET_KPIS(state, kpi) {
      state.kpis = kpi
    },
    GET_ORDEN(state, orden) {
      state.ordenes = orden
    },
    GET_DEVOLU(state, devol) {
      state.devolucion = devol
    },

    GET_DORDENES(state, dOrden) {
      state.dOrdenes = dOrden
    }
  },

  actions: {

    async get_Datos({ commit }) {
      try {
        const { data: datos } = await axios.get('/dashboard.json')

        this.kpi = await datos['kpis']
        console.log('kpis ',this.kpi)
        commit("GET_KPIS", this.kpi)

        this.orden = await datos['utimas_ordenes']
        console.log('utimas_ordenes ',this.orden)
        commit("GET_ORDEN", this.orden)

        this.devol = await datos['ultimas_devoluciones:']
        console.log('ultimas_devoluciones: ',this.devol)
        commit("GET_DEVOLU", this.devol)

      } catch (error) {
        console.log(error)
      }
    },

    async get_DatoOrden({ commit }) {
      try {
        const { data: datos } = await axios.get('/ordenes.json')

        this.dOrden = await datos['ordenes:']
        commit("GET_DORDENES", this.dOrden)

      } catch (error) {
        console.log(error)
      }
    }

  },
  modules: {
  }
})
