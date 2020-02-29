import Vue from 'vue'
import App from './page1.vue'

Vue.config.productionTip = false

document.title = '页面1'

new Vue({
  render: h => h(App)
}).$mount('#app')
