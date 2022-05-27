<template>
  <v-container>
    <v-row class="justify-end mr-1 mb-5 mt-5">
      <!--   상품 추가   -->
      <creater/>
      <!--   상품 추가   -->
    </v-row>
    <v-row class="justify-center">
      <v-col cols="3" v-for="(shoes, i) in goods" :key="i">
        <v-card min-height="400">
          <v-img
            contain
            aspect-ratio="1"
            :src=shoes.img
          />
          <v-card-title
            class="text-subtitle-2">
            {{shoes.name}}</v-card-title>
          <v-spacer/>
          <v-card-subtitle>{{shoes.price}}₩</v-card-subtitle>
        </v-card>
        <v-row class="mt-1 justify-end">
          <v-col cols="3">
            <!--   상품 수정   -->
            <updater
              :g_name="shoes.name"
              :g_price="shoes.price"
              :g_img="shoes.img"
            />
            <!--   상품 수정   -->
          </v-col>
          <v-col cols="3">
            <!--   상품 삭제   -->
            <deleter
              :g_name="shoes.name"
            />
            <!--   상품 삭제   -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import creater from "@/pages/crud/creater";
import updater from "@/pages/crud/updater";
import deleter from "@/pages/crud/deleter";
import axios from "axios";
export default {
  name: "create_read.vue",
  components: {
    creater,
    updater,
    deleter
  },
  data(){
    return{
      banner:[
        {
          img : "https://kream-phinf.pstatic.net/MjAyMDExMjNfMjU0/MDAxNjA2MTAxMjMwOTg2.Lru1_LSFReeOGavo_Nv5iHAHEQDrgcRVuUDO_VwQbL0g.if4WbmNvghR7rUXR_MxttP9QrAVnboaK1IAxnaF0d6kg.JPEG/p_e1a64ddc68fe4c16b7e2390ee5daa6f4.jpg?type=m_2560",
        },
        {
          img : ""
        }
      ],
      goods:[
        {
          name:"Jordan 1 Low Gold Starfish",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjBfMjE5/MDAxNjUzMDMwMzkxODY3.PYVSjKRLfHXBtmc3d3bsdgUgtSiE0G0jVSSJBg17nG0g.xWyI4mVG82ZjphChIV_ba83pzEzQkfBjn9bn-Vhz_UIg.PNG/a_9a56605aabe6476ba812bc2ea2502906.png?type=m_webp",
          price: 223000,
          link:"https://kream.co.kr/products/62385"
        },
        {
          name:"Nike Dunk Low Retro PRM Graffiti",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MTlfMTAw/MDAxNjUyOTUwNzQzMjM2.ouPPxxF-4cWTNIHzxNeP5A_R7WUqB7W0VTFtPMhyLy4g.pJ9_acx650hKWcmdWcyYsma3UqEwd-z3Q-4KKurMsCUg.PNG/a_8682770fbd3642c081275041112912e2.png?type=m_webp",
          price: 139000,
          link:"https://kream.co.kr/products/62202"
        },
        {
          name:"Crocs X Salehe Bembury Pollex Clog Stratus",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjBfMjU1/MDAxNjUzMDM5NzMxMDI0.LxKyutz4m3KM615kuvbhFXgOukOqwJSa5XOzeRlBrSAg.Aps3EXxPjcMb_LztAA-TUcFiuWGgQwil2VRW_-8-49Ag.PNG/a_8e0d89ceda7f45ed97c78db7f6bb5f96.png?type=m_webp",
          price: 300000,
          link:"https://kream.co.kr/products/62430"
        },
        {
          name: "New Balance X Joe Freshgoods 9060 Inside",
          img: "https://kream-phinf.pstatic.net/MjAyMjA1MjBfNzQg/MDAxNjUzMDIyNjc3MjE2.SSubVvt6X-EpACLHI84D-bubgkk8KmrkIZ9nnWONZksg.eWoe1xg_MMbHfE17IZv5Ck1Ag13bWf8IZlpPBM5T9hMg.PNG/a_9c615b7d859f4ba4987a80b0e0067896.png?type=m_webp",
          price : 400000,
          link: "https://kream.co.kr/products/62330"
        }
      ]
    }
  },
  mounted() {
    // this.readGoodsInfo()
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
    }
  }

}
</script>

<style scoped>

</style>
