<template class="mb-5">
    <v-card  :min-height=min_height :max-height=max_height :min-width=min_width :max_width=max_width>
      <v-img
        contain
        aspect-ratio="1"
        :src=img
      />
      <v-card-title class="text-subtitle-2">{{name}}</v-card-title>
      <v-card-subtitle>{{price}}</v-card-subtitle>
    </v-card>
</template>

<script>
export default {
  name: "create_read.vue",
  data(){
    return{
      
    }
  },
  props:{
    img: String,
    name: String,
    price: Number,
    max_height:Number,
    min_height:Number,
    max_width:Number,
    min_width:Number,
  }

}
</script>

<style scoped>

</style>
