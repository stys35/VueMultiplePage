import Vue from 'vue'
import App from './view.vue'

Vue.config.productionTip = false

document.title = '页面2'

new Vue({
  render: h => h(App)
}).$mount('#app')
