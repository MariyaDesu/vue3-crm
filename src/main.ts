import { createApp } from 'vue'
import App from './App.vue'


import 'uno.css'
import '@/styles/index.scss'


import pinia from './store/index'
import router from './router'

import '@/router/initDynamicRouter'
const app = createApp(App)
app.use(pinia)

app.use(router)

// app.use(directives)

app.mount('#app')
