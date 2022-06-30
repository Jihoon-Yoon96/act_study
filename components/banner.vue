<template>
  <v-card id="sld_bnr">
    <div class="img-slide">
      <div class="slide-inner">
        <v-col class="v-slide-item" :key="i"  v-for="(slide,i) in slides" :current-slide="currentSlide" :index="i" v-show="currentSlide === i">
          <a v-bind:href="slide.url"><v-img :src=slide.img style="height: 200px; width: 86%;" /></a>
        </v-col>
        <v-btn class="slide-control left" @click="prev" ><</v-btn>
        <v-btn class="slide-control right" @click="next" right >></v-btn>
        <v-btn @click="stop">o</v-btn>
        <!--<v-btn v-else @click="start">o</v-btn>-->
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  el : '#sld_bnr',
  data () {
    return {
      slides: [
        { img : 'https://kream-phinf.pstatic.net/MjAyMjA0MDVfMjg3/MDAxNjQ5MTQxNDQ2MzE5.KmWw8NmaqtTEZQUwNB-qnk94UoRvQjTBz6HE-wcsUPwg.uKnTAOmBZVasnEheK77-WjBLVGkrxaev02tgaOLhqz0g.JPEG/a_e84bc8e4c55041b29479627fc78a2469.jpg', url : 'https://www.instagram.com/kream.co.kr'},
        { img : 'https://kream-phinf.pstatic.net/MjAyMTA4MTBfODIg/MDAxNjI4NTM2Nzg2OTgw.w-hLutujBYPkNUNO9MH6D5xwwbEzmPUBgGNna7Fe2TQg.PhY3IcBEGM-4uoXqe9Yf0mAsRxJzGGDJ6HAei8RhSAMg.JPEG/a_c3e55535dd75452b802e180c312e1525.jpg', url : 'https://kream.co.kr/about/seller_reception' },
        { img : 'https://kream-phinf.pstatic.net/MjAyMjA2MDdfMTc5/MDAxNjU0NTkyMTUyNDAy.du-ctBDgySk7B78hxhR-tkmZJT5S2-Fihroyf7d_JGsg.f5Pswl5b9yH7-MdLzDM5hBYH_ZvOouQBS_Bjpc8rtDQg.JPEG/a_b370ec6542074f538335453254638ac3.jpg', url : 'https://kream.co.kr/products/60762'},
        { img : 'https://kream-phinf.pstatic.net/MjAyMjA2MDlfMTgx/MDAxNjU0NzYyOTcxMzc4.RWUtSBJl615dQIygGbD_VoXyyAfDJnE54oQjQNR16qIg.Dc2vu6W7Gk2iZI3LVghLzb2rGR-fZGQX-k3PPVu5RO4g.JPEG/a_1c02ac43677c4055aca3a21f864e93f3.jpg', url : 'https://kream.co.kr/products/62749'}
      ],
      currentSlide : 0,
      slideInterval : null,
      isPlay: false
    }
  },
  methods: {
    setCurrentSlide (index){
      this.currentSlide = index;
    },
    prev() {
      const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length -1;
      this.setCurrentSlide(index);
    },
    next(){
      const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    },
    stop(){
      clearInterval(this.slideInterval)
    },
    start(){
      this.isPlay = true
      this.slideInterval = setInterval(() => {
        this.next()
      }, 3000)
    }
  },
  mounted() { //이미지 자동 슬라이드
    this.slideInterval = setInterval(() => {
      this.next()
    }, 3000)
  },
  beforeUnmount () {
    clearInterval(this.slideInterval);
  },
};


</script>
<style>
.img-slide {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-inner {
  display: block;
  position: relative;
  width: 100%;
  height: 200px;
  margin: 10px;
  overflow: hidden;
}

.v-slide-item{
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.v-slide-item > v-img {
  margin: auto;
  text-align: center;
}

.slide-control {
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  cursor: pointer;
}

.left{
  left: 0;
}

.right{
  right: 0;
}
</style>
