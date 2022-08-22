<template>
    <v-navigation-drawer permanent>
<!--      <v-list-item>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title class="text-h6">-->
<!--            Application-->
<!--          </v-list-item-title>-->
<!--          <v-list-item-subtitle>-->
<!--            subtext-->
<!--          </v-list-item-subtitle>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->



      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
<!--          <v-list-item-icon>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-icon>-->

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: "lnb",
  data () {
    return {
      items: [
        { title: '카테고리' },
        { title: '브랜드'},
        { title: '성별' },
        { title: '컬렉션' },
        { title: '신발 사이드' },
        { title: '의류 사이즈' },
        { title: '가격' },
      ],
      right: null,
    }
  },
}
</script>

<style scoped>

</style>
