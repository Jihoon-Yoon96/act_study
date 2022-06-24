<template>
  <v-app-bar app dense elevation="0" height="80px" class="pr-16">
    <!-- SION Card logo image -->
    <router-link to="/" class="ml-16">
      <v-icon>mdi-shopping</v-icon>
    </router-link>
    <router-link to="/view/main_view" tag="button">
      <v-col cols="auto" class="text-h5"> ACT SHOPPING </v-col>
    </router-link>

    <v-spacer></v-spacer>

    <!-- My menu -->
    <v-menu offset-y open-on-hover v-for="(menu, i) in page" :key="i">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  plain v-bind="attrs" v-on="on" :to=menu.url> {{menu.name}} </v-btn>
      </template>

<!--      <v-list v-show="menu.children" v-for="(child, i) in menu.children" :key="i">-->
<!--        <v-list-item class="" :to=child.menu_url>-->
<!--          <v-list-item-title>-->
<!--            &lt;!&ndash; <router-link class="text-decoration-none" to="/myinfo"> &ndash;&gt;-->
<!--            {{child.menu}}-->
<!--            &lt;!&ndash; </router-link> &ndash;&gt;-->
<!--          </v-list-item-title>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
    </v-menu>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn  plain v-bind="attrs" v-on="on" @click="nowSearching"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> </v-btn>
      </template>
    </v-menu>
  </v-app-bar>
</template>

<script>
// import axios from 'axios'


export default {
  name: "Bar",
  components: {  },
  props:{
    searching: Boolean,
  },
  data: () => ({
    page:[
      {
        name:"STYLE",
        url:""
      },
      {
        name:"SHOP",
        url:"/shop"
      },
      {
        name:"ABOUT",
        url:""
      },
    ]
  }),
  mounted() {

  },
  methods: {
    nowSearching(){
      this.$store.commit("search/searchStatus",true)
    },

  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
