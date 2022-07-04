<template>
  <v-row class="">
    <v-col cols="2"> <lnb /> </v-col>
    <v-col cols="10">
      <nuxt-child/>
    </v-col>
  </v-row>
</template>

<script>
import lnb from "@/pages/mypage/lnb.vue";
export default {
  components: {
    lnb,
  },
  date() {
    return {
        buy_list:[
            {
                name:"Nike X Peaceminusone Air Force 1 Low Para-Noise 2.0",
                price: "-",
                date: "기한만료",
                img: "https://kream-phinf.pstatic.net/MjAyMjA1MjZfMTg2/MDAxNjUzNTU1MzY3MzE1.DDbAGNuGG5YgTLbIfaVYOgKA9g8ZxWwvIaXqWpLUHdwg.yuERRp-mmVo8ogY1grh_awLL4rVwTx_aIN-OZLAPJ7cg.JPEG/a_8d3ff19675dd43c9a1335d4286e277db.jpg?type=m_webp"
            },
            {
                name:"Nike Dunk Low Retro PRM Halloween Family",
                price: "-",
                date: "기한만료",
                img: "https://kream-phinf.pstatic.net/MjAyMjA0MjlfMTE2/MDAxNjUxMjIxODI1NDgx.xKaUXrOWkJPXur9W0FRXEftfRU23rgHKXzPYKPpXjycg.AvZbuSWESMqtfpVOwPK-r6_P5SGghFVSVsR5qczePQAg.JPEG/a_074c7cc1b05c4d319e4364bb5a5380cb.jpg?type=m_webp"
            },
        ]
    };
  },
};
</script>

<style>
</style>
