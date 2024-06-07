import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia) //새로 미들웨어 추가

app.mount('#app')
