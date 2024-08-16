import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

export default function bootstrap(el: Element) {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount(el)
}
