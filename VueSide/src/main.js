import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueAxiosCors from 'vue-axios-cors'

import App from './App.vue'
import router from './router'
// import axios from 'axios'

const app = createApp(App)

// app.use(VueAxiosCors, axios, {
//     xdomain: true,
// })
app.use(createPinia())
app.use(router)

app.mount('#app')
