export const state = () => ({
  act : 0
})

export const mutation = {
  increment(state) {
    state.act++
  }
}
