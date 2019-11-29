const state = () => ({
  position: {}
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

const actions = {
  setPosition: ({
    commit
  }, position) => {
    commit('setPisition', position)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
