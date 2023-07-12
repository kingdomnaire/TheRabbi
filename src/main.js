import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import router from './router/index.js'

import '../src/assets/main.css'


createApp(App).use(store).use(router).mount('#app')

