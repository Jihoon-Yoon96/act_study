<template>
  <v-card>
    <v-data-table :headers='headers' :items="items">
      <template v-slot:items="props">
        <nuxt-link to="#">
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.content }}</td>
          <td>{{ props.item.date }}</td>
        </nuxt-link>
      </template>
    </v-data-table>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="openDialog('create')">1:1 문의 등록</v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>문의 하기</v-card-title>
        <b-card-text>
          <v-form>
            <v-card-title>제목</v-card-title>
            <v-text-field v-model="form.title">제목</v-text-field>
            <v-card-title>상품명</v-card-title>
            <v-text-field v-model="form.itemName">상품명</v-text-field>
            <v-card-title>내용</v-card-title>
            <v-text-field v-model="form.content">상품 설명</v-text-field>
            <v-card-title>첨부파일</v-card-title>
            <v-file-input v-model="form.img"></v-file-input>
          </v-form>
        </b-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="create">문의 등록 하기</v-btn>
          <v-btn @click="cslBtn">취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {text: '제목', value : 'title'},
        {text: 'id', value: 'id'},
        {text: '상품명', value: 'name'},
        {text: '내용', value: 'content'},
        {text: '날짜', value: 'date'}
      ],
      items:[],
      dialog: false,
      form: {
        title : '',
        itemName : '',
        content : '',
        img : '',
        date : ''
      },
      mode: 'create',
      selectItem : null
    }
  },
  mounted() {

  },
  methods: {
    openDialog(mode, sel){
      this.mode = mode
      if(mode === 'create') {
        this.form.title = ''
        this.form.itemName = ''
        this.form.content = ''
        this.form.date = ''
        this.form.img = ''
      } else {
        this.selectItem = sel
      }
      this.dialog = true
    },
    async create(){
      const item = {
        id : this.form.title,
        title : this.form.itemName,
        content : this.form.content,
        price : this.form.date,
        img : this.form.img
      }
      this.items.push(item)
      this.dialog = false
    },
    cslBtn : function (){
      if(confirm('문의하기를 취소하시겠습니까?')){
        return this.dialog = false;
      }
    },
  }
}
</script>

<style>
.carousel{
  max-height: 100px;
  height: 100px;
}
</style>

