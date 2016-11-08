import Vue from 'vue'
import App from './App'
import store from './store/index.js'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
