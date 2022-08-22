<template>
  <v-container>
<!--  상품 정보  -->
    <h3 class="mt-10 mb-3">상품 정보</h3>
    <v-divider  />

    <v-row class="mb-3">
      <v-col cols="3"><div class="mt-2">모델번호</div> <h4 class="">555088-105</h4></v-col> <v-divider vertical inset class="mt-5" />
      <v-col cols="3"><div class="mt-2">출시일</div> <h4 class="">20/11/21</h4></v-col> <v-divider vertical inset class="mt-5" />
      <v-col cols="3"><div class="mt-2">컬러</div> <h4 class="">Red<br>White<br>Brown</h4></v-col> <v-divider vertical inset class="mt-5" />
      <v-col cols="3"><div class="mt-2">발매가</div> <h4 class="">198,000원</h4></v-col>
    </v-row>
    <v-divider  />
<!--  상품 정보  -->

<!--  시세  -->
    <v-row class="mt-10" justify="space-around">
      <v-col cols="auto">시세</v-col>
      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="secondary"
              v-bind="attrs"
              v-on="on"
            >
              {{selected_size}}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(size, i) in sizes"
              :key="i"
            >
              <v-list-item-title @click="selected_size = size.title">{{ size.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

<!--  시세  -->
  </v-container>
</template>

<script>
export default {
  name: "product_detail",
  data: () => ({
    selected_size : '모든 사이즈',
    sizes: [
      { title: 220 },
      { title: 230 },
      { title: 240 },
      { title: 250 },
      { title: 260 },
      { title: 270 },
      { title: 280 },
    ],
  }),
}
</script>

<style scoped>

</style>
