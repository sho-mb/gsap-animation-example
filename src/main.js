import './assets/main.css'
import Vue3Lottie from "vue3-lottie";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(Vue3Lottie)
app.mount('#app')
