<template>
  <v-app dark>

    <Systembar/>
    <gnb/>
    <search
      v-if="this.$store.state.search.searching === true"

    />



    <v-main>
      <v-container class="justify-center">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer

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
// import search_result from "@/layouts/search_result";

export default {
  name: 'DefaultLayout',
  components:{
    Systembar,
    gnb,
    search,
    // search_result
  },
  data () {
    return {

    }
  },
  methods:{

  },
  computed:{

  }
}
</script>
