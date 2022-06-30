<template>
  <container>
    <div v-for="item in todos" v-bind:key="item.id">
      <input type="checkbox" :checked="item.done" @change="toggle(item)" />
      <span :class="{done: item.done}">{{item.title}}</span>
      <button @click="remove(item)">지우기</button>
    </div>
    <div id="app">
      <button @click="onBtnClick">클릭</button>
    </div><!--store count up test -->
    <p>
      <input type="text" placeholder="할일 test" v-model="todoTitle" @keyup.enter="addTodo" />
      <button @click="addTodo">입력</button>
    </p>
  </container>
</template>

<script>
import {mapMutations} from 'vuex'
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default{
 data: function(){
   return {
     todoTitle: '',
     counter:0
   };
 },
  computed:{
   todos () {
     return this.$store.state.todo.list;
   }
  },
  methods : {
   countUp (){
     this.$store.commit('numb')
     this.counter += 1
   },
   addTodo (){
     this.$store.commit('todo/add',this.todoTitle);
     this.todoTitle = '';
   },
    ...mapMutations({
      toggle: 'todo/toggle',
      remove : 'todo/remove'
    }),
    onBtnClick: function(){
      store.commit('increment');
      console.log( store.state.count );
    }
  }
}
</script>
