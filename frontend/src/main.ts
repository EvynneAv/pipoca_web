import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { api } from './service/http';
import VueRouter from 'vue-router';
import './style.css';
import type { AxiosError, AxiosResponse } from 'axios';
// import type {strapiError} from

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
