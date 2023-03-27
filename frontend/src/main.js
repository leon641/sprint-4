// בס"ד

import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'
import VCalendar from 'v-calendar'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'v-calendar/style.css';
import { screens } from 'vue-screen-utils';
import './assets/styles/main.scss'
import App from './App.vue'

// import './assets/styles/setup/_typography.scss';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(VCalendar, {})
app.use(screens, {
    mobile: '0px',
    tablet: '640px',
    laptop: '1024px',
    desktop: '1280px',
  })
app.mount('#app')
