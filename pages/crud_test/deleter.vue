<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          depressed
          color="white">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-toolbar color="red">
          <v-toolbar-title class="text-h5 white--text font-weight-bold lighten-2">
            상품 삭제
          </v-toolbar-title>
        </v-toolbar>

        <v-card-text class="mt-5">
          <span class="font-weight-bold">{{this.g_name}}</span>을 <br><span class="red--text">삭제하시겠습니까?</span>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red"
            text
            @click="dialog = false"
          >
            삭제
          </v-btn>

          <v-btn
            color="grey darken-1"
            text
            @click="dialog = false"
          >
            취소
          </v-btn>

        </v-card-actions>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "deleter",
  data(){
    return{
      dialog: false,
    }
  },
  props:{
    g_name: String
  },
  methods:{
    deleteGoodsInfo(){
      axios.delete(url,{
        name : this.goodsname,
        price : this.price,
        img : this.img
      })
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          alert('등록 오류')
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
