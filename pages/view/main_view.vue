<template>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
      <div class="top">
        <h2>ACT Shopping</h2>
      </div>
      <div class="main">
        <v-row>
          <v-col cols="3">
            <v-card v-for="item in goods" :key="2">
              <v-card-title>{{item.name}}</v-card-title>
              <v-card-subtitle>{{item.price}}원</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="1"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "main_view",
  data(){
    return{
      goods:[
        {
          name:"Jordan 1",
          img:"",
          price: 12500000,
          link:""
        },
        {
          name:"Jordan 2",
          img:"",
          price: 180000,
          link:""
        },
        {
          name:"Jordan 3",
          img:"",
          price: 350000,
          link:""
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
