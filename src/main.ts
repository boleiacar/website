import { createApp } from 'vue'
import App from './App.vue'
import { i18n, syncDocument } from './i18n'
import './assets/main.css'

syncDocument()
createApp(App).use(i18n).mount('#app')
