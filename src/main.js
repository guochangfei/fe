import Vue from 'vue'
import App from './App.vue'
import components from "./components"
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import models from './models'
import constants from "./constants";
import {
  router
} from "./router"
import './assets/styles/total.scss'
// import './assets/styles/common.css'
Vue.use(components)
//Vue.use(router)
Vue.use(ElementUI)
Vue.use(models)
Vue.use(constants)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')