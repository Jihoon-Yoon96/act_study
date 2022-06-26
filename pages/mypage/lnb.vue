<template>
  <v-container>
    <v-row class="mb-10"><router-link to="/mypage" style="text-decoration:none; color:black"><h2>마이 페이지</h2></router-link></v-row>
    <v-row><h3>쇼핑 정보</h3></v-row>
    <v-row v-for="(shop, i) in shop_info" :key="i" class="mt-5">
      <!--<router_link :to=shop.url>-->
        {{shop.title}}
        <!--</router_link>-->
    </v-row>

    <v-row class="mt-10"><h3>내 정보</h3></v-row>
    <v-row v-for="(my, i) in myinfo" :key="i" class="mt-5">
      <router_link :to=my.url>{{my.title}}</router_link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      shop_info: [
        {
          title: "구매 내역",
          url: "",
        },
        {
          title: "판매 내역",
          url: "",
        },
        {
          title: "보관 판매",
          url: "",
        },
        {
          title: "관심 상품",
          url: "",
        },
      ],
      myinfo: [
        {
          title: "프로필 정보",
          url: "",
        },
        {
          title: "주소록",
          url: "",
        },
        {
          title: "결제 정보",
          url: "",
        },
        {
          title: "판매 정산 계좌",
          url: "",
        },
        {
          title: "포인트",
          url: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>