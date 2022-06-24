export const state = () => ({
  s_name : '',
  searching : false
})

export const mutations = {
  findGoods(state,goods) {
    state.s_name = goods;
  },
  searchStatus(state,st){
    state.searching = st;
  },

}

// export const getters ={
//   getSearching(state){
//     return state.searching
//   }
// }
