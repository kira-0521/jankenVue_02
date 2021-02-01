import Vue from 'vue'
import App from './App.vue'
import router from './router'
import css from './assets/css/bootstrap-reboot.css'


Vue.config.productionTip = true
// 開発中は true にしたほうがいいかも
// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出るようです。

new Vue({
  router,
  css,
  render: h => h(App),
}).$mount('#app')
