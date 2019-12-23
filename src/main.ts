import Vue from 'vue';
import { provide } from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import './plugins';
import './containers';
import { ROUTER } from './plugins/provider-key';

Vue.config.productionTip = false;

provide(ROUTER, router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
