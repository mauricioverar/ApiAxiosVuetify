<template>
  <div>
    <v-app-bar dense dark>
<!-- hamburguesa lateral -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
<!-- titulo -->
      <v-toolbar-title>Company</v-toolbar-title>
<!-- breadcrumbs items nav -->
      <v-breadcrumbs :items="items" divider="">
        <template v-slot:extension>
          <v-breadcrumbs-item
          >
            {{ items.text }}
          </v-breadcrumbs-item>
        </template>
  </v-breadcrumbs>
      <v-spacer></v-spacer>
<!-- profile -->
      <v-breadcrumbs>Profile</v-breadcrumbs>
<!-- logout -->
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-btn text @click="cerrarSesion" :disabled="!usuario" -->
        <v-btn text @click="cerrarSesion"
          >{{ usuario }}
          <v-icon>{{ logout }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

<!-- menu hamburguesa lateral -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <!-- <v-list-item :to="{ name: 'home' }" :disabled="!usuario"> -->
            <v-list-item :to="{ name: 'Home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item :to="{ name: 'login' }" v-show="!usuario"> -->
            <v-list-item :to="{ name: 'Login' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item :to="{ name: 'Ordenes' }" :disabled="!usuario"> -->
          <v-list-item :to="{ name: 'Ordenes' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ordenes</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Inventario' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inventario</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item :to="{ name: 'registro' }" v-show="!usuario">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro</v-list-item-title>
          </v-list-item> -->
          <v-list-item @click="cerrarSesion" v-show="usuario">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ usuario }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import { mdiLogout } from '@mdi/js'
// import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    logout: mdiLogout,
    drawer: false,
    group: null,
    terms: false,

    items: [
      {
        text: 'Home',
        disabled: false,
        to: '/'
      },
      {
        text: 'Ordenes',
        disabled: false,
        to: 'ordenes'
      },
      {
        text: 'Inventario',
        disabled: false,
        to: '*'
      }
    ]
  }),
  computed: {
    ...mapState(['usuario']),
    isDisabled: function () {
      return !this.terms
    }
  },
  methods: {
    ...mapActions(['logOut']),
    administracion () {
      console.log('loading ')
      this.$router.push({ name: 'administracion' })
    },
    cerrarSesion () {
      console.log('cerrar')
      this.$router.push({ name: 'Login' })
    //   Firebase.auth()
    //     .signOut()
    //     .then(
    //       (accept) => {
    //         // accept
    //         this.$router.push({ name: 'Login' })
    //       },
    //       (reject) => {
    //         var errorCode = reject.code
    //         // errorCode
    //         console.log(errorCode)
    //         this.loading = false
    //         this.$message({
    //           showClose: true,
    //           message: reject.message,
    //           type: 'error'
    //         })
    //       },
    //       this.logOut()
    //     )
    }
  }
}
</script>
