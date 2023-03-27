// בס"ד

import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'
import VCalendar from 'v-calendar'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'v-calendar/style.css';
import './assets/styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(VCalendar, {})
app.mount('#app')
