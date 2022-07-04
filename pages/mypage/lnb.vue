<template>
  <v-container>
    <v-row class="mb-10"><router-link to="/mypage" style="text-decoration:none; color:black"><h2>마이 페이지</h2></router-link></v-row>
    <v-row><h3>쇼핑 정보</h3></v-row>
    <v-row v-for="(shop, i) in shop_info" :key="i" class="mt-5">
      <router-link :to="shop.url">
        {{shop.title}}
      </router-link>
    </v-row>

    <v-row class="mt-10"><h3>내 정보</h3></v-row>
    <v-row v-for="(my, i) in myinfo" :key="i" class="mt-5">
      <router-link :to="my.url">
        {{my.title}}
      </router-link>
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
          url: "/mypage/shop_info/buy_list",
        },
        {
          title: "판매 내역",
          url: "/mypage/shop_info/sell_list",
        },
        {
          title: "관심 상품",
          url: "/mypage/shop_info/like",
        },
      ],
      myinfo: [
        {
          title: "프로필 정보",
          url: "/mypage/my_info/profile",
        },
        {
          title: "주소록",
          url: "/mypage/my_info/address",
        },
        {
          title: "결제 정보",
          url: "/mypage/my_info/buy",
        },
        {
          title: "판매 정산 계좌",
          url: "/mypage/my_info/sell",
        },
        {
          title: "포인트",
          url: "/mypage/my_info/point",
        },
      ],
    };
  },
};
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
