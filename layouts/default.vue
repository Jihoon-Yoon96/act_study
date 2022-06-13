<template>
  <v-app dark>

    <Systembar/>
    <gnb :searching="searching" @openSearching="openSearching"/>
    <search
      v-if="searching === true"
      style="position: fixed; width: 100%;"
      :searching="searching" @closeSearching="closeSearching"
    />
    <search_result
      v-if="searching === true"
      style="position: fixed; top:100px;"
    />


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
import search from "@/layouts/search";
import search_result from "@/layouts/search_result";

export default {
  name: 'DefaultLayout',
  components:{
    Systembar,
    gnb,
    search,
    search_result
  },
  data () {
    return {
      searching: false,
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
  },
  methods:{
    openSearching(status){
      this.searching = status
    },
    closeSearching(status){
      this.searching = status
    }
  }
}
</script>
