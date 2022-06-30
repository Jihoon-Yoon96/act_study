<template>
  <v-container>
    <v-row class="justify-center" id="items" v-for="(shoes, index) in goods" :key="index">
      <v-col cols="3" v-for="(shoes, i) in goods" :key="i">
        <nuxt-link :to="shoes.url"> <!-- 추가 확인 필요 -->
        <v-card min-height="400">
          <v-img contain aspect-ratio="1" :src=shoes.img />
          <v-card-title class="text-subtitle-2"> {{shoes.name}}</v-card-title>
          <v-spacer/>
          <v-card-subtitle>{{shoes.price}}₩</v-card-subtitle>
          <v-btn v-bind:href="shoes.link">구매</v-btn>
          <v-btn class="fast-mark" v-show="shoes.fast === true" v-bind:href="shoes.link" style="text-align: center;">빠른배송</v-btn>
          <v-btn @click="countUp">찜</v-btn>
        </v-card>
        </nuxt-link>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  props : ['counterOfChild'],
  el : '#items',
  data(){
    return{
      goods:[
        {
          name:"Jordan 1 Low Gold Starfish",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjBfMjE5/MDAxNjUzMDMwMzkxODY3.PYVSjKRLfHXBtmc3d3bsdgUgtSiE0G0jVSSJBg17nG0g.xWyI4mVG82ZjphChIV_ba83pzEzQkfBjn9bn-Vhz_UIg.PNG/a_9a56605aabe6476ba812bc2ea2502906.png?type=m_webp",
          price: 223000,
          link:"https://kream.co.kr/products/62385",
          url : "/shop/shop_detail",
          count : 0,
          fast:true
        },
        {
          name:"Nike Dunk Low Retro PRM Graffiti",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MTlfMTAw/MDAxNjUyOTUwNzQzMjM2.ouPPxxF-4cWTNIHzxNeP5A_R7WUqB7W0VTFtPMhyLy4g.pJ9_acx650hKWcmdWcyYsma3UqEwd-z3Q-4KKurMsCUg.PNG/a_8682770fbd3642c081275041112912e2.png?type=m_webp",
          price: 139000,
          link:"https://kream.co.kr/products/62202",
          url : "",
          count : 0,
          fast:true
        },
        {
          name:"Crocs X Salehe Bembury Pollex Clog Stratus",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjBfMjU1/MDAxNjUzMDM5NzMxMDI0.LxKyutz4m3KM615kuvbhFXgOukOqwJSa5XOzeRlBrSAg.Aps3EXxPjcMb_LztAA-TUcFiuWGgQwil2VRW_-8-49Ag.PNG/a_8e0d89ceda7f45ed97c78db7f6bb5f96.png?type=m_webp",
          price: 300000,
          link:"https://kream.co.kr/products/62430",
          url : "",
          count : 0,
          fast:false,
        },
        {
          name: "New Balance X Joe Freshgoods 9060 Inside",
          img: "https://kream-phinf.pstatic.net/MjAyMjA1MjBfNzQg/MDAxNjUzMDIyNjc3MjE2.SSubVvt6X-EpACLHI84D-bubgkk8KmrkIZ9nnWONZksg.eWoe1xg_MMbHfE17IZv5Ck1Ag13bWf8IZlpPBM5T9hMg.PNG/a_9c615b7d859f4ba4987a80b0e0067896.png?type=m_webp",
          price : 400000,
          link: "https://kream.co.kr/products/62330",
          url : "",
          count : 0,
          fast:false,
        }
      ]
    }
  },
  mounted() {
      this.query = this.$route.query.id;
    },
  updated() {
    // this.readGoodsInfo()
  },
  methods:{
    readGoodsInfo(){
      axios.get(url)
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    countUp(){
      this.count += 1
    }
  }

}
</script>

<style>
.fast-mark {
  color: #31b46e;
  border: 1px solid #31b46e;
}

</style>
