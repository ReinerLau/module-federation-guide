import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { pinia } from './stores'

export default function bootstrap(el: Element, shareData: Record<string, any> = {}) {
  const app = createApp(App, shareData)

  app.use(pinia)
  app.use(router)

  app.mount(el)
}
