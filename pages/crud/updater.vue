<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          depressed
          color="white">
          <v-icon color="blue">mdi-wrench</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-toolbar color="primary" class="">
          <v-toolbar-title class="text-h5 white--text font-weight-bold lighten-2">
            상품 수정
          </v-toolbar-title>
          <v-spacer/>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="g_name"
                    label="상품명"
                    :rules="nameRules"
                    :counter="30"
                    :placeholder="goodsname"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="g_price"
                    label="상품 가격"
                    :rules="priceRules"
                    :counter="10"
                    :placeholder="price"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-file-input
                    show-size
                    :counter="1"
                    multiple
                    small-chips
                    :rules="imgRules"
                    label="상품 이미지"
                    v-model="g_img"
                  ></v-file-input>

                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            수정 완료
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "update_delete",
  data(){
    return{
      dialog: false,
      valid: false,
      goodsname: '',
      nameRules: [
        v => !!v || '상품명을 입력해주세요',
        v => v.length <= 40 || '상품명은 40자 이내로 수정 가능합니다.',
      ],
      price: '',
      priceRules: [
        v => !!v || '가격을 입력해주세요',
        v => v >= 100 || '100원 이상만 수정 가능합니다.',
      ],
      img: '',
      imgRules:[
          v => !!v || '이미지를 등록해주세요',
          v => !v || v.size < 30000000 || '30 MB 이하의 파일만 수정 가능합니다.',
      ]
    }
  },
  props:{
    g_name: String,
    g_price: Number,
    g_img: Object
  },
  computed:{
    fromParents : function(){
      return this.goodsname = this.name
    }
  },
  methods:{
    updateGoodsInfo(){
      axios.post(url,{
        name : this.goodsname,
        price : this.price,
        img : this.img
      })
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          alert('등록 오류')
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
