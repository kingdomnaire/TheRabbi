import { createApp } from 'vue'
import { createStore } from 'vuex'
import store from './store';
import App from '../App.vue'
import price from './price'
import components from './components';

// Create a new store instance.
export default createStore({
  modules:{
    price,
    components,
  }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)