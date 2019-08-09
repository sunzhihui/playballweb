import Vue from 'vue'
import App from './App'
import store from './store';
Vue.prototype.Url = 'http://192.168.0.200:8088';
Vue.prototype.OneBase = 'OneBase'+'l2V|gfZp{8`;jzR~6Y1_'; 
Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount();

