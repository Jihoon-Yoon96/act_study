<template class="white" >
  <v-app-bar dense elevation="0" style="z-index: 10;" height="100px">
<!--    <div style="width: 100%"  class=" mt-10 white justify-center text-center align-baseline">-->
<!--      <v-col cols="5" >-->
        <v-text-field
          class="mt-10"
          v-model="search_name"
          placeholder="브랜드명, 모델명, 모델번호 등"
          filled
          outlined
        />
<!--      </v-col>-->
<!--      <v-col class="mt-10" cols="auto">-->
        <v-btn plain elevation="0" @click="stopSearching">취소</v-btn>
<!--      </v-col>-->
<!--    </div>-->

  </v-app-bar>
</template>

<script>


export default {
  props:{},
  components:{

  },
  data () {
    return {
      searching: true,
      search_name: '',
    }
  },
  methods:{
    stopSearching(){
      this.searching = false;
      this.$emit("closeSearching", this.searching)
    }
  }
}
</script>
