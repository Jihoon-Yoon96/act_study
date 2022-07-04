<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto"><h2>주소록</h2></v-col>
      <v-col cols="auto"><v-btn outlined flat color="black">+ 새 배송지 추가</v-btn></v-col>
    </v-row>

    <v-row no-gutters class="mt-10" justify="end">
      <v-col cols="12"><strong>윤지훈</strong> <v-btn disabled flat x-small class="black--text font-weight-bold">기본 배송지</v-btn></v-col>
      <v-col cols="12">010-9699-9378</v-col>
      <v-col cols="12">서울특별시 강서구 마곡중앙1로 71 마곡힐스테이트13단지 1307-604</v-col>
      <v-col cols="auto">
        <v-btn flat outlined color="black" class="black--text font-weight-bold">수정</v-btn>
        <v-btn flat outlined color="black" class="black--text font-weight-bold">삭제</v-btn>
      </v-col>
    </v-row>

    <v-divider  class="mt-5"></v-divider>

    <v-row no-gutters class="mt-10" justify="end">
      <v-col cols="12"><strong>윤지훈</strong></v-col>
      <v-col cols="12">010-9699-9378</v-col>
      <v-col cols="12">서울특별시 강서구 마곡중앙1로 71 마곡힐스테이트13단지 1307-604</v-col>
      <v-col cols="auto">
        <v-btn flat outlined color="black" class="black--text font-weight-bold">기본 배송지</v-btn>
        <v-btn flat outlined color="black" class="black--text font-weight-bold">수정</v-btn>
        <v-btn flat outlined color="black" class="black--text font-weight-bold">삭제</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "address"
}
</script>

<style scoped>

</style>
