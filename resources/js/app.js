import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue'

import axios from 'axios'
import router from './components/router'
import store from './components/store'

const app = createApp({});
app.component('home-component', App);
app.config.globalProperties.$axios = axios;
app.use(router);
app.use(store);
app.mount("#app");