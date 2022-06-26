<template>
  <v-system-bar app class="grey darkness-5">
    <v-spacer/>
    <div v-if="this.$store.state.user==null" class="mr-16">
    <!-- <div class="mr-16"> -->
      <router-link to="/login/login" class="white--text text-caption mr-2" tag="button">로그인</router-link>
      <span class="mr-2 ml-2 white--text">|</span>
      <router-link to="/signin/signin" class="white--text text-caption ml-2 mr-16" tag="button">회원가입</router-link>
    </div>
    <div v-else class="mr-16">
        <router-link class="mr-2" to="/admin" tag="button" v-if="this.$store.getters.getAuth.member_id === 'admin'"> 관리자 페이지로 이동 </router-link>
        <router-link to="/my_main" ><button class="white--text text-caption mr-2">{{this.$store.state.user}}</button></router-link>
        <button disabled  class="white--text text-caption mr-2"> 님 반갑습니다. </button>
        <span class="mr-2 ml-2 white--text">|</span>
        <button @click="mypage" class="white--text text-caption mr-2"> 마이페이지</button>
        <button @click="logout" class="white--text text-caption ml-2 mr-16" tag="button">로그아웃</button>
    </div>
  </v-system-bar>
</template>

<script>
export default {
  name: "systembar.vue",
  methods:{
    // logout(){
    //     sessionStorage.removeItem('JSESSIONID');
    //     this.$router.go() //새로고침
    // },
    // setExpire(){
    //     if(!this.$store.state.auth) return;
    //     this.preTime = new Date();
    // },
    mypage(){
        this.$router.push('mypage')
    },
  },
  data:()=>({
    preTime : new Date(),
    timer : null
  }),
  mounted(){
    this.timer=setInterval(this.setExpire,1000);
  },
  destroyed(){
    clearInterval(this.timer);
  },
  computed:{
    // minutes: function(){
    //     return Number.parseInt((this.$store.state.auth.expire-this.preTime)/1000/60);
    // },
    // seconds: function(){
    //     const num = Number.parseInt((this.$store.state.auth.expire-this.preTime)/1000%60);
    //     if(this.minutes==0 && num<=0){
    //         sessionStorage.removeItem('JSESSIONID');
    //         this.$store.commit('updateAuth');
    //         return null;
    //     }
    //     const result="0"+num;
    //     return result.substring(result.length-2,result.length);
    // }
  }



}
</script>

<style scoped>

</style>
