import { createApp } from 'vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import { router } from './router'
import './style.css'
import App from './App.vue'




const app = createApp(App)
console.log(router);
app.use(router)
app.mount('#app')



