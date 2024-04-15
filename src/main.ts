import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'
// import { createStore } from "vuex";
// import store from './store';
import { createPinia } from 'pinia';
// const store = createStore({
//     state () {
//       return {
//         count: 5
//       }
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })

const app = createApp(App)
const pinia = createPinia()
// app.use(store);
app.use(pinia);
app.mount('#app')
