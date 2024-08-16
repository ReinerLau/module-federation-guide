import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

export default function bootstrap(el: Element, shareData: Record<string, any> = {}) {
  const app = createApp(App, shareData)

  app.use(createPinia())
  app.use(router)

  app.mount(el)
}
