<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto"><h2>정산 계좌 변경</h2></v-col>
    </v-row>

    <v-row  class="mt-5 ml-5 align-center">
      <v-card flat outlined color="grey lighten-2" class="pa-2">
        <h6>등록된 계좌 정보</h6>
        <span>하나은행 7609************* / 윤**</span>
      </v-card>
    </v-row>



    <v-row  class="mt-10 align-center">
      <v-col cols="6">
        <v-row>
          <v-select
            label="은행명"
            v-model="bank_selected"
            :items="bank"
          >
          </v-select>
        </v-row>

        <v-row>
          <v-text-field
            label="계좌번호"
            v-model="bank_account"
          >
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field
            label="예금주"
            v-model="bank_owner"
          >
          </v-text-field>
        </v-row>

        <v-row justify="center">
          <v-btn flat color="black" class="white--text">변경하기</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "sell",
  data(){
    return{
      bank_selected:'하나은행',
      bank_account:'76091034930107',
      bank_owner:'윤지훈',
      bank:[
        "국민은행",
        "신한은행",
        "우리은행",
        "하나은행",
        "기업은행",
        "농협은행",
        "SC은행",
        "카카오뱅크",
        "케이뱅크",
        "신협",
        "새마을금고연합회",

      ]
    }
  },
  methods:{

  },
  computed:{

  }
}
</script>

<style scoped>

</style>
