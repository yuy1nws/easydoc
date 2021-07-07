import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).mount('#app')
