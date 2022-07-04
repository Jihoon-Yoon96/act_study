<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto"><h2>결제 정보</h2></v-col>
      <v-col cols="auto"><v-btn outlined flat color="black">+ 새 카드 추가하기</v-btn></v-col>
    </v-row>

    <v-row  class="mt-10 align-center" justify="end">
      <v-col cols="auto"><v-btn disabled flat outlined color="black" small class="black--text font-weight-bold">현대</v-btn></v-col>
      <v-col cols="">
        <v-row no-gutters>
          <v-col cols="12">****-****-****-****</v-col>
          <v-col cols="12"><v-btn disabled rounded flat x-small class="white--text font-weight-bold">기본 결제</v-btn></v-col>
        </v-row>
      </v-col>
      <v-col cols="auto">
        <v-btn flat outlined color="black" class="black--text font-weight-bold">삭제</v-btn>
      </v-col>
    </v-row>

    <v-divider  class="mt-5"></v-divider>

    <v-row  class="mt-10 align-center" justify="end">
      <v-col cols="auto"><v-btn disabled flat outlined color="black" small class="black--text font-weight-bold">현대</v-btn></v-col>
      <v-col cols="">
        <v-row no-gutters>
          <v-col cols="12">****-****-****-****</v-col>
        </v-row>
      </v-col>
      <v-col cols="auto">
        <v-btn flat outlined color="black" class="black--text font-weight-bold">기본 결제</v-btn>
        <v-btn flat outlined color="black" class="black--text font-weight-bold">삭제</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "buy"
}
</script>

<style scoped>

</style>
