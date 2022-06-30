<template>
  <v-container>
    <v-row>
      <h2>프로필 정보</h2>
    </v-row>

    <v-divider class="mt-10"/>

    <v-row class="justify-center mt-1 ">
      <v-col cols="12">
        <v-card flat>
          <v-row class="align-center pa-3">
            <v-col cols="2">
              <svg style="width: 100px; height: 100px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                />
              </svg>
            </v-col>
            <v-col cols="auto">
              <v-row class="font-weight-bold">03470</v-row>
              <v-row class="mt-5">
                <v-btn flat outlined color="grey">이미지 변경</v-btn>
                <v-btn flat outlined color="grey" class="ml-2">삭제</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mt-5 mb-5"></v-divider>



    <v-row class="mt-5">
      <v-col cols="6">
        <v-row><h3 class="mb-5">로그인 정보</h3></v-row>
        <v-row class="mt-5" justify="space-between">
          <v-col cols="auto"><span>이메일주소 <br> <p>03470@naver.com</p></span></v-col>
          <v-col cols="auto"><v-btn outlined flat color="black">변경</v-btn></v-col>
        </v-row>
        <v-divider class="mt-1"></v-divider>

        <v-row class="mt-5" justify="space-between">
          <v-col cols="auto"><span>비밀번호 <br> <p>**********</p></span></v-col>
          <v-col cols="auto"><v-btn outlined flat color="black">변경</v-btn></v-col>
        </v-row>
        <v-divider class="mt-1"></v-divider>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="6">
        <v-row><h3 class="mb-5">개인 정보</h3></v-row>

        <v-row class="mt-5" justify="space-between">
          <v-col cols="auto"><span>이름 <br> <p>03470</p></span></v-col>
          <v-col cols="auto"><v-btn outlined flat color="black">변경</v-btn></v-col>
        </v-row>
        <v-divider class="mt-1"></v-divider>

        <v-row class="mt-5" justify="space-between">
          <v-col cols="auto"><span>휴대폰 번호 <br> <p>010-9699-9378</p></span></v-col>
          <v-col cols="auto"><v-btn outlined flat color="black">변경</v-btn></v-col>
        </v-row>
        <v-divider class="mt-1"></v-divider>

        <v-row class="mt-5" justify="space-between">
          <v-col cols="auto"><span>신발 사이즈 <br> <p>275</p></span></v-col>
          <v-col cols="auto"><v-btn outlined flat color="black">변경</v-btn></v-col>
        </v-row>
        <v-divider class="mt-1"></v-divider>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>
