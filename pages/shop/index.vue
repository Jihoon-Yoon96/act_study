<template>
  <v-container class="mt-5">
<!--    상단 제목-->
    <v-row class="justify-center">
      <h2>SHOP</h2>
    </v-row>
<!--    상단 제목 END-->

<!--    상품 종류 필터-->
    <v-row dense class="pt-0 pb-0 mt-5">
      <v-col cols="auto">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" />
          </svg>
      </v-col>
      <v-col cols="auto"><v-card elevation="0" class="pa-1" outlined>럭셔리</v-card></v-col>
      <v-divider vertical class="mr-1 ml-1"/>
      <v-col cols="auto" v-for="(cat,i) in category" :key="i">
        <v-card elevation="0" class="pa-1 ma-0" outlined>{{cat.name}}</v-card>
      </v-col>
    </v-row>
<!--    상품 종류 필터 END-->

<!--    인기 상품 필터-->
    <v-row align="end" dense>
      <v-col cols="auto" class="ml-7" v-for="(pop,i) in popular" :key="i">
        <v-img
          :src=pop.img
          style="width:80px"
        />
        <h4 class="text-center">{{pop.name}}</h4>
      </v-col>
    </v-row>
<!--    인기 상품 필터 END-->
  </v-container>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      category:[
        {
          name:"신발",
        },
        {
          name:"의류",
        },
        {
          name:"패션잡화",
        },
        {
          name:"라이프",
        },
        {
          name:"테크",
        },
      ],
      popular:[
        {
          name:"아식스",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjdfMzUg/MDAxNjUzNjE5Mzc4ODM0.CsbKvCK97uM5Z9N4qgpHsxNZWPRghxZwuAUh6nvrYxwg.bZInfSTY0UZYcmdGMry2om24EHkOQKvy8nQ6Cr47V40g.PNG/a_a96bef8d1a744c64a5da2ac411134518.png"
        },
        {
          name:"야스히로",
          img:"https://kream-phinf.pstatic.net/MjAyMjA2MDNfMTAw/MDAxNjU0MjQ5ODk1ODgw.cifxj4Wz_x7eGWKIby3ABvJvHg0UEnEXzb9isyqOnDUg.lYw2nPZqHY8CMjAKHt5dNTlT88RFcLy8XlnWHzRhVZgg.PNG/a_fcbac19e2717463c9b2b77647b338761.png"
        },
        {
          name:"에어포스",
          img:"https://kream-phinf.pstatic.net/MjAyMjA2MDNfMTM3/MDAxNjU0MjQ5ODcwNjQ4.PU28TasmCXPphhDNFeOqzmNWbPZHww3k0adn1Bgl17og.iSOKJ_ULr5L3O7Na1fUpgs-lT_gohWhXEk-wtjT6k9cg.PNG/a_d67acfcde80449b7bd7bea16e26f43bf.png"
        },
        {
          name:"뉴발란스",
          img:"https://kream-phinf.pstatic.net/MjAyMjAyMDhfMjUw/MDAxNjQ0Mjg2Mzc1MDU1.zkfzhRjqZ5S-Ma651I68_2PM_H1QbJZcZxnx-khfb24g.UQZjqYlLQPwWiSe-iCNpzaKiIUPIAKq_7WqxJiZ3ARAg.PNG/a_54441868050c4a77b8c3edd9aa4dd514.png"
        },
        {
          name:"YEEZY",
          img:"https://kream-phinf.pstatic.net/MjAyMjA0MTVfMTUz/MDAxNjQ5OTg5MDczNDA3.hhiBK1ynOPk9mFupqNxm4M-2s1axxZgyUrKrekwkF5sg.v28z4WEz79-MLTNEPM3hfrw31lVHw00D7FbWs6keKpUg.PNG/a_14f8111ca1e34a688cf2e7be50d47a41.png"
        },
        {
          name:"스캇",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjdfNDYg/MDAxNjUzNjE3MzYzMjY4.MVI2ZzZghPLubPOth45Xm2m2dZAWL-h-QhbGdP5fh6Ig.LXtPhQW7Q6kc97DoercRFuHBNKqMW-_ejZYG01dTQGUg.PNG/a_62450e133eb947978193af7f14da70b6.png"
        },
        {
          name:"덩크",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MTNfMTUy/MDAxNjUyNDMzNjY1ODI1.yQAnJUt-6xMrR0EQXNb3IpyJBKlYgYX7oTagjx5sxjsg.7VTE82e-ttonzNwifZ_T4To0KlJkBXDzmXkxuSpR1lAg.PNG/a_92057ca6cc3b41e7a0c1434d602bc498.png"
        },
        {
          name:"Jordan",
          img:"https://kream-phinf.pstatic.net/MjAyMjAzMThfMjU3/MDAxNjQ3NTgxMTM3ODI3.0ANFWzIQbN9Ff5yj6M_SQgJxbHWoJA6zZQspzOgzc7cg.wPxu-j2dH52ZfPWDCCCpWGXn0Qk7X0EMqb487qeLu0cg.PNG/a_03df0c99036c42a3bb01c9ff6f8a95ff.png"
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
