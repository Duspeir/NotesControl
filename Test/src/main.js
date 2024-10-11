import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(PrimeVue, { zIndex: {
//     modal: 1100,        //dialog, drawer
//     overlay: 1000,      //select, popover
//     menu: 1000,         //overlay menus
//     tooltip: 1100       //tooltip
// } });

app.mount('#app')
