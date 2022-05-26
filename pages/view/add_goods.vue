<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            depressed
            color="white">
            <v-icon  color="blue" large>mdi-plus</v-icon>
          </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          상품 추가
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="goodsname"
                    label="상품명"
                    :rules="nameRules"
                    :counter="10"
                    :placeholder="goodsname"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="price"
                    label="price"
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
                    counter
                    multiple
                    small-chips
                    :rules="imgRules"
                    label="상품 이미지"
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
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "add_goods.vue",
  data(){
    return{
      dialog: false,
      valid: false,
      goodsname: '',
      nameRules: [
        v => !!v || '상품명을 입력해주세요',
        v => v.length <= 20 || '상품명은 20자 이내로 가능합니다.',
      ],
      price: '',
      priceRules: [
        v => !!v || '가격을 입력해주세요',
        v => v >= 100 || '100원 이상만 등록 가능합니다.',
      ],
      img: '',
      imgRules:[
        v => !!v || '이미지를 등록해주세요',
        v => !v || v.size < 20000000 || '20 MB 이하의 파일만 등록 가능합니다.',
      ]
    }
  },
  methods:{
    sendGoodsInfo(){
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
