import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const DANMU_VUE = 'danmu-vue'

const state = {
  listArr: JSON.parse(window.localStorage.getItem(DANMU_VUE) || '[]')
}

const mutations = {
  addText (state, { text }) {
    state.listArr.push(text)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
