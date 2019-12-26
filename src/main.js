import Vue from 'vue'
import App from './App.vue'

// Import the rest of Bulma
import 'bulma'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
