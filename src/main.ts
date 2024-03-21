import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import './style.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primeflex/primeflex.css'

createApp(App)
  .use(PrimeVue)
  .mount('#app')
