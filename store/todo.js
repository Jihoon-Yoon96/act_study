import Vuex from 'vuex';

export const state = () => ({
  counter : 0,
  list : []
})


// counter -->
const store = () => new Vuex.Store({
  state: {
    counter : 0
  },
  mutations:{
    upCounter: (state) => {
      state.counter++
    }
  }

})

// counter -->


export const mutations = {
  add: (state, text, Number) => {
    state.counter++;

    var item = {
      id: state.counter,
      size : Number,
      title : text,
      done : false
    };
    state.list.push(item);
  },
  remove : (state, todo ) => {
    var list = state.list;
    list.splice(list.indexOf(todo), 1)
  },
  toggle: (state, todo) => {
    todo.done = !todo.done
  }
}

