// export * from "./components";
import Vue from "vue";
import App from "./App.vue";

import VueDynamicForms from '@asigloo/vue-dynamic-forms';
// import '@asigloo/vue-dynamic-forms/src/styles/themes/material.scss';

Vue.use(VueDynamicForms);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");