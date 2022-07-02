<template>
  <v-container>
    <v-row class="justify-center" id="items">
      <v-col v-for="(shoes, i) in goods" :key="i">
        <v-card class="detail" min-height="400" min-width="400">
          <v-img contain aspect-ratio="1" :src=shoes.img />
        </v-card>
      </v-col>
      <v-col  v-for="(shoes, i) in goods" :key="i">
        <v-card class="detail">
        <h1>{{shoes.name}}</h1> <br/>
          <v-card-actions>
          <v-btn @click="openDialog">사이즈</v-btn>
            <p v-bind:typeof="Number">{{selected_size}}</p> <!--size 클릭시 (2) 데이터 해당 데이터 담기 -->
          </v-card-actions>
          <v-dialog v-model="dialog">
            <v-card>
              <v-card-title class="dlog-title">사이즈표</v-card-title>
              <b-card-text>
                <v-form>
                  <v-card class="size-dialog" v-for="(d, i) in size" :key="i" @click="clickSize(i)"> {{d.sz}} <br/> {{d.buy}}</v-card> <!--size 클릭시 (1) -->
                </v-form>
              </b-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="cslBtn">취소</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-card class="now right">
          <v-col>즉시 구입 <br/> 180,000원 </v-col>
          </v-card>
          <v-card class="now left">
            <v-col>즉시 판매 <br/> 160,000원 </v-col>
          </v-card> <br/><br/><br/><br/>
          <v-card style="height: 40px; text-align: center; padding-top: 10px" @click="onBtnClick"><strong>관심 상품 {{ $store.state.count }}</strong></v-card><br/> <!-- 클릭시 count -->
          <v-card><strong>상품 정보</strong></v-card><br/>
          <v-card class="parent" v-for="(shoes, i) in goods" :key="i">
            <v-col class="child">모델 번호 <br/><strong>{{shoes.modelNumber}}</strong></v-col>
            <v-col class="child">발매일 <br/><strong>{{shoes.releaseDate}}</strong></v-col>
            <v-col class="child">색상 <br/><strong>{{shoes.color}}</strong></v-col>
            <v-col class="child">발매가격 <br/><strong>{{shoes.price}}</strong></v-col>
          </v-card>
          <Speed_deliver />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import shop_customer from "@/pages/shop/shop_customer";
import Speed_deliver from "@/components/speed_deliver";
import {mapMutations} from 'vuex'
import Vuex from 'vuex' // 관심 상품 click

const store = new Vuex.Store({ //관심상품 클릭 start
  state: {
    count: ''
  },
  mutations: {
    increment (state, Number) {
      state.count++
    }
  }
}) //관심상품 end

export default {
  components : [Speed_deliver],
  props : [shop_customer],
  data(){
    return{
      selected_size: '',
      goods:[
        {
          name:"Jordan 1 Low Gold Starfish",
          img:"https://kream-phinf.pstatic.net/MjAyMjA1MjBfMjE5/MDAxNjUzMDMwMzkxODY3.PYVSjKRLfHXBtmc3d3bsdgUgtSiE0G0jVSSJBg17nG0g.xWyI4mVG82ZjphChIV_ba83pzEzQkfBjn9bn-Vhz_UIg.PNG/a_9a56605aabe6476ba812bc2ea2502906.png?type=m_webp",
          price: 223000,
          link:"https://kream.co.kr/products/62385",
          modelNumber : 'DD1391-100',
          releaseDate : '21/10/14',
          color : 'WHITE/BLACK',
          count : 0,
          todoSize: 0,
          fast:true
        }
      ],
      size : [
        {sz : 220, buy : 180000, sell : 180000},
        {sz : 230, buy : 190000, sell : 190000},
        {sz : 240, buy : 200000, sell : 200000},
        {sz : 250, buy : 210000, sell : 210000},
        {sz : 260, buy : 220000, sell : 220000}
      ],
      dialog : false,
      type : Number,
      form: {
        title : '모든사이즈',
        itemPrice : '',
      },
    }
  },
  computed:{
    todos () {
      return this.$store.state.todo.list;
    }
  },
  methods:{
    openDialog(){
      this.form.price = ''
      this.dialog = true
    },
    cslBtn() {
      return this.dialog = false;
    },
    clickSize(num) { //size 클릭시 데이터 해당 데이터 담기
      this.selected_size = this.size[num].sz
      this.dialog = false
      console.log(this.goods.count)
    },
    onBtnClick: function(){ //관심상품 click
      store.commit('increment');
      this.goods.count += this.size.sz
      console.log(store.state.count)
    }
  }
}
</script>

<style>
.detail{
  width: 100%;
  height: 500px;
}

.detail.right{
  width: 50%;
  float: right;
  box-sizing: border-box;
}

.detail.left{
  width: 50%;
  float: left;
  box-sizing: border-box;
}

.dlog-title{
  text-align: center;
}

.size-dialog{
  width : 100px;
  text-align: center;
}

.now{
  width: 260px;
  text-align: center;
  position: absolute;
}

.right{
  right: 10px;
  background-color : red;
}

.left{
  left: 10px;
  background-color : blue;
}

.parent{
  display: flex;
  text-align: center;
}

.child{
  flex:1;
}
</style>
