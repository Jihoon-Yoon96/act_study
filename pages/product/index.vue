<template>
  <v-row>
    <v-col cols="6">
      <v-carousel
        cycle
        interval="3000"
        hide-delimiter-background
        class="mt-10 mb-10"
        width=""
      >
        <!-- 이미지 -->
        <v-carousel-item class="mt-5 mb-5"
                         v-for="(good, i) in goods" :key="i">
          <v-card min-width="100%"  class="">
            <v-row justify="center" align="center" class="ma-1">
              <v-img
                contain
                aspect-ratio="1"
                :src=good.img />
            </v-row>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="6"><nuxt-child/></v-col>
  </v-row>
</template>

<script>
export default {
  name: "product.vue",
  components:{

  },
  data(){
    return{
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
      ],
    }
  }
}
</script>

<style scoped>

</style>
