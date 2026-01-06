import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import { i18n } from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faArrowRightLong, faEarthAmerica, faMagnifyingGlass, faAward, faSliders, faStar, faHeart, faCommentDots, faArrowUp  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faArrowRightLong, faEarthAmerica, faMagnifyingGlass, faAward, faSliders, faStar, faHeart, faCommentDots, faArrowUp , faFacebook)


const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)
app.use(pinia)
app.use(i18n)
app.use(router)
app.mount('#app')

