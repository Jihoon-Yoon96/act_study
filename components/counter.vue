<template>
  <v-btn @click="count += 1">찜 {{count}}</v-btn>

</template>

<script>
export default {
   data(){
     count : 0
   }
}
</script>
