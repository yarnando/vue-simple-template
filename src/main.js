import Vue from 'vue'
import App from './App.vue'

import '../static/css/setup.css'
import '../static/css/layout.css'
import '../static/css/utils.css'
import '../static/css/form.css'
import '../static/css/button.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
