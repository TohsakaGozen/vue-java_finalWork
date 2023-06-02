import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Carousel, CarouselItem, Message } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.prototype.$message = Message
Vue.use(CarouselItem)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
