import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import 'bootstrap'
import './assets/css/main.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')