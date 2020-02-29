import Vue from 'vue'
import App from './viewx.vue'

Vue.config.productionTip = false

document.title = '页面viewx'

new Vue({
  render: h => h(App)
}).$mount('#app')
