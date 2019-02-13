import Vue from 'vue';
import App from 'app/App.vue';
import { router } from 'resources/router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
