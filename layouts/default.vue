<template>
  <v-app dark>
    <Systembar/>
    <gnb/>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import gnb from "@/layouts/gnb";
import Systembar from "@/layouts/Systembar";
export default {
  name: 'DefaultLayout',
  components:{
    Systembar,
    gnb,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-shopping',
          title: 'Main',
          to: '/view/main_view'
        },
        {
          icon: 'mdi-table',
          title: 'CRUD',
          to: '/crud/read'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
