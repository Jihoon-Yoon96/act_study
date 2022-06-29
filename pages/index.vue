<template>
  <v-row>
    <v-col cols="auto">
      <div class="top">
        <h2>ACT Shopping</h2>
      </div>
      <div class="main">
        <!--    상단 이벤트 배너    -->
        <v-carousel
          cycle
          interval="3000"
          hide-delimiter-background
          class="mt-10 mb-10"

        >
          <!-- 이미지 -->
          <v-carousel-item class="mt-5 mb-5"
                           v-for="(banner, i) in banner" :key="i">
            <v-card min-width="100%"  class="" :color="banner.color">
              <v-row justify="center" align="center" class="ma-1">
                <v-img
                  contain
                  aspect-ratio="3"
                  :src=banner.img />
              </v-row>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <!--    상단 이벤트 배너    -->

        <!--    발매 상품    -->
        <v-row class="justify-center">
          <v-col cols="3" v-for="(shoes, i) in goods" :key="i">
            <v-card min-height="370px" max-height="370px">
              <v-img
                contain
                aspect-ratio="1"
                :src=shoes.img
              />
              <v-card-title class="text-subtitle-2">{{shoes.name}}</v-card-title>
              <v-card-subtitle>{{shoes.price}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="justify-center mr-1 mb-5 mt-5">
          <!--          <add_goods/>-->
          <v-btn flat outlined color="">더보기</v-btn>
        </v-row>

        <!--    발매 상품    -->

        <!-- style picks! -->
        <v-row><h2 class="ml-3">Style Picks!</h2></v-row>
        <v-row class="mb-10">
          <v-carousel
            height="300"
            hide-delimiters
            hide-delimiter-background
          >
            <v-carousel-item v-for="(img,i) in goods" :key="i">
              <v-sheet
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-col cols="2" v-for="(img2,i) in style" :key="i">
                    <v-card flat><v-img min-height="230px" max-height="230px" :src="img2.img"/></v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-row>
        <!--    style picks!    -->

        <!--        brand focus 모두가 좋아하는 브랜드-->
        <v-row><h2 class="ml-3 font-weight-bold">Brand Focus <br> <p class="font-weight-light text-subtitle-2">모두가 좋아하는 브랜드</p></h2></v-row>
        <v-row class="mb-10 justify-center">
          <v-col cols="3.5" v-for="(brand, i) in brand" :key="i" class="justify-center">
            <v-card elevation="0" outlined>
              <v-img
                :src="brand.img"
                width="210px"
                height="100px"
              />
            </v-card>
          </v-col>
        </v-row>
        <!--        brand focus 모두가 좋아하는 브랜드-->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import add_goods from "@/pages/view/add_goods";
import axios from "axios";
export default {
  name: "main_view",
  components: {add_goods},
  data(){
    return{
      banner:[
        {
          color:'#F2F1EC',
          img : "https://kream-phinf.pstatic.net/MjAyMjA2MjNfNTIg/MDAxNjU1OTQ4MzcwODc4.wSLcu1o8YjcZhVhi01hb0bzvwQWaFWGe0xDozMjHdU4g.eas82OTk7TQ7baKCW8UHzwZ6gZUjhtQK7VqH5b3wE_Eg.JPEG/a_166449fdcfb540648507ed572da3b6e0.jpg?type=m_2560",
        },
        {
          color:'#F8F7F2',
          img : "https://kream-phinf.pstatic.net/MjAyMjA2MjdfMjAg/MDAxNjU2MzE5Njg4NzEz.Lwuyk3nQtN8DKWCbL8GatqAAT7p79teSrTFVqn6LCpkg.zngDV_2JM-kJILoEHWqEP5n8nOCthXbroHMzua62UBYg.JPEG/a_a698893acea74a40bbc410e98e6e6ad6.jpg?type=m_2560"
        },
        {
          color:'#88381D',
          img : "https://kream-phinf.pstatic.net/MjAyMjA2MjFfMjEx/MDAxNjU1ODAzOTkzMzA1.9WVtGAlWMPatWB2gOEzB-mUiYptsifoz43dxLkbt9Mcg.V0xwjZdRJpDgojtqfO7bD4RSofuhrXE2-zJuBn5Tjmgg.JPEG/a_ea0bed2fe4ac4bfca3214996786da4f8.jpg?type=m_2560",
        },
        {
          color:'#FBE55E',
          img : "https://kream-phinf.pstatic.net/MjAyMjA2MjNfMTUx/MDAxNjU1OTY3NDgwMTYw.K5zhVtXsukIYy7yN-YsfqvlIH7WOO33rNsmu-TsRu-gg.k_NH7QFyksIJ8ymfZkutN55QCWUr12aI5srbSYIlucUg.JPEG/a_36c2ed949c6f4275ae42c2036faae185.jpg?type=m_2560",
        },
        {
          color:'#F8F8F8',
          img : "https://kream-phinf.pstatic.net/MjAyMDExMjNfMjU0/MDAxNjA2MTAxMjMwOTg2.Lru1_LSFReeOGavo_Nv5iHAHEQDrgcRVuUDO_VwQbL0g.if4WbmNvghR7rUXR_MxttP9QrAVnboaK1IAxnaF0d6kg.JPEG/p_e1a64ddc68fe4c16b7e2390ee5daa6f4.jpg?type=m_2560"
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
      ],
      style:[
        {
          id: '',
          img: 'https://kream-phinf.pstatic.net/MjAyMjA2MjdfNzgg/MDAxNjU2MjYzOTc4MDg4.VQ9YMAUYf_zDqsNW3ZramPS_DU9XHo3qObLxu0oQ2Lkg.kHXAmjsRmqNfl3EUrV515VKttNt5G2xKCgjIjZPMPmIg.JPEG/p_2c988db361d3478ea14bb3cf809e45ec.jpeg?type=m'
        },
        {
          id: '',
          img: 'https://kream-phinf.pstatic.net/MjAyMjA2MjdfNTcg/MDAxNjU2MzA2MTg4MjQz.3qwLCSn8b0ByUu4aCZQlsctKeuSwpRvzeT8e1X3klmcg.Ex40iwpc0jIpn_BMe3jHcFI7vtJmu6PFWs99JNlwBKog.JPEG/p_53fda09aeeff46ba92d07933c0b0f2c4.jpeg?type=m',
        },
        {
          id: '',
          img: 'https://kream-phinf.pstatic.net/MjAyMjA2MjZfMjAz/MDAxNjU2MjQ4NzI2NzU4.0AOODF1UKg3OMQ-gUfYiQ-pZ2XgVoTGDGpKuoWjEvhUg.arnleJjIlJcNw8f0NqpTDbz7z5yoprdiGbiL1YN-5Ikg.JPEG/p_ddfd7380e0074a779a6ed3e8469f1616.jpeg?type=m',
        },
        {
          id: '',
          img: 'https://kream-phinf.pstatic.net/MjAyMjA2MjZfMjgy/MDAxNjU2MjExNjMzMzI3.ImyxxRxWr8UsgJ3AVT59JsDuBk-0tjbelvH7fG-Qf2sg.OdUTXSOfjP9pVknZnRjLuiR6WauUdWwz1blyLlnaX9Yg.JPEG/p_48d87602edc249c7be2ec04188eb5e5a.jpeg?type=m',
        },
        {
          id: '',
          img: 'https://kream-phinf.pstatic.net/MjAyMjA2MjdfMjAg/MDAxNjU2Mjg4MDgyMDU3.oEP5AsyuUr2TSu4_JjyFkpApG9HcmsGSkrIhzwzi8iQg.fhnSxYZHsbt_p81Hqqv2I-LzJrb9WijCwyCQ0tlzWrwg.JPEG/p_4bc21ab7de554120bde5b27d0650ea09.jpeg?type=m',
        },
        {
          id: '',
          img: 'https://kream-phinf.pstatic.net/MjAyMjA2MjdfMjQ1/MDAxNjU2MjkyNDMzODA0.0wMp8SZcn5AzvLO5S76-lLwWyFjUYD_mGjSEOv1ulr8g.VfKGRW80FTxTq6jsHYyXaOgf3KBrRBNC-1FvEF5KhPsg.JPEG/p_c9b76b7fd122479bad2526e41646e7e6.jpeg?type=m',
        },
      ],
      brand:[
        {
          title:'Hermes',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjAxMzBfMTM3/MDAxNjQzNDc0MTE0OTI2.ZFfPgXcv3RK6Vwq3uJ-68i_x_GkdwTMkmSviIUeT1Rsg.nK9E3iIb4pwjZJyuuPv6zvll7qinQXp3oCYlvTCQHvQg.JPEG/a_aa5e0d0985e54d5d9a994d259d60d094.jpg?type=m_webp'
        },
        {
          title:'Channel',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjAxMTRfMTQg/MDAxNjQyMTU5MzEwMDYw.ss_73yHanBN6T4rzVF-hJh6Udnl1yuRUpZ-fj2b0cscg.f-z2b4E4ZsnpTfufeMHpQIr0I_VXuH_64cfQ_P-Qe_Ag.JPEG/a_d2137f7263774398a6bcb40ac80a23d9.jpg?type=m_webp'
        },
        {
          title:'Louis Vuiton',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjAxMTRfMjIg/MDAxNjQyMTU5MzUzOTg4.5SpDID1nc_hWWQsZkHhCcSqY73GqyY7WP1O_OqLJUJAg.-slYw9TPwR6CBZV0-V7JBtwidOH-LRaLvHd7aPhVT7cg.JPEG/a_513b4583ddab4d92bbe57b339be50176.jpg?type=m_webp'
        },
        {
          title:'Cartier',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjA0MTRfNTQg/MDAxNjQ5OTIzMjcyMTYx.RsyilX1oyq6H3NitCMjy7x2a7qQt9jsn9Lz5_wmXxz8g.mjpvQhbh320BJPbm6xr82a49phjuIxQPmZWQiuuTXdkg.JPEG/a_bdf6bfcbf4b341989ab1d3e47a8ca264.jpg?type=m_webp'
        },
        {
          title:'Rolex',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjAzMjhfMTAx/MDAxNjQ4NDYyODQ4OTE5.GeEMp7eZbcXScJymhCOafuSNDIO-UcJ3I7fsC3Lc4jgg.rc2wWiFpIOG3swARtLgE5Un7XNLyjV7DQm20BX7TeP0g.JPEG/a_0a2d24224cd54d9b9d8adb17ea9e5cf8.jpg?type=m_webp'
        },
        {
          title:'Dior',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjA2MjJfMTAw/MDAxNjU1ODYwNjQyMjY1.VYHV7omf-OSEbzRf2q0rbM8chr3NPE48cJctrc3Ro-Qg.hH5pmBzYRTQ6MRgnRqMqQ3XJQQzbt8YLLBAP4JeG6Vkg.JPEG/a_c4ca15fc9ef543cab4cc7bf95aa504fe.jpg?type=m_webp'
        },
        {
          title:'WooYoungMi',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjA2MjJfMjUy/MDAxNjU1ODYwNjc0NTQx.Ko99LhrbDP8UGu4Myk2SgAT5naqpVCxAuFD2IPzeK7sg.btlFi_yPYqat7oDxk37Rrc0-BrxEs_-Tbb76oCXK8-8g.JPEG/a_3c7d846139794f86b403b620bb6c16b7.jpg?type=m_webp'
        },
        {
          title:'Parda',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjAzMjhfMjMg/MDAxNjQ4NDYyOTU5Nzcx.RJnl3oEgQBZ2as_lvroRmi4ERSmXn4usW1ENJ4-7RCgg.GKhTIE_k-2iHAlZ2vHL__QPEZrrXuJ5HNaXA-C_0DDAg.JPEG/a_458b5f3676814738a902f8ddfad9b007.jpg?type=m_webp'
        },
        {
          title:'Balenciaga',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjAzMjhfMTA5/MDAxNjQ4NDYyODc5Mjk1.hKngFDq7Fz4m2t4f2Y8w_fUHgxUjXm4EKiKThGURjn4g.A0fHdsxWqRLbzImhPMP7eLueICCLUeCasKoHaIBKV8Eg.JPEG/a_e87a1eee28bd4bc28f4aec388772a889.jpg?type=m_webp'
        },
        {
          title:'apple',
          url: '',
          img:'https://kream-phinf.pstatic.net/MjAyMjA0MjhfMjE4/MDAxNjUxMTQxMTAyOTU2.kLL2PcqwmvFAEyl8eyNb_cNezB7_V2OiWDijxJXEtSgg.Bz4zybudLUiTvgQ64kAYq_J5q3gmZ_GgssB7jtoHhrYg.JPEG/a_7d6d0a0b2cad48689634f46ccf2766cb.jpg?type=m_webp'
        },
      ]
    }
  },
  mounted() {
    // this.getGoodsInfo()
  },
  methods:{
    getGoodsInfo(){
      axios.get(url)
        .then((res)=>{
          console.log(res.data)
          // this.goods = res.data
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
