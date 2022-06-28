<template>
  <v-row class="justify-center">
    <v-col cols="2"><v-btn :text="pop" x-large rounded :outlined="pop" color="black" class="white--text" >인기</v-btn></v-col>
    <v-col cols="2"><v-btn :text="recent" x-large rounded :outlined="recent" color="black">최신</v-btn></v-col>
    <v-col cols="2"><v-btn :text="follow" x-large rounded :outlined="follow" color="black">팔로잉</v-btn></v-col>
  </v-row>
</template>

<script>
export default {
  name: "lnb",
  data(){
    return{
      pop: false,
      recent: true,
      follow: true,
      color: 'white'
    }
  },
  methods:{

  },
  computed:{

  }
}
</script>

<style scoped>

</style>
