import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://http-vue-bb78e.firebaseio.com';
const idInterceptor = axios.interceptors.request.use((req) => {
  console.log({ req });
  return req;
})

axios.interceptors.request.eject(idInterceptor);

axios.interceptors.response.use((res) => {
  console.log(res);
  return res;
})


Vue.prototype.$http = axios;


new Vue({
  render: h => h(App),
}).$mount('#app')
