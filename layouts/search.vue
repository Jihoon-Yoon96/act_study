<template style="position: fixed; width: 100%; z-index: 10"y>
  <div>
    <v-app-bar dense elevation="0" style="z-index: 10;" height="100px">
      <v-row class="justify-center align-baseline"> <!-- style="width: 100%"  class=" mt-10 white justify-center text-center align-baseline"-->
        <v-col cols="5" >
          <v-text-field
            class="mt-10"
            v-model="search_name"
            placeholder="브랜드명, 모델명, 모델번호 등"
            filled
            outlined
          />
        </v-col>
        <v-col class="mt-10" cols="auto">
          <v-btn plain elevation="0" @click="stopSearching">취소</v-btn>
        </v-col>
      </v-row>


    </v-app-bar>
    <search_result
      v-if="this.$store.state.search.searching === true"
    />
  </div>
</template>

<script>
import search_result from "@/layouts/search_result";

export default {
  props:{},
  components:{
    search_result,
  },
  data () {
    return {
      searching: true,
      search_name: '',
    }
  },
  methods:{
    stopSearching(){
      this.$store.commit("search/searchStatus", false)
    }
  }
}
</script>
