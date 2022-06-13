export const state = () => ({
  s_name : ''
})

export const mutation = {
  findGoods(state,goods) {
    state.s_name = goods;
  }
}
