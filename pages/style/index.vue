<template>
  <v-container class="justify-center">
    <lnb/>
    <nuxt-child/>
  </v-container>
</template>

<script>
import lnb from "@/pages/style/lnb";
export default {
  name: "index",
  components:{
    lnb,
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
