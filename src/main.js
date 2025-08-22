import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/theme-bulma/dist/bulma.css'
import './assets/custom-hero-colors.css'
import './assets/custom-image-styles.css'

createApp(App)
  .use(router)
  .use(Oruga, {
    iconPack: 'fas',
  })
  .mount('#app')
