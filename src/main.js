// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import api from './api/getData'
import 'iview/dist/styles/iview.css';
import backTopBar from '@/components/backTop';

Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.api = api;
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});



Vue.filter('datePipe', function (value) {
    let mon = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.']
    return value.slice(0,4)+' '+mon[parseInt(value.slice(5,7))-1];
})
Vue.filter('dayPipe', function (value) {
    return value.toString().slice(8,10);
})
Vue.component('backTopBar', backTopBar);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

