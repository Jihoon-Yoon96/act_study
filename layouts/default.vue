<template>
  <v-app dark>

    <Systembar/>
    <gnb/>
    <search
      v-if="this.$store.state.search.searching === true"

    />
<!--    <search_result-->
<!--      v-if="this.$store.state.search.searching === true"-->
<!--      style="position: fixed; top:100px;"-->
<!--    />-->


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
