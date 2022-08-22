<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12">
        <v-card flat outlined>
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
              <v-row class="font-weight-bold">{{name}}</v-row>
              <v-row class="grey--text">03470@naver.com</v-row>
              <v-row class="mt-5">
                <v-btn flat outlined color="grey">프로필 수정</v-btn>
                <v-btn flat outlined color="grey" class="ml-2">내 스타일</v-btn>
              </v-row>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="align-center pt-6">
            <v-col cols="6" class="text-center">
              <strong>일반 회원</strong> <br />
              <p class="grey--text">회원등급</p>
            </v-col>
            <v-divider vertical inset></v-divider>
            <v-col cols="6" class="text-center">
              <strong>0P</strong> <br />
              <p class="grey--text">포인트</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <h3 class="mt-10 mb-10">구매 내역</h3>
    <v-card flat color="grey lighten-4" class="mt-5">
      <v-row class="align-center justify-center text-center">
        <v-col cols="3" class="">전체<br />9</v-col>
        <v-divider inset vertical />
        <v-col cols="3">입찰 중<br />7</v-col>
        <v-col cols="3">진행 중<br />0</v-col>
        <v-col cols="3">종료<br />2</v-col>
      </v-row>
    </v-card>

    <!-- <v-row class="align-center mt-5" v-for="(buy,i) in buy_list" :key="i">
      <v-col cols="2">
        <img style="width: 80; height: 80;"
          :src="buy.img"
        />
      </v-col>
      <v-col cols="8">{{buy.name}} <br> {{buy.price}}</v-col>
      <v-col cols="2" class="red--text">{{buy.date}}</v-col>
    </v-row> -->
    <v-row class="align-center mt-5">
      <v-col cols="2">
        <v-img style="width: 80; height: 80;"
               src="https://kream-phinf.pstatic.net/MjAyMjA1MjZfMTg2/MDAxNjUzNTU1MzY3MzE1.DDbAGNuGG5YgTLbIfaVYOgKA9g8ZxWwvIaXqWpLUHdwg.yuERRp-mmVo8ogY1grh_awLL4rVwTx_aIN-OZLAPJ7cg.JPEG/a_8d3ff19675dd43c9a1335d4286e277db.jpg?type=m_webp"
        />
      </v-col>
      <v-col cols="8">Nike X Peaceminusone Air Force 1 Low Para-Noise 2.0 <br> - </v-col>
      <v-col cols="2" class="red--text">기한만료</v-col>
    </v-row>

    <h3 class="mt-10">판매 내역</h3>
    <v-card flat color="grey lighten-4" class="mt-5">
      <v-row class="align-center justify-center text-center">
        <v-col cols="3" class="">전체<br />9</v-col>
        <v-divider inset vertical />
        <v-col cols="3">입찰 중<br />7</v-col>
        <v-col cols="3">진행 중<br />0</v-col>
        <v-col cols="3">종료<br />2</v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "main",
  data(){
    return{
      name : '',
    }
  },
  beforeMount() {
    this.getGoodsInfo()
  },
  methods:{
    getGoodsInfo(){
      axios.get('http://localhost:8080/api/library/book')
        .then((res)=>{
          console.log(res.data)
          this.name = res.data[0].name
          console.log(this.name)
        })
        .catch((err)=>{
          alert('상품 정보 수신 오류')
          console.log(err)

        })
    }
  }
}
</script>

<style scoped>

</style>
