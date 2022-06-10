export const state = () => ({
  admin : false
})

export const mutation = {
  admin_chk(state) {
    state.admin = true
  }
}
