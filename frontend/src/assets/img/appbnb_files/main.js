// בס"ד

import { createApp } from '/node_modules/.vite/deps/vue.js?v=68ecce61'

import { router } from '/src/router.js?t=1679953675691'
import { store } from '/src/store/store.js?t=1679936830673'
import VCalendar from '/node_modules/.vite/deps/v-calendar.js?v=68ecce61'
import ElementPlus from '/node_modules/.vite/deps/element-plus.js?v=68ecce61'
import '/node_modules/element-plus/dist/index.css'
import '/node_modules/v-calendar/dist/style.css';
import { screens } from '/node_modules/.vite/deps/vue-screen-utils.js?v=68ecce61';
import '/src/assets/styles/main.scss?t=1679953791619'
import App from '/src/App.vue?t=1679937798145'

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
