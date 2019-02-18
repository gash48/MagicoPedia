import Vue from 'vue';
import App from 'app/App.vue';
import { router } from 'resources/router';
import { store } from 'store/global/store';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
