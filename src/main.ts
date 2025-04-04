import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'font-awesome/css/font-awesome.min.css'

import App from './App.vue'
import router from './router'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importer les icônes que tu veux utiliser
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Ajouter les icônes à la bibliothèque
library.add(fas, far, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)
// Déclarer le composant globalement
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
